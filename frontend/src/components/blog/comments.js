import React, {PureComponent, useEffect, useState } from "react";
import data from "./data.json"
import { CommentSection } from 'react-comments-section'
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button'; 

 function Comments() {
  //let { id } = useParams();
  const [comments, setComments] = useState([]);   //all the comments that we will display
  const [newComment, setNewComment] = useState(""); //new comments that needs to be added
 
  useEffect(() => {
  
    axios.get(`http://localhost:5000//getallthecomments`).then((response) => {
      setComments(response.data);
    });
  }, []);


  
  const addComment = () => {
    axios
      .post("http://localhost:5000/postacomment", {
        commentBody: newComment,
        //PostId: id,
      })
      .then((response) => {
        const commentToAdd = { commentBody: newComment };
        setComments([...comments, commentToAdd]);
        setNewComment("");
        //console.log(comments);
      });
  };
  
  return (
    <div className="postPage">
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <button onClick={addComment}> Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default Comments;
