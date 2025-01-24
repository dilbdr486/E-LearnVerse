import React from "react";

function photos() {
  return (
    <div>
      <section id="ComponentLayout" class="min-h-screen">
        <div class="container mx-auto px-4 py-6" id="el-f7fqpvm1">
          {/* <!-- Category Grid --> */}
          <h1 className="font-bold text-3xl text-center mb-2">
            Royalty free stock photos
          </h1>
          <p className="text-center mb-8">
            Discover our collection of royalty free stock images from our
            community of photographers.
          </p>
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
                  Nature
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Thousand of Natural photos
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  onClick={() => handleWordPress()}
                  src="https://previews.customer.envatousercontent.com/files/542720366/KS403978.JPG"
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
                  Dinner
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Beautiful Dinners photos
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://previews.customer.envatousercontent.com/files/511684024/seniors%20dinner%20party%20brc-1033.jpg"
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
                  Hills
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                thousand of hills photos
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://previews.customer.envatousercontent.com/files/507479004/220705_050558_Pano.jpg"
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
                  Sunsets
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Hundreds of sunset photos
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://market-resized.envatousercontent.com/previews-dam/EVA/TRX/76/5e/f1/51/fb/v1_E10/E10B1V5C.jpg?w=350&h=350&cf_fit=scale-down&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&format=auto&q=85&s=bfc719517c77d0377d4399a786d27b35194fc030bf5423dc104d00246a88d3be"
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

export default photos;
