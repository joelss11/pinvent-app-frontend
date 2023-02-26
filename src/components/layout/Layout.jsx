import React from 'react'
import Footer from '../footer/Footer'
import Header from '../Header/Header'

export default function layout({children}) {
  return (
   <>
    <Header/>
     <div style={{minHeight:"80vh"}} className="--pad">
        {children}
     </div>
    <Footer/>
   </> 
  )
}
