import React from 'react'
import Footer from "../component/Footer"
import Header from "../component/Header"
const Main = () => {
  return (
    <>
    <Header/>
        <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
           <h1 className='text-light'>Stock Prediction Portal</h1>
           <p className='text-light lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat modi vero odit magnam reprehenderit dolores illum ullam est? Omnis sapiente aperiam distinctio a laboriosam obcaecati debitis eos recusandae? Debitis, quas.</p>

                           <a className='btn btn-outline-warning' href='#'>Login</a>

        </div>
    </div>
    <Footer/> 
    </>

  )
}

export default Main