import './static.css'

const Numbers =({text,num}) => {
  return(
    <li className='item'>
      <p className='text'>{text}</p>
      <p className='number'>{num}</p>
    </li>
  )
}


export default Numbers