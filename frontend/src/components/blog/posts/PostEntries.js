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
          <div style={{ marginLeft: '10%', marginTop: '40px', width: '80%', height: '35%', boxShadow: '5px 5px 5px 2px #bebebe', backgroundColor:"#ebd3b9"}}>
            <div>
                {data.title}
                <a href={data.link} />
            </div>
            <div>
                {data.review}
            </div>
            {/* <div>
              Upvotes: {data.upvotes}
            </div> */}
            <div>
                <Popup
                  trigger={<Button> Comments </Button>}
                  position="right center"
                >
                  <div style={{ paddingLeft: "0%", top: "0%", width: "100%", height: "100%", backgroundColor: "#aaaaaa"}}>
                    <Comments title={data.title} />
                  </div>
                </Popup>
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