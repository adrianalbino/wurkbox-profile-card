import locationSVG from "../../assets/locationpin.svg"
import mobileSVG from "../../assets/mobile.svg"
import emailSVG from "../../assets/email.svg"
import EditButton from "../EditButton"

const ContactDetails = () => {
  return (
    <>
      <div className="contact-information box-shadow">
        <div className="contact-name">
          <div className="contact-name-wrapper">
            <div className="contact-name-left">
              <p className="big-font bold line-height">LJ Hooker Casula</p>
              <p className="big-font line-height">Real Estate Agent</p>
            </div>
            <div className="contact-name-right">
                <EditButton />
            </div>
          </div>
          <br />
          <p className="big-font bold line-height">Billing Address</p>
          <div className="contact-wrapper">
            <img src={locationSVG} alt="Location pin" />
            <p className="big-font line-height">
              91 Marigold Street, Revesby, 2212 NSW Australia
            </p>
            <div className="open-map-button">
              <p className="big-font">Open Map</p>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-details-mobile">
              <p className="big-font bold line-height">Mobile</p>
              <div className="contact-wrapper">
                <img src={mobileSVG} alt="mobile_phone" />
                <p className="big-font line-height">0404 387 819</p>
              </div>
            </div>
            <div className="contact-details-phone">
              <p className="big-font bold line-height ">Phone</p>
              <div className="contact-wrapper">
                <img src={mobileSVG} alt="mobile_phone" />
                <p className="big-font line-height">987 954 02</p>
              </div>
            </div>
            <div className="contact-details-email">
              <p className="big-font bold line-height">Email</p>
              <div className="contact-wrapper">
                <img src={emailSVG} alt="email" />
                <p className="big-font line-height">customer@hotmail.com</p>
              </div>
            </div>
          </div>
          <br />
          <div className="contact-details-payment-terms">
            <p className="big-font bold line-height">Payment Terms</p>
            <p className="big-font line-height">14 Days</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactDetails
