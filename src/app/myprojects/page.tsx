import Projectcard from "@/components/Projectcard/Projectcard";
import "./myprojects.css";
import { BsCalculatorFill } from "react-icons/bs";
import { GiInvertedDice5 } from "react-icons/gi";
import { RiTodoLine } from "react-icons/ri";



import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Rahat",
    description: "Some JS projects I have done for practice",
    icons: {
        icon: "https://rahatappsdev.github.io/portfolio/assets/images/pic.jpeg"
      }
    
  };
export default function Myprojects() {
  const myprojects = [
    {
      id: 1,
      icon: <RiTodoLine color={"black"} size={"25px"} />,
      heading: "Todo",
      details: "This project is a todo page with localstorage where you can add or delete todo items and also checkmark which are completed.",
      link: "/myprojects/todo",
    },
    {
      id: 2,
      icon: <BsCalculatorFill color={"black"} size={"25px"}/>,
      heading: "Calculator",
      details: "A calculator page with simple operations. ",
      link: "/myprojects/calculator",
    },
    {
        id: 3,
        icon: <GiInvertedDice5 color={"black"} size={"25px"} />,
        heading: "Dice Game",
        details: "A dice rolling game where you play by choosing any number between 1 to 6 then roll the dice. Score is added or deducted basing on chosen number.",
        link: "/myprojects/dice",
      },
      
  ];
  return (
    <>
      <div className="projectspage">
        <p className="projectspage_head">MY PROJECTS</p>
        <div className="projectslist">
          {myprojects.map((item, index) => {
            return (
              <Link key={item.id} href={`${item.link}`}>
                <Projectcard
                  icon={item.icon}
                  heading={item.heading}
                  details={item.details}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
