import ContactList from './ContactList'
import NoteDetails from './NoteDetails'
const ContactNotes = () => {
    return (
        <>
        <article className="contact-notes">
            <ContactList />
            <NoteDetails />
        </article>
        </>
    )
}

export default ContactNotes