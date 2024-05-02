import styles from '@/utils/styles'
import React from 'react'
import TitleText from './TitleText'
import { exploreWorlds } from '@/utils/data'
import ExploreCard from './ExploreCard'

const Explore = () => {
    return (
        <section className='px-6 py-10'>
            <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <TitleText title={
                    <span className='text-gray-900'>Why <span className='text-main-color'>Ride</span> With <span className='text-main-color'>Us</span> ?</span>
                } />
                <div className="my-9 flex flex-col lg:flex-row min-h-[50vh] gap-8 lg:max-32">
                    {exploreWorlds?.map((item, index)  => (
                        <ExploreCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Explore

