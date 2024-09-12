import { TiNews } from "react-icons/ti";
import React, { useState } from 'react'
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleHandler = () => {
        setIsToggled(prevState => !prevState);
    };

    const dropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };


    

    return <>
        <div className='sticky top-0 z-50  bg-[#0dddce]  px-4 flex flex-row w-full  h-auto justify-between items-center p-2 '>
            <div className='flex gap-3 items-center'>
                <TiNews className='text-2xl md:text-4xl text-gray' />
                <Link href="/"><span className=' text-xl md:text-2xl font-bold '>News-24</span></Link>
            </div>


            <nav className={` w-[100%] md:w-auto h-[30rem] md:h-fit  absolute  md:static  left-0  top-[2.8rem] transition-all ease-in duration-[400ms]  ${isToggled ? "block" : "left-[-100%]"}  `}>

                <ul className='text-lg flex flex-col md:flex-row gap-8 md:gap-4 text-black font-semibold bg-teal-400  md:bg-inherit items-center justify-center h-full bg-opacity-90 '>
                    <li onClick={() => setIsToggled(false)}  ><Link className='hover:text-blue-500 transform hover:scale-105 transition-transform duration-300 ' href="/about">About us</Link> </li>
                    <li onClick={() => setIsToggled(false)}><Link className='hover:text-blue-600' href="/entertainment">Entertainment</Link></li>
                    <li className='relative'>
                            <button onClick={dropdownToggle} className='hover:text-blue-600'>Sports</button>
                            {isDropdownOpen && (
                                <ul className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md text-black'>
                                    <li className='px-4 py-2 hover:bg-gray-200'><Link href="/sports/Football">Football</Link></li>
                                    <li className='px-4 py-2 hover:bg-gray-200'><Link href="/">Basketball</Link></li>
                                    <li className='px-4 py-2 hover:bg-gray-200'><Link href="/sports/tennis">Tennis</Link></li>
                                </ul>
                            )}
                        </li>
                    <li onClick={() => setIsToggled(false)} ><Link className='hover:text-blue-600' href="/technology">Technology</Link></li>

                    <li className='md:hidden' onClick={() => setIsToggled(false)} ><Link className='hover:text-blue-600' href="/signup">Sign Up</Link></li>
                </ul>


            </nav>


            <div className='hidden md:block'>
                <Link className='hover:text-blue-600 ' href="/signup"><span className='font-semibold'>Sign Up</span></Link>
            </div>

            <div className='text-3xl md:text-4xl md:hidden'>
                <div onClick={toggleHandler}>
                    {isToggled ? <RxCross1 /> : <RxHamburgerMenu />}
                </div>
            </div>

        </div >


    </>
}

export default Navbar


// bg - [#e0ffc2]