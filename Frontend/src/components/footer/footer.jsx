import React from "react";
import Logo from "./logo.png";
import { NavLink } from "react-router-dom";

function footer() {
  return (
    <footer id="footer" class="bg-gray-500 text-white text-center p-4 w-full">
      {/* <!-- Main Footer Content --> */}
      <div class="container mx-auto px-4 py-16" id="el-ui8kcqbo">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          id="el-gtqx7vvd"
        >
          {/* <!-- Company Info --> */}
          <div id="el-58q5kowt">
            <div className="flex justify-center gap-6 items-center mb-4">
              <div className="flex items-center">
                <NavLink to="/">
                  <img
                    src={Logo}
                    width={50}
                    alt=""
                    className="rounded-full hover:cursor-pointer "
                  />
                </NavLink>
              </div>
              <div className="flex items-center">
                <h3 class="text-2xl font-bold text-white" id="el-todze862">
                  LearnVerse
                </h3>
              </div>
            </div>
            <p class="mb-6" id="el-lrpxgycj">
              Our project aims to deliver a feature-rich online learning
              platform, enabling seamless access to diverse courses with
              user-friendly navigation and robust performance.
            </p>
            <div
              class="flex justify-center items-center gap-4"
              id="el-svwr51ye"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/900px-Facebook_Logo_2023.png?20231011121526"
                alt="Visa"
                class="h-6 transition-opacity duration-300 opacity-100 hover:cursor-pointer"
                loading="lazy"
                id="el-6t4uwiin"
              ></img>
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
                alt="Mastercard"
                class="h-6 transition-opacity duration-300 opacity-100 hover:cursor-pointer"
                loading="lazy"
                id="el-cevpy4jt"
              ></img>
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                alt="PayPal"
                class="h-6 transition-opacity duration-300 opacity-100 hover:cursor-pointer"
                loading="lazy"
                id="el-piaqobo6"
              ></img>
              <img
                src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-social-media-round-icon-png-image_8704823.png"
                alt="Apple Pay"
                class="h-6 transition-opacity duration-300 opacity-100 hover:cursor-pointer"
                loading="lazy"
                id="el-0258bkce"
              ></img>
            </div>
          </div>

          {/* <!-- Quick Links --> */}
          <div id="el-b6fzxx8b">
            <h4 class="text-lg font-semibold text-white mb-6" id="el-tyvm8jry">
              Quick Links
            </h4>
            <ul class="space-y-4" id="el-52a8lkcz">
              <li id="el-z7eaecx5">
                <a
                  href="#"
                  class="hover:text-blue-500 transition duration-300"
                  id="el-ykp5n8o8"
                >
                  Home
                </a>
              </li>
              <li id="el-0cmqh3ca">
                <a
                  href="#"
                  class="hover:text-blue-500 transition duration-300"
                  id="el-9z7h035y"
                >
                  Special Offers
                </a>
              </li>
              {/* <li id="el-8rdsp7yb">
                <a
                  href="#"
                  class="hover:text-orange-500 transition duration-300"
                  id="el-tlkmwu1a"
                >
                  Track Order
                </a>
              </li> */}
              <li id="el-prefh93q">
                <a
                  href="#"
                  class="hover:text-blue-500 transition duration-300"
                  id="el-2rzjnait"
                >
                  My Account
                </a>
              </li>
              {/* <li id="el-gqkhram4">
                <a
                  href="#"
                  class="hover:text-orange-500 transition duration-300"
                  id="el-x3oe0r98"
                >
                  Gift Cards
                </a>
              </li> */}
            </ul>
          </div>

          {/* <!-- Customer Support --> */}
          <div id="el-f5ryrr71">
            <h4 class="text-lg font-semibold text-white mb-6" id="el-0ri4pgpz">
              Customer Support
            </h4>
            <ul class="space-y-4" id="el-mvt1jhcm">
              <li id="el-ppvqk1fx">
                <a
                  href="#"
                  class="hover:text-blue-500 transition duration-300"
                  id="el-543zwkvo"
                >
                  Contact Us
                </a>
              </li>
              <li id="el-r5i8wxqx">
                <a
                  href="#"
                  class="hover:text-blue-500 transition duration-300"
                  id="el-yb94thca"
                >
                  FAQ
                </a>
              </li>
              <li id="el-hbtgppmz">
                <a
                  href="#"
                  class="hover:text-blue-500 transition duration-300"
                  id="el-8ymtqool"
                >
                  Terms of Service
                </a>
              </li>
              <li id="el-cte1g996">
                <a
                  href="#"
                  class="hover:text-blue-500 transition duration-300"
                  id="el-wvpwzjmu"
                >
                  Privacy Policy
                </a>
              </li>
              <li id="el-2rytg8bu">
                <a
                  href="#"
                  class="hover:text-blue-500 transition duration-300"
                  id="el-jpt31eb5"
                >
                  Company Areas
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Contact Info --> */}
          <div id="el-09c5rtsz">
            <h4 class="text-lg font-semibold text-white mb-6" id="el-nq80gxuk">
              Contact Info
            </h4>
            <ul class="space-y-4" id="el-gmdl8mv7">
              <li class="flex items-center gap-3" id="el-tj6taxoe">
                <i
                  class="fa-solid fa-location-dot text-white"
                  id="el-fm05uuar"
                ></i>
                <span id="el-sjplxdhj">
                  Cosmos Colloge of Management and Technology
                </span>
              </li>
              <li class="flex items-center gap-3" id="el-j5fz0i1m">
                <i
                  class="fa-solid fa-phone text-white"
                  id="el-2ja5ajc1"
                ></i>
                <span id="el-js13euuh">9822586055</span>
              </li>
              <li class="flex items-center gap-3" id="el-ug7vffqp">
                <i
                  class="fa-solid fa-envelope text-white"
                  id="el-r9lsyhgb"
                ></i>
                <span id="el-1ylptha7">support@learnverse.com</span>
              </li>
              <li class="flex items-center gap-3" id="el-h1zqtz1h">
                <i
                  class="fa-solid fa-clock text-white"
                  id="el-21slrgx8"
                ></i>
                <span id="el-qvg6wlpu">Mon-Sun: 9:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Bottom Bar --> */}
      <div class="border-t border-gray-800" id="el-9e2xdx2z">
        <div class="container mx-auto px-4 py-6" id="el-w9j934g9">
          <div
            class="flex flex-col md:flex-row justify-center items-center gap-4"
            id="el-iwmbb2ts"
          >
            <div class="text-sm " id="el-2vxx88jd">
              © 2023 FoodMart. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
