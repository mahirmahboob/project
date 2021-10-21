import React from "react";
import DeleteEntry from "./deletetobereadentry";
import { Button } from "react-bootstrap";
import { render } from "@testing-library/react";
// import Upvote from "../../upvote";

const ToBeReadList = (toberead) => {

  function handleDelete(title, author) {
    render(
      <div>
        <DeleteEntry title={title} author={author} />
      </div>
    );
  }

  // function handleUpvote(upvote) {
  //   render(
  //     <div>
  //       <Upvote upvote={upvote} />
  //     </div>
  //   );
  // }

  const renderList = ({ toberead }) => {
    if (toberead) {
      return toberead.map((data) => {
        return (
          <div className="bookshelfentry"> 
              Title: {data.title}
              Image: {data.image}
              Author: {data.author}
              Upvotes: {data.upvotes}
              <Button onClick={() => handleDelete(data.title, data.author)}>
                Delete Book
              </Button>
              {/* <Button onClick={() => handleUpvote(data.upvote)}>Upvote</Button> */}
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="bookshelfentry">{renderList(toberead)}</div>
    </div>
  );
};

export default ToBeReadList;