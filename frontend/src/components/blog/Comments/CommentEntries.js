import React from "react";
import { Button } from "react-bootstrap";
import PostComment from "./PostComment";

const CommentEntries = ({commentEntries, postTitle}) => {

  const renderList = () => {
    if (commentEntries) {
      return commentEntries.map((data) => {
        return (
          <div>
            <div>
              {data.user}
            </div>
            <div>
              {data.text}
            </div>
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