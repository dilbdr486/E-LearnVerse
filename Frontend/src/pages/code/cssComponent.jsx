import React, { useEffect } from "react";

function cssComponent() {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);
  return (
    <div>
      <section id="CSSComponents" class="min-h-screen bg-gray-50 py-12">
        <div class="container mx-auto px-4" id="el-42yf3rui">
          {/* <!-- Header --> */}
          <div class="mb-12" id="el-imhgusb3">
            <h1 class="text-3xl font-bold text-gray-900 mb-4" id="el-i9cjvubn">
              CSS Components
            </h1>
            <p class="text-gray-600" id="el-xbvtaagw">
              Pure CSS components and styling solutions
            </p>
          </div>

          {/* <!-- Components Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-btabhxe7">
            {/* <!-- Button Styles Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-i1851bw2"
            >
              <div class="border-b border-gray-200 p-4" id="el-223b2mlj">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-9o6kwn6a"
                >
                  Button Styles
                </h3>
              </div>
              <div class="p-4" id="el-61xe0yv1">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-a6mmcb9t">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-vmrt2u50"
                  >
                    <code id="el-nr73nzsb">
                      {`.button-primary {
  background: linear-gradient(45deg, #4F46E5, #7C3AED);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: transform 0.2s;
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}`}
                    </code>
                  </pre>
                </div>
                <div class="flex gap-4" id="el-msjhshzr">
                  <button
                    class="px-6 py-2 bg-blue-500 text-white rounded-lg"
                    id="el-c1sg5oru"
                  >
                    Demo
                  </button>
                  <button
                    class="px-6 py-2 bg-purple-500 text-white rounded-lg"
                    id="el-cmo0xpqo"
                  >
                    Demo 2
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Card Layouts Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-q3r6epe6"
            >
              <div class="border-b border-gray-200 p-4" id="el-dr0lvqgu">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-791acint"
                >
                  Card Layouts
                </h3>
              </div>
              <div class="p-4" id="el-ziw54p6j">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-d2wpgczf">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-dl80ntkx"
                  >
                    <code id="el-9c9p8fvf">
                      {`.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}`}
                    </code>
                  </pre>
                </div>
                <div class="p-4 bg-white shadow rounded-lg" id="el-prjtjl8v">
                  Sample Card Layout
                </div>
              </div>
            </div>

            {/* <!-- CSS Grid Layout Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-e9slqnys"
            >
              <div class="border-b border-gray-200 p-4" id="el-u9zmvfio">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-tjhymdpv"
                >
                  Grid Layout
                </h3>
              </div>
              <div class="p-4" id="el-9i3px11m">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-90tuz578">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-ws6oaktq"
                  >
                    <code id="el-v7t9stti" class="">
                      {`.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.grid-item {
  aspect-ratio: 1;
  background: #f8f9fa;
  border-radius: 0.5rem;
}`}
                    </code>
                  </pre>
                </div>
                <div class="grid grid-cols-3 gap-2" id="el-ob5f5g77">
                  <div class="bg-gray-100 p-4 rounded" id="el-yenoa9u1">
                    1
                  </div>
                  <div class="bg-gray-100 p-4 rounded" id="el-min3qcsj">
                    2
                  </div>
                  <div class="bg-gray-100 p-4 rounded" id="el-9loiaynz">
                    3
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- CSS Animation Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-ijr6cuxz"
            >
              <div class="border-b border-gray-200 p-4" id="el-r67tw5wx">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-mdm7ytaz"
                >
                  Animations
                </h3>
              </div>
              <div class="p-4" id="el-td9wylij">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-yv9w7q8x">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-3srvdgdd"
                  >
                    <code id="el-h3wsesno">
                      {`@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}`}
                    </code>
                  </pre>
                </div>
                <div
                  class="p-4 bg-blue-500 text-white rounded-lg"
                  id="el-suhxc7gs"
                >
                  Animated Element
                </div>
              </div>
            </div>

            {/* <!-- Form Styles Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-sjo89zvc"
            >
              <div class="border-b border-gray-200 p-4" id="el-d4uznxv0">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-d8kad3uc"
                >
                  Form Styles
                </h3>
              </div>
              <div class="p-4" id="el-bp4f12oe">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-cpkvbpym">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-je12twn4"
                  >
                    <code id="el-pudt8vk7">
                      {`.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}`}
                    </code>
                  </pre>
                </div>
                <input
                  type="text"
                  class="w-full p-2 border rounded-lg"
                  placeholder="Sample Input"
                  id="el-ysqy4vii"
                ></input>
              </div>
            </div>

            {/* <!-- Navigation Styles Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-8vooskcw"
            >
              <div class="border-b border-gray-200 p-4" id="el-210rhppe">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-3xrtscxp"
                >
                  Navigation
                </h3>
              </div>
              <div class="p-4" id="el-dj65qi96">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-086to342">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-nfeozm5x"
                  >
                    <code id="el-cnq3qs7y">
                      {`.nav {
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
}`}
                    </code>
                  </pre>
                </div>
                <nav
                  class="flex gap-4 p-2 bg-gray-100 rounded-lg"
                  id="el-u2dbka0w"
                >
                  <a href="#" class="text-blue-500" id="el-s1ojqjtd">
                    Home
                  </a>
                  <a href="#" class="text-blue-500" id="el-vvyyeqy9">
                    About
                  </a>
                  <a href="#" class="text-blue-500" id="el-3agk7258">
                    Contact
                  </a>
                </nav>
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

export default cssComponent;
