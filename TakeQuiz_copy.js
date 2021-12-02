import React, { useState } from 'react';
import {Questions} from './Questions';
const url = "http://localhost:5000/takeaquiz";

function TakeQuiz(){
    const[currQuestion,setCurrentQuestion] = useState(0);
    const[optionChosen,setOptionChosen] = useState("");
    const [userinfo, setUserInfo] = useState([]);
    
    // let genre =  '';
    // let age=  '';
    // let page=  '';
    // let date=  '';
    // let triggers=  '';
    let recommendations= [];
    let info = [];

    const nextQuestion = (answer)=> {
        Questions[currQuestion].ans = optionChosen;
        //info[currQuestion] = optionChosen;
        userinfo[currQuestion] = optionChosen;
        //console.log(Questions[currQuestion].ans);
        // if (currQuestion === 0) {
        //     genre = optionChosen;
        // }
        // console.log(genre);
        
        //console.log(info[currQuestion])
        setCurrentQuestion(currQuestion + 1);
    };
    const submission = (info) => {
        info.preventDefault();
        userinfo[currQuestion] = optionChosen;
        
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                genre: userinfo[0],
                age: userinfo[1],
                page: userinfo[2],
                date: userinfo[3],
                triggers: userinfo[4],

            })
        }).then(result =>result.json())
            .then(data => {
                recommendations=data
                console.log(recommendations[0])
                //{printfunction()}
                
            }) 
        
    };

     const printfunction = () => {
      console.log(userinfo[0]);
      console.log(userinfo[1]);
      console.log(userinfo[2]);
      console.log(userinfo[3]);
      console.log(userinfo[4]);
    };

    return <div className = "TakeQuiz">
        <h1> {Questions[currQuestion].prompt} </h1>
            <div className = 'Options'>
                <button onclick={()=>setOptionChosen(Questions[currQuestion].A)}>{Questions[currQuestion].A}</button>
                <button onClick={()=>setOptionChosen(Questions[currQuestion].B)}>{Questions[currQuestion].B}</button>
                <button onClick={()=>setOptionChosen(Questions[currQuestion].C)}>{Questions[currQuestion].C}</button>
                <button onClick={()=>setOptionChosen(Questions[currQuestion].D)}>{Questions[currQuestion].D}</button>
            </div>
            {currQuestion === Questions.length -1 ? (
                <button onClick={submission}> Submit </button>
            ): (
                <button onClick={nextQuestion}>Next Question</button>
            )}      
    </div>
}
export default TakeQuiz;
