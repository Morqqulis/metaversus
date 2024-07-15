import About from '@components/sections/About'
import Explore from '@components/sections/Explore'
import Feedback from '@components/sections/Feedback'
import GetStarted from '@components/sections/GetStarted'
import Hero from '@components/sections/Hero'
import Insights from '@components/sections/Insights'
import WhatsNew from '@components/sections/WhatsNew'
import World from '@components/sections/World'
import { homePageMeta } from '@settings/meta'
import { NextPage } from 'next'

export const metadata = homePageMeta

const Home: NextPage = () => {
  return (
    <main className={`flex-[1_1_auto]`}>
      <Hero />
      <div className={`relative`}>
        <About />
        <div className={`gradient-03 z-0`} />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className={`gradient-04 z-0`} />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className={`gradient-04 z-0`} />
        <Feedback />
      </div>
    </main>
  )
}

export default Home
