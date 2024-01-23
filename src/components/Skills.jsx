import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import Django from '../assets/django.png';
import Python from '../assets/python.png';
import RestAPi from '../assets/restapi.png';
import cplus from '../assets/c++.png';
import sql from '../assets/postgresql.png';
import git from '../assets/git.png';


const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#143447] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 '>Skills</p>
                <p className='py-4'>Technologies I have worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="REACT" />
                    <p className='my-4'>React.Js</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="NODE" />
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="MONGO" />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JS" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Django} alt="django" />
                    <p className='my-4'>Django</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Python" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={RestAPi} alt="Python" />
                    <p className='my-4'>REST API</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={cplus} alt="Python" />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={sql} alt="Python" />
                    <p className='my-4'>PostgreSQL</p>
                </div>
                <div className='shadow-md shadow-[#143447] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={git} alt="Python" />
                    <p className='my-4'>Git/Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills