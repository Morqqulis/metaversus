'use client'
import { TitleText, TypingText } from '@components/ui/CustomTexts'
import ExploreCard from '@components/ui/ExploreCard'
import { staggerContainer } from '@utils/motion'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { exploreWorlds } from '../../constants'

interface IExplore {}

const Explore: React.FC = (): JSX.Element => {
  const [active, setActive] = useState('world-2')

  return (
    <section className={`xs:p-8 px-6 py-12 sm:p-16`} id={'explore'}>
      <div className="container">
        <motion.div
          className={`mx-auto flex w-full flex-col 2xl:max-w-[1280px]`}
          variants={staggerContainer(0.4, 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.25 }}
        >
          <TypingText title="| The World" textStyles="text-center" />
          <TitleText
            title={
              <>
                Choose the world you want <br className={`hidden md:block`} /> to explore
              </>
            }
            textStyles={'text-center'}
          />
          <div className={`mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row`}>
            {exploreWorlds.map((item, index) => (
              <ExploreCard key={item.id} {...item} index={index} active={active} handleClick={setActive} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Explore
