import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

//image
import meal1 from "./img/meal1.jpg";
import meal2 from "./img/meal2.jpg";
import meal3 from "./img/meal3.jpg";

//css
import "./_homerestorant.scss";

const slideImages = [
  {
    url: meal1,
    caption: "Hamburder 65₺",
  },
  {
    url: meal2,
    caption: "Orta boy Pizza 120₺",
  },
  {
    url: meal3,
    caption: "Suşi 100₺",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="divStyle"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <span className="spanStyle">{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
