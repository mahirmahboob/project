import React, { Component } from "react";
import { useEffect } from "react";
import { useState} from "react";
import {link} from "react-router-dom";


function SurpriseMeRecs() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/surpriseme');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
        {
            items.map( item => (
                <div>
                    <h1 class="book_title">The book Title is: <spanone>{item.book_name}</spanone></h1>
                    <h4 class="book_genre">The book Genre is: <spantwo>{item.genre}</spantwo></h4>
                    <h4 class="book_rating">The Overall Rating is: <spanthree>{item.rating}</spanthree></h4>
                    <h4 class="book_author">The Author of this book is: <spanfour>{item.author}</spanfour></h4>
                    <h4 class="book_agerange">The book age_range is: <spanfive>{item.age_range}</spanfive></h4>
                    <h4 class="book_pages">This book contains: <spansix>{item.maximum_pages}</spansix> <extraspan> pages</extraspan></h4>
                    <h4 class="book_publicationyear">This book was Published in: <spanseven>{item.publication_date}</spanseven></h4>
                    <h4 class="book_triggerwarning">The book contains some trigger warning like: <spaneight>{item.trigger_warning}</spaneight></h4>
                </div>
            ))
        }
        </section>
    );
}

export default SurpriseMeRecs;
