import React, { useEffect } from "react";

function tailwindCSSComponent() {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);
  return (
    <div>
      <section id="TailwindComponents" class="min-h-screen bg-gray-50 py-12">
        <div class="container mx-auto px-4" id="el-a0kkpiai">
          {/* <!-- Header --> */}
          <div class="mb-12" id="el-av9u4r42">
            <h1 class="text-3xl font-bold text-gray-900 mb-4" id="el-2dhf3yd5">
              Tailwind CSS Components
            </h1>
            <p class="text-gray-600" id="el-b4l0rc5l">
              Ready-to-use Tailwind CSS component examples
            </p>
          </div>

          {/* <!-- Components Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-wdcrz71e">
            {/* <!-- Card Component --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-njsf8z3i"
            >
              <div class="border-b border-gray-200 p-4" id="el-g0jw01g5">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-uxy33gfa"
                >
                  Card Component
                </h3>
              </div>
              <div class="p-4" id="el-6h431uwd">
                <div class="mb-4" id="el-8t2o8i9r">
                  <div
                    class="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    id="el-x1cybe7s"
                  >
                    <h4
                      class="text-xl font-semibold text-gray-800 mb-2"
                      id="el-ervpm2v6"
                    >
                      Sample Card
                    </h4>
                    <p class="text-gray-600" id="el-r8636y0h">
                      This is a sample card component using Tailwind CSS
                      classes.
                    </p>
                  </div>
                </div>
                <pre
                  class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"
                  id="el-i45y4bgq"
                >
                  <code id="el-0wq7w8mo">
                    {`                &lt;div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6"&gt;
  &lt;h4 class="text-xl font-semibold text-gray-800 mb-2"&gt;Sample Card&lt;/h4&gt;
  &lt;p class="text-gray-600"&gt;Card content here&lt;/p&gt;
&lt;/div&gt;`}
                  </code>
                </pre>
              </div>
            </div>

            {/* <!-- Button Variants --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-hqx3bjgl"
            >
              <div class="border-b border-gray-200 p-4" id="el-g9fjjurm">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-o7mxf7we"
                >
                  Button Variants
                </h3>
              </div>
              <div class="p-4" id="el-z3r6anud">
                <div class="flex flex-wrap gap-4 mb-4" id="el-yxzpz8oe">
                  <button
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    id="el-h31apk0p"
                  >
                    Primary
                  </button>
                  <button
                    class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    id="el-78uxn7sl"
                  >
                    Secondary
                  </button>
                  <button
                    class="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50"
                    id="el-jjc4mybr"
                  >
                    Outline
                  </button>
                </div>
                <pre
                  class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"
                  id="el-4owf075p"
                >
                  <code id="el-7uvdsxqs">
                    {`                &lt;button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"&gt;
  Primary
&lt;/button&gt;`}
                  </code>
                </pre>
              </div>
            </div>

            {/* <!-- Form Input Styles --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-xmho04u6"
            >
              <div class="border-b border-gray-200 p-4" id="el-rx8rteu3">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-tpknf70l"
                >
                  Form Inputs
                </h3>
              </div>
              <div class="p-4" id="el-431vk247">
                <div class="space-y-4 mb-4" id="el-e0rj5xs7">
                  <input
                    type="text"
                    placeholder="Default input"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    id="el-q50m9me1"
                  ></input>
                  <input
                    type="text"
                    placeholder="Error input"
                    class="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    id="el-8twmo64i"
                  ></input>
                </div>
                <pre
                  class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"
                  id="el-p7zw33dk"
                >
                  <code id="el-dhjyigz5">
                    {`&lt;input type="text" 
  class="w-full px-4 py-2 border border-gray-300 rounded-lg 
  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"&gt;`}
                  </code>
                </pre>
              </div>
            </div>

            {/* <!-- Alert Components --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-nqp9zumg"
            >
              <div class="border-b border-gray-200 p-4" id="el-osjxbra6">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-n8iap220"
                >
                  Alerts
                </h3>
              </div>
              <div class="p-4" id="el-wfu51ukc">
                <div class="space-y-4 mb-4" id="el-lv03ycl9">
                  <div
                    class="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4"
                    id="el-tghoa8v1"
                  >
                    Success alert message
                  </div>
                  <div
                    class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4"
                    id="el-luuuqge6"
                  >
                    Error alert message
                  </div>
                </div>
                <pre
                  class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"
                  id="el-zevlgp1x"
                >
                  <code id="el-fzx9np5p">
                    {`&lt;div class="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4"&gt;
  Success alert message
&lt;/div&gt;`}
                  </code>
                </pre>
              </div>
            </div>

            {/* <!-- Navigation Menu --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-gsuyxtis"
            >
              <div class="border-b border-gray-200 p-4" id="el-r5m5d3np">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-r3immu6q"
                >
                  Navigation
                </h3>
              </div>
              <div class="p-4" id="el-k9pfcgjl">
                <nav
                  class="bg-white p-4 rounded-lg border border-gray-200 mb-4"
                  id="el-48m5jkow"
                >
                  <ul class="flex space-x-4" id="el-95mu74bl">
                    <li id="el-by70u5ho">
                      <a
                        href="#"
                        class="text-blue-500 hover:text-blue-700"
                        id="el-iipegk40"
                      >
                        Home
                      </a>
                    </li>
                    <li id="el-c5aq40rr">
                      <a
                        href="#"
                        class="text-gray-600 hover:text-gray-900"
                        id="el-yduo89fa"
                      >
                        About
                      </a>
                    </li>
                    <li id="el-vzskuzpm">
                      <a
                        href="#"
                        class="text-gray-600 hover:text-gray-900"
                        id="el-h1hznm9b"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
                <pre
                  class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"
                  id="el-477ij5dv"
                >
                  <code id="el-7fuzeh3z">
                    {`&lt;nav class="bg-white p-4 rounded-lg border border-gray-200"&gt;
  &lt;ul class="flex space-x-4"&gt;
    &lt;li&gt;&lt;a href="#" class="text-blue-500 hover:text-blue-700"&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;`}
                  </code>
                </pre>
              </div>
            </div>

            {/* <!-- Modal Dialog --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-dgn2b03z"
            >
              <div class="border-b border-gray-200 p-4" id="el-of8fcuid">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-aw8qp9tr"
                >
                  Modal
                </h3>
              </div>
              <div class="p-4" id="el-5729l6nm">
                <div
                  class="relative bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-4"
                  id="el-42r3ejwh"
                >
                  <h4 class="text-lg font-semibold mb-4" id="el-n99ps8a9">
                    Modal Title
                  </h4>
                  <p class="text-gray-600 mb-4" id="el-4546angu">
                    Modal content goes here...
                  </p>
                  <div class="flex justify-end space-x-2" id="el-s0bbdpwd">
                    <button
                      class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      id="el-p399rcxo"
                    >
                      Cancel
                    </button>
                    <button
                      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      id="el-jgr2qhop"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
                <pre
                  class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"
                  id="el-9oytlci9"
                >
                  <code id="el-16xx4ifl">
                    {` &lt;div class="relative bg-white rounded-xl shadow-lg border border-gray-200 p-6"&gt;
  &lt;h4 class="text-lg font-semibold mb-4"&gt;Modal Title&lt;/h4&gt;
  &lt;!-- Modal content --&gt;
&lt;/div&gt;`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg mt-8">
            <div class="border-b border-gray-200 p-6" id="el-kjf1skke">
              <div
                class="flex items-center justify-between mb-4"
                id="el-hy5qz5zf"
              >
                <h2 class="text-2xl font-bold text-gray-900" id="el-aqa4rjhn">
                  Documentation
                </h2>
                <div class="flex items-center space-x-2" id="el-vl2j1wsl">
                  <button
                    class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    id="el-qfsuvzm5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="el-e96byvqb"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        id="el-6hrwwqn1"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex space-x-4" id="el-jac4hes3">
                <button
                  class="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600"
                  id="el-ry506f3j"
                >
                  Overview
                </button>
                <button
                  class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  id="el-geba4glf"
                >
                  Installation
                </button>
                <button
                  class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  id="el-b0oon6ly"
                >
                  Usage
                </button>
                <button
                  class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  id="el-9yuug4v5"
                >
                  API
                </button>
                <button
                  class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  id="el-2dsd7u51"
                >
                  Examples
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <div class="p-6" id="el-hz6hfmpo">
              <div class="prose max-w-none" id="el-mfxpddbs">
                <div class="mb-8" id="el-hiw3ij2z">
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-4"
                    id="el-qzo971mx"
                  >
                    Getting Started
                  </h3>
                  <p class="text-gray-600 mb-4" id="el-lrot0dsq">
                    Select a programming language or framework from the sidebar
                    to view its documentation.
                  </p>

                  <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
                    id="el-d8ag3ppr"
                  >
                    <div
                      class="border border-gray-200 rounded-lg p-4"
                      id="el-i4k6iph4"
                    >
                      <h4
                        class="font-medium text-gray-900 mb-2"
                        id="el-8ux7cpc0"
                      >
                        Installation
                      </h4>
                      <pre
                        class="bg-gray-50 p-3 rounded text-sm text-gray-700 overflow-x-auto"
                        id="el-f5t66yr9"
                      >
                        npm install @component/library
                      </pre>
                    </div>

                    <div
                      class="border border-gray-200 rounded-lg p-4"
                      id="el-rvea0aow"
                    >
                      <h4
                        class="font-medium text-gray-900 mb-2"
                        id="el-pkm6icj8"
                      >
                        Quick Start
                      </h4>
                      <pre
                        class="bg-gray-50 p-3 rounded text-sm text-gray-700 overflow-x-auto"
                        id="el-2nxlvinl"
                      >{`import { Component } from '@component/library';`}</pre>
                    </div>
                  </div>
                </div>

                <div class="mb-8" id="el-ivkfqz4p">
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-4"
                    id="el-szakol8q"
                  >
                    Features
                  </h3>
                  <ul class="space-y-3" id="el-x3uboduk">
                    <li class="flex items-start" id="el-w09snwva">
                      <svg
                        class="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-dkbbgq7t"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                          id="el-grt9lnt1"
                        ></path>
                      </svg>
                      <span class="text-gray-600" id="el-ohvelor9">
                        Interactive code examples with live preview
                      </span>
                    </li>
                    <li class="flex items-start" id="el-0btzo1nh">
                      <svg
                        class="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-sag0rotv"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                          id="el-0ky0s08g"
                        ></path>
                      </svg>
                      <span class="text-gray-600" id="el-k194xh47">
                        Comprehensive documentation for each component
                      </span>
                    </li>
                    <li class="flex items-start" id="el-zwjju6it">
                      <svg
                        class="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-84bfy21h"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                          id="el-3o49w72f"
                        ></path>
                      </svg>
                      <span class="text-gray-600" id="el-s789knhu">
                        Multiple programming language support
                      </span>
                    </li>
                  </ul>
                </div>

                <div class="mb-8" id="el-gp0duc14">
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-4"
                    id="el-xs31uh6o"
                  >
                    Examples
                  </h3>
                  <div class="bg-gray-50 rounded-lg p-4" id="el-soosyyxv">
                    <div
                      class="flex items-center justify-between mb-4"
                      id="el-rjdai88v"
                    >
                      <h4 class="font-medium text-gray-900" id="el-9w4x1b0t">
                        Basic Usage
                      </h4>
                      <button
                        class="text-sm text-blue-600 hover:text-blue-700"
                        id="el-vzmtuud1"
                      >
                        Copy
                      </button>
                    </div>
                    <pre
                      class="text-sm text-gray-700 overflow-x-auto"
                      id="el-2jf9zazo"
                    >
                      <code id="el-ki2lxqgn">
                        // Example code will appear here based on selected
                        language
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default tailwindCSSComponent;
