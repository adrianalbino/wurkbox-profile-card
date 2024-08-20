import editSVG from "../assets/edit.svg"

const EditButton = () => {
  return (
    <div className="edit-button box-shadow">
      <img src={editSVG} alt="edit" />
    </div>
  )
}

export default EditButton
