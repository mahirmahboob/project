# project

#Welcome.
People spend hours trying to find a perfect book that they would enjoy. What if we can make it easier for people to find their next read?

This is why we created this project. This project is about connecting enthusiast readers with books that they would like to read.
We have Three books recommending algorithm

1. First, we have a quiz feature where users can take a quiz to discover a potential book. If they don't like the book, the audience can retake the quiz.
2. Second, we have a surprise feature. If the user clicks on it, then we will surprise the user with a random book of 75 or higher rating.
3. Third, we have a genre section where users can click on a specific genre to get top books of that genre.

In this project, we have more features. We have a blog where users can post comments. Moreover, each user can signup for an account. Each user can have a personalized dashboard. They can add/remove books to/from their bookshelf. In addition, we have a history table where users can view what books they have already read.

My group members and I wanted our project to have visual effects to have great usage satisfaction from the user.

I will show the steps to download this project so that you can see the details of our projects
Here are the steps.

1. Install Visual Studio Code if you don't already have it.
2. Click on "Code" on the right corner and click "Download Zip"
3. Unzip the folder by double-clicking it.
4. Click on Visual Studio Code. Open the unzipped folder with this editor.
5. For this project, we have two parts. Frontend & Backend.
6. Let's deal with the frontend part first. Open new terminal from Visual Studio Code. Type "cd frontend". We need to download some packages so copy paste the following code
   npm install bootstrap react-bootstrap
   npm -g i sass
   npm i --save ag-grid-community ag-grid-react react-dom-factories

7. These are the only packages you will need

8. After that, type "npm start". This should open a tab with URL http://localhost:3000
9. We are done with the frontend part.
10. For the backend, open another terminal from the editor. type "cd Backend"
11. After that, type "node server.js".
12. I prefer that the user install nodemon by typing "npm install --save-dev nodemon". Then, instead of typing "node server.js", a user should type "nodemon server.js". This step is not necessary but it is efficient if you are editing the code.
13. We are done with the frontend & backend.
14. We need to have a database in our local machine. Download MySQL Workbench from this website if you don't already have MySQL. https://www.mysql.com/products/workbench/
15. A user must make a local account if they don't have an account. A user has to set a password for a new account. The user has to update line 45 on server.js which is located on the backend folder. Whatever password that the user used to log in to MySQL, that is the password they will use inline number 45. Having said that, they don't have to change anything if they set their MYSQL password to 'password'. Line 42-47 on server.js is for the database so if anything is changed like the database name then those lines must be updated. Also, do not change table names. Lastly, the user has to import the data from this repo to that database.
16. Here is a video that shows how to import data into MySQL. https://www.youtube.com/watch?v=OnXB3ZRrOW0&ab_channel=MattMacarty All the data is stored on the backend folder. The data folder is called Dump20211210. It contains all the sql table. Just drag them to the desktop and import those data in Mysql Workbench.
17. For hover pop-up and HTMLTooLTip documentation, please visit mui documentation at this url https://mui.com/components/tooltips/
18. That's it! You are ready to view/use our project. We hope that you enjoy our work. Thank you!
