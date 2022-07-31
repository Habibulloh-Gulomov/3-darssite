import Search from '../../assets/img/search.png'
import Ring from '../../assets/img/ring.png'
import './header.css'
const Header = () => {
  return (
    <header className="header">
        <div className="header__inner">
          <h1 className="header__title">Overview</h1>
          <button className='header__search'><img src={Search} alt="search" width={16} height='16' /></button>
          <button className='header__ring'><img src={Ring} alt="search" width={16} height='16'/></button>
          <p className="header__owner">Jones Ferdinand</p>
        </div>
    </header>
  )
}


export default Header