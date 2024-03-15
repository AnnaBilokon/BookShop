import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewArrivals />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
