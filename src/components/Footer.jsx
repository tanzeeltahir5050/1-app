import React from "react";
import rac2 from "../assets/rac-2.png";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import getstarted from "../assets/get-started.png";

const imageData = [
  {
    id: 1,
    imgName: image1,
  },
  {
    id: 2,
    imgName: image2,
  },
  {
    id: 3,
    imgName: image3,
  },
  {
    id: 4,
    imgName: image4,
  },
  {
    id: 5,
    imgName: image5,
  },
];

const supportLinks = [
  {
    id: 1,
    name: "Help centre",
  },
  {
    id: 2,
    name: "Account information",
  },
  {
    id: 3,
    name: "About",
  },
  {
    id: 4,
    name: "Contact us",
  },
];

const HelpandSolutionLinks = [
  {
    id: 1,
    name: "Talk to support",
  },
  {
    id: 2,
    name: "Support docs",
  },
  {
    id: 3,
    name: "System status",
  },
  {
    id: 4,
    name: "Covid responde",
  },
];

const ProductLinks = [
  {
    id: 1,
    name: "Update",
  },
  {
    id: 2,
    name: "Security",
  },
  {
    id: 3,
    name: "Beta test",
  },
  {
    id: 4,
    name: "Pricing product",
  },
];
function Footer() {
  return (
    <>
      <div className="min-w-full md:w-[498px] h-auto bg-[#161C28] py-8 mt-96">
        <div className="w-full flex justify-evenly items-center flex-col md:flex-row">
          <div className="md:w-[466px] h-full md:h-[588px]">
            <h1 className="font-medium md:font-semibold text-3xl md:text-5xl text-white">
              People are Saying About Us
            </h1>
            <p className="font-medium text-lg text-white py-6 leading-7">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <div>
              <img src={rac2} alt="" width={45} height={38} className="my-4" />
              <p className="font-medium text-lg text-white">
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </p>
              <p className="font-medium text-lg text-white py-8">
                _ Aria Zinanrio
              </p>
            </div>
            <div className="flex">
              {imageData.map((item) => (
                <img
                  key={item.id}
                  className="rounded-full w-8 h-8 md:w-16 md:h-16 mx-1 md:mx-2"
                  src={item.imgName}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="mt-4 bg-[#222938] w-full md:w-[612px] md:h-[588px] rounded-3xl">
            <div className="mt-12 flex flex-col items-center justify-center">
              <img src={getstarted} alt="" width={72} height={86} />
              <h1 className="font-medium text-white text-3xl">Get Started</h1>
            </div>
            <div className="flex m-2  items-center justify-around">
              <form className="grid w-[440px] h-[340px]">
                <div>
                  <label
                    htmlFor="email"
                    className="font-medium text-lg text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    className="rounded-[10px] w-full h-12 p-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-medium text-lg text-white"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="rounded-[10px] w-full p-2 text-[#A6A6A6]"
                    rows={3}
                    defaultValue="What are you say ?"
                  />
                </div>
                <button className="w-full font-semibold text-base text-white bg-[#3585FF] rounded-lg">
                  Request Demo
                </button>
                <a className="text-right font-medium text-sm text-white m-1">
                  or Start Free Trial
                </a>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="">
            <h1 className="font-medium md:font-semibold text-3xl md:text-5xl pt-4 text-[#3585FF]">
              TO-DO
            </h1>
            <p className="font-medium text-lg text-[#A6A6A6] my-4 md:my-8">
              Get started noew try our product
            </p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email here"
              className="border rounded-3xl bg-transparent h-12 p-2 w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="">
              <h1 className="font-medium text-white text-lg pt-4 pb-4">
                Support
              </h1>
              <ul>
                {supportLinks.map((item) => (
                  <li key={item.id} className="pb-3">
                    <a
                      href="#"
                      className="font-normal md:font-medium text-[#A6A6A6] text-base md:text-lg"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[195px] h-[200px]">
              <h1 className="font-medium text-white text-lg pt-4 pb-4">
                Help and Solution
              </h1>
              <ul>
                {HelpandSolutionLinks.map((item) => (
                  <li key={item.id} className="pb-3">
                    <a
                      href="#"
                      className="font-normal md:font-medium text-[#A6A6A6] text-base md:text-lg"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[195px] h-[200px]">
              <h1 className="font-medium text-white text-lg pt-4 pb-4">
                Product
              </h1>
              <ul>
                {ProductLinks.map((item) => (
                  <li key={item.id} className="pb-3">
                    <a
                      href="#"
                      className="font-normal md:font-medium text-[#A6A6A6] text-base md:text-lg"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-5 md:m-20">
          <p className="font-normal md:font-medium text-base md:text-sm text-white">
            &copy; 2022 Inc. Copyright and rights reserved
          </p>
          <p className="font-normal md:font-medium text-base md:text-sm text-white">
            Terms and Condtions . Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
