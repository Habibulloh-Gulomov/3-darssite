import './sitebar.css'
import icon from '../../assets/img/logo.svg'




export const Sitebar = ({children}) =>{
  return(
    <div>
      <a href="#" className="iconlink"><img src={icon} alt="site logo" width={32} height={32} className="icon"/>Dashboard Kit</a>
      <ul className='bar__list'>   
          {children}
      </ul>
    </div>
  )
}