import Link from 'next/link'
import logo from '../../public/logo.png'
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

export default function Navbar() {
    const links = <>
             <li>
              <Link
                href="/"
                className=" font-bold ">
                Home
              </Link>
            </li>
            <li>
              <Link className=" font-bold " href="/apps">Apps</Link>
            </li>
            <li>
              <Link className=" font-bold " href="/installation">Installation</Link>
            </li>
            <li>
              <Link className=" font-bold " href="/login">Login</Link>
            </li>
            <li>
              <Link className=" font-bold " href="/register">Register</Link>
            </li>
            <li>
              <Link className=" font-bold " href="">LogOut</Link>
            </li>
    </>
    return (
         <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="buthrefn" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           {links}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-xl bg-linear-to-r text-transparent from-[#632EE3] to-[#9F62F2] font-bold bg-clip-text">
        <Image src={logo} alt="site logo" className='w-5 h-5' /> HERO.IO
        
            </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="https://github.com/Shadhin282"
          target="_blank"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <span className="">
            <FaGithub className="text-[#632EE3] bg-white rounded-[50%] p-1" />
          </span>
          Contribute
        </Link>
      </div>
    </div>
    )
   
}