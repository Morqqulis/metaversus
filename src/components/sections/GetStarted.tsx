'use client'
import { TitleText, TypingText } from '@components/ui/CustomTexts'
import StartSteps from '@components/ui/StartSteps'
import styles from '@styles/index'
import { fadeIn, planetVariants, staggerContainer } from '@utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { startingFeatures } from '../../constants'

interface IGetStarted {}

const GetStarted: React.FC = (): JSX.Element => {
  return (
    <section className={`xs:p-8 relative z-10 px-6 py-12 sm:p-16`}>
      <div className="container">
        <motion.div
          className={`mx-auto flex w-full flex-col gap-8 lg:flex-row 2xl:max-w-[1280px]`}
          variants={staggerContainer(0.2, 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div className={`flex-1 ${styles.flexCenter}`} variants={planetVariants('left')}>
            <Image
              className={`h-[90%] w-[90%] object-contain`}
              src={'/get-started.png'}
              alt={'get-started'}
              width={1403}
              height={1535}
            />
          </motion.div>
          <motion.div className={`flex flex-[0.75] flex-col justify-center`} variants={fadeIn('left', 'tween', 0.2, 1)}>
            <TypingText title={'| How Metaversus Works'} />
            <TitleText title={'Get started with just a few clicks'} />
            <div className={`mt-[31px] flex max-w-[370px] flex-col gap-[24px]`}>
              {startingFeatures.map((feature, index) => (
                <StartSteps key={feature} number={index + 1} text={feature} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GetStarted
