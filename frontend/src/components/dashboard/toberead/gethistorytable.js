import React, { Component } from "react";
import ToBeDeleteFromHistory from "./tobedeletefromhistory";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"



//This is the history shelf...... This is where we will add user book.

const usr = JSON.parse(localStorage.getItem('current_user'));
const url = `/rest/historytable/${usr}`

class GetHistoryTable extends Component {
  constructor() {
    super();
    this.state = {
      gethistorytable: [],
    };
  }

  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
            gethistorytable: data,
        });
      });
  }


    //HTMLToolTip from the mui documentation
  HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 400,
      width: "400px",
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

  render() {
    //console.log(this.state.articles);
    return (
      <div >
        <div style={{ width: '890px', height: '340px', overflowY: 'scroll' }}>
          <br />
          <div className="recs mt-44">
            {
              this.state.gethistorytable.map(rec => (
                <div key={rec.PictureLink} className="book-card">
                  <this.HtmlTooltip title={
                    <>
                      <Typography color="inherit">
                        {rec.book_name}
                      </Typography>
                      <p>
                        by {rec.author}
                      </p>
                      <div className="thumbs">
                      <i class="fas fa-thumbs-up"></i>
                      <i class="fas fa-thumbs-down"></i>
                      <span>{rec.rating} likes</span>
                      </div>
                      <p>
                        {rec.Synopsis}
                      </p>
                    </>
                  } placement="right">
                    <img src={rec.PictureLink} height={300} witdth={210} />
                  </this.HtmlTooltip>
                </div>
              ))
            }
          </div>
          <ToBeDeleteFromHistory gethistorytable={this.state.gethistorytable}/>
        </div>
      </div>
    );
  }
}
    
export default GetHistoryTable;


/*
gethistorytable
 <ToBeDeleteFromHistory gethistorytable={this.state.gethistorytable}/>
*/