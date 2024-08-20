const PropertiesTotals = (totals) => {
  return (
    <>
      <div className="properties-totals-wrapper">
        <div className="properties-totals">
          <p className="half-big-font bold">Total</p>
          <p className="half-big-font">{totals.total}</p>
        </div>
        <div className="properties-totals">
          <p className="half-big-font bold">Paid</p>
          <p className="half-big-font">{totals.paid}</p>
        </div>
        <div className="properties-totals">
          <p className="half-big-font bold dark-grey-color">Balance</p>
          <p className="half-big-font">{totals.balance}</p>
        </div>
      </div>
    </>
  )
}

export default PropertiesTotals
