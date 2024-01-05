import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NavBar(){
    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flare Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Flare</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Login in</button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-green-400 dark:hover:bg-green-700 dark:focus:ring-green-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
                <li>
                    <Link to="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                </li>
                <li>
                    <Link to="/models" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Model</Link>
                </li>
                <li>
                    <Link to="/dataset" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dataset</Link>
                </li>
                <li>
                    <Link to="/train" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Train</Link>
                </li>
                <li>
                    <Link to="/predict" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Predict</Link>
                </li>
            </ul>
        </div>
        </div>
        </nav>

    )
}