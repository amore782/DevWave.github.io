import React from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Profile Image & Name */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-3xl">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-32 mx-auto"
        />
        <h1 className="text-2xl font-bold mt-4">Daniel Lopez</h1>
        <p className="text-gray-600">Senior App Developer</p>

        {/* Contact Information */}
        <div className="flex justify-center gap-4 mt-4 text-gray-700">
          <p><FaEnvelope className="inline" /> hello@yourwebsite.com</p>
          <p><FaGlobe className="inline" /> www.yourwebsite.com</p>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mt-6">
        <h2 className="text-xl font-bold">About Me</h2>
        <p className="text-gray-600 mt-2">Summarize your career profile here...</p>
      </div>

      {/* Work Experience */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mt-6">
        <h2 className="text-xl font-bold">Work Experience</h2>
        <p className="text-gray-600 mt-2"><strong>Tech Lead</strong> (2024 - Present)</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Lorem ipsum dolor sit amet...</li>
          <li>Vivamus accumsan purus...</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mt-6">
        <h2 className="text-xl font-bold">Tech Stack</h2>
        <ul className="text-gray-600 mt-2">
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Python</li>
          <li>MongoDB</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mt-6">
        <h2 className="text-xl font-bold">Soft Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full">Leadership</span>
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full">Project Management</span>
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full">DevOps</span>
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full">Public Speaking</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
