import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import Express from "../assets/Express.png";
import Java from "../assets/Java.png";
import MySql from "../assets/MySql.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import node from "../assets/node.png";
import bootstrap from "../assets/img_bootstrap.webp";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/Javascript.svg";
import MongoDb from "../assets/MongoDB.svg";

const Experience = () => {
    const techs = [
        {
          id: 1,
          title: "HTML",
          style:'shadow-orange-500',
          src: html,
        },
        {
          id: 2,
          title: "CSS",
          style:'shadow-blue-500',
          src: css,
        },
        {
          id: 3,
          title: "JavaScript",
          style:'shadow-yellow-500',
          src: javascript,
        },
        {
          id: 4,
          title: "react",
          style:'shadow-sky-500',
          src: react,
        },
        {
          id: 5,
          title: "Java",
          style:'shadow-pink-500',
          src: Java,
        },
        {
          id: 6,
          title: "Tailwind",
          style:'shadow-purple-500',
          src: tailwind,
        },
        {
          id: 7,
          title: "GraphQL",
          style:'shadow-orange-500',
          src: graphql,
        },
        {
          id: 8,
          title: "Node JS",
          style:'shadow-blue-500',
          src: node,
        },
        {
            id:9,
            title:"Express",
            style:'shadow-green-500',
            src: Express,
        },
        {
            id:10,
            title:"MySql",
            style:'shadow-yellow-500',
            src:MySql,
        },
        {
            id:11,
            title:"github",
            style:'shadow-gray-500',
            src:github,
        },
        {
            id:12,
            title:"bootstrap",
            style:'shadow-orange-500',
            src:bootstrap,
        },
        {
            id:13,
            title:"MongoDb",
            style:'shadow-pink-500',
            src:MongoDb,
        },
      ];
  return (
    <div id="experience" className="bg-gradient-to-b experience-container from-gray-800 to-black w-full h-full">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full text-white">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Experience
        </p>
        <p className="py-6 
        ">
          These are the technologies I,ve Worked with
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, title,style,src}) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto"/>
              <p className="mt-4">{title}</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
    
  )
}

export default Experience
