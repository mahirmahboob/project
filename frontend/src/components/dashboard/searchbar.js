import React, { Component, Fragment } from 'react';
import Select from 'react-select';

const urlAddEntry = "http://localhost:5000/searchup";

//const urlAlreadyRead = "http://localhost:8080/{usr}/alreadyRead";

/*
const options = [
  { value: 'Live Love Laugh', label: 'Live Love Laugh' },
  { value: 'Hills', label: 'Hills' },
  { value: 'Percy', label: 'Percy Jackson' },
];
*/

class SearchBar extends React.Component {
    state = {
        selectedOption: null,
    };

    handleSelectedinSearch = (selectedOption) => {
        this.setState({ selectedOption }, () =>
        console.log(`Option selected:`, this.state.selectedOption)
        );
        fetch(urlAddEntry, {
            method: "GET",
            body: [this.props.usr, this.props.list, selectedOption],
          })
        .then((response) => { response.json(); })
        .catch((error) => { console.log("Error: ", error); })
        .then((response) => console.log("Success: ", JSON.stringify(response)))
    };
   

    render() {
        const { selectedOption } = this.state;

        return (
        <Select
            value={selectedOption}
            onChange={this.handleSelectedinSearch}
            //options={options}
            //selectedOption={this.state.selectedOption}
        />
        );
    }
}

export default SearchBar;
//https://react-select.com/home
//https://github.com/JedWatson/react-select