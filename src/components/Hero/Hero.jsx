import React from 'react'
import s from './Hero.module.scss'


const Hero = () => {
  return (
    <>
        <section className={s.hero}>
        <div className="container">
            <div className={s.wrapper}>
            <div className={s.text}>
                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="btn">Shop Now</button>
                <div className={s.review}>
                    <div>
                        <h2>200+</h2>
                        <p>International Brands</p>
                    </div>
                    <div className={s.line}><span></span></div>
                    <div>
                        <h2>2,000+</h2>
                        <p>High-Quality Products</p>
                    </div>
                    <div className={s.line}><span></span></div>
                        <div>
                        <h2>30,000+</h2>
                         <p>Happy Customers</p>
                    </div>
                </div>
            </div>

            <div className={s.box}>
                <img src="hero-img.png" alt="" />
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Hero