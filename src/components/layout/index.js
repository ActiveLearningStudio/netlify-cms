import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Index = ({children}) => {
    return (
        <>
        <Navbar />
            <main>
                <div>{children}</div>
            </main>
        <Footer />
        </>
    )
}
export default Index