import React from 'react'
import style from './Home.module.css'

const Home = () => {
  return (
    <div>
      <img src="../src/assets/Supplement.png" className={style.supplement} alt="supplement stack" />
        <h1>Our Range of Products</h1>
        <div className={style.protein}>
          <img src='../src/assets/Protein.png' className={style.whey} alt='Whey Protein'/>
          <div>
            <h2 className={style.h2}>Protein</h2>
            <p><b>Muscle & Performance:</b> Protein is the essential building block that drives muscle repair and growth after every workout.</p>
            <p><b>Metabolism & Satiety:</b> Beyond fitness, protein is a powerful tool for weight management. </p>
          </div>
        </div>
        <div className={style.energy}>          
          <div>
            <h2 className={style.h2}>Energy</h2>
            <p><b>Sustained Power:</b> Go from sluggish to focused and energized in minutes, not hours. Our formula delivers clean, crash-free power that lasts all day</p>
            <p><b>Sharpen Your Focus:</b> This is more than just energy—it’s enhanced productivity. Key nootropics in our blend help sharpen concentration, improve reaction time, and cut through brain fog.</p>            
          </div>
          <img src='../src/assets/Energy.png' className={style.creamp} alt='Energy Booster'/>
        </div>

        <footer className={style.footer}>
          <p>Made with ❤️ from Mumbai </p>
          <p>📍 Shop No. 1, Gods colony, CurreyRoad, Mumbai-400041</p>
        </footer>
    </div>
  )
}

export default Home