'use client'
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
import FilterDropdown from "../filterDropdown/page";


export default function PropertySearch() {
    const [open, setOpen] = useState(false);
    const [moreOptions, setMoreOptions] = useState(false); 
    const [selectedCity, setSelectedCity] = useState("Islamabad");
    const [selectedCategory, setSelectedCategory] = useState("Homes");
    const [selectedSubOption, setSelectedSubOption] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showBedsDropdown, setShowBedsDropdown] = useState(false);
    const [selectedBeds, setSelectedBeds] = useState("All");
    const cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta", "Multan"];
    const priceOptions = ["0", "500,000", "1,000,000", "2,000,000", "3,500,000", "5,000,000", "10,000,000"];
    const areaOptions = ["0", "2", "3", "5", "8", "10", "15", "20", "40", "60", "120"];
    const handleSelect = (city:any) => {
        setSelectedCity(city);
        setOpen(false);
    };

    const handleSubOptionClick = (option:any) => {
        setSelectedSubOption(option);
        setSelectedCategory(option); 
        setShowDropdown(false);      
    };

    const handleReset = () => {
        setSelectedCategory("Homes");
        setSelectedSubOption("");
    };
    return (
        <div
        className="w-full h-[517px] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
            backgroundImage:`url('/banner.jpg')`,
        }}
        >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Search properties for sale in Pakistan
        </h1>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
            <button className="bg-white text-black px-6 py-2 font-medium text-sm border border-gray-200 focus:outline-none">
            BUY
            </button>
            <button className="bg-[#4e4e4e69] border border-white px-6 py-2 font-medium text-sm">
            RENT
            </button>
            <button className="bg-[#4e4e4e69] border border-white px-6 py-2 font-medium text-sm">
            PROJECTS
            </button>
        </div>

        {/* Search Box */}
        <div className="bg-black px-4 py-5 rounded-sm flex flex-col w-full max-w-[850px] mx-auto text-white">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row space-x-6 w-full">
                {/* City Dropdown */}
                <div className="bg-white text-black w-1/4 text-sm px-4 relative rounded ">
                    <span className="block text-[10px] text-gray-500 font-semibold pt-1">CITY</span>
                    <div className="relative">
                        <div
                        className="flex justify-between items-center font-medium py-1 cursor-pointer text-gray-700"
                        onClick={() => setOpen(!open)}
                        >
                        {selectedCity}
                        <ChevronDownIcon
                            className={`w-4 h-4 ml-1 transition-transform ${
                            open ? "rotate-180" : ""
                            }`}
                        />
                        </div>
                        {open && (
                        <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded shadow-lg w-40">
                            {cities.map((city) => (
                            <div
                                key={city}
                                onClick={() => handleSelect(city)}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-green-100 cursor-pointer"
                            >
                                {city}
                            </div>
                            ))}
                        </div>
                        )}
                    </div>
                </div>

                {/* Location Input */}
                <div className="bg-white px-5 py-0.5 rounded text-black text-sm w-2/4">
                    <p className="text-[10px] text-gray-500 font-semibold pt-1">LOCATION</p>
                    <input
                        className="w-full px-2 py-1 outline-none bg-transparent font-medium"
                    />
                </div>

                {/* Find Button */}
                <button className="bg-green-600 text-white w-1/4 md:w-1/4 px-6 py-3 cursor-pointer rounded font-medium text-sm">
                    FIND
                </button>
            </div>

            {/* More Options Section */}
            <Transition
                show={moreOptions}
                enter="transition ease-in-out duration-500"
                enterFrom="opacity-0 -translate-y-6"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-400"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-6"
            >
                <div className="mt-4 flex flex-col md:flex-row space-x-5 text-sm">
                    {/* Property Type */}
                    <div className="bg-white text-black px-4 py-1 rounded relative w-72 text-xs font-sans">
                        <p className="text-[10px] text-gray-500 pb-1 font-semibold">PROPERTY TYPE</p>

                        {/* Dropdown Header */}
                        <div
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="flex justify-between items-center cursor-pointer"
                        >
                            <span className="text-sm font-medium text-gray-900">
                            {selectedSubOption || selectedCategory}
                            </span>
                            <ChevronDownIcon
                            className={`w-4 h-4 text-gray-700 transition-transform ${showDropdown ? "rotate-180" : ""}`}
                            />
                        </div>

                        {/* Dropdown Content */}
                        {showDropdown && (
                            <div className="absolute z-20 left-0 mt-2 w-full max-w-md p-2 bg-white rounded-md shadow-lg border border-gray-300 text-xs">
                            {/* Category Tabs */}
                            <ul className="flex justify-around mb-3">
                                {["Homes", "Plots", "Commercial"].map((category) => (
                                <li
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`pb-1 cursor-pointer text-xs ${
                                    selectedCategory === category && !selectedSubOption
                                        ? "border-b-2 border-black text-black font-semibold"
                                        : "text-gray-500 hover:text-black"
                                    }`}
                                >
                                    {category}
                                </li>
                                ))}
                            </ul>

                            {/* Sub-Options */}
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                {[ "House", "Upper Portion", "Farm House", "Penthouse", "Flat", "Lower Portion", "Room",
                                ].map((option) => (
                                <li
                                    key={option}
                                    onClick={() => handleSubOptionClick(option)}
                                    className={`list-none text-center rounded cursor-pointer p-1 text-xs select-none ${
                                    selectedSubOption === option
                                        ? "bg-green-600 text-white font-semibold"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                                >
                                    {option}
                                </li>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end space-x-2">
                                <button
                                onClick={handleReset}
                                className="text-xs px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                                >
                                Reset
                                </button>
                                <button
                                onClick={() => setShowDropdown(false)}
                                className="text-xs px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
                                >
                                Close
                                </button>
                            </div>
                        </div>
                    )}
                    </div>


                    <FilterDropdown
                        title="PRICE"
                        unitLabel="PKR"
                        unitNote="Change currency (PKR)"
                        minValue="0"
                        maxValue="Any"
                        options={priceOptions}
                    />

                    <FilterDropdown
                        title="AREA"
                        unitLabel="MARLA"
                        unitNote="Change area unit (Marla)"
                        minValue="0"
                        maxValue="Any"
                        options={areaOptions}
                    />
                    

                    {/* Beds Dropdown */}
                    <div className="bg-white text-black px-4 py-1 rounded relative w-72 text-xs font-sans">
                        <p className="text-[9px] text-gray-500 pb-1 font-semibold">BEDS</p>

                        {/* Dropdown Header */}
                        <div
                            onClick={() => setShowBedsDropdown(!showBedsDropdown)}
                            className="flex justify-between items-center cursor-pointer"
                        >
                            <span className="text-sm font-medium text-gray-900">
                                {selectedBeds || "Select Beds"}
                            </span>
                            <ChevronDownIcon
                                className={`w-4 h-4 text-gray-700 transition-transform ${showBedsDropdown ? "rotate-180" : ""}`}
                            />
                        </div>

                        {/* Dropdown Content */}
                        {showBedsDropdown && (
                            <div className="absolute z-20 left-0 mt-2 w-full h-60 max-w-md px-4 py-2 bg-white rounded-md shadow-lg border border-gray-300 text-xs overflow-y-scroll">
                                {/* Single Column List */}
                                <div className="flex flex-col mb-4">
                                    {["All", "Studio", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((bed, index) => (
                                        <div
                                            key={bed}
                                            onClick={() => {
                                                setSelectedBeds(bed);
                                                setShowBedsDropdown(false);
                                            }}
                                            className={`text-xs p-1 text-center cursor-pointer select-none border-gray-300 border ${
                                                selectedBeds === bed
                                                    ? "bg-blue-500 text-white font-semibold"
                                                    : index === 0
                                                        ? "bg-gray-200 hover:bg-gray-100 text-gray-700 font-semibold"
                                                        : "bg-white hover:bg-gray-100"
                                            }`}
                                        >
                                            {bed}
                                        </div>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end space-x-2">
                                    <button
                                        onClick={() => { setShowBedsDropdown(false); setSelectedBeds("All"); }}
                                        className="text-xs px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        onClick={() => setShowBedsDropdown(false)}
                                        className="text-xs px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Transition>
            <div className="flex flex-wrap items-center mt-4 text-xs space-x-3 text-gray-300">
                <span
                className="flex items-center cursor-pointer"
                onClick={() => setMoreOptions(!moreOptions)}
                >
                <ChevronDownIcon className="w-3 h-3 mr-1" />
                {moreOptions ? "Less Options" : "More Options"}
                </span>
                <span className="cursor-pointer text-blue-300">Change Currency</span>
                <span className="cursor-pointer text-blue-300">Change Area Unit</span>
                <span className="cursor-pointer text-blue-300">Reset Search</span>
            </div>
            </div>
        </div>
    );
}
