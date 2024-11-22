import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className={s.header}>
            <div className="container">
                <div className={s.wrapper}>
                    <nav className={s.nav}>

                        <div className={s.logo}>

                        

                            <Link>SHOP.CO</Link>
                
                        </div>

                        <div className="burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            
                        <div className={s.menu}>
                        <Link to={'/'}>Shop <img src="/header.svg" alt="" /></Link>
                        <Link to={'/'}>On Sale</Link>
                        <Link to={'/'}>New Arrivals</Link>
                        <Link to={'/'}>Brands</Link>
                        </div>
                        <input placeholder='Search for products...' className={s.inp} type="text" name="" id="" />
                        
                        <div className={s.shop}>
                        <img src="/shop.svg" alt="" />
                        <img src="/people.svg" alt="" />
                        </div>
                          
                    </nav>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header