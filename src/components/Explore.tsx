import styles from '@/utils/styles'
import React from 'react'
import TitleText from './TitleText'

const Explore = () => {
    return (
        <section className='px-6 py-10'>
            <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <TitleText />
            </div>
        </section>
    )
}

export default Explore

