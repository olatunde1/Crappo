import React from 'react'
import invest from '../Images/invest.png'
import whyCrappo2 from '../Images/whyCrappo2.png'
import whyCrappo3 from '../Images/whyCrappo3.png'
import bitcoin from '../Images/bitcoin.png'
import eth from '../Images/eth.png'
import litcoin from '../Images/litcoin.png'
import tradeIncrease from '../Images/tradeIncrease.png'
import Statistic from '../Images/Statistic.png'
import grow from '../Images/grow.png'
import logo from '../Images/Logo.png'
import paymentCards from '../Images/paymentCards.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaInstagram, FaFacebook,FaLinkedin, FaTwitter,FaYoutube,
    FaChartBar, FaUser,FaGlobeAmericas} from 'react-icons/fa'
import 'animate.css';
import './HeroStyle.css'

const Hero = () => {
  return (
    <Container>
        <Row className='hero'>
            <Col className='col-1  animate__animated animate__backInLeft '>
               <div className='wrap '>
                    <p className='save'>75% SAVE</p>
                    <p className='blackFriday'>For the Black Friday Weekend</p>
               </div>
                <h1>Fastest & secure platform to invest <br /> in crypto</h1>
                <p className='buySellCrypto'>Buy and sell cryptocurrencies, trusted by 10M wallets <br /> with over $30 billion in transactions.</p>
                <button className=' button btn-invest'>Try for FREE</button>
            </Col>
            <Col className='col-2 animate__animated animate__bounce'> <img src={invest} /></Col>
        </Row>

        <Row className='fact'>
            <div class="col">
                <div className='iconsDisplay'>
                    <div className='iconsWrapper'>
                    <p><FaChartBar className='icons' /></p>
                    </div>
                    <div>
                    <h2>$30B</h2>
                    <p>Digital Currency Exchanged</p>
                    </div>
                    
                </div>
            </div>

            <div class="col">
                <div className='iconsDisplay'>
                    <div className='iconsWrapper'>
                    <p><FaUser className='icons' /></p>
                    </div>
                <div>
                    <h2>10M+</h2>
                    <p>Trusted Wallets Investor</p>
                </div>
                </div>
            </div>

            <div class="col">
                <div className='iconsDisplay'>
                    <div className='iconsWrapper'>
                        <p><FaGlobeAmericas className='icons' /></p>
                    </div>
                    <div>
                        <h2>195</h2>
                        <p>Countries Supported</p>
                    </div>
                </div>
        </div>
        </Row>

        <Row className='whyCrappo'>
            <Col className='col-1 animate__animated animate__flip'>
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

        <Row className='market'>
            <div className='marketSentiment'>
                <p>Market sentiments, portfolio, and run the infrastructure of your choice</p>
            </div>
            <div className='investSmart'>
                <div className='investDetails'>
                    <p className='Inv'>Invest Smart</p>
                    <p className='getFull'>Get full statistic information about the behaviour of <br /> buyers and sellers will help you to make the decision. </p>
                    <button className=' button btn-invest'>Learn More</button>
                </div>
                <div><img src={tradeIncrease} alt='' /></div>
            </div>
            <div className='detailedStatistic'>
                <div><img src={Statistic} alt='' /></div>
                <div className='investDetails'>
                    <p className='detailed'>Detailed Statistics</p>
                    <p className='getFull'>View all mining related information in realtime, at any point at any location and decide which polls you want <br /> to mine in.</p>
                    <button className=' button btn-invest'>Learn More</button>
                </div>
                
            </div>
            <div className='growYourProfit'>
                <div className='profitGrowth'>
                    <p className='Inv'>Grow your profit and track <br /> your investments</p>
                    <p className='getFull'>Use advanced analytical tools. Clear Trading View<br /> charts let you track current and historical profit <br /> investments.</p>
                    <button className=' button btn-invest'>Learn More</button>
                </div>
                <div><img src={grow} alt=''/></div>
            </div>
            <div className='wrapAll'>
                <div className='wrapStartMining'>
                    <div className='startMining'>
                        <div>
                            <p className='mineNow'>Start mining now</p>
                            <p className='joinNow'>Join now with CRAPPO to get the latest news<br /> and start mining now</p>
                        </div>
                        <div className='wrapHarsh'>
                            <input placeholder='Enter your harsh rate'></input>
                            <button className=' button btn-subscribe'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className='subFooter'>
                    <div><img src={logo} /></div>
                    <div>
                        <h3>Quick Link</h3>
                        <p>Home</p>
                        <p>Products</p>
                        <p>About</p>
                        <p>Features</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <p>Download Whitepapper</p>
                        <p>Smart Token</p>
                        <p>Blockchain Explorer</p>
                        <p>Crypto API</p>
                        <p>Interest</p>
                    </div>
                    <div>
                        <h1>We accept following payment systems</h1>
                        <img src={paymentCards} alt='paymentCards' />
                    </div>
                </div>
                <div className='bottomFooter'>
                    <p>©2021 CRAPPO. All rights reserved</p>
                    <p className='socials'>
                        <FaFacebook  className='icon' />
                        <FaInstagram className='icon' />
                        <FaLinkedin  className='icon'/>
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                    </p>
                </div>
            </footer>
        </Row>

    </Container>
 
  )
}

export default Hero



