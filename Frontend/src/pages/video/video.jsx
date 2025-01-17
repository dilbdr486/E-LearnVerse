import React from "react";

function video() {
  return (
    <div>
      <section id="ComponentLayout" class="min-h-screen">
        <div class="container mx-auto px-4 py-6" id="el-f7fqpvm1">
        <h1 className="font-bold text-3xl text-center mb-8">Stock Videos</h1>
          {/* <!-- Category Grid --> */}
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="el-gb0ncxpk"
          >
            {/* <!-- after effect --> */}
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
                  After Effect
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Openers, Logo Stings and more
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  onClick={() => handleWordPress()}
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/videohive/category-tiles-after-effects-project-files-d5f0482d4ae0abc10a03817720adbba05add59037d89abceb79dd07c5ceb6e78.avif"
                  alt=""
                  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:cursor-pointer"
                />
              </div>
            </div>

            {/* premierepro */}
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
                  Premiere Pro
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Openers, Titles and more
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/videohive/category-tiles-premiere-pro-templates-ab13deb0730b158d1d52b2a165bfb36832339101b375ac401f69cd8df0677cfe.avif"
                  alt=""
                  className="transition hover:cursor-pointer ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>

            {/* stock footage */}
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
                  Stock Footage
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
              The stock footage you need
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/videohive/category-tiles-stock-footage-6d41f16c431795fe908d23dff5b9034490a8a3441997fad2869eb2de7fc7941f.avif"
                  alt=""
                  className="transition hover:cursor-pointer ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>

            {/* motion graphics */}
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
                  Motion Graphics
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Backgrounds, Elements and more
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/videohive/category-tiles-motion-graphics-744b8076c506e760d9a926b329264d715f5508ee66a8682960711dd0a830f258.avif"
                  alt=""
                  className="transition hover:cursor-pointer ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>

            {/* apple motion */}
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
                  Apple Motion
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Openers, Elements and more
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/videohive/category-tiles-apple-motion-templates-1ef66d9b29e5fb54de71201875047f48fa06e9808d65d2422518a6b190526d81.avif"
                  alt=""
                  className="transition hover:cursor-pointer ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>

            {/* add ons */}
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
                  Add Ons
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Scripts & Presets
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <img
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/home/videohive/category-tiles-add-ons-e9aaf1753902e3764df30d7fe0989ae43fae64b7dceaa143b29adffd5e22d712.avif"
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

export default video;
