import React, { Component } from "react";
import Posts from "./posts/posts";

class BlogMain extends Component {
  render() {
    return (
      <div>
        
        <div style = {{backgroundColor:'#f5f5f5'}}>
          <div style={{display: 'flex'}}> 
              <div style = {{backgroundColor:'#f5f5f5', width:'40%', height:'900px'}}>
                  <img style={{ width: '450px',height: '240px', paddingLeft:'0px', paddingRight:'0px', paddingTop: '20px'}}
                      alt="logo of the blog"
                      src="/img/novelIdeas.png"
                  />
              </div>
              <div style = {{backgroundColor:'#776464', width:'50%', paddingLeft:'150px', paddingRight:'150px', paddingTop:'250px'}}> 
                    <div style={{textAlign:'left', color:'whitesmoke', fontSize:'60px',fontFamily: "Lucida Console"}}>
                      Welcome! 
                    </div>
                    <br/>
                    <div style={{textAlign:'left', color:'whitesmoke', fontSize:'25px'}}>
                      This is Novel Ideas our new Blog, enjoy reviews on the latest new books, scroll through posts listing out hidden gems, read interviews from best selling novelists and much much more. Leave a comment behind to let every one know your ideas and opinions or share posts of reviews or books you enjoyed!
                    </div>
                   
              </div>

          </div>
          
          </div>
          <br/>           
            <img style={{ width: '650px',height: '150px'}}
                      alt="blog logo 2"
                      src="/img/blogpics.png"
            />
            
            <div style={{display: 'flex', justifyContent:'center'}}>
                 
                <div style={{backgroundColor:'whitesmoke', padding: '10px', width:'21%', height:'70%', boxShadow: '5px 5px 5px 2px #bebebe'}}>
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

                <div style={{backgroundColor:'whitesmoke', marginLeft: '20px', padding: '10px',width:'20%', height:'50%', boxShadow: '5px 5px 5px 2px #bebebe'}}>
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

                <div style={{backgroundColor:'whitesmoke', marginLeft: '20px',padding: '10px', width:'20%', height:'50%', boxShadow: '5px 5px 5px 2px #bebebe'}}>
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

                <div style={{backgroundColor:'whitesmoke', marginLeft: '20px',padding: '10px', width:'20%', height:'50%', boxShadow: '5px 5px 5px 2px #bebebe'}}>
                    <img alt="pride and prejudice cover" src="/img/PrideAndPrejudice.jpg" width="240" height="322"/>
                    <div>
                        <h2>
                        Pride and Prejudice
                        </h2>
                        <div style={{ textAlign:'left'}}>
                            <p>
                              Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant 
                              work "her own darling child" and its heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the 
                              opinionated Elizabeth and her proud beau, Mr. Darcy. And Jane Austen's radiant wit sparkles as her characters dance a quadrille of flirtation and intrigue, 
                              making this book the superb comedy of manners of Regency England.
                            <a href="https://www.goodreads.com/book/show/1885.Pride_and_Prejudice"> Link</a>
                            </p>
                        </div>
                    </div>
                </div>
        
            </div>
        
        <Posts />
      </div>
    );
  }
}

export default BlogMain;