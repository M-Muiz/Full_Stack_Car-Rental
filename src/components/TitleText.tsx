import React from 'react'
import { motion } from "framer-motion"
import { textVariant2 } from "@/utils/motion"
const TitleText = ({ title, textStyles }: any) => {
    return (
        <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className={`mt-2 text-main-color md:text-[64px] text-[32px] font-bold text-center ${textStyles}`}
        >
            {title}
        </motion.h2>
    )
}

export default TitleText
