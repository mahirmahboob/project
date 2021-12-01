import React, { Component } from "react";
import SimpleReactFooter from "simple-react-footer";

export class Footer extends Component {
render() {
  const title = "Bookmarked";
  const description = "If you would like to reach out to the creators of this website please email admin@bookmarked.com with ideas and thoughts, we value all your suggestions and we look forward to hearing from you. Thank you for visiting our website!";

  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/aboutus"
            },
            {
                name: "Admin",
                link: "/aboutus"
            }
        ],
        
    },
    {
        title: "Links",
            resources: [
                {
                    name: "Signup",
                    link: "/signup"
                },
                {
                    name: "Login",
                    link: "/login"
                },
                
            ]
        },
    {
    title: "Services",
        resources: [
            {
                name: "Genre",
                link: "/recGenre"
            },
            {
                name: "Random",
                link: "/recSurpriseMe"
            },
            {
                name: "Quiz",
                link: "/recQuiz"
            },
            
        ]
    },{
    title: "Extra",
        resources: [
            {
                name: "Blog",
                link: "/blog"
            },
            {
                name: "Search",
                link: "/searchdir"
            },
            
        ]
    }

    
 ];
 return (
 <div>
 <SimpleReactFooter 
    title={title}
    description={description}
    columns={columns}
    linkedin="bookmarked_ln"
    facebook="bookmarked_fb"
    twitter="bookmarked_twitter"
    instagram="bookmarked_ig"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="bookmarked_page"
    copyright="2021 Bookmarked"
    iconColor="black"
    backgroundColor="lightgray"
    fontColor="black"
    copyrightColor="black"
    
 />
 </div>
  )};
}