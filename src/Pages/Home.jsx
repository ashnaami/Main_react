import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import BlogCard from '../Components/BlogCard'
import Footer from '../Components/Footer'
import Posts from '../Pages/Posts'


function Home() {
  return (
    <>
      <NavBar />
      

      <Hero />

      <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <Posts />

  </div>
</section>

      <Footer />
    </>
  )
}

export default Home