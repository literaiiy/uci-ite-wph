import Link from "next/link";
import Image from "next/image";
import "./Footer.scss";
import { FaInstagram, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa6";

const AIRB_ADDRESS = "https://www.google.com/maps/place/Anteater+Instruction+and+Research+Building/@33.6427616,-117.8402626,17z/data=!3m2!4b1!5s0x80dcc5f1a6dec637:0xf4a403ac50ce607b!4m6!3m5!1s0x80dcde05f21338e1:0x37fff23ab5e9daa1!8m2!3d33.6427572!4d-117.8376823!16s%2Fg%2F11bwnb_831?entry=ttu";

export default function Footer() {
  return (
    <footer>
      <div className="info">
        <div className="address">
          <h3>Visit us!</h3>
          Anteater Instruction & Research Building #4080 <br />
          653 E Peltason Dr <br />
          Irvine, CA 92697 <br />
          <a href={AIRB_ADDRESS}>View on Google Maps</a>
        </div>
        <div className="info-col">
          <h3>More ITE</h3>
          <ul>
            <li><Link href="https://ite.org">ITE (International)</Link></li>
            <li><Link href="https://westernite.org">Western ITE</Link></li>
            <li><Link href="https://socalite.org">SoCal ITE</Link></li>
          </ul>
        </div>
        <div className="socials">
          <div className="footer-logo">
            <Image
              src="/anteater.svg"
              height={36}
              width={64}
              alt="UCI ITE logo"
            />
            <span>uci ite</span>
          </div>
          <Link href="mailto:itechapter.uci@gmail.com">itechapter.uci@gmail.com</Link>
          <div className="social-icons">
            <Link href="https://linktr.ee/ite.ucirvine">
              <FaEnvelope />
            </Link>
            <Link href="https://www.linkedin.com/company/28872357">
              <FaLinkedin />
            </Link>
            <Link href="https://www.instagram.com/ucirvine.ite/">
              <FaInstagram />
            </Link>
            <Link href="https://discord.gg/bXBbMVksKj">
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>Copyright © {new Date().getFullYear()} UC Irvine Institute of Transportation Engineers.
        Powered by <Link href="https://nextjs.org">Next.js</Link> and WordPress & supported by <Link href="https://sites.uci.edu/">UCI OIT</Link>.</div>
      </div>
    
  </footer>
  )
}