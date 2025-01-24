import React from "react";
import { useNavigate } from "react-router-dom";

function music() {

  const navigate = useNavigate();

function handleMusics(){
  navigate("/musics");
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
            {/* <!-- music--> */}

            <div
              class="bg-white rounded-lg border border-gray-200 mb-8 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/audiojungle/music-f1eb53e7535f986a349cedbb10edb1fdbe0b264e45a3b596f85c19edf0d67920.svg"
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
                  onClick={()=>handleMusics()}
                >
                  Music
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Royalty-free music clips for your next project
              </p>
            </div>

            {/* music pack */}
            <div
              class="bg-white rounded-lg border border-gray-200 mb-8 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/audiojungle/music-packs-483d6fdb664cdbd7d9710a79120b19c29a6843727e0457b70617a65df7e5a70c.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3 class="text-2xl font-bold text-gray-800" id="el-k75d4pgq">
                  Music Pack
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Different tracks related to the same genre
              </p>
            </div>

            {/* Sound Effcts */}
            <div
              class="bg-white rounded-lg border border-gray-200 mb-8 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/audiojungle/sound-be00d6d81e6d002277e5a03d2f8e3f51e99c1d4078d8fafdaeccf3a5ffa188b0.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3 class="text-2xl font-bold text-gray-800" id="el-k75d4pgq">
                  Sound Effects
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                All the Sound Effects for your next project
              </p>
            </div>

            {/* logos and idents */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/audiojungle/logos-idents-d0cf868586c05b9804b90c50582c5d737870eed8574bfbdedf27eb185c3b8221.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3 class="text-2xl font-bold text-gray-800" id="el-k75d4pgq">
                  Logos & Idents
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Audio files to strengthen your brand
              </p>
            </div>

            {/* music kits */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/audiojungle/music-kits-6ef6709db36910c919950a126311bb78c6027bbae6d0bb09d5bad0746a7788f0.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3 class="text-2xl font-bold text-gray-800" id="el-k75d4pgq">
                  Music Kits
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Individual drag-and-drop song audio sections
              </p>
            </div>

            {/* source files */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div className="flex justify-center mb-8">
                <img
                  className="-mt-16 items-center flex justify-center"
                  src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/audiojungle/source-files-c61829d3a97bcc679c85e6c983ad0d19d084e58e69f651959eeea6d40edbdd4c.svg"
                  alt=""
                  width={70}
                />
              </div>
              <div
                class="flex items-center justify-center mb-4"
                id="el-cf914gnf"
              >
                <h3 class="text-2xl font-bold text-gray-800" id="el-k75d4pgq">
                  Source Files
                </h3>
              </div>
              <p class="text-gray-600 mb-4 text-center" id="el-82a1lssv">
                Audio for Cubase, Logic Pro and FL Studio experts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default music;
