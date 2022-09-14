import React from 'react'
import Suffix from './Suffix.png'
import './Abtus.css'

const Aboutus = () => {
  return (
    <>
      <div>
        <span className="you-1">All you need is<br></br> just one link!!!</span>
      </div>
      <div>
        <span className="house-up-1">
          Teetree is all you need,very easy to set up, customize<br></br> and generate a
          link that will house all other of<br></br> your important links
        </span>
        <div className="abt-1">
          <img src={Suffix} alt="Aboutus" />
        </div>
      </div>
    </>
  )
}

export default Aboutus