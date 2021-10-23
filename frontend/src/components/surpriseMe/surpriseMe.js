import React from "react";
import {Link} from 'react-router-dom';
//import { Linking } from 'react-native';

export default class SurpriseMeRecs extends React.Component{
    state = {
        loading:true,
        book:null
    };
    async componentDidMount() {
        const url = "http://localhost:5000/surpriseme";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ book: data[0], loading: false});
        //console.log(data);

    }
    render(){
        return(
            <div>
                {this.state.loading || !this.state.book ? (
                <div>loading...</div>
                ):(
                    <div> 
                        <div>Title: {this.state.book.book_name}</div>
                        <div>Author: {this.state.book.author}</div>
                        <div>Genre: {this.state.book.genre}</div>
                        <div>Publication Year: {this.state.book.publication_date}</div>
                        <div>Rating: {this.state.book.rating}</div>
                        <div>Maximum Pages: {this.state.book.maximum_pages}</div>
                        <div>Age Range: {this.state.book.age_range}</div>
                        <div> Summary: {this.state.book.Synopsis}</div>
                    
                        {this.state.book.series? (
                            <div>Series: Yes</div>
                        ):(
                            <div>Series: No</div>
                        )}
                        {this.state.book.best_seller? (
                            <div>Best Seller: Yes </div>
                        ):(
                            <div>Best Seller: No</div>
                        )}
                        {this.state.book.trigger_warning? (
                            <div>Trigger Warnings: {this.state.book.trigger_warning} </div>
                        ):(
                            <div>Trigger Warnings: No</div>
                        )}
                        {
                            this.state.book.LinkToAmazon
                            ?<a href={this.state.book.LinkToAmazon} target="_blank"> Purchase Link</a>
                            : this.state.book.LinkToAmazon  
                        }

                        {
                            this.state.book.PictureLink
                            ? ( <div><a href={this.state.book.PictureLink} target="_blank"> Image Link</a> </div>
                            ): (this.state.book.PictureLink 
                            )}
                        
                    </div>
                )}
                
            </div>  
        );
    }
}