import "./App.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image1 from "./assets/bike1.jpg";
import image2 from "./assets/bike2.png";
import image3 from "./assets/bike3.png";
import image4 from "./assets/bike4.png";
import image5 from "./assets/bike5.jpg";
import image6 from "./assets/bike6.png";
import image7 from "./assets/bike7.png";
import "@splidejs/react-splide/css";
function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-green-400 border-2 shadow p-3">
        USE SPLIDE JS SLIDER IN REACT
      </h1>
      <div>
        <Splide
          className=""
          aria-label="My Favorite Images"
          options={{
            autoplay: true,
            rewind: true,
            speed: 1000,
            perPage: 3,
            perMove: 2,
            gap: 10,
          }}
        >
          <SplideSlide className="border-2 shadow-md ">
            <img className="object-cover" src={image1} alt="" />
          </SplideSlide>
          <SplideSlide className="border shadow-md ">
            <img className="object-cover" src={image2} alt="" />
          </SplideSlide>
          <SplideSlide className="border shadow-md ">
            <img className="object-cover" src={image3} alt="" />
          </SplideSlide>
          <SplideSlide className="border shadow-md ">
            <img className="object-cover" src={image4} alt="" />
          </SplideSlide>
          <SplideSlide className="border shadow-md ">
            <img className="object-cover" src={image5} alt="" />
          </SplideSlide>
          <SplideSlide className="border shadow-md ">
            <img className="object-cover" src={image6} alt="" />
          </SplideSlide>
          <SplideSlide className="border shadow-md ">
            <img className="object-cover" src={image7} alt="" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default App;
