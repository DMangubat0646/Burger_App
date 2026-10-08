import BurgerCard from './BurgerCard'

function BurgerList({ burgers, onBurgerClick }) {
  return (
    <section className="burger-list-section">
      <div className="section-heading">
        <h2>Our Burgers</h2>
        <span>{burgers.length} burgers</span>
      </div>

      <div className="burger-list">
        {burgers.map((burger) => (
          <BurgerCard
            key={burger.id}
            burger={burger}
            onClick={() => onBurgerClick(burger)}
          />
        ))}
      </div>
    </section>
  )
}

export default BurgerList
