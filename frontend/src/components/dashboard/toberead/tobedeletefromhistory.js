import React from "react";
import DeleteSomethingFromHistoryTable from "./deletesomethingfromhistory"
import { Button } from "react-bootstrap";
import { render } from "@testing-library/react";
import { red } from "@mui/material/colors";


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
    
        return (
          <div className="bookshelfdelete"> 
              <span><Button onClick={() => handleDelete(gethistorytable)}>
                Delete Book
              </Button> </span>
              {/* <Button onClick={() => handleUpvote(data.upvote)}>Upvote</Button> */}
          </div>
        );
      
    }
  };

  return (
    <div>
      <div className="bookshelfentry">{renderList(gethistorytable)}</div>
    </div>
  );
};

export default ToBeDeleteFromHistory;
