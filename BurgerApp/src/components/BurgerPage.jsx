import { useState } from 'react'
import BurgerList from './BurgerList'
import BurgerDetails from './BurgerDetails'
import burgers from './burgerData'

function BurgerPage() {
  const [selectedBurger, setSelectedBurger] = useState(null)

  if (selectedBurger) {
    return (
      <BurgerDetails
        burger={selectedBurger}
        onBack={() => setSelectedBurger(null)}
      />
    )
  }

  return (
    <main className="burger-page">
      <header className="burger-header">
        <h1>🍔 Burger App</h1>
        <p>Choose your favorite burger</p>
      </header>

      <section className="featured-burger">
        <div className="featured-content">
          <span className="featured-label">FEATURED BURGER</span>
          <h2>Big, juicy and ready to bite.</h2>
          <p>Freshly made burgers with delicious ingredients.</p>
        </div>
        <div className="featured-image">🍔</div>
      </section>

      <BurgerList
        burgers={burgers}
        onBurgerClick={setSelectedBurger}
      />
    </main>
  )
}

export default BurgerPage
