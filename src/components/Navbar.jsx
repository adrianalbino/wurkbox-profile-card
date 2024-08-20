import logoSVG from "../assets/logo.svg"
import schedulerSVG from "../assets/scheduler.svg"
import reportsSVG from "../assets/reports.svg"
import pricebookSVG from "../assets/pricebook.svg"
import accountingSVG from "../assets/accounting.svg"
import settingssSVG from "../assets/settings.svg"
import navPhoneSVG from "../assets/navbar-phone.svg"
import searchSVG from "../assets/search.svg"
import bellSVG from "../assets/bell.svg"
import userSVG from "../assets/user.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar box-shadow">
        <div className="navbar-left-section">
          <div className="logo">
            <img src={logoSVG} alt="icon" className="navbar-logo" />
            <p class="logo-letter">B</p>
          </div>
          <div className="navbar-item">
            <img src={schedulerSVG} alt="scheduler" />
            <p>Scheduler</p>
          </div>
          <div className="navbar-item">
            <img src={reportsSVG} alt="reports" />
            <p>Reports</p>
          </div>
          <div className="navbar-item">
            <img src={pricebookSVG} alt="pricebook" />
            <p>Price Book</p>
          </div>
          <div className="navbar-item">
            <img src={accountingSVG} alt="accounting" />
            <p>Accounting</p>
          </div>
          <div className="navbar-item">
            <img src={settingssSVG} alt="settings" />
            <p>Settings</p>
          </div>
        </div>
        <div className="navbar-right-section">
          <div className="navbar-button-grouping">
            <div className="navbar-button box-shadow">
              <p>New Job</p>
            </div>
            <div className="navbar-button box-shadow">
              <p>Sky Rocket Plumbing & Electrical NSW</p>
            </div>
          </div>
          <div className="navbar-icon navbar-notification">
            <img src={navPhoneSVG} alt="phone" />
            <div className="orange-notification"></div>
          </div>
          <div className="navbar-icon">
            <img src={searchSVG} alt="search" />
          </div>
          <div className="navbar-icon navbar-notification">
            <img src={bellSVG} alt="bell" />
            <div className="orange-notification"></div>
          </div>
          <img src={userSVG} alt="User icon" className="navbar-user-icon" />
        </div>
      </div>
    </>
  )
}

export default Navbar
