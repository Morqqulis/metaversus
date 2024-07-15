'use client'
interface IFooter {}
import { footerVariants } from '@utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { socials } from '../../constants'
const Footer: React.FC = (): JSX.Element => {
  return (
    <motion.footer
      className={`xs:p-8 relative px-6 py-8 sm:p-16`}
      variants={footerVariants}
      initial={'hidden'}
      whileInView={'show'}
    >
      <div className={`footer-gradient`} />
      <div className={`mx-auto flex w-full flex-col gap-8 2xl:max-w-[1280px]`}>
        <div className={`flex flex-wrap items-center justify-between gap-5`}>
          <h4 className={`text-[44px] font-bold text-white md:text-[64px]`}>Enter the Metaverse</h4>
          <button
            className={`flex h-fit items-center gap-3 rounded-[32px] bg-[#25618b] px-6 py-4`}
            type={'button'}
            aria-label={'button'}
          >
            <Image
              className={`h-6 w-6 object-contain`}
              src={'/headset.svg'}
              alt={'headset'}
              width={24}
              height={18}
              style={{ height: 'auto', width: 'auto' }}
            />
            <span className={`text-base font-normal uppercase text-white`}>Enter Metaverse</span>
          </button>
        </div>
        <div className={`flex flex-col`}>
          <div className={`mb-[50px] h-[2px] bg-white opacity-10`} />
          <div className={`flex flex-wrap items-center justify-between gap-4`}>
            <Link
              className={`block text-[24px] font-extrabold uppercase text-white duration-300 hover:scale-110`}
              href={'/'}
            >
              Metaversus
            </Link>
            <p className={`text-sm font-normal text-white opacity-50`}>
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>
            <ul className={`flex items-center gap-5 sm:gap-[30px]`}>
              {socials.map((social) => (
                <li key={social.name}>
                  <Link
                    className={`block cursor-pointer duration-300 hover:scale-110`}
                    href={social.url}
                    target={'_blank'}
                  >
                    <Image
                      className={`h-6 w-6 object-contain`}
                      src={social.url}
                      alt={social.name}
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
