'use client'
import { slideIn, staggerContainer, textVariant } from '@utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface IHero {}

const Hero: React.FC = (): JSX.Element => {
  return (
    <section className={`xs:p-8 px-6 py-12 pl-6 sm:p-16 sm:pl-16`}>
      <div className="container">
        <motion.div
          className={`mx-auto flex w-full flex-col 2xl:max-w-[1280px]`}
          variants={staggerContainer(0.2, 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className={`relative z-10 flex flex-col items-center justify-center`}>
            <motion.h1
              className={`text-[44px] font-bold uppercase leading-[64.4px] text-white sm:text-[60px] sm:leading-[74.4px] md:text-[100px] md:leading-[114.4px] lg:text-[144px] lg:leading-[158.4px]`}
              variants={textVariant(1.1)}
            >
              Metaverse
            </motion.h1>
            <motion.div className={`flex flex-row items-center justify-center`} variants={textVariant(1.2)}>
              <h2
                className={`text-[44px] font-bold uppercase leading-[64.4px] text-white sm:text-[60px] sm:leading-[74.4px] md:text-[100px] md:leading-[114.4px] lg:text-[144px] lg:leading-[158.4px]`}
              >
                Ma
              </h2>
              <div
                className={`mx-[6px] h-[38px] w-[60px] rounded-r-[50px] border-[9px] border-white sm:mx-2 sm:h-[48px] sm:w-[80px] md:h-[108px] md:w-[212px] md:border-[18px]`}
              />
              <h2
                className={`text-[44px] font-bold uppercase leading-[64.4px] text-white sm:text-[60px] sm:leading-[74.4px] md:text-[100px] md:leading-[114.4px] lg:text-[144px] lg:leading-[158.4px]`}
              >
                Ness
              </h2>
            </motion.div>
          </div>

          <motion.div className={`relative -mt-3 w-full md:-mt-5`} variants={slideIn('right', 'tween', 0.1, 1)}>
            <div className={`hero-gradient absolute -top-[30px] z-0 h-[130px] w-full rounded-tl-[140px]`} />
            <Image
              className={`relative z-10 h-[350px] w-full rounded-tl-[140px] sm:h-[500px]`}
              src={'/cover.webp'}
              alt={'cover'}
              width={1920}
              height={1080}
              style={{ width: 'auto', height: 'auto' }}
            />
            <Link href={'/#explore'}>
              <div className={`relative z-10 -mt-[50px] flex w-full justify-end pr-[40px] sm:-mt-[70px]`}>
                <Image
                  className={`h-[100px] w-[100px] object-contain sm:h-[155px] sm:w-[155px]`}
                  src={'/stamp.png'}
                  alt={'stamp'}
                  width={155}
                  height={155}
                />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
