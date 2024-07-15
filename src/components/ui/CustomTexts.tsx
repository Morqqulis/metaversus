'use client'

import { textContainer, textVariant2 } from '@utils/motion'
import { motion } from 'framer-motion'

export const TypingText = ({ title, textStyles }: { title: string; textStyles?: string }) => {
  return (
    <motion.p
      className={`text-[14px] font-normal text-secondary-white ${textStyles}`}
      variants={textContainer}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: false, amount: 0.25 }}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  )
}

export const TitleText = ({ title, textStyles }: { title: string | any; textStyles?: string }) => {
  return (
    <motion.h2
      className={`mt-[8px] text-[40px] font-bold text-white md:text-[64px] ${textStyles}`}
      variants={textVariant2}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: false, amount: 0.25 }}
    >
      {title}
    </motion.h2>
  )
}
