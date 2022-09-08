import React from 'react'
import invest from '../Images/invest.png'
import whyCrappo2 from '../Images/whyCrappo2.png'
import whyCrappo3 from '../Images/whyCrappo3.png'
import bitcoin from '../Images/bitcoin.png'
import eth from '../Images/eth.png'
import litcoin from '../Images/litcoin.png'
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
                <h1>Fastest & secure platform to invest <br /> in crypto</h1>
                <p className='buySellCrypto'>Buy and sell cryptocurrencies, trusted by 10M wallets <br /> with over $30 billion in transactions.</p>
                <button className=' button btn-invest'>Try for FREE</button>
            </Col>
            <Col className='col-2'> <img src={invest} /></Col>
        </Row>

        <Row className='fact'>
            <div class="col-lg-3 col-md-6">
                <div class="count-box">
                    <i class="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1" class="purecounter"></span>
                    <div>
                        <h2>$30B</h2>
                        <p>Digital Currency Exchanged</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div class="count-box">
                    <i class="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="08" data-purecounter-duration="1" class="purecounter"></span>
                    <div>
                        <h2>10M+</h2>
                        <p>Trusted Wallets Investor</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                    <i class="bi bi-headset"></i>
                    <span data-purecounter-start="0" data-purecounter-end="263" data-purecounter-duration="1" class="purecounter"></span>
                    <div>
                        <h2>195</h2>
                        <p>Countries Supported</p>
                    </div>
                </div>
            </div>
        </Row>

        <Row className='whyCrappo'>
            <Col className='col-1'>
            <img src={whyCrappo2} />
               
            </Col>
            <Col className='col-2 chooseCrappo'> 
                <h1>Why you should choose <br /> CRAPPO</h1>
                <p className='expCrypto'>Experience the next generation cryptocurrency <br /> platform. No financial borders, extra fees, and fake <br /> reviews.</p>
                <button className=' button btn-invest'>Learn More</button>
                <img src={whyCrappo3} />
            </Col>
        </Row>
       
        <Row className='check'>
            <h1>Check how much you can earn</h1>
            <p className='harshRate'>Let’s check your hash rate to see how much you will earn today, <br /> Exercitation veniam consequat sunt nostrud amet.</p>
        </Row>

        <Row>       
            <div className='wrapWrapperSecure'>
                <div className='wrapper mb-5'>
                    <div className='calculate'>
                        <input placeholder='Enter your harsh rate'></input>
                        <select className='selector'>
                            <option value="">TH/s</option>
                        </select>
                        <button className='button btn-calculate'>Calculate</button>
                    </div>
                    <div className='revenue'>
                        <p className='estimated'>ESTIMATED 24 HOUR REVENUE:</p>
                        <p className='eth'>0.055 130 59 ETH <span className='ethFigure'>($1275)</span></p>
                        <p className='ethPrice'>Revenue will change based on mining difficulty and Ethereum price.</p>
                    </div>
                </div>
                <div className='secureTrade'>
                    <p className='trade'>Trade securely and market the high growth cryptocurrencies.</p>
                    <div className='crypto'>
                        <div className='bitCoin'>
                            <img src={bitcoin} alt='' />
                            <p className='coinText'>Bitcoin <span className='coinTextspan'>BTC</span></p>
                            <p className='cryptNarrate'>Digital currency in which a record of transactions is maintained.</p>
                            <button className='button btn-start-mining'>Start mining</button>
                        </div>
                        <div className='eTh'>
                            <img src={eth} alt='' />
                            <p className='coinText'>Ethereum <span className='coinTextspan' >ETH</span></p>
                            <p className='cryptNarrate'>Blockchain technology to create and run decentralized digital applications.</p>
                            <button className='button btn-start-mining'>Start mining</button>
                        </div>
                        <div className='litCoin'>
                            <img src={litcoin} alt='' />
                            <p className='coinText'>Litecoin <span className='coinTextspan'>LTC </span></p>
                            <p className='cryptNarrate'>Cryptocurrency that enables instant payments to anyone in the world.</p>
                            <button className='button btn-start-mining'>Start mining</button>
                        </div>
                    </div>
                </div>
            </div>
        </Row>

        <Row>

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