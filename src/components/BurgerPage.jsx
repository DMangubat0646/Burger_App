import { useEffect, useState } from 'react'
import BurgerList from './BurgerList'
import BurgerDetails from './BurgerDetails'
import Cart from './Cart'
import burgers from './burgerData'

function BurgerPage() {
  const [selectedBurger, setSelectedBurger] = useState(null)
  const [cart, setCart] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [showCart, setShowCart] = useState(false)

  // Featured burger slider
  const [featuredIndex, setFeaturedIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((current) => (current + 1) % burgers.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const visibleBurgers = showAll ? burgers : burgers.slice(0, 8)

  const addToCart = (burger, quantity) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === burger.id)

      if (existing) {
        return currentCart.map((item) =>
          item.id === burger.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...currentCart, { ...burger, quantity }]
    })

    setSelectedBurger(null)
  }

  const updateCartQuantity = (id, change) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <main className="burger-page">
      <header className="burger-header">
        <div>
          <h1>Burger App</h1>
          <p>Choose your favorite burger</p>
        </div>

        <button
          type="button"
          className="cart-top-button"
          onClick={() => setShowCart(true)}
        >
          Your Cart
          {cartCount > 0 && <span>{cartCount}</span>}
        </button>
      </header>

      <section className="featured-burger">
        <div className="featured-content">
          <span className="featured-label">FEATURED BURGER</span>
          <h2>Big, juicy and ready to bite.</h2>
          <p>Freshly made burgers with delicious ingredients.</p>
        </div>

        <div className="featured-image">
          <img
            key={featuredIndex}
            src={burgers[featuredIndex].imageUrl}
            alt={burgers[featuredIndex].name}
          />
        </div>
      </section>

      <BurgerList
        burgers={visibleBurgers}
        onBurgerClick={setSelectedBurger}
      />

      {!showAll && (
        <button
          type="button"
          className="see-more-button"
          onClick={() => setShowAll(true)}
        >
          SEE MORE
        </button>
      )}

      {selectedBurger && (
        <BurgerDetails
          burger={selectedBurger}
          onClose={() => setSelectedBurger(null)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateCartQuantity}
        />
      )}
    </main>
  )
}

export default BurgerPage