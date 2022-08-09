import React from 'react'

export default function Footer() {
  let footerstyle={
    position:"absolutes",
    bottom:"0px",
    width:"100%"

  }
  return (
    <footer className='bg-dark text-light text-center  ' style={{footerstyle}}>
      <p className='my-3 py-3 '>Copywrite &copy; NewApp</p>
    </footer>
  )
}
