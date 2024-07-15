'use client'

import { fadeIn } from '@utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface IExploreCard {
  id: string
  imgUrl: string
  title: string
  index: number
  active: string
  handleClick: any
}

const ExploreCard: React.FC<IExploreCard> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick
}: IExploreCard): JSX.Element => {
  return (
    <motion.div
      className={`relative ${active === id ? 'flex-[10] lg:flex-[3.5]' : 'flex-[2] lg:flex-[0.5]'} flex h-[700px] min-w-[170px] cursor-pointer items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex`}
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      onClick={() => handleClick(id)}
    >
      <Image
        className={`absolute h-full w-full rounded-[24px] object-cover`}
        src={imgUrl}
        alt={title}
        width={1920}
        height={1080}
        priority={active == id}
      />
      {active !== id ? (
        <h3
          className={`absolute z-0 text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]`}
        >
          {title}
        </h3>
      ) : (
        <div
          className={`absolute bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0_0_0_0.5)] p-8`}
        >
          <div className={`glassmorphism mb-[16px] flex h-[60px] w-[60px] items-center justify-center rounded-[24px]`}>
            <Image
              className={`h-1/2 w-1/2 object-contain`}
              src={'/headset.svg'}
              alt={'headset'}
              width={40}
              height={40}
            />
          </div>
          <p className={`text-[16px] font-normal uppercase leading-[20px] text-white`}>Enter the Metaverse</p>
          <h3 className={`mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]`}>{title}</h3>
        </div>
      )}
    </motion.div>
  )
}

export default ExploreCard
