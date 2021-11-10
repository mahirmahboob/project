import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import axios from 'axios'


/*
const urlAddEntry = "http://localhost:5000/getbook";
//const urlAlreadyRead = "http://localhost:8080/{usr}/alreadyRead";
const options = [
  { value: 'Live Love Laugh', label: 'Harry Potter and the Chamber of Secrets by J.K. Rowling' },
  { value: 'Hills', label: 'Harry Potter and the Order of Phenoix by J.K. Rowling' },
  { value: 'Percy', label: 'Percy Jackson and the Lightning Theif by Rick Riordin' },
  { value: 'The Rose Code by Vanessa Michel', label: 'The Rose Code by Vanessa Michel'},
  { value: 'The Labyrinth by Elle Werson', label: 'The Labyrinth by Elle Werson'},
  { value: 'Abrinthine by H.R Wells', label: 'Abrinthine by H.R Wells'}
];
*/
export default class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      book_name: "",
    }
  }

 async getOptions(){
   //axios.defaults.withCredentials = true;
    const res = await axios.get('http://localhost:5000/getbook');
    const data = res.data
    const options = data.map(d => ({
      "value" : d.book_name,
      "label" : d.book_name

    }))
    this.setState({selectOptions: options})

  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
      //console.log(this.state.selectOptions);
    //console.log(this.state.selectOptions)
    return (
      <div style={{justifyContent:'center',width:'500px', backgroundColor:'gray'}}>
        <Select options={this.state.selectOptions} />
      </div>
    )
  }
}
//https://react-select.com/home
//https://github.com/JedWatson/react-select