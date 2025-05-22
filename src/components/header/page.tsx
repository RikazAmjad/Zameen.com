'use client';
import React, { useState, useRef, useEffect } from 'react';
import { CogIcon, MagnifyingGlassIcon, PlusIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const COUNTRY_OPTIONS = [
    { code: 'pk', name: 'Pakistan' },
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' },
] as const;

const Page = () => {
    const [toolsOpen, setToolsOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<typeof COUNTRY_OPTIONS[number]>(COUNTRY_OPTIONS[0]);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        window.addEventListener('mousedown', handleClickOutside);
        return () => window.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleTools = () => {
        setToolsOpen(!toolsOpen);
        setMoreOpen(false);
    };

    const toggleMore = () => {
        setMoreOpen(!moreOpen);
        setToolsOpen(false);
    };

    return (
        <div className='bg-[#33A137] text-white px-4 py-2 w-full'>
            {/* Mobile menu button */}
            <div className="flex justify-between items-center md:hidden">
                <div className="flex items-center gap-2">
                    <Bars3Icon
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <span className="font-bold text-lg">Menu</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src={`https://flagcdn.com/${selected.code}.svg`}
                        alt={selected.name}
                        width={30}
                        height={20}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                    <UserIcon className="h-6 w-6" />
                </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex justify-between items-center text-sm font-bold">
                {/* Left navigation */}
                <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="size-6 mb-1">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 
                            9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
                            1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 
                            0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <ul className='list-none flex uppercase'>
                        <li className='px-[10px] cursor-pointer block'>Properties</li>
                        <li className='px-[10px] cursor-pointer hidden lg:block'>Plot finder</li>
                        <li className='px-[10px] cursor-pointer hidden xl:block'>Area Guides</li>
                        <li className='px-[10px] cursor-pointer hidden xl:block'>Blog</li>
                        <li className='px-[10px] cursor-pointer hidden xl:block'>Maps</li>
                    </ul>

                    {/* Tools dropdown */}
                    <div className="relative cursor-pointer">
                        <div onClick={toggleTools} className="uppercase select-none">
                            Tools ▾
                        </div>
                        {toolsOpen && (
                            <div className="absolute bg-white text-black mt-2 rounded-md shadow-lg w-56 z-30 font-light">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-t-md">Home Loan Calculator</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Area Unit Converter</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Land Record Pages</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-b-md">Construction Cost Calculator</a>
                            </div>
                        )}
                    </div>

                    {/* More dropdown */}
                    <div className="relative cursor-pointer">
                        <div onClick={toggleMore} className="uppercase select-none">
                            More ▾
                        </div>
                        {moreOpen && (
                            <div className="absolute bg-white text-black mt-2 rounded-md shadow-lg w-56 z-30 font-light">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-t-md">Area Guides</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Maps</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Forum</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Index</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-b-md">Trends</a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right utilities */}
                <div className='flex items-center gap-4'>
                    <div className='border rounded flex items-center w-36'>
                        <input type="text" className='w-[85%] py-1 px-3 outline-0 border-0 text-black font-light' placeholder='Property ID' />
                        <button><MagnifyingGlassIcon className="h-4 w-4 text-black" /></button>
                    </div>
                    <div className='border rounded flex space-x-1.5 items-center w-36 py-1 px-2 bg-white'>
                        <PlusIcon className='h-4 w-4 text-black' />
                        <button className='text-black font-normal'>Add Property</button>
                    </div>
                    <button><Image src={'/Urdu.svg'} alt='urdu button' width={30} height={25} /></button>

                    <div ref={ref} className="relative ">
                        <button onClick={() => setOpen((prev) => !prev)} className="flex items-center py-1 rounded">
                            <Image src={`https://flagcdn.com/${selected.code}.svg`} alt={selected.name} width={30} height={20} />
                        </button>
                        {open && (
                            <div className="absolute right-0 mt-2 w-9 bg-white text-black rounded shadow-lg z-50">
                                {COUNTRY_OPTIONS.map((c) => (
                                    <button key={c.code} onClick={() => { setSelected(c); setOpen(false); }} className="flex items-center gap-2 w-full p-2">
                                        <Image src={`https://flagcdn.com/${c.code}.svg`} alt={c.name} width={50} height={25} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <CogIcon className="h-7 w-7 text-white hidden lg:block" />
                    <UserIcon className="h-6 w-6 text-white" />
                </div>
            </div>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div className="lg:hidden mt-2 bg-white text-black p-4 rounded-md shadow-md space-y-2">
                    <ul className="space-y-2 uppercase font-semibold">
                        <li>Properties</li>
                        <li>Plot Finder</li>
                        <li>Area Guides</li>
                        <li>Blog</li>
                        <li>Maps</li>
                        <li onClick={toggleTools}>Tools ▾</li>
                        <li onClick={toggleMore}>More ▾</li>
                    </ul>
                    {toolsOpen && (
                        <div className="mt-2 space-y-1 text-sm">
                            <a href="#">Home Loan Calculator</a><br />
                            <a href="#">Area Unit Converter</a><br />
                            <a href="#">Land Record Pages</a><br />
                            <a href="#">Construction Cost Calculator</a>
                        </div>
                    )}
                    {moreOpen && (
                        <div className="mt-2 space-y-1 text-sm">
                            <a href="#">Area Guides</a><br />
                            <a href="#">Blog</a><br />
                            <a href="#">Maps</a><br />
                            <a href="#">Forum</a><br />
                            <a href="#">Index</a><br />
                            <a href="#">Trends</a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Page;
