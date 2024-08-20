import SelectProperty from "./SelectProperty"
import PropertiesContactDetails from "./PropertiesContactDetails"
import PropertiesTabs from "./PropertiesTabs"
import PropertiesJobTable from "./PropertiesJobTable"
import PropertiesTotals from "./PropertiesTotals"

const Properties = () => {
  return (
    <>
      <article className="properties-wrapper">
        <h2 className="section-headers bigger-font">Properties</h2>
        <SelectProperty />
        <div className="properties-details-wrapper">
          <PropertiesContactDetails />
          <PropertiesTabs />
          <PropertiesJobTable />
          <PropertiesTotals total="$500.00" paid="$500.00" balance="$0.00" />
        </div>
      </article>
    </>
  )
}

export default Properties
