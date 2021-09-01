import React from "react"
import Layout from '../components/layout'
import Home from '../components/Home'
export default function Template( ) {
 
  return (
     
      <Layout> 
        <iframe
		 style={{ width: '100%', height: '100vh', marginTop: '100px'}} 
	     src="https://open.curriki.org/studio/opensearch"	
		>
		</iframe>
      </Layout>
   
  )
}