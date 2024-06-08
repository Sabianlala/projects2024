import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <section className="hero bg-dark text-light p3-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome to Pet Expo</h1>
          <p className="lead">Find your perfect pet today!</p>
        </div>
      </section>
      <img width="100%" src="https://c4.wallpaperflare.com/wallpaper/956/989/117/cat-amp-dog-4k-downloading-for-pc-wallpaper-preview.jpg" alt="" />
        <Footer/>
    </div>
  )
}

export default Home