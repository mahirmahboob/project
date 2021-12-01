import React from "react";
import Box from '@material-ui/core/Box';
import "./PostEntries.css";
import { Button } from "react-bootstrap";
import Comments from "../Comments/comments";
import Popup from "reactjs-popup";
/////

const PostEntries = (postEntries) => {

  const renderList = ({ postEntries }) => {
    if (postEntries) {
      return postEntries.map((data) => {
        return (
          <div style={{ marginLeft: '10%', marginTop: '40px', width: '80%', height: '35%', boxShadow: '5px 5px 5px 2px #bebebe', backgroundColor:"#ebd3b9"}}>
            <Box color="black" bgcolor="#ebd3b9" p={8}>
            <div>
                <h3>{data.title} by {data.author}</h3>
                <div>{data.description}</div>
                <div>
                <a href={data.link}>Link</a>
                </div>
            </div>
            <div>
                { /* data.review */}
            </div>
            {/* <div>
              Upvotes: {data.upvotes}
            </div> */}
            <div>
                    <Popup
                        trigger={<button className="button" style={{backgroundColor: '#d4c2b1', 
                        color: 'black',
                        padding: '15px 32px',
                        textAlign: 'center',                           
                        fontSize: '15px',border:'none'}}> user comments </button>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="scroller" style={{width:700, height:600}}>
                            <button className="close" onClick={close}>
                            &times;
                            </button>
                            <div> Comments </div>
                            <div style={{ paddingLeft: "0%", top: "0%", width: "100%", height: "100%", backgroundColor: "#aaaaaa"}}>                          
                                <Comments title={data.title}/>
                            </div>
                            
                        </div>
                        )}
                    </Popup>
            </div>
            </Box>
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