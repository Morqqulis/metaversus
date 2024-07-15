'use client'

import { TitleText, TypingText } from '@components/ui/CustomTexts'
import InsightCard from '@components/ui/InsightCard'
import { staggerContainer } from '@utils/motion'
import { motion } from 'framer-motion'
import { insights } from '../../constants'

interface IInsights {}

const Insights: React.FC = (): JSX.Element => {
  return (
    <section className={`xs:p-8 px-6 py-12 sm:p-16`}>
      <div className="container">
        <motion.div
          className={`mx-auto flex w-full flex-col 2xl:max-w-[1280px]`}
          variants={staggerContainer(0.2, 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.25 }}
        >
          <TypingText title={'| Insights'} textStyles={'text-center'} />
          <TitleText title={'Insights about metaverse'} textStyles={'text-center'} />
          <div className={`mt-[50px] flex flex-col gap-[30px]`}>
            {insights.map((item, index) => (
              <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Insights
