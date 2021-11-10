import React from "react";
import {useEffect} from 'react';
import {useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Search from 'react-search'
import ToBeRead from "./toberead/toberead";
import AddEntry from "./toberead/addtobereadentry";
import "./dashboard.css";
import {useParams} from "react-router-dom";
import { PropTypes } from 'react'
// const url = "http://localhost:3000/search";
const sideBySide ={

}


const Dashboard = () => {

let userDetails = JSON.parse(localStorage.getItem('current_user'));
//console.log(userDetails);

    const rowData = [
        {title: "Love Life", author: "Amy Azelia"},
        {title: "The Secret Society", author: "Adrien Potter"},
        {title: "Ancient Civilization", author: "Gideon Aberforth"},
        {title: "Elite Guardians", author: "Loki Odinson"},
        {title: "Love Lives", author: "Amy Azelia"},
        {title: "The Secret Societies", author: "Adrien Potter"},
        {title: "Ancient Civilizations", author: "Gideon Aberforth"},
        {title: "Elite Guardiens", author: "Loki Odinson"},
        {title: "Love Lifes", author: "Amy Azelia"},
        {title: "The Secret Societies", author: "Adrien Potter"},
    ];
   
    const [gridApi, setGridApi] = useState(null);
    const [gridColumApi, setGridColumnApi] = useState(null);
    const searchDivStyle={backgroundColor:"#dedede",padding:10}
    const searchStyle={width:"40%",padding:"10px 20px",borderRadius:0,outline:0,fontSize:"100%"}

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    
      }


    
    return (
        <div>
            <div class="container"> 
                <div class="one">
                    <div style={{ paddingBottom:10, textAlign:'center',fontSize:20, fontFamily: 'Courier New'}}> Top Ten!</div>    
                    <div className="ag-theme-alpine" style={{paddingLeft: 5, height: 500, width: 400}}>
                        <AgGridReact
                            rowData={rowData}
                            onGridReady={onGridReady}
                            >
                            <AgGridColumn field="title"></AgGridColumn>
                            <AgGridColumn field="author"></AgGridColumn>
                        </AgGridReact>
                    </div>
                </div>
                <div class="two">
                    <AddEntry/>
                    <ToBeRead/>
                </div>
            </div>
        </div>
    );
};
    
export default Dashboard;

