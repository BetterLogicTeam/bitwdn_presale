import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import {} from "swiper/modules";
import "./Transcation.css";
import img1 from "../Assets/lqfirspeak-1.svg";
import img2 from "../Assets/rt2.svg";
import img3 from "../Assets/lqfirspeak-3.svg";
import img4 from "../Assets/lqfirspeak-2.svg";
import img5 from "../Assets/Group-46-1.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Transcation() {
  const swiperRef = useRef();

  return (
    <div className="main_transcaion_page">
      <div className="container">
        <div className="row trans_sc pt-5">
          <div className="col-md-5">
            <div className="trans_conent">
         
              <h1>The Realspad(Reals Token) Ecosystem</h1>
            </div>
            <div className="arrow_group">
              <div className="box_arrow me-3">
                <FaArrowLeftLong
                  style={{ fontSize: "1.3rem" }}
                  onClick={() => swiperRef.current.slidePrev()}
                />
              </div>
              <div
                className="box_arrow"
                onClick={() => swiperRef.current.slideNext()}
              >
                <FaArrowRightLong style={{ fontSize: "1.3rem" }} />
              </div>
            </div>
          </div>
          <div className="col-md-7 mt-3 mt-md-0 bg_card">
            <>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                // loop={true}
                modules={[]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="trns_box_content text-start">
                    <div className="card_first_img">
                      <img src={img5} alt="" />
                    </div>
                  
                    <h6>Commercial Agricultural Land Development</h6>
                    <p>
                    Produce property openings for votes to be suitable to use land for business structures, complexes & for Hi-tech Agriculture.

                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="trns_box_content text-start">
                    <div className="card_first_img">
                      <img src={img2} alt="" />
                    </div>
                   
                    <h6>Business Complexes</h6>
                    <p>
                    Produce and make architectures in the form of forecourts, strip promenades, and shopping centers to allow companies to strive for growth.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="trns_box_content text-start">
                    <div className="card_first_img">
                      <img src={img3} alt="" />
                    </div>
                 
                    <h6>Zero- Emission Homes</h6>
                    <p>
                    Designed with grid tied solar panels and watertight sequestration, which results in an energy efficient and carbon free terrain.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="trns_box_content text-start">
                    <div className="card_first_img">
                      <img src={img4} alt="" />
                    </div>
             
                    <h6>Multi Family Dwelling Units</h6>
                    <p>
                    Build new townhomes, condominiums, modular homes, and apartment complexes that are designed for families and individualities.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>







          <div className="clr_bg"></div>
        </div>
      </div>
    </div>
  );
}
