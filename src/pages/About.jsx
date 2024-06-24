import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

const About = () => {
  return (
    <div>
      <Header />
      <Hero />

      <div className='px-6 sm:px-16 py-6'>
        <h1 className='text-center font-poppins font-medium mb-3 text-3xl'>About Us</h1>
        <p>Welcome to E-library, your comprehensive digital gateway to a world of knowledge. E-library revolutionizes the way you access and interact with information, offering an extensive collection of books, articles, journals, and more—all at your fingertips.

Whether you're a student, researcher, or avid reader, E-library caters to your intellectual curiosity with its user-friendly interface and vast repository of resources. Explore diverse subjects from literature to science, history to technology, effortlessly navigating through our curated sections and personalized recommendations.

E-library isn't just a library; it's a dynamic platform designed to adapt to your learning needs. Enjoy the convenience of 24/7 access from any device, empowering you to study, discover, and grow wherever you are. With features like advanced search capabilities, annotation tools, and offline access, E-library enhances your learning experience, making information retrieval efficient and enjoyable.

Join a community of learners and educators who rely on E-library to stay informed and inspired. Whether you're pursuing academic excellence, conducting research, or simply exploring new interests, E-library is your virtual companion in the pursuit of knowledge.

Experience the future of learning with E-library—where information meets innovation, and learning knows no bounds.</p>
      </div>
    </div>
  )
}

export default About
