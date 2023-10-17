import React, { useState } from "react";
import "./hero.css";
import Carousel from "react-bootstrap/Carousel";
import { BsDot } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineMinus,
  AiOutlineTwitter,
} from "react-icons/ai";

const Hero = () => {
  const [toggle, setToggle] = useState(false);
  const handleShow = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {/* carousel div */}
      <div className="heroCarousel">
        <Carousel controls={false}>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://www.washingtonpost.com/resizer/yqyYnAPaqzvAQTctds2CATqKnt8=/arc-anglerfish-washpost-prod-washpost/public/E5DZ2RF6IUI6XERKYQGJO5F4JA.jpg"
              alt="First slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)]" />
            {/* content */}
            <div className="absolute z-50 text-white w-full h-full top-0 flex flex-col justify-center items-left pl-[10px] pr-[10px] md:pl-[3em] md:pr-[3em]">
              <div className="mb-[20px] text-[#F6A704]">
                <h3 className=" text-3xl md:text-6xl">
                  Red Velvet - Easter Delicacy
                </h3>
                <h3 className="text-3xl md:text-6xl">Cake</h3>
              </div>
              <div className="text-lg">
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias aspernatur ipsa laborum repellendus natus debitis
                </p>
                <p> iusto consequatur aut dolorem corrupti.</p>
              </div>
              <div className="mt-[20px] cursor-pointer">
                <span className="p-[15px] bg-[#D0112B] text-white rounded-md">
                  ORDER NOW
                </span>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Second slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)]" />
            {/* content */}
            <div className="absolute z-50 text-white w-full h-full top-0 flex flex-col justify-center items-left pl-[10px] pr-[10px] md:pl-[3em] md:pr-[3em]">
              <div className=" mb-[20px] text-4xl text-[#F6A704]">
                <h3 className="text-3xl md:text-6xl">
                  Pizza Delight - Family Pack
                </h3>
                <h3 className="text-3xl md:text-6xl">Italian</h3>
              </div>
              <div className="text-lg">
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias aspernatur ipsa laborum repellendus natus debitis
                </p>
                <p> iusto consequatur aut dolorem corrupti.</p>
              </div>
              <div className="mt-[20px] cursor-pointer">
                <span className="p-[15px] bg-[#D0112B] text-white rounded-md">
                  ORDER NOW
                </span>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="relative">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3228803/pexels-photo-3228803.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Third slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)]" />
            {/* content */}
            <div className="absolute z-50 text-white w-full h-full top-0 flex flex-col justify-center items-left pl-[10px] pr-[10px] md:pl-[3em] md:pr-[3em]">
              <div className="mb-[20px] text-4xl text-[#F6A704]">
                <h3 className="text-3xl md:text-6xl">
                  Beef & Chicken Burger - Fries
                </h3>
                <h3 className="text-3xl md:text-6xl">Delicacy</h3>
              </div>
              <div className="text-lg">
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias aspernatur ipsa laborum repellendus natus debitis
                </p>
                <p> iusto consequatur aut dolorem corrupti.</p>
              </div>
              <div className="mt-[20px] cursor-pointer">
                <span className="p-[15px] bg-[#D0112B] text-white rounded-md">
                  ORDER NOW
                </span>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Third slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)]" />
            {/* content */}
            <div className="absolute z-50 text-white w-full h-full top-0 flex flex-col justify-center items-left pl-[10px] pr-[10px] md:pl-[3em] md:pr-[3em]">
              <div className="mb-[20px] text-4xl text-[#F6A704]">
                <h3 className="text-3xl md:text-6xl">
                  Beverage Special - Iced Blue
                </h3>
                <h3 className="text-3xl md:text-6xl">Curaco</h3>
              </div>
              <div className="text-lg">
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias aspernatur ipsa laborum repellendus natus debitis
                </p>
                <p> iusto consequatur aut dolorem corrupti.</p>
              </div>
              <div className="mt-[20px] cursor-pointer">
                <span className="p-[15px] bg-[#D0112B] text-white rounded-md">
                  ORDER NOW
                </span>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* overlay div */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]" />
      {/* content */}
      <div className="absolute w-full h-full top-0 flex flex-col  text-white z-50">
        <div className=" pl-[10px] pr-[10px] md:pl-[3em] md:pr-[3em] pt-[1em]">
          {/* topbar */}
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="hidden md:flex">
              <img
                src="https://xetova.com/wp-content/uploads/2022/07/java-house.png"
                alt=""
                className="hidden md:flex"
              />
            </div>
            {/* search */}
            <div
              className="flex items-center gap-[10px] md:gap-[1em] pb-[10px]"
              style={{ borderBottom: "3px solid white" }}
            >
              <div className=" text-white ">
                <input
                  type="text"
                  placeholder="Select Menu"
                  className="bg-transparent  border-none outline-none text-white text-lg"
                />
              </div>
              <div className="flex items-center">
                <BsDot
                  className=" text-2xl md:text-5xl text-[#F6A704] bounce-top"
                  style={{ marginRight: "-28px" }}
                />
                <BsDot
                  className="text-2xl md:text-5xl  text-zinc-100 bounce-topp"
                  style={{ marginRight: "-28px" }}
                />
                <BsDot
                  className="text-2xl md:text-5xl  text-[#00B172] bounce-top"
                  style={{ marginRight: "-28px" }}
                />
                <BsDot
                  className="text-2xl md:text-5xl  text-[#D0112B] bounce-topp"
                  // style={{ marginLeft: "-48px" }}
                />
              </div>
            </div>
            {/* navigation */}
            <div
              className="cursor-pointer"
              style={{ marginTop: "-40px", cursor: "pointer" }}
              onClick={handleShow}
            >
              <AiOutlineMinus
                className="text-5xl text-[#F6A704]"
                style={{ marginBottom: "-35px" }}
              />
              <AiOutlineMinus
                className="text-5xl text-[#00B172]"
                style={{ marginBottom: "-35px" }}
              />
              <AiOutlineMinus
                className="text-5xl text-[#D0112B]"
                style={{ marginBottom: "-30px" }}
              />
            </div>
          </div>
          {/* maincontent */}
          <div></div>
        </div>
      </div>
      {/* footer */}
      <div className="absolute w-full h-full top-0 flex flex-col justify-end  text-white ">
        <div className="pl-[10px] pr-[10px] md:pl-[3em] md:pr-[3em] pt-[1em] pb-[3em] ">
          <div className=" block md:flex justify-between items-center ">
            <div className="flex gap-[1em]">
              <div>
                <p>Copyright &copy; 2023 All Rights Reserved</p>
              </div>
              <div>
                <p>Privacy policy | Terms and Conditions</p>
              </div>
            </div>
            {/*  */}
            <div className="flex gap-[1em]">
              <div className="bg-[#D0112B] p-[10px] rounded-full cursor-pointer">
                <FaFacebookF className="text-2xl " />
              </div>
              <div className="bg-[#D0112B] p-[10px] rounded-full cursor-pointer">
                <AiOutlineTwitter className="text-2xl " />
              </div>
              <div className="bg-[#D0112B] p-[10px] rounded-full cursor-pointer">
                <AiOutlineInstagram className="text-2xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}

      {toggle && (
        <div className="absolute w-full h-full top-0 right-0 flex justify-end items-start z-50  text-white ">
          {/* navbar */}

          <div className="flex flex-col bg-[#004D72] h-[100vh] pt-[20px] pl-[2em] pr-[2em]  w-[85%] sm:w-[60%] md:w-[40%]  lg:w-[26%] justify-end items-end ">
            {/* close */}
            <div className="w-[100%] text-end mb-[3em] ">
              <p className="cursor-pointer" onClick={handleShow}>
                CLOSE <span>X</span>
              </p>
            </div>
            {/* NAVLINKS */}
            <div className="w-[100%] text-end">
              <ul>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    OUR STORY
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    OUR PRODUCTS
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    LEADERSHIP
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    CAREERS
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    JOB
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    BLOG
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    FIND A STORE
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    CONTACT US
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    SUPPLIER PORTAL
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    PRIVACY POLICY
                  </li>
                </div>
                <div>
                  <li
                    style={{ borderBottom: "2px solid white", padding: "8px" }}
                  >
                    TERMS & CONDITIONS
                  </li>
                </div>
              </ul>
            </div>
            {/* subscribe */}
            <div className="mt-[2em]">
              <h1 className="text-3xl">SUBSCRIBE TO NEWSLETTER</h1>
              <div className="w-full mt-[10px] mb-[10px]">
                <input
                  className="p-[8px] w-full text-black outline-none "
                  type="email"
                  placeholder="EMAIL"
                />
              </div>
              <div className="w-full bg-[#00B172] text-[#004D72]">
                <p className="p-[8px] text-center" style={{ fontWeight: 700 }}>
                  SUBSCRIBE
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
