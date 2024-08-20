import provertiesSVG from "../../assets/properties.svg"
import downArrowBlackSVG from "../../assets/down-arrow-black.svg"
import plusSVG from "../../assets/plus.svg"
import EditButton from '../EditButton'

const SelectProperty = () => {
  return (
    <>
      <div className="select-property">
        <div className="select-property-left">
          <img src={provertiesSVG} alt="properties" />
          <p className="bold big-font">Select Property</p>
          <div className="address-dropdown-container">
            <input
              className="properties-dropdown big-font"
              type="text"
              value="64 Cambridge Street, Lidcombe, 2141 NSW Australia"
              readOnly
            />
            <img src={downArrowBlackSVG} alt="down_arrow" />
          </div>
        </div>
        <div className="select-property-right">
          <EditButton />
          <div className="add-property box-shadow">
            <img src={plusSVG} alt="plus" />
            <p>Add Property</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectProperty