import React from "react";
import { useNavigate } from "react-router-dom";

function Code() {
  const navigate = useNavigate();

  function handleJavaScript() {
    navigate("/js");
  }

  function handleJava() {
    navigate("/java");
  }

  function handleCSS() {
    navigate("/CSS");
  }

  function handleTailewindCSS() {
    navigate("/tailwindcss");
  }

  function handleCProgramming() {
    navigate("/c");
  }

  function handleCPluPlus() {
    navigate("/cplusplus");
  }

  function handleForm() {
    navigate("/form");
  }

  function handleAuth() {
    navigate("/auth");
  }

  function handleAPI() {
    navigate("/api");
  }

  return (
    <div>
      <section id="ComponentLayout" class="min-h-screen">
        <div class="container mx-auto px-4 py-6" id="el-f7fqpvm1">
        <h1 className="font-bold text-3xl text-center mb-8">Programming Codes</h1>
          {/* <!-- Category Grid --> */}
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="el-gb0ncxpk"
          >
            {/* <!-- JavaScript Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-all"
              id="el-z2n8mi5h"
              onClick={() => handleJavaScript()}
            >
              <div
                class="flex items-center justify-between mb-4"
                id="el-cf914gnf"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-k75d4pgq"
                >
                  JavaScript
                </h3>
                <span
                  class="text-sm font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full"
                  id="el-swjaeg7g"
                >
                  20+ Components
                </span>
              </div>
              <p class="text-gray-600 mb-4" id="el-82a1lssv">
                Interactive UI components with vanilla JavaScript
                implementations.
              </p>
              <div class="flex gap-2 flex-wrap" id="el-rye6wwq0">
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-n6r3nirz"
                >
                  DOM Manipulation
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-rwx48y9a"
                >
                  Events
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-9qp723wo"
                >
                  Animations
                </span>
              </div>
            </div>

            {/* <!-- Java Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-all"
              id="el-tnbxm19f"
            >
              <div
                class="flex items-center justify-between mb-4"
                id="el-6rxyicta"
                onClick={() => handleJava()}
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-0754m92s"
                >
                  Java
                </h3>
                <span
                  class="text-sm font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full"
                  id="el-2nxk1ysx"
                >
                  15+ Components
                </span>
              </div>
              <p class="text-gray-600 mb-4" id="el-yjk7q8v4">
                Backend components and utilities built with Java.
              </p>
              <div class="flex gap-2 flex-wrap" id="el-40aib8s3">
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-rk5hovkv"
                >
                  Spring Boot
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-j2g82nra"
                >
                  JPA
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-dvft2oop"
                >
                  Security
                </span>
              </div>
            </div>

            {/* <!-- CSS Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-all"
              id="el-s79ohe27"
              onClick={() => handleCSS()}
            >
              <div
                class="flex items-center justify-between mb-4"
                id="el-48yiiw75"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-7xerdmkh"
                >
                  CSS
                </h3>
                <span
                  class="text-sm font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full"
                  id="el-bp9q9vne"
                >
                  25+ Components
                </span>
              </div>
              <p class="text-gray-600 mb-4" id="el-cb7iwcsk">
                Pure CSS components and styling solutions.
              </p>
              <div class="flex gap-2 flex-wrap" id="el-pv3axymg">
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-d7l9j65p"
                >
                  Layouts
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-j7vc04rc"
                >
                  Animations
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-a9756vmj"
                >
                  Effects
                </span>
              </div>
            </div>

            {/* <!-- Tailwind Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-all"
              id="el-b5hnzcuu"
              onClick={() => handleTailewindCSS()}
            >
              <div
                class="flex items-center justify-between mb-4"
                id="el-soxp8bmj"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-ye70squg"
                >
                  Tailwind CSS
                </h3>
                <span
                  class="text-sm font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full"
                  id="el-troxpgpv"
                >
                  30+ Components
                </span>
              </div>
              <p class="text-gray-600 mb-4" id="el-zsbcxqn4">
                Ready-to-use Tailwind CSS components and patterns.
              </p>
              <div class="flex gap-2 flex-wrap" id="el-uqntfjr1">
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-ozzhng6p"
                >
                  UI Kit
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-9o98w6s1"
                >
                  Forms
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-pr4ngnsk"
                >
                  Cards
                </span>
              </div>
            </div>

            {/* <!-- C Programming Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-all"
              id="el-pb2r72pz"
              onClick={() => handleCProgramming()}
            >
              <div
                class="flex items-center justify-between mb-4"
                id="el-osba26st"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-8aylfzj3"
                >
                  C Programming
                </h3>
                <span
                  class="text-sm font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full"
                  id="el-3nogsk75"
                >
                  10+ Components
                </span>
              </div>
              <p class="text-gray-600 mb-4" id="el-cmic9hti">
                System-level components and algorithms in C.
              </p>
              <div class="flex gap-2 flex-wrap" id="el-mf0s7vvn">
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-tw2rjnv1"
                >
                  Data Structures
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-z2f0nf8w"
                >
                  Algorithms
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-8v4g34ah"
                >
                  Memory
                </span>
              </div>
            </div>

            {/* <!-- C++ Card --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-all"
              id="el-lyucv9sn"
              onClick={() => handleCPluPlus()}
            >
              <div
                class="flex items-center justify-between mb-4"
                id="el-zcwbaghg"
              >
                <h3
                  class="text-xl font-semibold text-gray-800"
                  id="el-nbfhmdru"
                >
                  C++
                </h3>
                <span
                  class="text-sm font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full"
                  id="el-g6bambv5"
                >
                  12+ Components
                </span>
              </div>
              <p class="text-gray-600 mb-4" id="el-l2kww3kg">
                Object-oriented components and patterns in C++.
              </p>
              <div class="flex gap-2 flex-wrap" id="el-pkuhaje0">
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-ejknktkj"
                >
                  OOP
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-e7htt6ch"
                >
                  Templates
                </span>
                <span
                  class="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded"
                  id="el-qp8bt4d3"
                >
                  STL
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Examples Section --> */}
          <div class="mt-12" id="el-kcb3hq3i">
            <h2 class="text-2xl font-bold text-gray-800 mb-6" id="el-g2sn46rw">
              Implementation Examples
            </h2>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              id="el-3w15om77"
            >
              {/* <!-- Forms Example Card --> */}
              <div
                class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
                id="el-iebhbb1y"
              >
                <h3
                  class="text-xl font-semibold text-gray-800 mb-4"
                  id="el-s9ufocmx"
                >
                  Form Examples
                </h3>
                <p class="text-gray-600 mb-4" id="el-xrxci140">
                  Collection of form implementations across different languages
                  and frameworks.
                </p>
                <div class="flex justify-end" id="el-h1ibu0k3">
                  <button
                    onClick={() => handleForm()}
                    class="text-blue-600 hover:text-blue-800 font-medium"
                    id="el-w49i89en"
                  >
                    View Examples →
                  </button>
                </div>
              </div>

              {/* <!-- Authentication Example Card --> */}
              <div
                class="bg-white rounded-lg border border-gray-200 p-6  transition-all"
                id="el-jhan4eiq"
              >
                <h3
                  class="text-xl font-semibold text-gray-800 mb-4"
                  id="el-0clni67f"
                >
                  Authentication Examples
                </h3>
                <p class="text-gray-600 mb-4" id="el-soa15vtz">
                  Various authentication implementations and security patterns.
                </p>
                <div class="flex justify-end" id="el-dkgcipw4">
                  <button
                    onClick={() => handleAuth()}
                    class="text-blue-600 hover:text-blue-800 font-medium"
                    id="el-8a0y5amf"
                  >
                    View Examples →
                  </button>
                </div>
              </div>

              {/* <!-- API Integration Example Card --> */}
              <div
                class="bg-white rounded-lg border border-gray-200 p-6  transition-all"
                id="el-dzkzy3ki"
              >
                <h3
                  class="text-xl font-semibold text-gray-800 mb-4"
                  id="el-jc6pebli"
                >
                  API Integration Examples
                </h3>
                <p class="text-gray-600 mb-4" id="el-5s70vlki">
                  Examples of API integration patterns and best practices.
                </p>
                <div class="flex justify-end" id="el-uj6de5jm">
                  <button
                    onClick={() => handleAPI()}
                    class="text-blue-600 hover:text-blue-800 font-medium"
                    id="el-x52zl22o"
                  >
                    View Examples →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold mt-8 mb-4">Premium</h1>
            <div
              class="bg-white rounded-lg border border-gray-200 p-6 transition-all"
              id="el-z2n8mi5h"
            >
              <div
                class="flex items-center justify-between mb-4"
                id="el-cf914gnf"
              >
                <div className="flex gap-8">
                  <img
                    src="https://market-resized.envatousercontent.com/previews/files/259186609/smart-display.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=c910fe2ae2c572e05d629cfae88478448ca2e4f6c76cf39e596cd276505df842"
                    alt=""
                    width={400}
                  />
                  <div>
                    <h1 className="font-bold text-xl mb-2">Smart Form</h1>
                    <p className="text-lg mb-2">Software Version:jQuery</p>
                    <p className="text-lg mb-2">File Types Included:</p>
                    <div className="flex gap-4">
                      <p className="bg-gray-200 rounded-lg px-2">
                        JavaScript JS
                      </p>
                      <p className="bg-gray-200 rounded-lg px-2">PHP</p>
                      <p className="bg-gray-200 rounded-lg px-2">CSS</p>
                      <p className="bg-gray-200 rounded-lg px-2">HTML</p>
                    </div>
                  </div>
                </div>
                <div className="text-center flex gap-4">
                  <div class="flex items-center h-40">
                    <div class="border-l border-gray-400 h-full"></div>
                  </div>

                  <div className="">
                    <h1 class="font-bold px-3 mb-2" id="el-swjaeg7g">
                      $13
                    </h1>
                    <p className="mb-2">4.2k sales</p>
                    <p>Last updated:2025 jan 20</p>
                    <button className="px-8 py-2 border border-black mt-4 text-blue-500 hover:border-blue-500">
                      Live Preview
                    </button>
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

export default Code;
