import briefcaseSVG from "../../assets/briefcase.svg"
import opaqueNotesSVG from '../../assets/opaque-notes.svg'
import mediaSVG from '../../assets/media.svg'

const PropertiesTabs = () => {
  return (
    <>
      <div className="properties-tabs">
        <div className="properties-indiv-tabs selected">
          <img className="img-sizer" src={briefcaseSVG} alt="briefcase" />
          <p className="half-big-font bold">Jobs</p>
          <p className="notification-number">1</p>
        </div>
        <div className="properties-indiv-tabs">
          <p className="half-big-font bold">Pending Quotes</p>
          <p className="notification-number">6</p>
        </div>
        <div className="properties-indiv-tabs">
          <p className="half-big-font bold">Complaints</p>
          <p className="notification-number">1</p>
        </div>
        <div className="properties-indiv-tabs">
          <p className="half-big-font bold">Callbacks</p>
          <p className="notification-number">1</p>
        </div>
        <div className="properties-indiv-tabs">
          <img className="img-sizer" src={opaqueNotesSVG} alt="briefcase" />
          <p className="half-big-font bold">Notes</p>
        </div>
        <div className="properties-indiv-tabs">
          <img className="img-sizer" src={mediaSVG} alt="briefcase" />
          <p className="half-big-font bold">Media</p>
          <p className="notification-number">1</p>
        </div>
      </div>
    </>
  )
}


export default PropertiesTabs