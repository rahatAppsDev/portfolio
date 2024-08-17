
import "@/app/homepage.css"
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";






export const metadata: Metadata = {
  title: "Home | Rahat",
  description: "Welcome to my portfolio.",
  icons: {
    icon: "https://rahatappsdev.github.io/portfolio/assets/images/pic.jpeg"
  }

};

export default function Home() {
  return (
   <>
 
   
   <div className="homepage">
      
      <div className="homepageintro">
        <div className="homepageintrosummary">
          <p className="introtextone"> Hi, I&apos;m</p>
          <p className="introtexttwo"> Istiak Ahamed</p>
          <p className="introtextthree"> a Full Stack web developer having experience of building web apps with <span>React.js</span>, <span>Next.js</span> and <span>Django REST</span> framework.</p>

          <div className="introbtn_div">
            <Link className="projbtn" href={"/myprojects"}>Projects</Link>
            <a className="cvbtn" href="https://rahatappsdev.github.io/portfolio/assets/files/Rahat_cv.pdf" download="Istiak_Ahamed_Fullstack.pdf">
      Download CV
    </a>
          </div>
          

        </div>
      <Image
      src="/assets/images/pic.jpeg"
      alt="Profile Picture"
      width={500}
      height={500}
      className="homepagedp"
    />
      </div>

    </div></>
  );
}
