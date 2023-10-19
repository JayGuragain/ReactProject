import React from 'react'
import Hero from '../hero/Hero';
import FavouriteFoods from '../favouriteFoods/FavouriteFoods'
import Categories from '../categories/Categories'
import Popular from '../popular/Popular';


const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <FavouriteFoods />
      <Categories />
      
    </div>
  )
}

export default Home
