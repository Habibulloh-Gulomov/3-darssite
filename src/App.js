import Header from './components/header/Header'
import './app.css'
import Numbers from './components/static/Static'
import {Trend} from './components/trend/Trend'
import {Tickets} from './components/ticket/Ticket'
import { Task } from './components/task/Task'
import {Sitebar} from './components/sitebar/Sitebar'
import Book from './assets/img/book.png'
import Group from './assets/img/group.png'
import lamp from './assets/img/lamp.png'
import man from './assets/img/man.png'
import pie from './assets/img/pie.png'
import setting from './assets/img/setting.png'
import ticket from './assets/img/ticket.png'
import nishon from './assets/img/nishon.png'

function App() {
  const number = [
    {
    text:'Unresolved',
    num:60,
    },
    {
      text:'Overdue',
      num:16,
    },
    {
      text:'Open',
      num:43,
    },
    {
      text:' On hold',
      num:64,
    }
  ]

  const Ticket = [
    {
    text:'Waiting on Feature Request',
    num:4238,
    },
    {
      text:'Awaiting Customer Response',
      num:1005,
    },
    {
      text:'Awaiting Developer Fix',
      num:914,
    },
    {
      text:' Pending',
      num:28,
    }
  ]

  const bar = [
    {
    text:'Overview',
    img:pie,
    },
    {
      text:'Tickets',
      img:ticket,
    },
    {
      text:'Ideas',
      img:lamp,
    },
    {
      text:' Contacts',
      img:Group,
    },
    {
      text:'Agents',
      img:man,
    },
    {
      text:' Articles',
      img:Book,
    },
    {
      text:'Settings',
      img:setting,
    },
    {
      text:'Subscription',
      img:nishon,
    },
  ]

  
  
  return (
    <div className="container">
      <div className="bigbox">
        <div className="left__box">
      <Sitebar>
        {
          bar.map(e=>{
            return(
              <li className='bar__item'>
                <img width='16' height='16' src={e.img} alt={e.img} />
                <p className='bar__text'>{e.text}</p>
              </li>
            )
            })
        }
      </Sitebar>
      </div>
     <div className="right__box">
     <Header/>
      <main>
      <ul className='list'>
        {number.map(e=>(
          <Numbers text={e.text} num={e.num}/>
        ))
        }
      </ul>
      <Trend/>

      <div className='cover'>
      <Tickets>
        {Ticket.map(e =>{
          return(
              <li className='ticketlist__item'>
                <p className='ticketlist__text'>{e.text}</p>
                <p className='ticketlist__num'>{e.num}</p>
              </li>
          )
        })}
      </Tickets>
      <Task/>
      </div>
      
      </main>
     </div>
      </div>
    </div>
  );
}

export default App;



