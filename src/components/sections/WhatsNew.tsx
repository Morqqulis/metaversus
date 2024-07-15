'use client'
import { TitleText, TypingText } from '@components/ui/CustomTexts'
import NewFeatures from '@components/ui/NewFeatures'
import { fadeIn, planetVariants, staggerContainer } from '@utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { newFeatures } from '../../constants'
interface IWhatsNew {}

const WhatsNew: React.FC = (): JSX.Element => {
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
          <motion.div
            className={`flex flex-[0.75] flex-col justify-center`}
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <TypingText title={"| What's New?"} />
            <TitleText title={'What’s new about Metaversus?'} />
            <div className={`mt-[48px] flex flex-wrap justify-between gap-[24px]`}>
              {newFeatures.map((feature) => (
                <NewFeatures key={feature.title} {...feature} />
              ))}
            </div>
          </motion.div>
          <motion.div className={`flex flex-1 items-center justify-center`} variants={planetVariants('right')}>
            <Image
              className={`h-[90%] w-[90%] object-contain`}
              src={'/whats-new.png'}
              alt={'whats-new'}
              width={1403}
              height={1535}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatsNew
