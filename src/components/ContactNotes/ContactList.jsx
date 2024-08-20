import plusSVG from "../../assets/plus.svg"
import ContactDetails from "./ContactDetails"
import Contact from "./Contact"
import ContactSelected from "./ContactSelected"

const ContactList = () => {
  return (
    <>
      <div className="contact-container">
        <h2 className="section-headers biggest-font">Contacts</h2>
        <div className="contacts">
          <div className="contact-list box-shadow">
            <ContactSelected name="LJ Hooker Casula" title="Primary Customer" />
            <Contact name="Steve Smith" title="LJ Hooker Manager" selected="" />
            <Contact name="Alek Smooth" title="LJ Hooker HR" selected="" />
            <div className="additional-contact box-shadow">
              <img src={plusSVG} alt="plus" />
              <p className="medium-font">Add Additional Contact</p>
            </div>
          </div>
          <ContactDetails />
        </div>
      </div>
    </>
  )
}

export default ContactList
