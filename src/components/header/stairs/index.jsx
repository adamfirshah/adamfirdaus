import React from 'react';
import styles from './style.module.scss';
import { height, background, mountAnim } from '../anim';
import { motion } from 'framer-motion';

export default function Stairs() {
    return (
        <motion.div className={styles.stairs}>
            {[...Array(5)].map((_, index) => {
                return (
                    <motion.div
                        key={index}  // Added key prop
                        variants={height}
                        {...mountAnim}
                        custom={4 - index}
                        className={styles.stair}
                    />
                );
            })}
            <motion.div
                variants={background}
                {...mountAnim}
                className={styles.background}
            />
        </motion.div>
    );
}
