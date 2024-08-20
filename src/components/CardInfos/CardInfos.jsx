import moneySendSVG from "../../assets/money-send.svg"
import moneyReceiveSVG from "../../assets/money-receive.svg"
import briefcaseSVG from "../../assets/briefcase.svg"
import medalStarSVG from "../../assets/medalStar.svg"
import Card from "./Card"

const CardInfos = () => {
  return (
    <>
      <article className="card-information">
        <Card
          src={moneySendSVG}
          alt="money_sent"
          description="Money Spent"
          number="$15,650.20"
        />
        <Card
          src={moneyReceiveSVG}
          alt="outstanding_amount"
          description="Outstanding Amount"
          number="$300.20"
        />
        <Card
          src={briefcaseSVG}
          alt="total_jobs"
          description="Total Jobs"
          number="11"
        />
        <Card
          src={medalStarSVG}
          alt="customer_lifetime"
          description="Customer Lifetime"
          number="10 Years"
        />
      </article>
    </>
  )
}

export default CardInfos
