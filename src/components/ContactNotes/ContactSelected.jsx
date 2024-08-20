import arrowSVG from '../../assets/right-arrow.svg'

const ContactSelected = (contact) => {
    return (
        <>
            <div className="indiv-contact box-shadow selected">
                <div className="indiv-contact-content">
                  <p className="big-font bold">{contact.name}</p>
                  <p className="medium-font">{contact.title}</p>
                </div>
                <img src={arrowSVG} alt="Arrow" className="indiv-contact-arrow" />
            </div>
        </>
    )
}

export default ContactSelected