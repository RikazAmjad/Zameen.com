'use client'
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

    interface FilterDropdownProps {
        title: string;              
        unitLabel: string;           
        unitNote: string;           
        minValue: string;
        maxValue: string;
        options: string[];
    }

export default function FilterDropdown({
    title,
    unitLabel,
    unitNote,
    minValue,
    maxValue,
    options,
}: FilterDropdownProps) {
    const [open, setOpen] = useState(false);
    const [min, setMin] = useState('0');
    const [max, setMax] = useState('Any');
    const minOptions = options.includes("0") ? options : ["0", ...options];
    const maxOptions = options.includes("Any") ? options : ["Any", ...options];
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative w-72 font-sans text-xs text-gray-700">
        {/* Trigger */}
        <div
            onClick={() => setOpen(!open)}
            className="flex justify-between bg-white rounded-md shadow-md border border-gray-300 cursor-pointer"
        >
            <div className="flex-1 px-3 py-2 flex items-center justify-between">
            <div className='w-full'>
                <div className="text-[10px] font-semibold text-gray-500 leading-none">{title} ({unitLabel})</div>
                <div className='flex items-center justify-between' onClick={() => setShowDropdown(!showDropdown)}>
                    <div className="flex justify-around w-[80%] items-center gap-1 text-sm font-normal text-gray-900">
                        <span>{min}</span>
                        <span>to</span>
                        <span>{max}</span>
                    </div>
                    <ChevronDownIcon className={`w-4 h-4 text-gray-700 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
                </div>
            </div>
            </div>
        </div>

        {/* Dropdown */}
        {open && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-300 z-10">
                <div className="text-center font-semibold text-blue-600 text-sm py-2 border-b border-gray-200 select-none">
                    {unitNote}
                </div>
                <div className="flex justify-around pt-2 text-xs font-semibold text-gray-700">
                    <p className="text-left">MIN:</p>
                    <p className="text-right">MAX:</p>
                </div>
                <div className="flex gap-2 p-2">
                    <input type="text" value={min} onChange={(e) => setMin(e.target.value)} className="w-1/2 border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input type="text" value={max} onChange={(e) => setMax(e.target.value)} className="w-1/2 border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex gap-2 border-t border-gray-200 max-h-40 overflow-y-auto px-1 pb-3">
                    {/* MIN column starting with "0" if not already present */}
                    <ul className="w-1/2 border border-gray-300 rounded-md overflow-y-auto max-h-40">
                        {[...(options.includes("0") ? [] : ["0"]), ...options].map((opt) => (
                            <li
                                key={`min-${opt}`}
                                onClick={() => setMin(opt)}
                                className={`text-center py-1 text-xs cursor-pointer select-none ${
                                    min === opt ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-100'
                                }`}
                            >
                                {opt}
                            </li>
                        ))}
                    </ul>

                    {/* MAX column starting with "Any" if not already present */}
                    <ul className="w-1/2 border border-gray-300 rounded-md overflow-y-auto max-h-40">
                        {[...(options.includes("Any") ? [] : ["Any"]), ...options].map((opt) => (
                            <li
                                key={`max-${opt}`}
                                onClick={() => setMax(opt)}
                                className={`text-center py-1 text-xs cursor-pointer select-none ${
                                    max === opt ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-100'
                                }`}
                            >
                                {opt}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-end px-3 pb-2">
                    <button type="button" onClick={() => setOpen(false)} className="bg-gray-800 text-white text-xs rounded px-3 py-1 select-none hover:bg-gray-700">
                    Close
                    </button>
                </div>
            </div>
        )}
        </div>
    );
}
