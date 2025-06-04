import React from 'react'
import Random from './Random'
import Test from './Test'
import Navbar from './Component/Navbar'
import Service from './Component/Service'
import Technology from './Component/Technology'
import Solution from './Component/Solution'
import Portfolio from './Component/Portfolio'
import BuildLink from './Component/BuildLink'
import Client from './Component/Client'
import WStart from './Component/WStart'
import AskQue from './Component/AskQue'
import Footer from './Component/Footer'

export default function App() {
  return (
    <>
      <div className=' widthset w-fit'>
        <Navbar />
        <Service />
        <Technology />
        <Solution />
        <Portfolio />
        <BuildLink />
        <Client />
        <WStart />
        <AskQue />
        <Footer />
      </div>
    </>
  )
}
