import React from 'react'
import whispr from '../assets/whispr.PNG'
import tictac from '../assets/tictac.PNG'
import keebook from '../assets/keebook.png'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#143447]'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Work</p>
                <p className='py-6'>History</p>
            </div>

            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage:`url(${whispr})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wide'>
                            MERN Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/ash2298744/Whispr-ChatApp">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${keebook})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wide'>
                            Django Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/ash2298744/KeeBook">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${tictac})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wide'>
                            React.Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/ash2298744/tic-tac-toe">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        

    </div>
  )
}

export default Work