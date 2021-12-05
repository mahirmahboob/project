import React from "react";
import { Button } from "react-bootstrap";
import PostComment from "./PostComment";

const CommentEntries = ({commentEntries, postTitle}) => {

  const renderList = () => {
    if (commentEntries) {
      return commentEntries.map((data) => {
        return (
          <div style={{ paddingLeft: "0%", top: "0%", width: "100%", height: "100%", backgroundColor: "#ebeff0"}}>
              <div style={{width: "820px", height: "70px", backgroundColor: "#c8e6e1", borderRadius: '15px', padding: '10px'}}>
                  <div style={{display:'flex'}}>
                  <div>
                      <img alt="person icon" src="/img/commentIcon.png" width="50px" height="50px"/>
                  </div>
                  <div style={{paddingLeft:'10px'}}>
                  @{data.username} 
                  <div>{data.comment}</div>
                  </div>
                  </div>
              </div>
              <br/>
          </div>
        );
      });
    }
  };

  return (
    <div >
      <div>
        {renderList(commentEntries)}
        <div>
          <PostComment postTitle = { postTitle }/>
        </div>
      </div>
    </div>
  );
};

export default CommentEntries;