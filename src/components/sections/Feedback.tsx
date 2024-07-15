'use client'

import { fadeIn, staggerContainer, zoomIn } from '@utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface IFeedback {}

const Feedback: React.FC = (): JSX.Element => {
  return (
    <section className={`xs:p-8 px-6 py-12 sm:p-16`}>
      <div className="container">
        <motion.div
          className={`mx-auto flex w-full flex-col gap-6 lg:flex-row 2xl:max-w-[1280px]`}
          variants={staggerContainer(0.2, 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            className={`gradient-05 relative flex flex-[0.5] flex-col justify-end rounded-[32px] border-[1px] border-[#6a6a6a] p-4 sm:p-8 lg:max-w-[370px]`}
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <div className={`feedback-gradient`} />
            <div className={``}>
              <h4 className={`text-[26px] font-bold leading-[36px] text-white sm:text-[32px] sm:leading-[40px]`}>
                Samantha
              </h4>
              <p
                className={`mt-[8px] text-[12px] font-normal leading-[16px] text-white sm:text-[18px] sm:leading-[22px]`}
              >
                Founder | Metaversus
              </p>
            </div>
            <p
              className={`mt-[24px] text-[18px] font-normal leading-[39px] text-white sm:text-[24px] sm:leading-[45px]`}
            >
              “With the development of today's technology, metaverse is very useful for today's work, or can be called
              web 3.0. by using metaverse you can use it as anything”
            </p>
          </motion.div>

          <motion.div
            className={`relative flex flex-1 items-center justify-center`}
            variants={fadeIn('left', 'tween', 0.2, 1)}
          >
            <Image
              className={`h-auto min-h-[210px] w-full rounded-[40px] object-cover lg:h-[610px]`}
              src={'/planet-09.png'}
              alt={'planet'}
              width={4908}
              height={2259}
            />
            <motion.div className={`absolute -left-[10%] top-[3%] hidden lg:block`} variants={zoomIn(0.4, 1)}>
              <Image
                className={`h-[155px object-contain] w-[155px]`}
                src={'/stamp.png'}
                alt={'stamp'}
                width={495}
                height={497}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Feedback
