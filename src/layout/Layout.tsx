import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
type layoutProps={
   children ?: ReactNode
}

const Layout:React.FC<layoutProps> = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout