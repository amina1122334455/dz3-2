import React, {useState} from 'react'
import Logo from '../../assets/header/Group 1543.svg'
import Burger from '../../assets/header/Vector (2).svg'
import Icon1 from '../../assets/burger/telegram.svg'
import Icon2 from '../../assets/burger/vk.svg'
import Icon3 from '../../assets/burger/instagram.svg'
import Icon4 from '../../assets/burger/email.svg'
import Icon5 from '../../assets/burger/phone.svg'


const Header = () => {
  const[show, ShowState] = useState(false)

      return (
  <section className='wrapper'>  
      
      {show && <div className='header__burger'>
        <div className='container'>
            <span className='header__cross' onClick={() => ShowState(!show)}>X</span>
            <ul className='header__ul'>
              <li className='header__ul-item'>Главная</li>
              <li className='header__ul-item'>О компании</li>
              <li className='header__ul-item'>Портфолио</li>
              <li className='header__ul-item'>Что мы предлагаем</li>
              <li className='header__ul-item'>Специальное предложение </li>
            </ul>
            <button className='header__button' type='button'>Оставить заявку</button>
            <ul className='burger'>
              <li><img src={Icon1}/></li>
              <li><img src={Icon2}/></li>
              <li><img src={Icon3}/></li>
              <li><img src={Icon4}/></li>
              <li><img src={Icon5}/></li>
            </ul>
        </div>
        </div>
      }

    <header className='header'>         
        <div className='container'>
          <div className='item'>
          <img src={Logo} alt=''/>
          <img src={Burger} onClick={() => ShowState(!show)}/>
          </div>
          
          <div className='web'>
            <h2 className='web__title'>web applications</h2>
            <p className='web__p'>Повседневная практика.</p>
            <button className='web__btn' type='button'><a className='web__a' href='#'>Спец предложение</a></button>
          </div>
        </div>
    </header>
  </section>  
  )
}

export default Header