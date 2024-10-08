import "./index.css"
import Navbar from "./components/Navbar"
import Client from "./components/Client"
import CardInfos from "./components/CardInfos/CardInfos"
import ContactNotes from "./components/ContactNotes/ContactNotes"
import Properties from "./components/Properties/Properties"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Client />
        <CardInfos />
        <ContactNotes />
        <Properties />
      </main>
    </>
  )
}

export default App
