import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import Popup from 'reactjs-popup';
import Comments from "./comments";
import './blog.css'
class Blog extends Component {
    constructor() {
        super();
        this.state = {  
        }
    }
    
    render() {
     return (  
        <div style = {{backgroundColor:'#f5f5f5', height:'100%'}}>
            <div style = {{alignContent: 'center'}}>
                <img className="photo"
                    alt="logo of the blog"
                    src="/img/novelIdeas.png"
                />
            </div>
            
            <div style={{display: 'flex', justifyContent:'center'}}>
            
                <div style={{backgroundColor:'whitesmoke', padding: '10px', width:'30%', height:'70%', boxShadow: '5px 5px 5px 2px #bebebe'}}>
                    <img alt="paris cover" src="/img/blog4.jpg" width="210" height="300" />
                    <div>
                        <h2>
                            The Paris Library
                        </h2>
                        <div style={{ textAlign:'left'}}>
                            <p>
                                This historical fiction novel is based on the little-known but true story of World War II librarians at the American Library in Paris.
                                It begins in 1939, where young librarian Odile faces the fear of losing her library as the Nazis invade her city. In 1983, Lily is a 
                                teenager in Montana whose school project leads her to interview her French neighbor, uncovering her mysterious past and the secret that
                                may connect them. This is not a war novel, but a descriptive and deeply intriguing piece of historical fiction that will pull on the 
                                heartstrings of all book lovers. 
                                <a href="https://www.businessinsider.com/best-books-2021-according-to-goodreads#the-rose-code-by-kate-quinn-8">Link</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor:'whitesmoke', marginLeft: '20px', padding: '10px',width:'30%', height:'50%', boxShadow: '5px 5px 5px 2px #bebebe'}}>
                    <img alt="rose cover" src="/img/rose.png" width="210" height="300"/>
                    <div>
                        <h2>
                            The Rose Code
                        </h2>
                        <div style={{ textAlign:'left'}}>
                            <p>
                            In 1940, three very different women come together during the war to help break German military codes, creating deep bonds that 
                            are broken by the pressure of secrecy and the pain of loss through the war. Seven years later, the women are reunited at a royal 
                            wedding by a mysterious letter and must revisit a past of betrayal and heartbreak in order to crack one final code and stop 
                            an elusive enemy. This is a brilliant and riveting read, a bestseller with perfectly plotted narratives that has quickly become 
                            an undeniable 2021 favorite. 
                            <a href="https://www.businessinsider.com/best-books-2021-according-to-goodreads#the-rose-code-by-kate-quinn-8">Link</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor:'whitesmoke', marginLeft: '20px',padding: '10px', width:'30%', height:'50%', boxShadow: '5px 5px 5px 2px #bebebe'}}>
                    <img alt="wuthering heights cover" src="/img/heights.jpg" width="210" height="322"/>
                    <div>
                        <h2>
                        Wuthering Heights
                        </h2>
                        <div style={{ textAlign:'left'}}>
                            <p>
                            Wuthering Heights is an 1847 novel by Emily Brontë, initially published under the pseudonym Ellis Bell. It concerns two families of the landed gentry 
                            living on the West Yorkshire moors, the Earnshaws and the Lintons, and their turbulent relationships with Earnshaw's adopted son, Heathcliff. The novel 
                            was influenced by Romanticism and Gothic fiction. Wuthering Heights is now considered a classic of English literature, but contemporaneous reviews were 
                            polarised. 
                            <a href="https://en.wikipedia.org/wiki/Wuthering_Heights"> Link</a>
                            </p>
                        </div>
                    </div>
                </div>
        
            </div>
            <div style={{ marginLeft: '10%', marginTop: '40px', width: '80%', height: '35%', boxShadow: '5px 5px 5px 2px #bebebe'}}> 
                <Box color="black" bgcolor="#ebd3b9" p={8}>
                <h1> <u>Read a review of Asymmetry by Lisa Halliday</u></h1>
                <div style = {{textAlign:"left"}}>
                <p>Three-quarters of the way through Lisa Halliday’s debut novel, “Asymmetry,” a British foreign correspondent named Alistair is 
                spending Christmas on a compound outside of Baghdad. His fellow revelers include cameramen, defense contractors, United Nations 
                employees and aid workers. Someone’s mother has FedExed a HoneyBaked ham from Maine; people are smoking by the swimming pool. It is 2003, 
                just days after Saddam Hussein’s capture, and though the mood is optimistic, Alistair is worrying aloud about the ethics of his chosen profession, 
                wondering if reporting on violence doesn’t indirectly abet violence and questioning why he’d rather be in a combat zone than reading a picture book 
                to his son. But every time he returns to London, he begins to “spin out.” He can’t go home. “You observe what people do with their freedom — what 
                they don’t do — and it’s impossible not to judge them for it,” he says.</p>
                <p>The line, embedded unceremoniously in the middle of a page-long paragraph, doubles, like so many others in “Asymmetry,” as literary criticism. 
                Halliday’s novel is so strange and startlingly smart that its mere existence seems like commentary on the state of fiction. One finishes 
                “Asymmetry” for the first or second (or like this reader, third) time and is left wondering what other writers are not doing with their freedom 
                — and, like Alistair, judging them for it. </p> 
                <p>Despite its title, “Asymmetry” comprises two seemingly unrelated sections of equal length, appended 
                by a slim and quietly shocking coda. Halliday’s prose is clean and lean, almost reportorial in the style of W. G. Sebald, and like the murmurings 
                of a shy person at a cocktail party, often comic only in single clauses. It’s a first novel that reads like the work of an author who has published
                many books over many years. […] <a href="https://www.nytimes.com/2018/02/12/books/review/lisa-halliday-asymmetry.html">Link</a></p>
                </div>
                    <Popup
                        trigger={<button className="button" style={{backgroundColor: '#d4c2b1', 
                        color: 'black',
                        padding: '15px 32px',
                        textAlign: 'center',                           
                        fontSize: '15px',border:'none'}}> Comments </button>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="scroller" style={{width:700, height:600}}>
                            <button className="close" onClick={close}>
                            &times;
                            </button>
                            <div> Comments </div>
                            <div className="content">                            
                                <Comments/>
                            </div>
                            
                        </div>
                        )}
                    </Popup>
                </Box>
            </div>
            <br/>
            <br/>
            <div style={{ marginLeft: '10%', marginTop: '10px', width: '80%', height: '35%' , boxShadow: '5px 5px 5px 2px #bebebe'}}> 
                <Box color="black" bgcolor="#ebd3b9" p={8}>
                <h2> <u>What do people think about Earnest Cline's Ready Player One</u></h2>
                <div style = {{textAlign:"left"}}>
                <p>Video-game players embrace the quest of a lifetime in a virtual world; screenwriter Cline’s first novel is old wine in new bottles.</p>
                    <p>The real world, in 2045, is the usual dystopian horror story. So who can blame Wade, our narrator, if he spends most of his time in a 
                        virtual world? The 18-year-old, orphaned at 11, has no friends in his vertical trailer park in Oklahoma City, while the OASIS 
                        has captivating bells and whistles, and it’s free. Its creator, the legendary billionaire James Halliday, left a curious will. 
                        He had devised an elaborate online game, a hunt for a hidden Easter egg. The finder would inherit his estate. Old-fashioned riddles 
                        lead to three keys and three gates. Wade, or rather his avatar Parzival, is the first gunter (egg-hunter) to win the Copper Key, first 
                        of three.</p>
                    <p>Halliday was obsessed with the pop culture of the 1980s, primarily the arcade games, so the novel is as much retro as futurist. 
                        Parzival’s great strength is that he has absorbed all Halliday’s obsessions; he knows by heart three essential movies, crossing 
                        the line from geek to freak. His most formidable competitors are the Sixers, contract gunters working for the evil conglomerate IOI, 
                        whose goal is to acquire the OASIS. Cline’s narrative is straightforward but loaded with exposition. It takes a while to reach a scene 
                        that crackles with excitement: the meeting between Parzival (now world famous as the lead contender) and Sorrento, the head of IOI. The 
                        latter tries to recruit Parzival; when he fails, he issues and executes a death threat. Wade’s trailer is demolished, his relatives killed; 
                        luckily Wade was not at home. Too bad this is the dramatic high point. Parzival threads his way between more ’80s games and movies to gain 
                        the other keys; it’s clever but not exciting. Even a romance with another avatar and the ultimate “epic throwdown” fail to stir the blood.</p>
                    <p>Too much puzzle-solving, not enough suspense.
                    <a href="https://www.kirkusreviews.com/book-reviews/ernest-cline/ready-player-one/">Link</a> </p>
                    </div>
                    <Popup
                        trigger={<button className="button" style={{backgroundColor: '#d4c2b1', 
                            color: 'black',
                            padding: '15px 32px',
                            textAlign: 'center',                           
                            fontSize: '15px',
                            border:'none'}}> Comments </button>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="scroller" style={{width:700, height:600}}>
                            <button className="close" onClick={close}>
                            &times;
                            </button>
                            <div> Comments </div>
                            <div className="content">                            
                                <Comments/>
                            </div>
                            
                        </div>
                        )}
                    </Popup>  
                </Box>
            </div>
            <br/>
        </div>
    );
    }
}

export default Blog;