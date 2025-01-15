import React from "react";
import { FaApple, FaApplePay, FaAppStore, FaDownload, FaGooglePlay, FaLifeRing, FaMobile } from "react-icons/fa";


function Logo() {
  return (
    <div className="sticky top-0 border-b border-neutral-200/20 px-6 py-6">
      <div className="container mx-auto max-w-screen-xl py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* <!-- Left Content --> */}
        <div className="container m-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
            {/* <!-- Left Card --> */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unlimited assets for the creatively obsessed
                </h3>
                <p className="text-gray-600">
                  Access the broadest range of asset categories in one place
                </p>
              </div>
            </div>

            {/* <!-- Right Card --> */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
              <div className="flex-grow">
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">
                      $16.50
                    </span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-gray-500 mt-2">Cancel any time</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Unlimited downloads
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    21+ million premium assets
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Lifetime commercial license
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300">
                  Get unlimited downloads
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section
          id="ResourceCards"
          class="container min-h-screen  py-20 flex items-center"
        >
          <div class="container mx-auto px-4" id="el-dxjyel2d">
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              id="el-o4mpsec7"
            >
              {/* <!-- Stock Video Card --> */}
              <div
                class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-transform duration-300"
                id="el-s9ek63hq"
              >
                <div class="aspect-video bg-gray-100" id="el-5of9vdcq">
                  {/* <video class="w-full h-full object-cover" autoplay="" loop="" muted="" playsinline="" __idm_id__="647169" id="el-j4kn6t1v">
              <source src="https://elements.envato.com/aerial-view-of-dubai-frame-landmark-during-the-sun-BRJHDCG" type="video/mp4" id="el-k7novj52">
              </source>
            </video> */}
                  <img
                    src="https://elements-resized.envatousercontent.com/elements-video-cover-images/607f59be-3b9e-4a8f-a8ff-b963140ddb08/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=d7062da0f28566ff1b7b917602f8b44b33ac549dd5029e2bcd82fdcfab3c74d7"
                    alt=""
                  />
                </div>
                <div class="p-6" id="el-o54hk3z6">
                  <h3 class="text-xl font-semibold mb-2" id="el-vta1n3o3">
                    Stock Videos
                  </h3>
                  <p class="text-gray-600" id="el-a3da5omu">
                    High-quality video content for your projects
                  </p>
                </div>
              </div>

              {/* <!-- Stock Photo Card --> */}
              <div
                class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-transform duration-300"
                id="el-d9pm2x03"
              >
                <div class="aspect-video bg-gray-100" id="el-5qm0uk2y">
                  <img
                    src="https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg"
                    alt="Stock Photos"
                    class="w-full h-full object-cover transition-opacity duration-300 opacity-100"
                    loading="lazy"
                    id="el-zop2zilr"
                  ></img>
                </div>
                <div class="p-6" id="el-3s99qf3w">
                  <h3 class="text-xl font-semibold mb-2" id="el-n7fru2lr">
                    Stock Photos
                  </h3>
                  <p class="text-gray-600" id="el-1uscyr2n">
                    Professional photography for every need
                  </p>
                </div>
              </div>

              {/* <!-- Code Card --> */}
              <div
                class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-transform duration-300"
                id="el-hllt4jfd"
              >
                <div class="aspect-video bg-gray-100" id="el-p6yeh404">
                  <img
                    src="https://media.istockphoto.com/id/805182686/photo/computer-code-snippet.jpg?s=612x612&w=0&k=20&c=b3ybSL3UcRYHZWXXKqD3NhZ2ANeaLjaV176LiGvVNOY="
                    alt="Code Snippets"
                    class="w-full h-full object-cover transition-opacity duration-300 opacity-100"
                    loading="lazy"
                    id="el-aik21uop"
                  ></img>
                </div>
                <div class="p-6" id="el-q59fip51">
                  <h3 class="text-xl font-semibold mb-2" id="el-m3osrlzj">
                    Code Snippets
                  </h3>
                  <p class="text-gray-600" id="el-bdttjqwd">
                    Ready-to-use code solutions
                  </p>
                </div>
              </div>

              {/* <!-- Music Card --> */}
              <div
                class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-transform duration-300"
                id="el-moe4881z"
              >
                <div class="aspect-video bg-gray-100" id="el-h1x2w10s">
                  <img
                    src="https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/l/lm1051701-DprDZsfkdFolf6gX4owjPLD.ag6Jzu8h.jpg"
                    alt="Music Library"
                    class="w-full h-full object-cover transition-opacity duration-300 opacity-100"
                    loading="lazy"
                    id="el-1t1tnhwb"
                  ></img>
                </div>
                <div class="p-6" id="el-p5fm957x">
                  <h3 class="text-xl font-semibold mb-2" id="el-qjt2xlyz">
                    Music Library
                  </h3>
                  <p class="text-gray-600" id="el-shtjtpe2">
                    Royalty-free music tracks
                  </p>
                </div>
              </div>

              {/* <!-- Graphics Card --> */}
              <div
                class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-transform duration-300"
                id="el-lzfunjam"
              >
                <div class="aspect-video bg-gray-100" id="el-hbq4jx5m">
                  <img
                    src="https://www.cdmi.in/courses@2x/3_Graphic_Design.webp"
                    alt="Graphics"
                    class="w-full h-full object-cover transition-opacity duration-300 opacity-100"
                    loading="lazy"
                    id="el-t1pm6g16"
                  ></img>
                </div>
                <div class="p-6" id="el-kjebtvt8">
                  <h3 class="text-xl font-semibold mb-2" id="el-rvhaxqeo">
                    Graphics
                  </h3>
                  <p class="text-gray-600" id="el-b4tl43j8">
                    Vector graphics and illustrations
                  </p>
                </div>
              </div>

              {/* <!-- Website Templates Card --> */}
              <div
                class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-transform duration-300"
                id="el-g3akke3b"
              >
                <div class="aspect-video bg-gray-100" id="el-0clfnrzn">
                  <img
                    src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
                    alt="Website Templates"
                    class="w-full h-full object-cover transition-opacity duration-300 opacity-100"
                    loading="lazy"
                    id="el-u2th4733"
                  ></img>
                </div>
                <div class="p-6" id="el-ee0mx1yx">
                  <h3 class="text-xl font-semibold mb-2" id="el-v8bid13n">
                    Website Templates
                  </h3>
                  <p class="text-gray-600" id="el-gk4r5690">
                    Professional website designs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="special-offers" class="container py-16 ">
          <div class="container mx-auto px-4" id="el-hvfi48fj">
            {/* <!-- Section Header --> */}
            <div class="text-center mb-12" id="el-aqmkoo3f">
              <h2
                class="text-3xl font-bold text-gray-900 mb-4"
                id="el-etjmrod4"
              >
                Special Offers
              </h2>
              <p class="text-gray-600" id="el-kxi8k72d">
                Don't miss out on these amazing deals
              </p>
            </div>

            {/* <!-- Offers Grid --> */}
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-60c4ldi4">
              {/* <!-- Large Offer Card --> */}
              <div
                class="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white relative overflow-hidden"
                id="el-0cbtrn4d"
              >
                <div class="relative z-10" id="el-86hgveh3">
                  <span
                    class="inline-block px-4 py-1 bg-white text-orange-500 rounded-full text-sm font-semibold mb-4"
                    id="el-o694zn67"
                  >
                    Limited Time
                  </span>
                  <h3 class="text-3xl font-bold mb-4" id="el-cimn95ea">
                    Family Combo Deal
                  </h3>
                  <p class="mb-6" id="el-jcopgnkd">
                    Get 2 large pizzas, 4 drinks, and 2 sides at 30% off
                  </p>
                  <div class="flex items-center gap-4 mb-6" id="el-sgqnih1d">
                    <div class="text-4xl font-bold" id="el-1h76tjwg">
                      $39.99
                    </div>
                    <div
                      class="text-xl line-through opacity-75"
                      id="el-x93cuyn5"
                    >
                      $59.99
                    </div>
                  </div>
                  <button
                    class="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 flex items-center gap-2 w-fit"
                    id="el-2wpb1bgz"
                  >
                    Order Now
                    <i class="fa-solid fa-arrow-right" id="el-9bhhj95h"></i>
                  </button>
                </div>
                <div
                  class="absolute right-0 bottom-0 opacity-10 text-9xl"
                  id="el-pvxs0zh3"
                >
                  <i class="fa-solid fa-pizza-slice" id="el-0qoce4x9"></i>
                </div>
              </div>

              {/* <!-- Small Offers Grid --> */}
              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-6"
                id="el-w1vbbgk6"
              >
                {/* <!-- Small Offer 1 --> */}
                <div
                  class="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-200"
                  id="el-cfaeriqi"
                >
                  <div
                    class="flex items-start justify-between mb-4"
                    id="el-5hrjsur3"
                  >
                    <div
                      class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                      id="el-jm4n5qsd"
                    >
                      <i
                        class="fa-solid fa-burger text-orange-500 text-xl"
                        id="el-t2e7tlu0"
                      ></i>
                    </div>
                    <span
                      class="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
                      id="el-6rcnltaw"
                    >
                      Save 20%
                    </span>
                  </div>
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-2"
                    id="el-w3enifm6"
                  >
                    Website Templates
                  </h3>
                  <p class="text-gray-600 text-sm mb-4" id="el-wgt9br3t">
                    Get any responsive design
                  </p>
                  <div class="flex items-center gap-2 mb-4" id="el-dy01grpw">
                    <span
                      class="text-2xl font-bold text-gray-900"
                      id="el-1losu4qo"
                    >
                      $12.99
                    </span>
                    <span
                      class="text-sm text-gray-500 line-through"
                      id="el-sghg1m4l"
                    >
                      $15.99
                    </span>
                  </div>
                  <button
                    class="w-full bg-gray-900 text-white py-2 rounded-full hover:bg-gray-800 transition duration-300"
                    id="el-0pjolvl6"
                  >
                    Claim Offer
                  </button>
                </div>

                {/* <!-- Small Offer 2 --> */}
                <div
                  class="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-200"
                  id="el-iyyi6vn9"
                >
                  <div
                    class="flex items-start justify-between mb-4"
                    id="el-25a42nf6"
                  >
                    <div
                      class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                      id="el-w0x7jizb"
                    >
                      <i
                        class="fa-solid fa-bowl-food text-orange-500 text-xl"
                        id="el-87hrp5z8"
                      ></i>
                    </div>
                    <span
                      class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                      id="el-z1r2rix7"
                    >
                      New
                    </span>
                  </div>
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-2"
                    id="el-yadgr9vw"
                  >
                    Course
                  </h3>
                  <p class="text-gray-600 text-sm mb-4" id="el-ei52ppg4">
                    Get unlimited courses
                  </p>
                  <div class="flex items-center gap-2 mb-4" id="el-fcig0nk7">
                    <span
                      class="text-2xl font-bold text-gray-900"
                      id="el-06jv6oud"
                    >
                      $10.50
                    </span>
                    <span
                      class="text-sm text-gray-500 line-through"
                      id="el-6ly8o7om"
                    >
                      $29.99
                    </span>
                  </div>
                  <button
                    class="w-full bg-gray-900 text-white py-2 rounded-full hover:bg-gray-800 transition duration-300"
                    id="el-k7knfwbi"
                  >
                    Claim Offer
                  </button>
                </div>

                {/* <!-- Small Offer 3 --> */}
                <div
                  class="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-200"
                  id="el-yd3prwpy"
                >
                  <div
                    class="flex items-start justify-between mb-4"
                    id="el-pqdn9w5y"
                  >
                    <div
                      class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                      id="el-ajtcslpw"
                    >
                      <i
                        class="fa-solid fa-ice-cream text-orange-500 text-xl"
                        id="el-z573s0ea"
                      ></i>
                    </div>
                    <span
                      class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm"
                      id="el-w7030hzo"
                    >
                      2 for 1
                    </span>
                  </div>
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-2"
                    id="el-bbgb8v5s"
                  >
                    Stock videos
                  </h3>
                  <p class="text-gray-600 text-sm mb-4" id="el-epsizg39">
                    Buy one Video, get one free
                  </p>
                  <div class="flex items-center gap-2 mb-4" id="el-bkn4wgli">
                    <span
                      class="text-2xl font-bold text-gray-900"
                      id="el-fntat5f5"
                    >
                      $8.99
                    </span>
                    <span
                      class="text-sm text-gray-500 line-through"
                      id="el-e3ga0ywp"
                    >
                      $17.98
                    </span>
                  </div>
                  <button
                    class="w-full bg-gray-900 text-white py-2 rounded-full hover:bg-gray-800 transition duration-300"
                    id="el-4qv8lfti"
                  >
                    Claim Offer
                  </button>
                </div>

                {/* <!-- Small Offer 4 --> */}
                <div
                  class="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-200"
                  id="el-fr9z8wjk"
                >
                  <div
                    class="flex items-start justify-between mb-4"
                    id="el-1i2opp35"
                  >
                    <div
                      class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                      id="el-a2g71u8v"
                    >
                      <i
                        class="fa-solid fa-drumstick-bite text-orange-500 text-xl"
                        id="el-4ijd9s5v"
                      ></i>
                    </div>
                    <span
                      class="bg-red-500 text-white px-3 py-1 rounded-full text-sm"
                      id="el-3qzjeuh9"
                    >
                      Hot Deal
                    </span>
                  </div>
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-2"
                    id="el-jm5fqmy0"
                  >
                    Codes
                  </h3>
                  <p class="text-gray-600 text-sm mb-4" id="el-s3bf4zbl">
                    20 Codes
                  </p>
                  <div class="flex items-center gap-2 mb-4" id="el-5d7kaxxu">
                    <span
                      class="text-2xl font-bold text-gray-900"
                      id="el-qgpdvavb"
                    >
                      $19.99
                    </span>
                    <span
                      class="text-sm text-gray-500 line-through"
                      id="el-rh3qo5um"
                    >
                      $24.99
                    </span>
                  </div>
                  <button
                    class="w-full bg-gray-900 text-white py-2 rounded-full hover:bg-gray-800 transition duration-300"
                    id="el-wda38r65"
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="how-it-works" class="py-16 container">
          <div class="container mx-auto px-4" id="el-wtb39tsi">
            {/* <!-- Section Header --> */}
            <div class="container text-center mb-16" id="el-yzl7vqzo">
              <h2
                class="text-3xl font-bold text-gray-900 mb-4"
                id="el-45tx7zm0"
              >
                How It Works
              </h2>
              <p class="text-gray-600" id="el-8j8a21z9">
                Subscribe any content in 4 simple steps
              </p>
            </div>

            {/* <!-- Steps Container --> */}
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              id="el-nlrn19hi"
            >
              {/* <!-- Step 1 --> */}
              <div class="relative text-center" id="el-6c69o5r2">
                <div
                  class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  id="el-emcp64eu"
                >
                  <i
                    class="fa-solid fa-magnifying-glass text-3xl text-orange-500"
                    id="el-gei9t683"
                  ></i>
                </div>
                <div
                  class="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-orange-200"
                  id="el-qra36tcr"
                >
                  <div
                    class="absolute right-0 -top-2 text-orange-500"
                    id="el-fgh9yb2r"
                  >
                    <i class="fa-solid fa-chevron-right" id="el-1ikucky6"></i>
                  </div>
                </div>
                <h3
                  class="text-xl font-semibold text-gray-900 mb-3"
                  id="el-2u6x2ex8"
                >
                  Choose Your Content
                </h3>
                <p class="text-gray-600" id="el-207frc9n">
                  Browse our menu and select your required content
                </p>
              </div>

              {/* <!-- Step 2 --> */}
              <div class="relative text-center" id="el-2qqyjv4u">
                <div
                  class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  id="el-0tw6prrx"
                >
                  <i
                    class="fa-solid fa-cart-shopping text-3xl text-orange-500"
                    id="el-r7mipquk"
                  ></i>
                </div>
                <div
                  class="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-orange-200"
                  id="el-0rybm0ub"
                >
                  <div
                    class="absolute right-0 -top-2 text-orange-500"
                    id="el-tejtbv9r"
                  >
                    <i class="fa-solid fa-chevron-right" id="el-kftqmrm2"></i>
                  </div>
                </div>
                <h3
                  class="text-xl font-semibold text-gray-900 mb-3"
                  id="el-y2qr3rac"
                >
                  Go to content
                </h3>
                <p class="text-gray-600" id="el-ukmykujf">
                  select payment method
                </p>
              </div>

              {/* <!-- Step 3 --> */}
              <div class="relative text-center" id="el-tti3yw7b">
                <div
                  class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  id="el-oy3v4w54"
                >
                  <i
                    class="fa-solid fa-credit-card text-3xl text-orange-500"
                    id="el-h8mxtt36"
                  ></i>
                </div>
                <div
                  class="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-orange-200"
                  id="el-sqa9um0k"
                >
                  <div
                    class="absolute right-0 -top-2 text-orange-500"
                    id="el-6kngn0yh"
                  >
                    <i class="fa-solid fa-chevron-right" id="el-qreupx4c"></i>
                  </div>
                </div>
                <h3
                  class="text-xl font-semibold text-gray-900 mb-3"
                  id="el-tjyev7dd"
                >
                  Make Payment
                </h3>
                <p class="text-gray-600" id="el-lizu839s">
                  Pay securely using your preferred method
                </p>
              </div>

              {/* <!-- Step 4 --> */}
              <div class="text-center" id="el-vwozyppd">
                <div
                  class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  id="el-ex8nnu6k"
                >
                  <i
                    class="fa-solid fa-truck text-3xl text-orange-500"
                    id="el-ymzbg2r6"
                  ></i>
                </div>
                <h3
                  class="text-xl font-semibold text-gray-900 mb-3"
                  id="el-votano9x"
                >
                  Good quality products or content
                </h3>
                <p class="text-gray-600" id="el-gdzuhopd">
                  Get your required content
                </p>
              </div>
            </div>

            {/* <!-- Features Grid --> */}
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              id="el-8m8u85gy"
            >
              {/* <!-- Feature 1 --> */}
              <div class="bg-white p-6 rounded-2xl shadow-sm" id="el-ylsvrvpe">
                <div class="flex items-center gap-4" id="el-u8fcen2p">
                  <div
                    class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"
                    id="el-0pnvqqd7"
                  >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHFu1IN6nxgpeOu3TpXvTXsQtx85qUBsDaw&s" alt="" />
                  </div>
                  <div id="el-bdtcunnz">
                    <h4 class="font-semibold text-gray-900" id="el-m0sejsii">
                      Discount
                    </h4>
                    <p class="text-sm text-gray-600" id="el-h58arjpg">
                      10% discount for regular customer
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Feature 2 --> */}
              <div class="bg-white p-6 rounded-2xl shadow-sm" id="el-npo5an2w">
                <div class="flex items-center gap-4" id="el-knj6p210">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                    id="el-vt8zt9wk"
                  >
                    
                  </div>
                  <div id="el-6gqt97j8">
                    <h4 class="font-semibold text-gray-900" id="el-j1efqs1g">
                      Secure Payment
                    </h4>
                    <p class="text-sm text-gray-600" id="el-gixqlzqn">
                      100% secure transaction
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Feature 3 --> */}
              <div class="bg-white p-6 rounded-2xl shadow-sm" id="el-hfvq3q3z">
                <div class="flex items-center gap-4" id="el-1q2njf2t">
                  <div
                    class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                    id="el-im0w6nta"
                  >
                    <i
                      class="fa-solid fa-headset text-purple-500 text-xl"
                      id="el-4l9m3v60"
                    ></i>
                  </div>
                  <div id="el-c6w5j5bs">
                    <h4 class="font-semibold text-gray-900" id="el-928sq18n">
                      24/7 Support
                    </h4>
                    <p class="text-sm text-gray-600" id="el-z6plkm7p">
                      Always here to help
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="newsletter" class="py-16 container">
          <div class="container mx-auto px-4" id="el-yarydcus">
            <div
              class="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 relative overflow-hidden"
              id="el-9xvzsdn1"
            >
              {/* <!-- Background Decoration --> */}
              <div class="absolute top-0 right-0 opacity-10" id="el-2o8s7nga">
                <i class="fa-solid fa-envelope text-9xl" id="el-x3s7ta2s"></i>
              </div>

              <div
                class="relative z-10 max-w-3xl mx-auto text-center"
                id="el-vh3o49cf"
              >
                {/* <!-- Newsletter Content --> */}
                <div class="mb-8 text-white" id="el-vcjg02v8">
                  <h2
                    class="text-3xl md:text-4xl font-bold mb-4"
                    id="el-i2xm6tv6"
                  >
                    Get Special Offers &amp; Updates
                  </h2>
                  <p class="text-white/90" id="el-cac7l4le">
                    Subscribe to our newsletter and receive exclusive deals,
                    contents, and updates directly in your inbox
                  </p>
                </div>

                {/* <!-- Newsletter Form --> */}
                <form
                  class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
                  id="el-63f0bpls"
                >
                  <div class="flex-1" id="el-kro5og5n">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      class="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                      id="el-a9ew64gj"
                    ></input>
                  </div>
                  <button
                    class="px-8 py-4 bg-white text-orange-500 rounded-full hover:bg-opacity-90 transition duration-300 font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
                    id="el-h1j353bf"
                  >
                    Subscribe Now
                    <i class="fa-solid fa-paper-plane" id="el-ly2i7b2k"></i>
                  </button>
                </form>

                {/* <!-- Features --> */}
                <div
                  class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                  id="el-rfcpo6tt"
                >
                  <div
                    class="flex items-center justify-center gap-2 text-white"
                    id="el-m2rshrzu"
                  >
                    <i class="fa-solid fa-gift text-xl" id="el-a1z8xmst"></i>
                    <span id="el-7zwo7xsu">Exclusive Offers</span>
                  </div>
                  <div
                    class="flex items-center justify-center gap-2 text-white"
                    id="el-dum92etz"
                  >
                    <i class="fa-solid fa-bell text-xl" id="el-9p44xnmc"></i>
                    <span id="el-n42urxw9">Latest Updates</span>
                  </div>
                  <div
                    class="flex items-center justify-center gap-2 text-white"
                    id="el-kbx4r8b9"
                  >
                    <i class="fa-solid fa-unlock text-xl" id="el-422iy2bm"></i>
                    <span id="el-zlpee6lt">No Spam Policy</span>
                  </div>
                </div>

                {/* <!-- Trust Message --> */}
                <p class="text-white/70 text-sm mt-8" id="el-bc9dwko3">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </p>
              </div>
            </div>

            {/* <!-- Additional Promotional Cards --> */}
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              id="el-ka0yqyw6"
            >
              {/* <!-- App Download Card --> */}
              <div
                class="bg-white rounded-2xl p-6 flex items-center gap-6"
                id="el-fk2sm89l"
              >
                <div
                  class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0"
                  id="el-r6vip77i"
                >
                  <FaMobile width={40}/>
                </div>
                <div id="el-n3s2k73o">
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-2"
                    id="el-dr5b7y6p"
                  >
                    Download Our App
                  </h3>
                  <p class="text-gray-600 mb-4" id="el-fya16id1">
                    Get additional 10% off on your first order
                  </p>
                  <div class="flex gap-4" id="el-3nbiymds">
                    <button
                      class="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      id="el-wi76mjhi"
                    >
                      <FaApple/>
                      App Store
                    </button>
                    <button
                      class="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      id="el-u7ezjc30"
                    >
                      <FaGooglePlay/>
                      Play Store
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Social Media Card --> */}
              <div
                class="bg-white rounded-2xl p-6 flex items-center gap-6"
                id="el-gqm27fjc"
              >
                <div
                  class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                  id="el-busxay96"
                >
                  <img src="https://img.freepik.com/premium-vector/follow-us-vector-banner-white-background-isolated-icon-following-social-media_168425-281.jpg" alt="" />
                </div>
                <div id="el-eso75g2s">
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-2"
                    id="el-5t80snot"
                  >
                    Follow Us
                  </h3>
                  <p class="text-gray-600 mb-4" id="el-h4m3ytv1">
                    Stay connected for more updates and offers
                  </p>
                  <div
                    class="flex justify-center items-center gap-4"
                    id="el-svwr51ye"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/900px-Facebook_Logo_2023.png?20231011121526"
                      alt="Visa"
                      class="h-6 transition-opacity duration-300 opacity-100"
                      loading="lazy"
                      id="el-6t4uwiin"
                    ></img>
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
                      alt="Mastercard"
                      class="h-6 transition-opacity duration-300 opacity-100"
                      loading="lazy"
                      id="el-cevpy4jt"
                    ></img>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                      alt="PayPal"
                      class="h-6 transition-opacity duration-300 opacity-100"
                      loading="lazy"
                      id="el-piaqobo6"
                    ></img>
                    <img
                      src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-social-media-round-icon-png-image_8704823.png"
                      alt="Apple Pay"
                      class="h-6 transition-opacity duration-300 opacity-100"
                      loading="lazy"
                      id="el-0258bkce"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Logo;
