
const Card = (card) => {
    return (
        <>
            <div className="indiv-cards box-shadow">
            <img src={card.src} alt={card.alt} className="indiv-cards-icon" />
            <div className="indiv-cards-content">
                <p className="big-font">{card.description}</p>
                <p className="biggest-font bold">{card.number}</p>
            </div>
            </div>
        </>
    )
}

export default Card