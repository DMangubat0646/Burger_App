function BurgerCard({ burger, onClick }) {
  return (
    <button type="button" className="burger-card" onClick={onClick}>
      <div className="burger-card-image">
        <img src={burger.imageUrl} alt={burger.name} />
      </div>

      <div className="burger-card-content">
        <h3>{burger.name}</h3>
        <p className="burger-rating">Rating:{burger.rating}</p>
        <p className="burger-price">₱{burger.price}</p>
      </div>
    </button>
  )
}

export default BurgerCard
