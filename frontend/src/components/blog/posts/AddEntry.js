import React, { Component } from "react";

const url = `/rest/submit/userpost`
class AddEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            imgLink: "",
            author: "",
            body: "",
            link: "",
        };
    }

    changeHandler = (e) => { 
      this.setState({ [e.target.name]: e.target.value }); 
    };

    // Im not sure why it does not work. i can figure it out buy why should I, I already have something that works...
    /// work smarter, not harder
    /*
    submitHandler = (e) => {
        e.preventDefault();
        var formData = new FormData();

        console.log("state: ", this.state);

        formData.append("title", this.state.title);
        formData.append("imgLink", this.state.imgLink);
        formData.append("author", this.state.author);
        formData.append("body", this.state.body);
        formData.append("link", this.state.link);

        fetch(url, {method: "POST", headers: {
                'Content-Type': 'application/json'
                }, body: JSON.stringify(formData)})
        .then((response) => {response.json();})
        .catch((error) => {console.log("Error: ", error);})
        .then((response) => console.log("Success: ", JSON.stringify(response)));

        this.setState({ title:"", imgLink:"", author:"", body:"", link:"" });

    };

    */

       submitHandler = (e) => {
        e.preventDefault();
    

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                imgLink: this.state.imgLink,
                author: this.state.author,
                body: this.state.body,
                link: this.state.link,

            })
        }).then(response => {

            if (response.status === 404) {
            alert("Unfortunately, We could not add the post");
            
            }
            else if (response.status === 201)
            {
                window.location.reload(false);
            }
            })
           .catch(function(error) {
            
                alert(error);
            });
        
        }


    render() {
        const { title, imgLink, author, body, link } = this.state;
        return (
        <div style={{ backgroundColor:'LightGray', padding:'80px'}}> 

            <div style={{backgroundColor:'white', padding: '5%', width: '105%', height: '35%', display: 'flex'}}>
            <div>
                <img  style={{paddingLeft:'0px',width:'700px', height:'550px',}} src="https://qph.fs.quoracdn.net/main-qimg-6f1750c47e1fe3f5b49f933b90711f6e-lq"/>
            </div>
            <div>
            <div style={{textAlign:'center', paddingLeft:'10px', paddingTop:'20px', color:'black', fontSize:'30px',fontFamily: "Lucida Console"}}>
                Add a Post
            </div>
            <br/>
            <form onSubmit={this.submitHandler}>  
            <div style={{paddingTop:'10px'}}>  
                <div style={{paddingLeft:'20px'}}>
                    <div style={{fontSize:'20px',fontFamily: "Lucida Console"}}>
                        Title of Article&nbsp;&nbsp;  
                        <input type="text" style={{height: '40px', width: '550px'}} name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                </div>
                <br/>
                <div style={{paddingLeft:'20px'}}>
                    <div style={{fontSize:'20px',fontFamily: "Lucida Console"}}>
                        Article Image Link&nbsp;&nbsp;
                        <input type="text" style={{height: '40px', width: '550px'}} name="imgLink" value={imgLink} onChange={this.changeHandler}/>
                    </div>
                </div>
                <br/>
                <div style={{paddingLeft:'20px'}}>
                    <div style={{fontSize:'20px',fontFamily: "Lucida Console"}}>
                        Author of the Article&nbsp;&nbsp;
                        <input type="text" style={{height: '40px', width: '550px'}} name="author" value={author} onChange={this.changeHandler}/>
                    </div>
                </div>
                <br/>
                <div style={{paddingLeft:'20px'}}>
                    <div style={{fontSize:'20px',fontFamily: "Lucida Console"}}>
                        Article Body&nbsp;&nbsp;
                        <input type="text"style={{height: '40px', width: '550px'}}  name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                </div>
                <br/>
                <div style={{paddingLeft:'20px'}}>
                    <div style={{fontSize:'20px',fontFamily: "Lucida Console"}}>
                        Article Link&nbsp;&nbsp;
                        <input type="text" style={{height: '40px', width: '550px'}} name="link" value={link} onChange={this.changeHandler}/>
                    </div>
                </div>
                <br/>
                
                <button type="submit" style={{width:'200px', height:'50px', backgroundColor:'darkgrey', border:'none'}}>
                    <div style={{fontSize:'20px',fontFamily: "Lucida Console"}}>Submit</div>
                </button>
            </div>
            </form>
            </div>
            </div>
        </div>
        );
    }
}

export default AddEntry;
