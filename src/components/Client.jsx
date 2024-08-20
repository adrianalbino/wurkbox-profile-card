import googlePNG from "../assets/google.png"
import downArrowSVG from "../assets/down-arrow.svg"

const Client = () => {
  return (
    <>
      <article className="client box-shadow">
        <div className="client-left-section">
          <h1 className="bold underline">LJ Hooker Casula</h1>
          <div className="tags tags-vip bold">
            <p className="green-text">VIP</p>
          </div>
          <div className="tags tags-finance-approved bold">
            <p className="yellow-text">Finance Approved</p>
          </div>
          <div className="tags tags-google">
            <img className="width-1" src={googlePNG} alt="Google logo" />
            <p>Google</p>
          </div>
        </div>
        <div className="client-right-section">
          <div className="new-job-button box-shadow">
            <p>Add New Job</p>
          </div>
          <div className="actions">
            <div className="actions-button box-shadow">
              <p>Actions</p>
            </div>
            <div className="actions-dropdown box-shadow">
              <img className="width-1" src={downArrowSVG} alt="down_arrow" />
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Client
