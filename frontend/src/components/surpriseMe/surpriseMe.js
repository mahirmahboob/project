import React from "react";
import './surpriseMe.css';
export default class Testfetch extends React.Component{
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
            <body>
                <div>
                    {this.state.loading || !this.state.book ? (
                <div>loading...</div>
                ):(
                <div>
                <div className="grid-container">
                    <div className="a">                    
                        <img src={this.state.book.PictureLink} height={400} witdth={400} />
                    </div>
                    <div className="b">
                        <div className="chld">
                        <div className="txt">Title: {this.state.book.book_name}</div>
                        <div className="txt">Author: {this.state.book.author}</div>
                        <div className="txts">{this.state.book.Synopsis}</div>
                        <div className="txtss">Genre: {this.state.book.genre}</div>
                        <div className="txtss">Publication Year: {this.state.book.publication_date}</div>
                        <div className="txtss">Rating: {this.state.book.rating}</div>
                        <div className="txtss">Maximum Pages: {this.state.book.maximum_pages}</div>
                        <div className="txtss">Age Range: {this.state.book.age_range}</div>
                        {this.state.book.series? (
                            <div className="txtss" >Series: Yes</div>
                        ):(
                            <div className="txtss">Series: No</div>
                        )}
                        {this.state.book.best_seller? (
                            <div className="txtss">Best Seller: Yes </div>
                        ):(
                            <div className="txtss">Best Seller: No</div>
                        )}
                        {this.state.book.trigger_warning? (
                            <div className="txtss">Trigger Warnings: {this.state.book.trigger_warning} </div>
                        ):(
                            <div className="txtss">Trigger Warnings: No</div>
                        )}
                        <div className="txtss">
                        <a href={this.state.book.LinkToAmazon} target="_blank">Buy Here</a></div>
                        </div>
                    </div>
                </div>
 
{/*  
                        <div>Title: {this.state.book.idbook_info}</div>
                        <div>Author: {this.state.book.author}</div>
                        <img src={this.state.book.picture} height={400} witdth={400} />
                        <div>Genre: {this.state.book.genre}</div>
                        <div>Publication Year: {this.state.book.publication_date}</div>
                        <div>Rating: {this.state.book.rating}</div>
                        <div>Maximum Pages: {this.state.book.maximum_pages}</div>
                        <div>Age Range: {this.state.book.age_range}</div>
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
                        {this.state.book.triggers? (
                            <div>Trigger Warnings: {this.state.book.triggers} </div>
                        ):(
                            <div>Trigger Warnings: No</div>
                        )}
                        
                        <div>Buy Here: {this.state.book.buy}</div>
                        <div class="text-center"> Synopsis: {this.state.book.synopsis}</div> */}
                    </div>
                )}
                
            </div>  
            </body>
        );
    }
}