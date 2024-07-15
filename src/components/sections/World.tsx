'use client'
import { TitleText, TypingText } from '@components/ui/CustomTexts'
import { fadeIn, staggerContainer } from '@utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

const gr = 'linear-gradient(180.00deg_rgba(0_0_0_0)_rgba(0,0,0,0.25)_100%)'

interface IWorld {}

const World: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className="container">
        <motion.div
          className={`xs:p-8 mx-auto flex flex-col px-6 py-12 sm:p-16`}
          variants={staggerContainer(0.2, 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.25 }}
        >
          <TypingText title={'| People on the World'} textStyles={'text-center'} />
          <TitleText
            title={<>Track friends around you and invite them to play together in the same world</>}
            textStyles={'text-center'}
          />
          <motion.div className={`relative mt-[68px] flex h-[550px] w-full`} variants={fadeIn('up', 'tween', 0.3, 1)}>
            <Image className={`h-full w-full object-cover`} src={'/map.png'} alt={'map'} width={3510} height={1578} />
            <div className={`absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]`}>
              <Image className={`h-full w-full`} src={'/people-01.png'} alt={'people'} width={122} height={122} />
            </div>

            <div className={`absolute left-20 top-10 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]`}>
              <Image className={`h-full w-full`} src={'/people-02.png'} alt={'people'} width={122} height={122} />
            </div>

            <div className={`absolute left-[45%] top-1/2 h-[70px] w-[70px] rounded-full bg-[#5d6680]`}>
              <Image className={`h-full w-full`} src={'/people-03.png'} alt={'people'} width={122} height={122} />
            </div>

            <div
              className={`absolute left-[15%] top-1/2 z-10 hidden h-[167px] w-full max-w-[217px] -translate-y-1/2 rounded-[24px] border-[9px] border-[rgba(255,255,255,0.1)] sm:block`}
            >
              <div
                className={`absolute z-[1] h-full w-full rounded-[24px] bg-cover bg-[100%_100%] backdrop-blur-3xl`}
                style={{
                  backgroundImage:
                    "url('/planet-02.png'),linear-gradient(180.00deg, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.25) 100%)",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              <div className={`absolute bottom-1/2 left-[10%] z-[3] flex items-center gap-1`}>
                <div className={`flex items-center`}>
                  {[1, 2, 3].map((img) => (
                    <Image
                      key={img}
                      className={`h-6 w-6 rounded-full first:z-[4] last:z-[2] last:-translate-x-5 even:z-[3] even:-translate-x-2.5`}
                      src={`/people-0${img}.png`}
                      alt={`human avatar`}
                      width={217}
                      height={167}
                      priority
                    />
                  ))}
                </div>
                <p className={`-translate-x-5 whitespace-nowrap text-xs text-white`}>+ 264 has joined</p>
              </div>
              <h4 className={`absolute bottom-[15%] left-[10%] z-[2] whitespace-nowrap text-lg font-bold text-white`}>
                The Upside Down
              </h4>
            </div>

            <div
              className={`absolute right-[20%] top-[5%] z-10 hidden h-[167px] w-[217px] rounded-[24px] border-[9px] border-[rgba(255,255,255,0.1)] sm:block`}
            >
              <div
                className={`absolute z-[1] h-full w-full rounded-[24px] backdrop-blur-3xl`}
                style={{
                  backgroundImage: `url('/card-planet.jpg'),linear-gradient(180.00deg, rgb(5, 119, 110),rgb(9, 89, 126) 100%)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div className={`absolute bottom-1/2 left-[10%] z-[3] flex items-center gap-1`}>
                <div className={`flex items-center`}>
                  {[1, 2, 3].map((img) => (
                    <Image
                      key={img}
                      className={`h-6 w-6 rounded-full first:z-[4] last:z-[2] last:-translate-x-5 even:z-[3] even:-translate-x-2.5`}
                      src={`/people-0${img}.png`}
                      alt={`human avatar`}
                      width={217}
                      height={167}
                      priority
                    />
                  ))}
                </div>
                <p className={`-translate-x-5 whitespace-nowrap text-xs text-white`}>+ 264 has joined</p>
              </div>
              <h4 className={`absolute bottom-[15%] left-[10%] z-[2] whitespace-nowrap text-lg font-bold text-white`}>
                Hawkins Labs
              </h4>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default World
