'use client'
import { TypingText } from '@components/ui/CustomTexts'
import { fadeIn, staggerContainer } from '@utils/motion'
import { motion } from 'framer-motion'

interface IAbout {}

const About: React.FC = (): JSX.Element => {
  return (
    <section className={`xs:p-8 relative z-10 px-6 py-12 sm:p-16`}>
      <div className="container">
        <div className={`gradient-02 z-0`} />
        <motion.div
          className={`mx-auto flex w-full flex-col items-center justify-center 2xl:max-w-[1280px]`}
          variants={staggerContainer(0.2, 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.25 }}
        >
          <TypingText title="| About Metaverse" textStyles="text-center" />
          <motion.p
            className={`mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px]`}
            variants={fadeIn('up', 'tween', 0.2, 1)}
          >
            <span className={`font-extrabold text-white`}>Metaverse</span> is a new thing in the future, where you can
            enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse
            world, because this is really the{' '}
            <span className={`font-extrabold text-white`}>madness of the metaverse</span> of today, using only{' '}
            <span className={`font-extrabold text-white`}>VR</span> devices you can easily explore the metaverse world
            you want, turn your dreams into reality. Let's <span className={`font-extrabold text-white`}>explore</span>{' '}
            the madness of the metaverse by scrolling down
          </motion.p>
          <motion.img
            className={`mt-[28px] h-[28px] w-[18px] object-contain`}
            variants={fadeIn('up', 'tween', 0.3, 1)}
            src={'/arrow-down.svg'}
            alt={'Arrow down'}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About
