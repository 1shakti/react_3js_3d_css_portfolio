import React from "react";
import { motion } from "framer-motion" 
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";

const SectionWrapper = (Component, IdName) => 
function HOC(){
    return(
        <motion.section 
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ amount:0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={IdName} ></span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper