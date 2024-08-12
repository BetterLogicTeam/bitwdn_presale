import React from "react";
import "./Footer.css";
import logo from "../Assets/logoicon.svg";
import { FaDiscord, FaFacebook, FaTelegram ,FaReddit} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import instragram from "../Assets/instragram.svg";
import LinkedIn from "../Assets/LinkedIn.svg";
import FB from "../Assets/FB.svg";
import Twitter from "../Assets/Twitter.svg";

import FooterLogo from "../Assets/FooterLogo.png";
import Discord from "../Assets/discord-round-black-icon.svg"

import {
  BsFacebook,
  BsInstagram,
  BsMedium,
  BsReddit,
  BsTelegram,
  BsTwitter,
  BsDiscord,
  BsXCircle,
  BsX,
  
} from "react-icons/bs";
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <div className="Main_footer_bg">
      <div className="container">
        <div className="row m-0">
          {/* <div className="col-md-6">
            <img src={FooterLogo} alt="" style={{ width: "30%" }} />
            <p className="cpr">©2024,All Rights Reserved</p>
          </div> */}
          <div className="col-md-6">
            {/* <img src={logo} alt="" /> */}
            <div>
              <h1 className="join_c">join the community</h1>
              <p className="alli">
                Discuss,build with, and meet thousands of starter from all
                around the world.{" "}
              </p>
              <div className="social_icons d-flex gap-3">


                {/* <a
                  href="https://www.facebook.com/profile.php?id=61554738035919"
                  target="_blank"
                
                >
                  <div></div>
                  <img src={FB} alt="" style={{ width: "80%" }} />
                </a> */}


            

          
    

                <div className="around_social">
                  <a href="#" target="_blank">
                        <FaTelegram className="icons_clr" />
                  </a>
              
                </div>


    

              </div>
     
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
