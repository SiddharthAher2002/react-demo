import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/slider-img1.jpg"
import image2 from "../../assets/images/slider-img2.jpg"
import image3 from "../../assets/images/slider-img3.png"
import image4 from "../../assets/images/slider-img4.png"

function IntroSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Slider {...settings}>
                        <div className="card">
                            <div className="card-body img-container">
                                <img className="slider-img" src={image4} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body img-container">
                                <img className="slider-img" src={image3} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body img-container">
                                <img className="slider-img" src={image2} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body img-container">
                                <img className="slider-img" src={image1} />
                            </div>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default IntroSlider;