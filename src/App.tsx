import React from "react"
import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Nav } from "./components/Nav"
import { Products } from "./components/Products"
import { Rec } from "./components/Rec"


function App() {
  return (
    <div className="font-Poppins  bg-back">
      <Header />
      <Home />
      <Banner />
      <About />
      <Products />


    </div>
  )
}

export default App
