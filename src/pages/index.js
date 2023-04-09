import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/legacy/image";
import me from "public/me.jpeg";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Elizabeth Seto</title>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl"></h1>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-pink-400 font-medium md:text-6xl max-w-xl mx-auto">Elizabeth Seto</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">software developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl">
              I'm software engineer based in Seattle, Washington. I have interest in full-stack software development, artificial intelligence, game development and everything else in-between.
            </p>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={me} layout="fill" objectFit="cover" />
          </div>
          <div className="text-5xl flex justify-center gap-16 py-20 ml-10 text-gray-600">
            <a href="https://www.linkedin.com/in/elizabethseto/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/elizabethseto">
              <AiFillGithub />
            </a>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-center text-3xl py-1">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray">
              I'm recent graduate from the University of Massachusetts Amherst with a computer science degree. Currently, I'm a <span className="text-pink-500">software engineer</span> at <span className="text-pink-500">Liberty Mutual Insurance</span>, building cloud products and infrastructure for application teams.
            </p>
          </div>
          <div className="lg:flex gap-5">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-xl font-medium pt-8 pb-2">Education</h3>
              <p className="text-md py-2">
                University of Massachusetts Amherst, 2019 - 2022
              </p>
              <p className="text-sm font-medium">Relevant Coursework:</p>
              <ul className="text-sm">
                <li>INFO 203: A Networked World</li>
                <li>CS 311: Algorithms</li>
                <li>CS 383: Artificial Intelligence</li>
                <li>RES-ECON 212: Business Statistics</li>
                <li>MATH 131: Calculus I</li>
                <li>MATH 132: Calculus II</li>
                <li>CS 453: Computer Networks</li>
                <li>CS 230: Computer Systems Principles</li>
                <li>CS 187: Data Structures</li>
                <li>CS 250: Discrete Mathematics</li>
                <li>CS 563: Internet Law and Policy</li>
                <li>MATH 235: Linear Algebra</li>
                <li>MATH 233: Multivariate Calculus</li>
                <li>CS 377: Operating Systems</li>
                <li>PHYSICS 151: Physics I</li>
                <li>CS 345: Practice and Applications of Data Management</li>
                <li>CS 121: Problem Solving with Computers</li>
                <li>CS 220: Programming Methodologies</li>
                <li>CS 240: Reasoning Under Uncertainty</li>
                <li>CS 446: Search Engines</li>
                <li>CICS 305: Social Issues in Computing</li>
                <li>CS 326: Web Programming</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-2xl font-medium pt-8 pb-2">Skills</h3>
              <p className="text-sm py-2 leading-8 text-gray md:text-xl">
                Here are some other <span className="text-pink-500">technologies</span> I work with:
              </p>
              <ul className="text-sm">
                <li>Amazon Web Services</li>
                <li>Microsoft Azure</li>
                <li>Angular</li>
                <li>React.js</li>
                <li>Flutter</li>
                <li>Node.js</li>
                <li>CSS/HTML</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="text-left shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-2xl text-center font-medium pt-8 pb-2">Experience</h3>
              <p className="text-md font-medium">Associate Software Engineer, Liberty Mutual Insurance</p>
              <p className="text-sm">January 2023 - PRESENT</p>
              <br></br>
              <p className="text-sm"><span className="text-sm font-medium">Skill:</span> Amazon Web Services (AWS) · Angular · JavaScript · Jest · Microsoft Azure · Node.js · Python (Programming Language) · TypeScript</p>
              <br></br>
              <p className="text-md font-medium">Technology Associate, Liberty Mutual Insurance</p>
              <p className="text-sm">September 2022 - January 2023</p>
              <br></br>
              <p className="text-sm"><span className="text-sm font-medium">Skill:</span> Amazon Web Services (AWS) · Angular · JavaScript · Jest · Microsoft Azure · Node.js · Python (Programming Language) · TypeScript</p>
              <br></br>
              <p className="text-md font-medium">Software Engineer Intern, Liberty Mutual Insurance</p>
              <p className="text-sm">June 2022 - September 2022</p>
              <p className="text-sm">Full-stack development on Architecture, Cloud and Engineering Enablement Team; build cloud infrastructure and products to support application teams.</p>
              <br></br>
              <p className="text-sm"><span className="text-sm font-medium">Skill:</span> Amazon Web Services (AWS) · Angular · JavaScript · Jest · Microsoft Azure · Node.js · Python (Programming Language) · TypeScript</p>
              <br></br>
              <p className="text-md font-medium">Software Development Co-op, Solaria Labs</p>
              <p className="text-sm">January 2022 - June 2022</p>
              <p>Full-stack development in Dwellbeing app, an Android and iOS application for personalized home maintenance tasks; implemented/debugged multiple frontend and backend features.</p>
              <br></br>
              <p className="text-sm"><span className="text-sm font-medium">Skill:</span> Amazon Web Services (AWS) · Dart · Express.js · Flutter · JavaScript · MySQL · Node.js · React.js</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

