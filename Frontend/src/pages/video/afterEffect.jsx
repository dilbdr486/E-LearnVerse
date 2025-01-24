import React from "react";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";

function afterEffect() {
  return (
    <div>
      <div class="container mx-auto px-4" id="el-8wzw8tpb">
        {/* <!-- Section Header --> */}
        <div class="text-center mb-12" id="el-nobooqne">
          <h2 class="text-3xl font-bold text-gray-900 mb-4" id="el-cy5o5k32">
            Stock Footage, Video Effects & Video Templates
          </h2>
          <p class="text-gray-600" id="el-xidlm7mi">
            Royalty free videos and templates created by video professionals
            from all over the world.
          </p>
        </div>

        {/* <!-- Featured Cards Grid --> */}
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="el-7f1vv2pb"
        >
          {/* <!-- Card 1 --> */}
          <div
            class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            id="el-msnmvd0l"
          >
            <div class="relative" id="el-e9fnhqew">
              <video
                src={video1}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ width: "100%", height: "100%" }}
              ></video>
            </div>
            <div class="p-6" id="el-038778e2">
              <div
                class="flex items-center justify-between mb-4"
                id="el-ofnpoik1"
              ></div>
              <p class="text-gray-600 mb-4" id="el-6n1fao1s">
                Kinetic Title
              </p>
              <div class="flex items-center justify-between" id="el-1ar2vyi6">
                <div class="flex items-center gap-2" id="el-8pqtmqzm">
                  <span
                    class="text-2xl font-bold text-gray-900"
                    id="el-wbd3oobq"
                  >
                    $12.99
                  </span>
                  <span
                    class="text-sm text-gray-500 line-through"
                    id="el-aq92pzlr"
                  >
                    $15.99
                  </span>
                </div>
                <button className="px-8 py-2 border border-black mt-4 text-blue-500 hover:border-blue-500">
                  Live Preview
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div
            class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            id="el-msnmvd0l"
          >
            <div class="relative" id="el-e9fnhqew">
              <video
                src={video2}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ width: "100%", height: "100%" }}
              ></video>
            </div>
            <div class="p-6" id="el-038778e2">
              <div
                class="flex items-center justify-between mb-4"
                id="el-ofnpoik1"
              ></div>
              <p class="text-gray-600 mb-4" id="el-6n1fao1s">
                Logo Opener
              </p>
              <div class="flex items-center justify-between" id="el-1ar2vyi6">
                <div class="flex items-center gap-2" id="el-8pqtmqzm">
                  <span
                    class="text-2xl font-bold text-gray-900"
                    id="el-wbd3oobq"
                  >
                    $16.99
                  </span>
                  <span
                    class="text-sm text-gray-500 line-through"
                    id="el-aq92pzlr"
                  >
                    $18.99
                  </span>
                </div>
                <button className="px-8 py-2 border border-black mt-4 text-blue-500 hover:border-blue-500">
                  Live Preview
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div
            class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            id="el-msnmvd0l"
          >
            <div class="relative" id="el-e9fnhqew">
              <video
                src={video3}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ width: "100%", height: "100%" }}
              ></video>
            </div>
            <div class="p-6" id="el-038778e2">
              <div
                class="flex items-center justify-between mb-4"
                id="el-ofnpoik1"
              ></div>
              <p class="text-gray-600 mb-4" id="el-6n1fao1s">
                Logo Animation
              </p>
              <div class="flex items-center justify-between" id="el-1ar2vyi6">
                <div class="flex items-center gap-2" id="el-8pqtmqzm">
                  <span
                    class="text-2xl font-bold text-gray-900"
                    id="el-wbd3oobq"
                  >
                    $20.99
                  </span>
                  <span
                    class="text-sm text-gray-500 line-through"
                    id="el-aq92pzlr"
                  >
                    $25.99
                  </span>
                </div>
                <button className="px-8 py-2 border border-black mt-4 text-blue-500 hover:border-blue-500">
                  Live Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default afterEffect;
