'use client'
import { fadeIn } from '@utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface IInsightCard {
  imgUrl: string
  title: string
  subtitle: string
  index: number
}

const InsightCard: React.FC<IInsightCard> = ({ imgUrl, title, subtitle, index }: IInsightCard): JSX.Element => {
  return (
    <motion.div className={`flex flex-col gap-4 md:flex-row`} variants={fadeIn('up', 'spring', index * 0.5, 1)}>
      <Image
        className={`h-[250px] w-full rounded-[32px] object-cover md:w-[270px]`}
        src={imgUrl}
        alt={title}
        width={270}
        height={250}
      />
      <div className={`flex w-full items-center justify-between`}>
        <div className={`flex max-w-[650px] flex-1 flex-col md:ml-[62px]`}>
          <h4 className={`text-[26px] font-normal text-white lg:text-[42px]`}>{title}</h4>
          <p className={`mt-[16px] text-[14px] font-normal text-secondary-white lg:text-[20px]`}>{subtitle}</p>
        </div>
        <div
          className={`hidden h-[100px] w-[100px] items-center justify-center rounded-full border-[1px] border-white bg-transparent lg:flex`}
        >
          <Image className={`h-[40%] w-[40%] object-contain`} src={'/arrow.svg'} alt={'arrow'} width={30} height={25} />
        </div>
      </div>
    </motion.div>
  )
}

export default InsightCard
