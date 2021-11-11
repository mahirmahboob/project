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
    this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange = (e) => {
      this.setState({ book_name: e.target.value });
      this.props.update_title(e.target.value);
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
    //console.log(this.state.book_name);  
    return (
      <div style={{justifyContent:'center',width:'500px', backgroundColor:'gray'}}>
        
          <select value={this.state.book_name} onChange={this.handleChange}>
        {this.state.selectOptions.map(function(data, key){  return (
          <option key={key} value={data.key}>{data.value}</option> 
          )
        })}
          </select>    
      </div>
    )
  }
}
//https://react-select.com/home
//https://github.com/JedWatson/react-select

/*
 <Select options={this.state.selectOptions} />
*/