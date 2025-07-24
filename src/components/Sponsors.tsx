import Image from "next/image"
import "./Sponsors.scss"
// import sponsor_ganddini from "../lib/logos/sponsor_ganddini.svg"
// import sponsor_iteris from "../lib/logos/sponsor_iteris.svg"
// import sponsor_wsp from "../lib/logos/sponsor_wsp.png"

const Sponsors = () => {
  return (
  <div className="sponsors">
    <h2 className="thanks-sponsors">Thank you to our sponsors!</h2>
    <div className="sponsor-box">
      <h3>Platinum</h3>
      <div className="sponsor-list">
        <a href="https://iteris.com">
          <Image
            src="/logos/sponsor-iteris.svg"
            alt="Iteris"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: 'auto', height: '60px' }}
            // width={200}
            // height={200}
          />
        </a>
      </div>
    </div>
    <div className="sponsor-box">
      <h3>Bronze</h3>
      <div className="sponsor-list">
        <span>Cathy Leong</span>
        <span>Neelam Dorman</span>
        <a href="https://ganddini.com/">
          <Image
            src="/logos/sponsor-ganddini.svg"
            alt="Ganddini"
            height={0}
            width={0}
            style={{ width: 'auto', height: '80px' }}
            sizes="100vw" 
          />
        </a>
        <a href="https://wsp.com/en-us">
          <Image
            src="/logos/sponsor-wsp.png"
            alt="WSP"
            height={0}
            width={0}
            style={{ width: 'auto', height: '60px', filter: 'brightness(100)' }}
            sizes="100vw"
          />
        </a>
      </div>
    </div>
    <p>UCI ITE relies heavily on the support of sponsors. If you would like to contribute, please click <a href="https://zotfunder.give.uci.edu/project/43348">here</a>. Thank you!</p>
  </div>
  );
}


export default Sponsors;