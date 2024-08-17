

import { Metadata } from "next";
import "./aboutme.css"

export const metadata: Metadata = {
    title: "About Me | Rahat",
    description: "My professional and academic details and also technological skills which I have",
    icons: {
        icon: "/assets/images/pic.jpeg"
      }
  };
export default function Aboutme() {


    return (
        <>
        <div className={"aboutmepage"}>
            
            <div className="aboutmedetails">
            <p className="aboutmehead">ABOUT ME</p>
            <p className="aboutme one">Hello! I am <span>Istiak Ahamed</span>, a <span>Full stack web developer</span> living in Dhaka, Bangladesh. I have completed BBA & MBA from <span>University of Dhaka</span> on Management Information Systems. In my academic life I had several courses on programming, database management etc. Studying them I found so much interested in programming. Since then I have been following my passion to become a programmer. I began learning Flutter for mobile apps development and python based apps. Gradually I started learning javascript for web development and database systems both SQL and NoSQL.</p>
            <p className="aboutme two">Currently I am skilled in writing both Front-end and Back-end codes simultaneously. For Front-end purpose I use <span>React.js</span> or <span>Next.js</span> and for Back-end I use <span>Django REST</span>. For database I am efficient in <span>MySQL</span> and also <span>MongoDB</span>.</p>
            <p className="aboutme three">I have <span>3+ years</span> of professional experience of being a Full stack web developer and currently I am an employee of a renowned company in Bangladesh where my responsibilities include desigining and developing websites, converting flutter website intro React.js, managing <span>MySQL</span> database and maintaining the company <span>ERP</span> and also training the users of ERP. I am proficient in writing codes and yet I always engage myself to learn new things which will improve my technological knowledge and skills.</p>
            <p className="aboutme four">You can contact with me through mail - <span>rahatahmed953@gmail.com</span></p>
       
                </div> </div>
        </>
    )

}