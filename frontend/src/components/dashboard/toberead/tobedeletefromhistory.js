import React from "react";
import DeleteSomethingFromHistoryTable from "./deletesomethingfromhistory"
import { Button } from "react-bootstrap";
import { render } from "@testing-library/react";


const ToBeDeleteFromHistory = (gethistorytable) => {

  function handleDelete(title) {
    render(
      <div>
        <DeleteSomethingFromHistoryTable title={title} />
      </div>
    );
  }

  const renderList = ({ gethistorytable }) => {
    if (gethistorytable) {
      return gethistorytable.map((data) => {
        return (
          <div className="bookshelfdelete"> 
              Title: {data.book_name}
              <Button onClick={() => handleDelete(data.book_name)}>
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
      <div className="bookshelfentry">{renderList(gethistorytable)}</div>
    </div>
  );
};

export default ToBeDeleteFromHistory;
