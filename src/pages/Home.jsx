import React from 'react'
import Hero from '../components/Hero'
import BookList from '../components/BookList'

const Home = () => {
  return (
    <div>
      <Hero />
      <BookList isHome={true} />
    </div>
  )
}

export default Home