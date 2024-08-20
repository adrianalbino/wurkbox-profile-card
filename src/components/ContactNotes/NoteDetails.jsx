import noteSVG from "../../assets/note.svg"
const NoteDetails = () => {
  return (
    <>
      <div className="notes-container">
        <div className="notes-header-container">
          <h2 className="section-headers bigger-font">Notes</h2>
          <div className="add-note-button box-shadow">
            <img src={noteSVG} alt="note_svg" />
            <p className="medium-font">Add Note</p>
          </div>
        </div>
        <div className="notes box-shadow">
          <p className="medium-font">April 15, 2024, 2:54 pm</p>
          <p className="line-height grey-color">Posted by Samantha</p>
          <br />
          <div className="faded-note">
          <p className="big-font line-height note-content">
            Waverley Waverley called to advise that the card she was going to
            use for the call out fee, she wont be able to use on the day so
            asked if we can invoice the call out. advised her we cant do that.
            she asked if she can pay it over the phone on the day, I advised
            thats doable. shes gonna go ahead with that.
          </p>
          </div>
          <div className="view-all-notes-button box-shadow">
            <p className="big-font">View All Notes</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteDetails
