'use client'
import { FC, useState } from "react";
import {
    HomeIcon,
    MapPinIcon,
    BuildingOffice2Icon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";

interface Item {
    title: string;
    subtitle: string;
}

interface Category {
    id: string;
    title: string;
    icon: FC<React.SVGProps<SVGSVGElement>>;
    popularItems: Item[];
    typeItems: Item[];
    areaItems: Item[];
}

const categories: Category[] = [
    {
        id: "homes",
        title: "Homes",
        icon: HomeIcon,
        popularItems: [
        { title: "5 Marla", subtitle: "Houses" },
        { title: "10 Marla", subtitle: "Houses" },
        { title: "3 Marla", subtitle: "Houses" },
        { title: "New", subtitle: "Houses" },
        { title: "Low Price", subtitle: "All Homes" },
        { title: "Small", subtitle: "Houses" },
        ],
        typeItems: [
        { title: "Houses", subtitle: "Homes" },
        { title: "Flats", subtitle: "Homes" },
        { title: "Upper Portion", subtitle: "Homes" },
        { title: "Lower Portion", subtitle: "Homes" },
        { title: "Farmhouse", subtitle: "Homes" },
        { title: "Penthouse", subtitle: "Homes" },
        { title: "Room", subtitle: "Homes" },
        ],
        areaItems: [
        { title: "5 Marla", subtitle: "Homes" },
        { title: "3 Marla", subtitle: "Homes" },
        { title: "7 Marla", subtitle: "Homes" },
        { title: "8 Marla", subtitle: "Homes" },
        { title: "10 Marla", subtitle: "Homes" },
        { title: "1 Kanal", subtitle: "Homes" },
        { title: "2 Kanal", subtitle: "Homes" },
        ],
    },
    {
        id: "plots",
        title: "Plots",
        icon: MapPinIcon,
        popularItems: [
        { title: "5 Marla", subtitle: "Residential Plots" },
        { title: "10 Marla", subtitle: "Residential Plots" },
        { title: "3 Marla", subtitle: "Residential Plots" },
        { title: "On Instalments", subtitle: "Residential Plots" },
        { title: "On Instalments", subtitle: "Residential Plots" },
        { title: "With Possession", subtitle: "Commercial Plots" },
        ],
        typeItems: [
        { title: "Residential Plot", subtitle: "Plots" },
        { title: "Commercial Plot", subtitle: "Plots" },
        { title: "Plot File", subtitle: "Plots" },
        { title: "Plot Form", subtitle: "Plots" },
        { title: "Agricultural Land", subtitle: "Plots" },
        { title: "Industrial Land", subtitle: "Plots" },
        ],
        areaItems: [
        { title: "2 Kanal", subtitle: "Plots" },
        { title: "3 Marla", subtitle: "Plots" },
        { title: "5 Marla", subtitle: "Plots" },
        { title: "7 Marla", subtitle: "Plots" },
        { title: "8 Marla", subtitle: "Plots" },
        { title: "10 Marla", subtitle: "Plots" },
        { title: "1 Kanal", subtitle: "Plots" },
        { title: "2 Kanal", subtitle: "Plots" },
        ],
    },
    {
        id: "commercial",
        title: "Commercial",
        icon: BuildingOffice2Icon,
        popularItems: [
        { title: "Small", subtitle: "Offices" },
        { title: "New", subtitle: "Offices" },
        { title: "On Instalments", subtitle: "Shops" },
        { title: "Small", subtitle: "Shops" },
        { title: "New", subtitle: "Shops" },
        { title: "Running", subtitle: "Shops" },
        ],
        typeItems: [
        { title: "Office", subtitle: "Commercial" },
        { title: "Shop", subtitle: "Commercial" },
        { title: "Building", subtitle: "Commercial" },
        { title: "Warehouse", subtitle: "Commercial" },
        { title: "Factory", subtitle: "Commercial" },
        { title: "Others", subtitle: "Commercial" },
        ],
        areaItems: [
        { title: "Less than 100 sq ft", subtitle: "Commercial" },
        { title: "100-200 sq ft", subtitle: "Commercial" },
        { title: "200-300 sq ft", subtitle: "Commercial" },
        { title: "300-400 sq ft", subtitle: "Commercial" },
        { title: "400-500 sq ft", subtitle: "Commercial" },
        { title: "More than 500 sq ft", subtitle: "Commercial" },
        { title: "Less than 100 sq ft", subtitle: "Commercial" },
        ],
    },
    ];

    const BrowseProperties: FC = () => {
    return (
        <section className="px-6 py-8 max-w-7xl">
            <h2 className="text-2xl font-semibold mb-6">Browse Properties</h2>
            <div className="flex flex-col lg:flex-row gap-6">
                {categories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
                ))}
            </div>
        </section>
    );
    };

    interface CategoryCardProps {
    category: Category;
    }

    const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const tabs = ["Popular", "Type", "Area Size"];

    const items =
        activeTab === 0
        ? category.popularItems
        : activeTab === 1
        ? category.typeItems
        : category.areaItems;

    return (
        <div className="relative flex-1 border border-gray-200 rounded-xl p-6 bg-white w-96">
            {/* Icon & Title */}
            <div className="flex items-center mb-4">
                <category.icon className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-lg font-medium">{category.title}</h3>
            </div>
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-4">
                <ul className="flex space-x-8">
                    {tabs.map((tabName, idx) => (
                    <li
                        key={idx}
                        className={`pb-2 cursor-pointer ${
                        idx === activeTab
                            ? "border-b-2 border-green-500 text-green-600"
                            : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab(idx)}
                    >
                        {tabName}
                    </li>
                    ))}
                </ul>
            </div>
            {/* Items Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {items.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-2 text-center hover:shadow cursor-pointer"
                >
                    <p className=" text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.subtitle}</p>
                </div>
                ))}
            </div>
            {/* Left Arrow */}
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1 hover:shadow">
                <ChevronLeftIcon className="h-5 w-5 text-gray-400" />
            </button>
            {/* Right Arrow */}
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1 hover:shadow">
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
            </button>
            {/* Pagination Dots */}
            <div className="flex justify-center space-x-1">
                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
            </div>
        </div>
    );
};

export default BrowseProperties;
