import Navbar from '@components/ui/Navbar'

interface IHeader {}

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={``}>
      <div className="container">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
