import Header from "./components/header"
import NotificationButton from "./components/NotificationButton"
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
      <NotificationButton />
      <NotificationButton />
    </>

  )
}

export default App
