import React from "react"
import Layout from '../components/layout'
import Home from '../components/Home'
export default function Template( ) {
 
  return (
     <>
      <Layout> 
        <div style={{ maxWidth: '1024px', margin: '130px auto 20px'}}>
            <Home />
        </div>
      </Layout>
    </>
  )
}