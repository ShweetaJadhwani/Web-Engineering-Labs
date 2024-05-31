import React from 'react'
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Aside from './Aside';

function Children() {
    return (
        <div>
      <Navbar />
      <div className="body">
        <Aside />
        <div className="con">
          <Container />
          <Container />
        </div>
        
      </div>
      <Footer/>
    </div>
        
    )
}

export default Children;
