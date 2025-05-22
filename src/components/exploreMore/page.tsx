// components/ExploreMore.tsx

import { FC } from "react";
import {
    BuildingOffice2Icon,
    HomeIcon,
    CalculatorIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    ChartBarIcon,
    ArrowsRightLeftIcon,
    ArrowTrendingUpIcon
} from "@heroicons/react/24/solid";

interface ExploreItem {
    id: string;
    title: string;
    subtitle: string;
    Icon: FC<React.SVGProps<SVGSVGElement>>;
    // these Tailwind classes control the “base” background & icon color,
    // plus what happens on hover
    bgClass: string;            // the very light background behind the icon
    iconClass: string;          // default icon color   
    borderHoverClass: string;   // border color on hover
    titleHoverClass: string;    // title text color on hover
}

const exploreItems: ExploreItem[] = [
    {
        id: "newProjects",
        title: "New Projects",
        subtitle: "The best investment opportunities",
        Icon: BuildingOffice2Icon,
        bgClass: "bg-yellow-50",
        iconClass: "text-yellow-400",
        borderHoverClass: "group-hover:border-yellow-500",
        titleHoverClass: "group-hover:text-yellow-500",
    },
    {
        id: "constructionCalc",
        title: "Construction Cost Calculator",
        subtitle: "Get construction cost estimate",
        Icon: HomeIcon,
        bgClass: "bg-blue-50",
        iconClass: "text-blue-400",
        borderHoverClass: "group-hover:border-blue-500",
        titleHoverClass: "group-hover:text-blue-500",
    },
    {
        id: "homeLoanCalc",
        title: "Home Loan Calculator",
        subtitle: "Find affordable loan packages",
        Icon: CalculatorIcon,
        bgClass: "bg-green-50",
        iconClass: "text-green-400",
        borderHoverClass: "group-hover:border-green-500",
        titleHoverClass: "group-hover:text-green-500",
    },
    {
        id: "areaGuides",
        title: "Area Guides",
        subtitle: "Explore housing societies in Pakistan",
        Icon: MagnifyingGlassIcon,
        bgClass: "bg-pink-50",
        iconClass: "text-pink-400",
        borderHoverClass: "group-hover:border-pink-500",
        titleHoverClass: "group-hover:text-pink-500",
    },
    {
        id: "plotFinder",
        title: "Plot Finder",
        subtitle: "Find plots in any housing society",
        Icon: MapPinIcon,
        bgClass: "bg-emerald-50",
        iconClass: "text-emerald-400",
        borderHoverClass: "group-hover:border-emerald-500",
        titleHoverClass: "group-hover:text-emerald-500",
    },
    {
        id: "propertyIndex",
        title: "Property Index",
        subtitle: "Track changes in real estate prices",
        Icon: ChartBarIcon,
        bgClass: "bg-indigo-50",
        iconClass: "text-indigo-400",
        borderHoverClass: "group-hover:border-indigo-500",
        titleHoverClass: "group-hover:text-indigo-500",
    },
    {
        id: "areaUnitConverter",
        title: "Area Unit Converter",
        subtitle: "Convert any area unit instantly",
        Icon: ArrowsRightLeftIcon,
        bgClass: "bg-teal-50",
        iconClass: "text-teal-400",
        borderHoverClass: "group-hover:border-teal-500",
        titleHoverClass: "group-hover:text-teal-500",
    },
    {
        id: "propertyTrends",
        title: "Property Trends",
        subtitle: "Find popular areas to buy property",
        Icon: ArrowTrendingUpIcon,
        bgClass: "bg-purple-50",
        iconClass: "text-purple-400",
        borderHoverClass: "group-hover:border-purple-500",
        titleHoverClass: "group-hover:text-purple-500",
    },
];

const ExploreMore: FC = () => {
    return (
        <section className="px-6 py-8 max-w-7xl">
        <h2 className="text-2xl font-semibold">Explore more on Zameen</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {exploreItems.map((item) => (
            <div
                key={item.id}
                className="group flex items-center space-x-4 p-4 rounded-lg cursor-pointer"
            >
                {/* Icon container */}
                <div
                className={`
                    ${item.bgClass} rounded-lg p-3 border border-transparent 
                    ${item.borderHoverClass} 
                    flex-shrink-0
                `}
                >
                <item.Icon
                    className={`h-12 w-12 ${item.iconClass}`}
                />
                </div>

                {/* Text */}
                <div>
                <h4
                    className={`
                    text-lg font-semibold text-gray-900 
                    ${item.titleHoverClass}
                    `}
                >
                    {item.title}
                </h4>
                <p className="text-base text-gray-500">{item.subtitle}</p>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default ExploreMore;
