import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Header.css'; // Assuming you have a separate CSS file

const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-600 body-font shadow-lg header">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ">
       <a className="flex title-font font-medium items-center text-gray-900 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-green-500 p-2 bg-green-100 rounded-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 0 1 2 15.382V8.618a2 2 0 0 1 1.553-1.894L9 4m0 16v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8m-6 0h6" />
          </svg>
          <span className="ml-3 text-xl">MARIA</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-green-600 transition-colors duration-300" href="#maria">A Maria</a>
          <a className="mr-5 hover:text-green-600 transition-colors duration-300" href="#capacidades">Capacidades</a>
          <a className="mr-5 hover:text-green-600 transition-colors duration-300" href="#privacidade">Segurança e Privacidade</a>
          <a className="hover:text-green-600 transition-colors duration-300" href="#missao">A Missão</a>
        </nav>
        <button className="inline-flex items-center text-white bg-green-500 border-0 py-2 px-4 mx-3 my-2 focus:outline-none hover:bg-green-600 rounded text-base transition-colors duration-400 disabled-link">
            <FaWhatsapp size="1em" className="mr-1" />
              Converse com a MARIA agora
        </button>
      </div>
    </header>
  );
};

export default Header;
