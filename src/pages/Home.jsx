import Header from '../components/Header.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import ProductSection from '../components/ProductSection.jsx'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <Header />
      <main className="home-main">
        <HeroBanner />
        <ProductSection />
      </main>
    </>
  )
}

export default Home
