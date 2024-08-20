import arrowSVG from '../../assets/right-arrow.svg'

const Contact = (contact) => {
    return (
        <>
            <div className="indiv-contact box-shadow">
                <div className="indiv-contact-content">
                  <p className="big-font bold">{contact.name}</p>
                  <p className="medium-font">{contact.title}</p>
                </div>
                <img src={arrowSVG} alt="Arrow" className="indiv-contact-arrow" />
            </div>
        </>
    )
}

export default Contact