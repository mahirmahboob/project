import React, { Component } from 'react'
import { useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ToBeRead from "./toberead/tobereadlistings.js";
import AddEntry from "./toberead/addtobereadentry.js";
import Search from 'react-search';

//line 42, height was 500

// const url = "http://localhost:3000/search";

const Dashboard = () => {
    const rowData = [
        {title: "Love Life", author: "Amy Azelia"},
        {title: "The Secret Society", author: "Adrien Potter"},
        {title: "Ancient Civilization", author: "Gideon Aberforth"},
        {title: "Elite Guardians", author: "Loki Odinson"},
        {title: "Love Lives", author: "Amy Azelia"},
        //{title: "The Secret Societies", author: "Adrien Potter"},
        //{title: "Ancient Civilizations", author: "Gideon Aberforth"},
        //{title: "Elite Guardiens", author: "Loki Odinson"},
        //{title: "Love Lifes", author: "Amy Azelia"},
        //{title: "The Secret Societies", author: "Adrien Potter"},
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
            <div style={{paddingLeft:0, fontSize:40}}> Top Five!</div>
                        
            <div className="ag-theme-alpine" style={{paddingLeft: 90, height: 250, width: 400}}>
                <AgGridReact
                    rowData={rowData}
                    onGridReady={onGridReady}
                    >
                    <AgGridColumn field="title"></AgGridColumn>
                    <AgGridColumn field="author"></AgGridColumn>
                    
                </AgGridReact>
            </div>
            <AddEntry/>
            <ToBeRead/>
        </div>
    );
};
    
export default Dashboard;

