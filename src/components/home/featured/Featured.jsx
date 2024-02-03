import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Venues' subtitle='Find All Types of Property for your Special Occasion.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
