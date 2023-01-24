import twitterLogo from './assets/twitter-logo.svg';
import './App.css';

// Constants
const TWITTER_HANDLE = '0xJobin';
const BUILDSPACE = '_buildspace'
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const BS_TWITTER_LINK = `https://twitter.com/${BUILDSPACE}`;


const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🖼 GIF Portal</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>&nbsp;
          <a
          className='footer-text'
          href={BS_TWITTER_LINK}
          target="_blank"
          rel='noreferrer'
          >{`on @${BUILDSPACE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
