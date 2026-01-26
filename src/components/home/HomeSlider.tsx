import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "../icons/home/hero/SliderArrow";
import { Image } from "@/components/ui/image";

const slides = [
  { img: "/images/home/slider1.png", title: "Abu Dhabi" },
  { img: "/images/home/slider2.jpg", title: "Abu Dhabi" },
  { img: "/images/home/slider2.jpg", title: "Abu Dhabi" },
  { img: "/images/home/slider1.png", title: "Abu Dhabi" },
];

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex items-center justify-center gap-2 -bottom-10!">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="md:hidden w-2 h-2 rounded-full bg-gray-300 hover:bg-[#018884] transition-all duration-300 slick-dot-custom" />
    ),
  };

  return (
    <div className="slider-container md:max-w-145 w-full mb-1">
      <style>{`
        .slick-dots li.slick-active .slick-dot-custom {
          width: 20px !important;
          background-color: #018884 !important;
        }
        .slick-dots li {
          margin: 0 !important;
          width: auto !important;
          height: auto !important;
        }
        .slick-dots li button {
          padding: 0 !important;
          width: auto !important;
          height: auto !important;
        }
        .slick-dots li button:before {
          display: none !important;
        }
        .slick-list {
          height: 240px !important;
        }
        @media (min-width: 768px) {
          .slick-list {
            height: 360px !important;
          }
        }
        .slick-slide:not(.slick-current) .slider-overlay {
           opacity: 1;
        }
        .slider-overlay {
           opacity: 0;
           transition: opacity 0.5s ease;
        }
      `}</style>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-card relative mx-2 group">
            <div className="relative md:w-68.75 w-[206px] md:h-[360px] h-[240px] rounded-4xl overflow-hidden">
              <Image
                src={slide.img}
                alt="slider image"
                wrapperClassName="md:w-68.75 w-[206px] md:h-[360px] h-[240px] rounded-4xl"
                className="w-full h-full object-cover"
              />
              <div className="slider-overlay absolute inset-0 bg-black/50 z-10 pointer-events-none" />
            </div>
            <div className="absolute md:w-68.75 w-[206px] h-10 bg-[#FFFFFF33] bottom-0 backdrop-blur-[20px] rounded-bl-4xl rounded-br-4xl flex items-center justify-between px-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-20">
              <p className="text-[#FFFFFF] md:text-xs text-[10px] font-medium">
                {slide.title}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[#FFFFFF] md:text-sm text-xs font-medium">
                  Explore
                </p>
                <SliderArrow />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSlider;
