import React from 'react'
import invest from '../Images/invest.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeroStyle.css'

const Hero = () => {
  return (
    <Container>
        <Row className='hero'>
            <Col className='col-1'>
               <div className='wrap'>
                    <p className='save'>75% SAVE</p>
                    <p className='blackFriday'>For the Black Friday Weekend</p>
               </div>
                <h1>Fastest & secure platform to invest in crypto</h1>
                <p className='buySellCrypto'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
                <button className='button btn-invest'>Try for FREE</button>
            </Col>
            <Col className='col-2'> <img src={invest} /></Col>
        </Row>
    </Container>
 




    // <div className='hero'>
    //     <div className='container'>
    //         <div className='content'>
    //             <div className='row'>
    //                 <div className='col-1'>
    //                     <p>75% SAVE</p>
    //                     <p>For the Black Friday Weekend</p>
    //                     <h1>Fastest & secure platform to invest in crypto</h1>
    //                     <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
    //                     {/* <button className='button btn-invest'>Try for FREE</button> */}
    //                 </div>
    //                 <div className='col-2'>
    //                     <img src={invest} />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // </div>
  )
}

export default Hero