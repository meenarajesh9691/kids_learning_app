import React, { useEffect } from "react";
import $ from "jquery";
import Router from "next/router";
import Slider from "react-slick";

const English = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    $(() => {
      $("#english").click(() => {
        Router.push("/abcd");
      });
    });
  });

  return (
    <>
      <div className="container-sm mt-4 rounded-5 p-5 bg-danger">
        <h1 className="text-center pb-3 text-warning"> LESSONS</h1>

        <Slider {...settings}>
          <div>
            <div id="english" className="slide_box">
              <h1 className="english text-center">ABCD</h1>
              <img
                className="card-img-top"
                src="https://img.freepik.com/free-vector/children-holding-english-letters_1308-50014.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="slide_box">
              <h1 className="maths text-center">English Sentences</h1>
              <img
                className="card-img-top"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVUE6zyCZx39gDt-CojgdYYVXQpTljcSzSDwkoPLFutAeAA3npeX-qh08rjkjjJ7ymRUW-oXgktj5AQ2ALSlk0A1aIXqM6s0Co-LKTrFRR13_vkf29eMynoUC3rY1sx7OAaRDsymrfgl24oLeQ2e0qF6afTu2sCu3pLeCdYrOUAnjgMac04a4OuNovJA/s758/Simple%20English%20Sentences%20for%20Kids.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="slide_box">
              <h1 className="hindi text-center">Vowels</h1>
              <img
                className="card-img-top"
                src="https://i.ytimg.com/vi/YU6G6h-wV04/maxresdefault.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="slide_box">
              <h1 className="english text-center">EVS</h1>
              <img
                className="card-img-top"
                src="https://img.freepik.com/free-vector/children-holding-english-letters_1308-50014.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default English;
