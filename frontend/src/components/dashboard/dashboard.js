import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Search from 'react-search'
import ToBeRead from "./toberead/toberead";
import AddEntry from "./toberead/addtobereadentry";
import GetHistoryTable from "./toberead/gethistorytable";
import "./dashboard.css";
import { useParams } from "react-router-dom";
import { PropTypes } from 'react'
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
// const url = "http://localhost:3000/search";
const sideBySide = {

}
////


const Dashboard = () => {

    const [items, setItems] = useState([]);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    let userDetails = JSON.parse(localStorage.getItem('current_user'));
    //console.log(userDetails);



    useEffect(() => {
        fetchItems();
    }, []);



    const fetchItems = async () => {
        const data = await fetch('/toptenbooks');
        const rowData = await data.json();
        setItems(rowData);
    };
  //server needs a route: PUT /books/:bookname
  //this route should update a book by its book name
  //be sure that userbookmark table is also updated
  //request body example: {type: 'like'}
  //if the type is like, increase the rating
  //if the type is dislike,decrease the rating


    const updateLikes = async (book_name, type) => {
        console.log("we are getting clicked from second list ")
        try {
            const response = await fetch(`/books/${book_name}`, {
                method: 'put',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: type
                })
            })
            setUpdateSuccess(true)
        }
        catch (err) {
            console.log("update likes error", err)
        }

    }

    /*
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
    */

    const [gridApi, setGridApi] = useState(null);
    const [gridColumApi, setGridColumnApi] = useState(null);
    const searchDivStyle = { backgroundColor: "#dedede", padding: 10 }
    const searchStyle = { width: "40%", padding: "10px 20px", borderRadius: 0, outline: 0, fontSize: "100%" }

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

    }
    //HTMLToolTip from the mui documentation
    const HtmlTooltip = styled(({ className, ...props }) => (
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
//


    return (

        <div class="container">
            <div class="one">
                <div style={{ paddingBottom: 10, textAlign: 'center', fontSize: 20, fontFamily: 'Courier New' }}> Top Ten!</div>
                <div className="ag-theme-alpine" style={{ paddingLeft: "5px", width: 400}}>
                    {items.length > 0 && items.map((item) => {
                        return (
                            <HtmlTooltip title={
                                <>
                                    <Typography color="inherit">
                                        {item.book_name}
                                    </Typography>
                                    <p>
                                        by {item.author}
                                    </p>
                                    <div className="thumbs">
                                        <i onClick={() => updateLikes(item.book_name, 'like')} class="fas fa-thumbs-up"></i>
                                        <i onClick={() => updateLikes(item.book_name, 'dislike')} class="fas fa-thumbs-down"></i>
                                        <span>{item.rating} likes</span>
                                    </div>
                                    <p>
                                        {item.Synopsis}
                                    </p>
                                </>
                            } placement="right">
                                <img src={item.PictureLink} key={item.id} alt={item.book_name} style={{ height: "200px", margin: "10px" }} />
                            </HtmlTooltip>

                        )
                    })

                    }
                </div>
            </div>
            <div class="two">
                <AddEntry />
                <ToBeRead updateSuccess={updateSuccess} updateLikes={updateLikes} />
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: 'Courier New',
                        fontSize: '25px'
                    }}
                    >
                    Your Reading Log
                    </div>
                <GetHistoryTable updateSuccess={updateSuccess} updateLikes={updateLikes}/>

            </div>
        </div>

    );
};

export default Dashboard;

/*
 <AgGridColumn field="book_name"></AgGridColumn>
<img src={rec.PictureLink}/>
<AgGridColumn field={<img src={rowData.PictureLink}/>}></AgGridColumn>
*/