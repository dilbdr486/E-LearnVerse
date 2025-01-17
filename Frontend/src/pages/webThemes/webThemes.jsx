import React from "react";
import { useNavigate } from "react-router-dom";
import wordPress from "./wordPress";

function WebThemes() {
  const navigate = useNavigate();

  function handleWordPress() {
    navigate("/wordpress");
  }

  return (
    <div>
      <section id="ComponentLayout" class="min-h-screen">
        <div class="container mx-auto px-4 py-6" id="el-f7fqpvm1">
          {/* <!-- Category Grid --> */}
          <h1 className="font-bold text-3xl text-center mb-8">Websites Template</h1>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="el-gb0ncxpk"
          >
            {/* <!-- WordPress --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-k75d4pgq"
                >
                  WordPress Themes
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Thousand of WordPress Themes
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  onClick={() => handleWordPress()}
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-wordpress-81f6cf6d35ddcf9be55d8d515d7772a57f45fa280dd5ae187bd93db56916228c.avif"
                  alt=""
                  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:cursor-pointer"
                />
              </div>
            </div>

            {/* ecommerce template */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-k75d4pgq"
                >
                  eCommerce Template
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Beautiful website templates
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-ecommerce-84898b44e9c7818c07191e345b4ae21a9421231cc78003fdf7f92dae0d5df948.avif"
                  alt=""
                  className="transition hover:cursor-pointer ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>

            {/* site template */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-k75d4pgq"
                >
                  Site Template
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                HTML and website templates
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-site-templates-f28b23bdd838629d4aaf9f4b376cd0ff8b2482c9f287565b08be499f216b6234.avif"
                  alt=""
                  className="transition hover:cursor-pointer ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>

            {/* marketing template */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-k75d4pgq"
                >
                  Marketing Template
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Email, newsletter and landing page templates.
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-marketing-d5d4374d3dc42264dad31afcf5663ebd5c9831b7826f77ac02bc41f6369a50cf.avif"
                  alt=""
                  className="transition hover:cursor-pointer ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>

            {/* cms template */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-k75d4pgq"
                >
                  CMS Template
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                CMS Website Template
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-cms-themes-e23d5363dd1bbc9caa746719fbcba1b706e40af2c3aa40b45abb46b497762833.avif"
                  alt=""
                  className="transition hover:cursor-pointer ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>

            {/* Blogging */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-k75d4pgq"
                >
                  Blogging
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Blogger & Template Themes
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-blogging-5618700ca9a234347b66ac44d361a5f05dc0dde5731e82126e4c8a3c93c876e6.avif"
                  alt=""
                  className="transition hover:cursor-pointer ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebThemes;
