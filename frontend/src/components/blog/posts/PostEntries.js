import React from "react";
import "./PostEntries.css";
import { Button } from "react-bootstrap";
import Comments from "../Comments/comments";
import Popup from "reactjs-popup";

const PostEntries = (postEntries) => {

  const renderList = ({ postEntries }) => {
    if (postEntries) {
      return postEntries.map((data) => {
        return (
            <div style={{ marginLeft: '10%', marginTop: '40px', width: '80%', height: '35%'}}> 
                <div style={{textAlign:'left', paddingLeft:'5%', color:'black', fontSize:'35px',fontFamily: "Lucida Console"}}>
                      {data.title}
                </div>
                <img 
                    style={{width:'90%', height:'10%', paddingTop:'20px', paddingLeft:'0px'}}
                    src={data.articleimagelink}
                />
                <div style={{textAlign:'left', paddingLeft:'70px', color:'black', fontSize:'17px',fontFamily: "Lucida Console"}}>Written by {data.author}, Posted on {data.postTime}</div>
                <br/>
                <div style = {{textAlign:"left", fontSize:'20px', paddingLeft: '70px',paddingRight:'50px',paddingBottom:'40px'}}>
                    {data.description} 
                    <a href={data.link}>Link</a>
                    <div>
                        <Popup
                          trigger={<Button style={{width:'100px', height:'40px', borderRadius:'0px'}}> Comments </Button>}
                          position="center"
                          modal
                          nested
                        >
                          <div style={{ paddingLeft: "0%", top: "0%", width: "900px", height: "900px", backgroundColor: "#ebeff0", borderRadius: '15px', padding: '40px', overflowY:'scroll'}}>
                            <Comments title={data.title} />
                          </div>
                        </Popup>
                    </div>
                </div>
            
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div>{renderList(postEntries)}</div>
    </div>
  );
};

export default PostEntries;