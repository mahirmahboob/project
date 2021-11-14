import React from "react";
import DeleteEntry from "./deletetobereadentry";
import FinishReading from "./userbookhistory"
import { Button } from "react-bootstrap";
import { render } from "@testing-library/react";
// import Upvote from "../../upvote";

const ToBeReadList = (toberead) => {

  function handleDelete(title) {
    render(
      <div>
        <DeleteEntry title={title} />
      </div>
    );
  }

    function handleFinishReading(title) {
    render(
      <div>
        <FinishReading title={title} />
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
              Title: {data.book_name}
              <Button onClick={() => handleDelete(data.book_name)}>
                Delete Book
              </Button>
              {<Button onClick={() => handleFinishReading(data.book_name)}>Finish Reading</Button>}
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
