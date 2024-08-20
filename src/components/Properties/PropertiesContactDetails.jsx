import mobileSVG from "../../assets/mobile.svg"
const PropertiesContactDetails = () => {
  return (
    <>
        <p className="half-big-font bold">Site Contact Details</p>
        <br /> <br />
        <div className="contact-wrapper">
          <p className="half-big-font bold">Job Site Address</p>
          <p className="half-big-font">
            64 Cambridge Street, Lidcombe, 2141 NSW Australia
          </p>
        </div>
        <br /> <br />
        <div className="properties-contact-details">
          <div className="properties-contact-details-item">
            <p className="half-big-font bold">Name</p>
            <p className="half-big-font line-height">Leslie Alexander</p>
          </div>
          <div className="properties-contact-details-item">
            <p className="half-big-font bold">Mobile</p>
            <div className="contact-wrapper">
              <img src={mobileSVG} alt="mobile_phone" />
              <p className="half-big-font line-height">0404 387 819</p>
            </div>
          </div>
          <div className="properties-contact-details-item">
            <p className="half-big-font bold">Phone</p>
            <div className="contact-wrapper">
              <img src={mobileSVG} alt="mobile_phone" />
              <p className="half-big-font line-height">987 954 02</p>
            </div>
          </div>
          <div className="properties-contact-details-item">
            <p className="half-big-font bold">Customer Relationship</p>
            <p className="half-big-font line-height">Tenant</p>
          </div>
        </div>
    </>
  )
}

export default PropertiesContactDetails
