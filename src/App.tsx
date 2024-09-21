import React from 'react'
import Layout from './layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import Index from './routes/Index'

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Index/> 
      </Layout>
    </BrowserRouter>
  )
}

export default App