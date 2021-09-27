import './App.scss';

// Assets.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faRobot, faCoins, faWallet, faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faWpexplorer, faWindows, faApple, faLinux } from  '@fortawesome/free-brands-svg-icons'
import DingocoinLogo from './assets/img/dingocoin.png'
import DingoImg from './assets/img/dingo.png'
import WhitepaperPdf from './assets/pdf/Dingocoin_Whitepaper.pdf'
import { SocialIcon } from 'react-social-icons';

// Bootstrap.
import { Button, Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap'

// Others.
import CustomParticles from './CustomParticles.jsx'
import CustomDivider from './CustomDivider.jsx'

function App() {
  return (
    <div className="App">

      <Navbar bg="dark" className="navbar" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand">
            <img src={DingocoinLogo}/>
            <span>DINGOCOIN</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#wallets">Wallets</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              <NavDropdown className="navbar-important" title="Live Chart">
                <NavDropdown.Header>Dingocoin</NavDropdown.Header>
                <NavDropdown.Item>CoinPaprika</NavDropdown.Item>
                <NavDropdown.Item>CoinGecko</NavDropdown.Item>
                <NavDropdown.Item>Nomics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>wDingocoin (BSC)</NavDropdown.Header>
                <NavDropdown.Item>dex.guru</NavDropdown.Item>
                <NavDropdown.Item>PooCoin</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="navbar-important" title="Exchanges">
                <NavDropdown.Header>Dingocoin</NavDropdown.Header>
                <NavDropdown.Item target="_blank" href="https://wallet.autradex.systems">Autradex Systems</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://dex-trade.com/spot/trading/DINGOUSDT">Dex-Trade</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://main.southxchange.com/Market/Book/DINGO/BTC">SouthXchange</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://cratex.io/index.php?pair=DINGO/LTC">Cratex.io</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://dex.delion.online/market/DELION.DINGO_DOGE">DelionDEX</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>wDingocoin (BSC)</NavDropdown.Header>
                <NavDropdown.Item target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0x9b208b117B2C4F76C1534B6f006b033220a681A4">PancakeSwap</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="section-a" id="home">
        <div className="particles-container">
          <CustomParticles className="particles"/>
          <Container className="masthead">
            <Row>
              <h2>1 Dingocoin = 1 Dingocoin</h2>
            </Row>
            <Row>
              <Col><img src={DingocoinLogo} className="masthead-avatar"/></Col>
            </Row>
            <Row>
              <p>Dingocoin is an open-source peer-to-peer digital currency.<br/> MUCH KING DINGO SUCH WILD DOGE</p>
            </Row>
            <Row>
              <Col>
                <SocialIcon className="social-icon" url="https://discord.gg/y3J946HFQM" />
                <SocialIcon className="social-icon" url="https://t.me/joinchat/wNb353Dwm_c4NWFk" network="telegram" />
                <SocialIcon className="social-icon" url="https://www.facebook.com/Dingocoin.org/" />
                <SocialIcon className="social-icon" url="https://www.reddit.com/r/dingocoin" />
                <SocialIcon className="social-icon" url="https://twitter.com/dingocoincrypto" />
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <section className="section-b" id="about">
        <h2>ABOUT DINGOCOIN</h2>
        <CustomDivider/>
        <Container>
          <Row md={1} lg={2}>
            <Col>
              <h3>A fun cryptocurrency...</h3>
              <p>Dingocoin is a decentralized, peer-to-peer digital currency that enables you to easily send money online. Think of it as "the great Dingo internet currency." Created in parody of Dogecoin for absolutely everyone.</p>
            </Col>
            <Col>
              <h3>... supporting community projects.</h3>
              <p>Backed by its own blockchain, Dingocoin provides a testbed for ideas <i>by</i> the community, <i>for</i> the community. Have something fun to try? Throw it out and we'll help. <b>Check out our community-driven projects below!</b></p>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faCoins} />
                <a target="_blank" href="https://github.com/dingocoin/dingocoin"><Button variant="primary">AuxPow Blockchain</Button></a>
                <p>Dingocoin is backed by its own open-source, community-maintained AuxPow blockchain.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faWpexplorer} />
                <a target="_blank" href="https://explorer.dingocoin.com"><Button variant="primary">Mainnet Explorer</Button></a>
                <p>Explore the Dingocoin mainnet. Built by our very own community member.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faExchangeAlt} />
                <a target="_blank" href="https://wrap.dingocoin.org"><Button variant="primary">BSC Wrap Custodian</Button></a>
                <p><i>Wrap</i> Dingocoins to wDingocoins on BSC securely. Designed and maintained by our very own community members.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faRobot} />
                <a target="_blank" href="https://discord.gg/y3J946HFQM"><Button variant="primary">Discord Faucet/Tip Bot</Button></a>
                <p>Get free sample Dingocoins. Tip Dingocoins to others easily. Written by our very own community member.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faRobot} />
                <a target="_blank" href="https://discord.gg/y3J946HFQM"><Button variant="primary">Discord Price Bot</Button></a>
                <p>Get live alerts for arbitrage opportunities across exchanges. Written by our very own community member.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-a" id="wallets">
        <h2>DINGOCOIN WALLETS</h2>
        <CustomDivider/>
        <Container>
          <Row md={1} lg={2}>
            <Col>
              <h3>Hold Dingocoins directly...</h3>

              <div className="wallet-section">
                <p>Official Mainnet Wallets</p>
                <div className="wallet-download">
                  <FontAwesomeIcon className="faicon" icon={faWindows} />
                  <a target="_blank" href="https://github.com/dingocoin/dingocoin/releases/download/v1.16.0.2/windows-binaries.zip"><Button className="wallet-button" variant="primary">Windows</Button></a>
                </div>
                <div className="wallet-download">
                  <FontAwesomeIcon className="faicon" icon={faApple} />
                  <a target="_blank" href="https://github.com/dingocoin/dingocoin/releases/tag/v1.16.0.2"><Button className="wallet-button" variant="primary">macOS</Button></a>
                </div>
                <div className="wallet-download">
                  <FontAwesomeIcon className="faicon" icon={faLinux} />
                  <a target="_blank" href="https://github.com/dingocoin/dingocoin/releases/download/v1.16.0.2/linux-binaries.zip"><Button className="wallet-button" variant="primary">Linux</Button></a>
                </div>
              </div>

              <div className="wallet-section">
                <p>Other Wallets</p>
                <div className="wallet-download">
                  <FontAwesomeIcon className="faicon" icon={faWallet} />
                  <a target="_blank" href="https://beehivewallet.link/"><Button className="wallet-button" variant="primary">Hive Multi-Coin Web Wallet</Button></a>
                </div>
              </div>
            </Col>
            <Col>
              <h3>... or hold wrapped wDingocoins.</h3>
              <div className="wallet-section">
                <p>wDingocoin on Binance Smart Chain (BSC)</p>
                <div className="wallet-download">
                  <FontAwesomeIcon className="faicon" icon={faFileContract} />
                  <a target="_blank" href="https://bscscan.com/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4"><Button className="wallet-button" variant="primary">Smart Contract</Button></a>
                </div>
                <div className="wallet-download">
                  <FontAwesomeIcon className="faicon" icon={faExchangeAlt} />
                  <a target="_blank" href="https://wrap.dingocoin.org"><Button className="wallet-button" variant="primary">Wrap Custodian</Button></a>
                </div>
              </div>
              <div className="wallet-section">
                <p>wDingocoin on Solana</p>
                <h5>Coming soon....</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-b" id="roadmap">
        <h2>ROADMAP - MILESTONES AND UPCOMING PLANS</h2>
        <CustomDivider/>
        <Container>
          <ul className="timeline">
            <li className="event eventcompleted" data-date="Apr 2, 2021"><h3><head> Birth of Dingocoin</head></h3><p>Genesis plus 1 block mined. Block reward set to 0 - 1,000,000.</p></li>
            <li className="event eventcompleted" data-date="Apr 8, 2021"><h3><head> 5,000 Blocks Mined</head></h3><p>Block reward halved to 500,000.</p></li>
            <li className="event eventcompleted" data-date="Jun 17, 2021"><h3><head> 100,000 Blocks Mined</head></h3><p>Block reward halved to 250,000.</p></li>
            <li className="event eventcompleted" data-date="Aug 29, 2021"><h3><head> Wrapped Dingocoin Released on BSC</head></h3><p>Hold and trade Dingocoin on BSC.</p></li>
            <li className="event eventcompleted" data-date="Aug 30, 2021"><h3><head> 200,000 Blocks Mined</head></h3><p>Block reward halved to 125,000.</p></li>
            <li className="event eventcompleted" data-date="Sep 18, 2021"><h3><head> Max Re-org Length Activated</head></h3><p>Protects against 51% attacks.<br/>Confirmations on exchanges can now be reduced significantly.</p></li>
            <li className="event eventincomplete" data-date="~ Oct, 2021"><h3><head> (Height 265,000) Chain ID switch activated</head></h3><p>Merged mining can now be done alongside Doge without conflict.<br/>Increases exposure to miners via AuxPOW.</p></li>
            <li className="event eventincomplete" data-date="~ Nov, 2021"><h3><head> 300,000 Blocks Mined</head></h3><p>Block reward halved to 62,500.</p></li>
            <li className="event eventincomplete" data-date="~ Jan, 2022"><h3><head> 400,000 Blocks Mined</head></h3><p>Block reward halved to 31,250.</p></li>
            <li className="event eventincomplete" data-date="~ Apr, 2022"><h3><head> 500,000 Blocks Mined</head></h3><p>Block reward halved to 15,625.</p></li>
            <li className="event eventincomplete" data-date="~ Jun, 2022"><h3><head> 600,000 Blocks Mined</head></h3><p>Block reward set permanentely to 10,000.</p></li>
          </ul>
        </Container>
      </section>

      <section className="section-footer">
        <h6>Copyright © The Dingocoin Project 2021</h6>
      </section>

    </div>
  );
}

export default App;
