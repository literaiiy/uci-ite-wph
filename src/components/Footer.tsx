import "./Footer.scss";

const AIRB_ADDRESS = "https://www.google.com/maps/place/Anteater+Instruction+and+Research+Building/@33.6427616,-117.8402626,17z/data=!3m2!4b1!5s0x80dcc5f1a6dec637:0xf4a403ac50ce607b!4m6!3m5!1s0x80dcde05f21338e1:0x37fff23ab5e9daa1!8m2!3d33.6427572!4d-117.8376823!16s%2Fg%2F11bwnb_831?entry=ttu";

export default function Footer() {
  return (
    <footer>
      <div className="address">
        Anteater Instruction & Research Building #4080 <br />
        653 E Peltason Dr <br />
        Irvine, CA 92697 <br />
        <a href={AIRB_ADDRESS}>View on Google Maps</a>
      </div>
      <div className="copyright">
        <div>Copyright © {new Date().getFullYear()} UC Irvine Institute of Transportation Engineers. Powered by Next.js and WordPress.</div>
        <div>[social media icons]</div>
      </div>
    
  </footer>
  )
}