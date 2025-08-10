"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const AppNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-10 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a className="flex-shrink-0" href="/">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className="block px-4 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600" href="/login">
                    Iniciar Sesión
                </Link>
                <Link href="/register">
                    Registrar
                </Link>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/login">
                    Iniciar Sesión
                </Link>
                <Link href="/register">
                    Registrar
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AppNav;