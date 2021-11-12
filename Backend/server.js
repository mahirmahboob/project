// Mahir Mahboob
// Nuzhat Khan
// CSCI 499
// Backend--Project

const http = require('http');
const express = require('express');
const mysql = require('mysql');
const { response } = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const exphbs = require('express-handlebars');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
const flash = require('express-flash');
const { Console } = require('console');
const bodyParser = require('body-parser');


//Middleware 
app.use(express.json());

app.use(session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(require('cookie-parser')()); // i can do this like const cookieParser = require('cookie-parser'); Then, app.use(cookie-parser())
app.use(cors());
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
//passport.js
app.use(passport.initialize());
app.use(passport.session());


//db = database
var dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Library'     // Our Database is called Library in MySQL Workbench. Then the table is called book_information
}

let connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.log('Not connected');
    }
    else {
        console.log('Connected to the MySQL server.');
    }
});



/*
This end-point will return books based on the genre that user selected. User can only select one genre
*/
app.get('/home/:genre', (req, res) => {

    const genre_given_by_user = (req.params.genre);
    //console.log(genre_given_by_user);
    connection.query('SELECT * FROM book_information WHERE genre= ? ORDER BY rating LIMIT 3', genre_given_by_user, function (err, result) {

        if (err) {
            res.status(404).send('Not working');
        }

        else {
            //console.log(response);
            
            res.status(201).send(result);
        }

    })
})

// User takes a quiz
app.post('/takeaquiz', (req, res) => {
    const user_genre1 = req.body.genre;
    const age_range = req.body.age;
    const maximum_pages = req.body.page;
    const publication_date = req.body.date;
    const trigger_warning = req.body.triggers;

    
    console.log(user_genre1);
    console.log(age_range);
    console.log(maximum_pages);
    console.log(publication_date);
    console.log(trigger_warning);


const sqlquery = `SELECT *
    FROM book_information
    WHERE genre = ?
    AND 
    (age_range = ? AND maximum_pages <= ? AND publication_date >= ? AND trigger_warning = ?) ORDER BY rating LIMIT 1`;


    connection.query(sqlquery, [user_genre1, age_range, maximum_pages, publication_date, trigger_warning], function (err, result){
        if (err){
            res.status(404).send("There is some problem");
        }
        else{
            
            //console.log(result);
            console.log("we have a result");
            console.log(result);
            res.status(201).send(result);
        }
    })

})


//This End-point will return a random book name with 75% or higher rating to the user.
app.get('/surpriseme', (req, res) => {
    connection.query('SELECT * FROM book_information WHERE rating >= 75 ORDER BY rand() LIMIT 1', function (err, result) {

        if (err) {
            res.status(404).send('There is some problem with getting one random book with 75 or higher rating for the user');
        }

        else {
            res.status(201).send(result);
        }


    })
})

app.get('/searchup', (req, res) => {
connection.query('SELECT * FROM book_information order by book_name', function (err, result) {

        if (err) {
            res.status(404).send('Not working');
        }

        else {
            //console.log(response);
            res.status(201).send(result);
        }

    })
    
})

/*
We will create the register part below
This is the video that i found very helpful--https://www.youtube.com/watch?v=AZOZVyLrMvc&list=PLw_UK6aNYDb77hVcuz7SZd-LdyFKC1tZr&index=5&ab_channel=TelmoSampaio
This is the second video that i found very helpful---https://www.youtube.com/watch?v=-RCnNyD0L-s&list=PLw_UK6aNYDb77hVcuz7SZd-LdyFKC1tZr&index=6&ab_channel=WebDevSimplified
(I only watched upto 12 minute of the second video)
you have to install bcryptjs------npm i bcrypt
*/

app.post('/rest/register', async(req, res) => {

    
    const username = req.body.username;
    const password = req.body.password;
    const Confirmpassword = req.body.Confirmpassword;
    const favoriteTeacher = req.body.favoriteTeacher;
    const email = req.body.email;


    try {

        connection.query('select email from user_table where email = ?', [email], (err, email) => {
            if (email.length > 0) {
                res.status(498).send("email already exist");
            }
        })
    // we take the email that user entered and check if that usernmae already exist in our databse
    connection.query('select username from user_table where username = ?', [username], async (err, result) => {
        
        if (err) {
            console.log("something went wrong here");
            res.send({err:err});
            
        }

        // if result is more that 0 meanning, in our database a email exact email exist that means user can not use the email.
        else if (result.length > 0) {
            console.log("something went wrong here 2");
            return res.status(404).send("That email already exist");
            
            //return res.send(err, {message:"That email already exist"});
            //return res.send({message:'that username already exist'});

            //return res.render('/signup', {
                //message: "That email already exist"
            //})
        }

        else if (password != Confirmpassword){
            
            //console.log('Your password does not match');
            console.log("something went wrong here 3 ");
            return res.status(406).send("Your password does not match");
            //return res.render('register', {
                //message: "Your password does not match"
            //})
        }

        else if ((password && Confirmpassword) === ""){
            console.log("something went wrong here 4");
            return res.status(400).send("passowrd can not be empty");
        }

        else if ((username.length <= 6) || (password.length <= 6)){
            console.log("something went wrong here 5 ");
            return res.status(416).send("username or password can not be less than six character long");

        }

        else if (favoriteTeacher.length <=3){
            console.log("something went wrong here 6");
            return res.status(409).send("Favorite dish has to be atleast four character long");
        }

        else if ((email === "") || (email.length <= 6))
        {
            console.log("something went wrong here 7");
            return res.status(417).send("Email field can not be empty and it has to be atleast 7 characters long");
        }

        let hashedpassword = await bcrypt.hash(password, 10);
        connection.query('insert into user_table set ?', {username: username, password: hashedpassword, email: email, favoriteTeacher: favoriteTeacher },(err, result) => {
            if (err){
                console.log("we have problem in the backend");
                res.send({err:err})
                
            }

            else
            {

                return res.status(201).send(result);
            }
        } )
    })
   } catch{
    console.log("something went wrong")
   }
 
});


//Forgot Password
app.post('/forgot', (req, res) =>{
    const username = req.body.username;
    const favoriteTeacher = req.body.favoriteTeacher
    const New_password = req.body.New_password;
    const New_passwordConfirm = req.body.New_passwordConfirm;


    if (username  === "" || favoriteTeacher === "" || New_password === "" || New_passwordConfirm === "") {
        res.status(400).send("Can not leave any of the field blank");
    }

    else if (New_password != New_passwordConfirm)
    {
        res.status(406).send("New_Password & New_passwordConfirm needs to match");
    }

    else if (New_password.length <= 6) 
    {
        res.status(416).send("Password and Confirm password has to be atleast Seven characte long");
    }

    else 
    {
        
        connection.query('SELECT * FROM user_table WHERE username = ? AND favoriteTeacher = ?', [username, favoriteTeacher], async (err, result) => {
            
        if (err) {
            res.send({err:err});
        }

        else if (result.length === 0)
        {
            res.status(404).send("Incorrect usernmae or security answer");
        }

        else {

        let hashednewpassword = await bcrypt.hash(New_password, 10);
        connection.query('update user_table Set password = ? where username = ?', [hashednewpassword, username], (err, result) => {

            if (err)
            {
                res.send({err:err});
            }

            else 
            {
                res.status(201).send(result);
            }

        })

        } //inner else 

    })
        
    }
    // this is the else
})




//forgot username
app.post('/forgotusername', (req, res) => {
    const email = req.body.email;
    const favoriteTeacher = req.body.favoriteTeacher;

    if (email  === "" || favoriteTeacher === "") {
        res.status(400).send("Can not leave any of the field blank");
    }

    else 
    {
        connection.query('select username from user_table where email = ? and favoriteTeacher = ?', [email, favoriteTeacher], (err, result) => {
            if (err)
            {
                res.send({err:err});
            }

            else 
            {
                res.status(201).send(result);
            }
        })
    }
})


/*
For login, we will use passpost..... here is the link---https://www.npmjs.com/package/passport
Here is another link that I used and found it very helpful---https://www.youtube.com/watch?v=W5Tb1MIeg-I&list=PLw_UK6aNYDb77hVcuz7SZd-LdyFKC1tZr&index=9&ab_channel=TylerPotts

*/

passport.use(new LocalStrategy(function(username,password, done){
   connection.query('select * from user_table where username = ?', [username],function(err,user){
    if(err)
    {
         console.log("we having database problem");
        return done(err)          
    }
    else if(user.length === 0)
    {
        //console.log("there are no account with this username");
        return done(null,false,{message: 'Incorrect user name'}); 
    }

    // That means we have a user but is the correct password typed in.

    else
    {
   bcrypt.compare(password, user[0].password, function(err, passwordmatch) {
        if (err){
            console.log("we having database problem inside the bcrypt");
            return done(err);
        }

        if (passwordmatch == false){

            //console.log("Incorrect password");
            return done(null, false, {message:'incorrect password'});

        }

        else
        {
            //console.log("We found our user");
            return done(null, user)
        }
      });
    }

   });  
}
));




app.post('/rest/login', (req, res, next) => {

    passport.authenticate('local', function(err, user, info) {
    if (err) { 
        console.log("error here 1")
        return next(err); 
    }
    if (!user) { return res.status(401).send("no user"); }

    // req / res held in closure
    req.logIn(user, function(err) {
      if (err) { 
          console.log("error here 2")
          return next(err); 
        }
      return res.status(201).send(user);
    });

  })(req, res, next);

});

passport.serializeUser(function(user, done) {
  done(null, user);
});


passport.deserializeUser(function(user, done) {
  done(null, user);
});

// we will use this function later. Not right now
function isloggedin(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/login')
}

function isloggedout(req, res, next){
    if(!req.isAuthenticated()) return next();
    res.redirect('/home')
}

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        console.log('user is logged in');
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else{
        console.log('user is not logged in');
        res.status(404);
    }
}

app.get('/getbook', function(req, res) {
    //console.log('we are here');
    connection.query('SELECT book_name FROM book_information order by book_name', function (err, result) {

        if (err) {

            res.status(404).send('Not working');
        }

        else {
            //console.log('we are returing a results');
            //console.log(result); 
            res.status(201).send(result);
        }

    })
})



app.get('/addbook', function(req, res) {
    console.log('we are in the backend');
    res.status(201).send('working');
})

/*
app.get('/userdashboard/:user', function(req, res) {

    //if(req.user) 
    //{
        const user = req.params.user;
        //const table_name = req.body.table_name;
        console.log(user);
        //console.log(table_name);

        connection.query('select book_name from user_bookmark where username= ?', user, function (err, result) {

        if (err) {
            //res.status(404).send('Not working');
            console.log("not working");
        }

        else {
            //console.log(response);
            //res.status(201).send(result);
            console.log("we are ready to send data to the frontend");
        }

        })
   // }

});


*/



//After the MVP presentation--------------------------------------------------------------------------------------------------------------

//When a user post a  comment in the blog section, this API will get called.
app.post('/postacomment', (req, res) => {
    const new_comment = req.body.commentBody;
    console.log(req.body.commentBody);
    connection.query('insert into blog VALUES (?)', new_comment, function (err, result) {

        if (err) {
            console.log("new comment is not being added to the database");
            res.status(404).send('Not working');
        }

        else {
            //console.log(response);
            console.log("we successfully added the new comment to the database");
            res.status(201).send(result);
        }

    })
    
})


//When user clicks on the blog comment section, then we will use this API to display all the comments

app.get('/getallthecomments', (req, res) => {
    connection.query('select comment from blog', function (err, result) {

        if (err) {
            console.log("we are having problem sending all the comments to the frontend")
            res.status(404).send('Not working');
        }

        else {
            //console.log(response);
            console.log("we are sending all the comments to the frontend")
            res.status(201).send(result);
        }

    })
    
})


//Working
//This is the bookshef
//This is the endpoint that will display the bookshelf
app.get('/rest/toberead/:usr', (req, res) => {
    const user = (req.params.usr);
    //console.log(genre_given_by_user);
    connection.query('SELECT * FROM user_bookmark WHERE username= ? ', user, function (err, result) {

        if (err) {
            res.status(404).send('Not working');
        }

        else {
            //console.log(response);
            //console.log("it's working");
            res.status(201).send(result);
        }

    })

})


/* This endpoint will allow you to add a book to the user bookshelf.  I should look at this more carefully.*/
app.post('/rest/submit/:usr', (req, res) => {

    const username = (req.params.usr);
    const user_book_name = req.body.title;
    
    connection.query('select book_name from user_bookmark where username = ? AND book_name = ?', [username, user_book_name], function (err, result) {

        if (err) 
        {
            res.send({err:err});
        }

        else if (result.length >= 1) {
            res.status(406).send('That book already exist in the bookshelf');
        }
       
        else
        {
            
            connection.query('select * from book_information where book_name = ?', [user_book_name], function (err, book_info) 
            { 
                
                if (err)
                {
                    res.send({err:err});
                }
                else if (book_info.length === 1)
                {
                    connection.query('insert into user_bookmark set ?', {username: username, book_name: book_info[0].book_name, genre: book_info[0].genre, author: book_info[0].author, rating: book_info[0].rating, age_range: book_info[0].age_range, maximum_pages: book_info[0].maximum_pages, publication_date: book_info[0].publication_date, trigger_warning: book_info[0].trigger_warning, best_seller: book_info[0].best_seller, series: book_info[0].series, PictureLink: book_info[0].PictureLink, LinkToAmazon: book_info[0].LinkToAmazon, Synopsis: book_info[0].Synopsis}, function (err, resss) {
                        if (err) 
                        {
                            
                            res.status(400).send("could not add book to the user bookshelf");
                        }

                        else
                        {
                            
                            res.status(201).send ("we were able to add a book to the database")

                        }
                    })
                }

            })  
        }

    })
})




//This is the endpoint that will delete  book from the user bookshelf

app.delete('/rest/delete/:usr', (req, res) => {
    
    nameofthebook = req.body.title;
    nameoftheuser = req.params.usr;

    console.log(nameofthebook);
    console.log(nameoftheuser);

    connection.query('select * from user_bookmark where username = ? AND book_name = ?', [nameoftheuser, nameofthebook], (err, book) => {
        if (err)
        {
            //console.log('we have an error here');
            res.send(err);
        }

        else if(book.length === 0)
        {
            //console.log('we have an error here 2 ');
            res.status(404).send("This book does not exist")
        }

        // if it goes to the else statement that means this book exist, so all we have to do is delete.
        else
        {
            connection.query('Delete from user_bookmark where username = ? AND book_name = ?', [nameoftheuser, nameofthebook], (error, deleteres) => {
                if (error)
                {
                    //console.log('we have an error here 2 ');
                    res.send(error)
                }

                else
                {
                    //console.log('Success');
                    res.status(201).send("We succesfully deleted")
                }
            })
        }

    })

})

/*
Copied this code from stackoverflow...
Link------https://stackoverflow.com/questions/37385833/node-js-mysql-database-disconnect
The reason why we are adding this part is because we may lose connection with mysql. we want to restart the connection.
It will introduce a small delay to avoid hot loop
*/
function handleDisconnect() {
  connection = mysql.createConnection(dbConfig);  // Recreate the connection, since the old one cannot be reused.
  connection.connect( function onConnect(err) {   // The server is either down
      if (err) {                                  // or restarting (takes a while sometimes).
          console.log('error when connecting to db:', err);
          setTimeout(handleDisconnect, 10000);    // We introduce a delay before attempting to reconnect,
      }                                           // to avoid a hot loop, and to allow our node script to
  });                                             // process asynchronous requests in the meantime.
                                                  // If you're also serving http, display a 503 error.
  connection.on('error', function onError(err) {
      console.log('db error', err);
      if (err.code == 'PROTOCOL_CONNECTION_LOST') {   // Connection to the MySQL server is usually
          handleDisconnect();                         // lost due to either server restart, or a
      } else {                                        // connnection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
      }
  });
}
handleDisconnect();

app.listen(5000)


/*

 import React, { Component } from 'react'

 class userdashboard extends Component {
    constructor(props) {
         super(props);
         this.state = {
        } 
     }


    render() {
    

        const { state } = this.props.location
        //console.log(state.username);
     return ( 
         <div>
             <h1> Welcome {state.state}</h1>
        </div> 
     )
    }
}


 export default userdashboard;
*/