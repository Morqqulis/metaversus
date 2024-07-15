'use client'
import { navVariants } from '@utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
interface INavbar {}

const Navbar: React.FC = (): JSX.Element => {
  return (
    <motion.nav
      className={`relative px-6 py-8 sm:px-16`}
      variants={navVariants}
      initial={'hidden'}
      whileInView={'show'}
    >
      <div className="gradient-01 absolute inset-0 w-[50%]"></div>
      <div className={`mx-auto flex w-full items-center justify-between gap-8 2xl:max-w-[1280px]`}>
        <Image
          className={`h-[24px] w-[24px] object-contain`}
          src={'/search.svg'}
          alt={'Search'}
          width={24}
          height={24}
        />
        <Link className={`text-2xl font-extrabold text-white`} href={'/'}>
          METAVERSUS
        </Link>
        <button className={``} type={'button'} aria-label={'menu button'}>
          <Image className={`h-6 w-6 object-contain`} src={'/menu.svg'} alt={'menu icon'} width={24} height={24} />
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
