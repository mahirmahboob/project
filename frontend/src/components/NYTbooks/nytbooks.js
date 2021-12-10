import React, { Component } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import FlipCard from "./FlipCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=33NLEoCDgzVw5HKW9HmijOZ3DBWBBEHo`;

export default class nytbooks extends React.Component{
    state = {
        loading:true,
        res: [],
    };
    async componentDidMount() {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ res: data.results.books, loading: false});
        

    }
    render(){
    return (
    <div className="container">
      <div className="row h-100">
        <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {this.state.res.slice(0, 4).map((rec) => (
            <FlipCard key={rec.id} card={rec} />
          ))}
        </div>
      </div>
    </div>
  );

}
}