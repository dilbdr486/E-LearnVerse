import React from "react";
import { useNavigate } from "react-router-dom";

function Graphic() {
  const navigate = useNavigate();

  function handlePrint() {
    navigate("/graphicPrint");
  }
  return (
    <div>
      <section id="ComponentLayout" class="min-h-screen">
        <div class="container mx-auto px-4 py-6" id="el-f7fqpvm1">
          <h1 className="font-bold text-3xl text-center mb-16">Stock Music</h1>
          {/* <!-- Category Grid --> */}
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="el-gb0ncxpk"
          >
            {/* <!-- print--> */}

            <div
              class="bg-white rounded-lg border border-gray-200 mb-8 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center flex justify-center hover:cursor-pointer hover:-translate-y-1"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/graphicriver/print-templates-a34d0db2d44446a1c739bea1137f5d925f309f4aeb7957536ce11e3a806064b0.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-2xl font-bold text-gray-800 hover:cursor-pointer hover:underline"
                  id="el-k75d4pgq"
                >
                  Print
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Thousands of Stationery & Design Templates
              </p>
              <div>
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/graphicriver/category-tiles-print-templates-cad529e44c0e1006e99098ebe5f477f9b40283504d89d526f987b4b16245c11c.avif"
                  alt=""
                  className="hover:cursor-pointer hover:-translate-y-1"
                  onClick={() => handlePrint()}
                />
              </div>
            </div>

            {/* presentaion */}
            <div
              class="bg-white rounded-lg border border-gray-200 mb-8 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center hover:cursor-pointer hover:-translate-y-1 flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/graphicriver/presentation-templates-60870c608e4164b833a1a60a6ecb8af90ce063d91568560f166603799a32164e.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-2xl font-bold text-gray-800 hover:cursor-pointer hover:underline"
                  id="el-k75d4pgq"
                >
                  Presentation
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Impress with customizable slide decks
              </p>
              <div>
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/graphicriver/category-tiles-presentation-templates-4030642964fcbb221e1e5fe9ae003f08d85513a2f075808ea915e8e7ae171b17.avif"
                  alt=""
                  className="hover:cursor-pointer hover:-translate-y-1"
                />
              </div>
            </div>

            {/* add-ons */}
            <div
              class="bg-white rounded-lg border border-gray-200 mb-8 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center hover:cursor-pointer hover:-translate-y-1 flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/graphicriver/add-ons-757390f6be615ea4d527fa3eda3bbeb89f0d364781bf4881a03c314f96fc9fb1.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-2xl font-bold text-gray-800 hover:cursor-pointer hover:underline"
                  id="el-k75d4pgq"
                >
                  Add-ons
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Photoshop, Lightroom & Illustrator plugins
              </p>
              <div>
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/graphicriver/category-tiles-add-ons-ba72d1139d8d96618238d0ff7ed4c6a27bb3e714d29e5e545e8fa56afae3e873.avif"
                  alt=""
                  className="hover:cursor-pointer hover:-translate-y-1"
                />
              </div>
            </div>

            {/* graphics */}

            <div
              class="bg-white rounded-lg border border-gray-200 mb-8 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center hover:cursor-pointer hover:-translate-y-1 flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/graphicriver/graphics-db4e8b4c31881cf035f41ef8f5a7f95f181e9db3fcac9a090aae02f88ef1ede9.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-2xl font-bold text-gray-800 hover:cursor-pointer hover:underline"
                  id="el-k75d4pgq"
                >
                  Graphics
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Wonderful selection of Graphics & Vectors
              </p>
              <div>
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/graphicriver/category-tiles-graphics-0dff52351de62be9177f6851d25a1843c252e20e100e3fac298eaccee966a3a5.avif"
                  alt=""
                  className="hover:cursor-pointer hover:-translate-y-1"
                />
              </div>
            </div>
            {/* logo & templates */}

            <div
              class="bg-white rounded-lg border border-gray-200 mb-8 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center hover:cursor-pointer hover:-translate-y-1 flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/graphicriver/logo-templates-aad4393a4e8710f649ff61f5ebe3e79c34e44ee7055bffe25826c759cc1badf6.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-2xl font-bold text-gray-800 hover:cursor-pointer hover:underline"
                  id="el-k75d4pgq"
                >
                  Logo & Templates
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Stand out with custom logo templates
              </p>
              <div>
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/graphicriver/category-tiles-logo-templates-339bbbcde9acd79c413e23a2c011fb1d5ecd2fa06d172278bfd093d409551b3b.avif"
                  alt=""
                  className="hover:cursor-pointer hover:-translate-y-1"
                />
              </div>
            </div>
            {/* vectors */}
            <div
              class="bg-white rounded-lg border border-gray-200 mb-8 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 hover:cursor-pointer hover:-translate-y-1 items-center flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/graphicriver/vectors-f88dada69b3ddcd7420789e8fe6fb5f6a6e479c35cac3ac0453f164918aa582c.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-2xl font-bold text-gray-800 hover:cursor-pointer hover:underline"
                  id="el-k75d4pgq"
                >
                  Vectors
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Vector graphics to help complete your project
              </p>
              <div>
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/graphicriver/category-tiles-vectors-feb7c00329a771776eb8d42325419b9b4f44acf25968993c7e72b8489a92d263.avif"
                  alt=""
                  className="hover:cursor-pointer hover:-translate-y-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Graphic;
