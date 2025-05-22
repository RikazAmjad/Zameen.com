import React from 'react'
import Header from '@/components/header/page'
import Navabr from '@/components/navbar/page'
import Banner from '@/components/banner/page'
import BrowseProperties from '@/components/browseProperties/page'
import ExploreMore from '@/components/exploreMore/page'
import TitaniumAgencies from '@/components/titaniumAgencies/page'
const page = () => {
    return (
        <div>
            {/* header */}
            <Header/>
            {/* navbar */}
            <Navabr/>
            {/* banner */}
            <Banner/>
            <div className='w-full mt-10 flex flex-col items-center justify-center'>
                {/* Browse Properties */}
                <BrowseProperties/>
                {/* tools / more on zameen.com */}
                <ExploreMore/>
                {/* Titanium Agencies */}
                <TitaniumAgencies/>
                {/* Zameen Projects */}
                {/* Zameen Community */}
                {/* Popular Locations */}
                {/* App promo */}
            </div>
            
            {/* Footer */}
        </div>
    )
}

export default page
