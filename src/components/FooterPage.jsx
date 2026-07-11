// import { Link } from 'react-router-dom'
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png"
import React from 'react'

const FooterPage = () => {
  return (
    <footer className='bg-blue-950 text-white px-10 py-8 mt-10'>
     <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-xl font-bold">MediaSearch</h2>
          <p className="text-gray-400 text-sm">
            Search Photos, Videos & GIFs instantly.
          </p>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/PriyaSahu004"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="hover:text-blue-400 duration-200" />
          </a>

          <a href="https://www.linkedin.com/in/priyasahu004/">
            <Linkedin className="hover:text-blue-400 duration-200" />
          </a>

        </div>

      </div>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-gray-400 text-sm">
        © 2026 Priya Sahu • Built with React, Redux Toolkit & Tailwind CSS
      </p>
    </footer>
  )
}

export default FooterPage
