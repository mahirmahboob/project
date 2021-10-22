
import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

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
      console.log(this.state.selectOptions);
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select options={this.state.selectOptions} />
      </div>
    )
  }
}

//https://react-select.com/home
//https://github.com/JedWatson/react-select
//, {withCredentials: false}