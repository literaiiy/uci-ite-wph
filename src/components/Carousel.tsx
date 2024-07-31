'use client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

import Slider from 'react-slick'

const SLICK_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
}

interface Props {
  media: [string, string, string][];
}

const Carousel: React.FC<Props> = ({media}) => {

  return (
    <Slider {...SLICK_SETTINGS}>
      {media.map((med) => (
        <div className="img-container" key={med[0]}>
          <img src={med[0]}/>
          <span className="caption">
            <span className="title">{
              decodeHtml(med[1]).replace("<p>", "").replace("</p>", "")
            }</span>
            <span className="location">{getLocationFromDesc(med[2])}</span>
          </span>
        </div>
      ))}
    </Slider>
  )
}

// Get location (text surrounded by `{{` and `}}`) from description
const getLocationFromDesc = (desc: string): string => {
  const start: number = desc.indexOf("{{");
  const end: number = desc.indexOf("}}");
  return start != -1 ? desc.slice(start + 2, end) : "";
}

const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default Carousel;