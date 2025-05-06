import Link from "next/link";
import Image from "next/image";
import "./Footer.scss";
import { FaInstagram, FaLinkedin, FaEnvelope, FaDiscord, FaGithub } from "react-icons/fa6";
import { getPages } from "@/lib/api";

const AIRB_ADDRESS = "https://www.google.com/maps/place/Anteater+Instruction+and+Research+Building/@33.6427616,-117.8402626,17z/data=!3m2!4b1!5s0x80dcc5f1a6dec637:0xf4a403ac50ce607b!4m6!3m5!1s0x80dcde05f21338e1:0x37fff23ab5e9daa1!8m2!3d33.6427572!4d-117.8376823!16s%2Fg%2F11bwnb_831?entry=ttu";

export default async function Footer() {
  const pages = await getPages();

  return (
    <footer>
      <div className="info">
        <div className="address">
          <span className="info-col-head">Visit us!</span> <br />
          Anteater Instruction & Research Building (AIRB) #4080 <br />
          653 E Peltason Dr <br />
          Irvine, CA 92697 <br />
          <Link href={AIRB_ADDRESS}>View on Google Maps</Link>
        </div>
        <div className="info-col">
          <span className="info-col-head">Learn more</span>
          <ul>
            <li><Link href="https://www.its.uci.edu/">ITS at UCI</Link></li>
            <li><Link href="https://ite.org">ITE (International)</Link></li>
            <li><Link href="https://westernite.org">Western ITE</Link></li>
            <li><Link href="https://socalite.org">SoCal ITE</Link></li>
          </ul>
        </div>
        <div className="info-col">
          <span className="info-col-head">Sitemap</span>
          <ul>
            {pages.map((page: any) => (
              <li key={page.slug}>
                <Link href={`/${page.slug}`}>{page.title.rendered}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="socials">
          <div className="footer-logo">
            <Image
              src="/itenew.svg"
              height={111/2}
              width={321/2}
              alt="UCI ITE logo"
            />
          </div>
          <Link href="https://campusgroups.uci.edu/ite/leadership-team/">ITE on UCI CampusGroups</Link>
          <Link href="mailto:itechapter.uci@gmail.com">itechapter.uci@gmail.com</Link>
          <div className="social-icons">
            <Link href="http://eepurl.com/io-lgk">
              <FaEnvelope />
            </Link>
            <Link href="https://www.linkedin.com/company/28872357">
              <FaLinkedin />
            </Link>
            <Link href="https://www.instagram.com/ite.ucirvine/">
              <FaInstagram />
            </Link>
            <Link href="https://discord.gg/bXBbMVksKj">
              <FaDiscord />
            </Link>
            <Link href="https://github.com/literaiiy/uci-ite-wph">
              <FaGithub />
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