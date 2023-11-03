import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm Gaurav Nainwal, a BTech student at the Noida Institute of Engineering and Technology. Hailing from Uttarakhand, I now reside in Faridabad. I'm deeply passionate about technology, especially in computer science and artificial intelligence. My educational journey began at Doon Bharti Public School, where my love for learning blossomed
        </p>
        <br />

        <p className="text-xl">
        I am a web development enthusiast at the Noida Institute of Engineering and Technology, skilled in HTML, Java, CSS, JavaScript, and ReactJS. Cricket is not just a sport but my passion and escape. I excel in teamwork, quick learning, and believe in technology's transformative power. My goal is to use my knowledge to create innovative solutions that improve lives, making a positive difference one step at a time.
        </p>
      </div>
    </div>
  );
};

export default About;