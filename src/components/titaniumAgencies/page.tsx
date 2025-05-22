'use client'
import { FC, useRef } from "react";
import {
    MapPinIcon,
    ArrowUpRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface Agency {
    id: string;
    name: string;
    logoSrc: string; // URL or import to the agency logo
    location: string;
}

const agencies: Agency[] = [
    {
        id: "baqar",
        name: "Baqar Enterprises",
        logoSrc: "/Baqar.jpg",
        location: "Islamabad",
    },
    {
        id: "fakhar",
        name: "Fakhar Associates",
        logoSrc: "/fakhar.jpg",
        location: "Islamabad"
    },
    {
        id: "saRealEstate",
        name: "SA Real Estate",
        logoSrc: "/SA.jpg",
        location: "Islamabad",
    },
    {
        id: "afAssociates",
        name: "AF Associates",
        logoSrc: "/AF.jpg",
        location: "Islamabad",
    },
    {
        id: "alRehman",
        name: "Al Rehman Marketing",
        logoSrc: "/AlRehman.jpg",
        location: "Islamabad",
    },
    {
        id: "haider",
        name: "Haider Associates & Builders",
        logoSrc: "/Haider.jpg",
        location: "Islamabad",
    },
    {
        id: "atif",
        name: "Atif & Associates",
        logoSrc: "/Atif.jpg",
        location: "Islamabad",
    },
    {
        id: "baigAssociates",
        name: "Baig Associates",
        logoSrc: "/Baig.jpg",
        location: "Islamabad",
    },
  // …add more agencies as needed
];

const TitaniumAgencies: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current) {
        containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
        containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <section className="relative px-6 py-8 max-w-7xl">
            <h2 className="text-2xl font-semibold mb-6">Titanium Agencies</h2>

            {/* Left scroll button */}
            <button
                onClick={scrollLeft}
                className="hidden md:flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 z-10"
            >
                <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
            </button>

            {/* Horizontal list container */}
            <div
                ref={containerRef}
                className="grid grid-cols-4 gap-6 pb-2"
            >
                {agencies.map((agency) => (
                <div key={agency.id} className="group flex items-center w-72 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                >
                    {/* Logo + hover border */}
                    <div className="p-4 flex justify-center">
                        <div className="w-24 h-24  border border-gray-200 rounded-lg group-hover:border-blue-500  flex items-center justify-center overflow-hidden transition-colors duration-200">
                            <Image src={agency.logoSrc} alt={agency.name} width={50} height={30} className="max-h-full max-w-full w-full"/>
                        </div>
                    </div>

                    <div className="">
                        {/* Agency name */}
                        <h3 className="text-base font-medium text-gray-800">
                            {agency.name}
                        </h3>

                        {/* Location (shown by default, hidden on hover) */}
                        <div className="flex items-center text-sm text-gray-500 group-hover:hidden">
                            <MapPinIcon className="h-4 w-4 text-green-500 mr-1" />
                            <span>{agency.location}</span>
                        </div>

                        {/* “View Agency Properties ↗” (hidden by default, shown on hover) */}
                        <div className="hidden group-hover:flex items-center text-xs text-blue-600 mt-1">
                            <span className="flex">View Agency Properties <ArrowUpRightIcon className="h-3 w-3 ms-1" /></span>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Right scroll button */}
            <button
                onClick={scrollRight}
                className="hidden md:flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 z-10"
            >
                <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            </button>
        </section>
    );
};

export default TitaniumAgencies;
