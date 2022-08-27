import React from 'react'
import {Routes,Route} from "react-router-dom"
import Tablee from './Table'
import Time from './Time'

const Mainroute = () => {
  return (
    <Routes>
        <Route path="/" element={<Tablee/>}/>
        <Route path="/data" element={<Time/>}/>
    </Routes>
  )
}

export default Mainroute