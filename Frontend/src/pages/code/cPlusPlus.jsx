import React, { useEffect } from "react";

function cPlusPlus() {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);
  return (
    <div>
      <section id="CPlusPlusComponents" class="min-h-screen bg-gray-50 py-12">
        <div class="container mx-auto px-4" id="el-7fr9i2rx">
          {/* <!-- Header --> */}
          <div class="mb-12" id="el-nbw08k2j">
            <h1 class="text-3xl font-bold text-gray-900 mb-4" id="el-kpphf9qh">
              C++ Components
            </h1>
            <p class="text-gray-600" id="el-680f9jmi">
              Object-oriented C++ implementations and design patterns
            </p>
          </div>

          {/* <!-- Components Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-lqqcdcnz">
            {/* <!-- Template Class Example --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-ei42pbow"
            >
              <div class="border-b border-gray-200 p-4" id="el-od9ph1qs">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-4r61s9qb"
                >
                  Generic Container
                </h3>
              </div>
              <div class="p-4" id="el-gwobpjui">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-joqkqvz3">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-scbdvck3"
                  >
                    <code id="el-guy4muyn">
                      {`template &lt;typename T&gt;
class Container {
private:
    std::vector&lt;T&gt; elements;
public:
    void add(const T&amp; element) {
        elements.push_back(element);
    }
    
    T&amp; get(size_t index) {
        return elements.at(index);
    }
    
    size_t size() const {
        return elements.size();
    }
};`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-de2htw9e">
                  Template-based generic container implementation
                </p>
              </div>
            </div>

            {/* <!-- Smart Pointer Implementation --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-9prtrbgn"
            >
              <div class="border-b border-gray-200 p-4" id="el-k12xjh6l">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-amvxksfh"
                >
                  Smart Pointer
                </h3>
              </div>
              <div class="p-4" id="el-oitxcdek">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-k1m1onz9">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-vtuwhhqe"
                  >
                    <code id="el-5xiqd3yp">
                      {`template &lt;typename T&gt;
class UniquePtr {
private:
    T* ptr;
public:
    explicit UniquePtr(T* p = nullptr) : ptr(p) {}
    ~UniquePtr() { delete ptr; }
    
    UniquePtr(const UniquePtr&amp;) = delete;
    UniquePtr&amp; operator=(const UniquePtr&amp;) = delete;
    
    T* get() const { return ptr; }
    T&amp; operator*() const { return *ptr; }
    T* operator-&gt;() const { return ptr; }
};`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-ywygd8a6">
                  Custom unique pointer implementation with RAII
                </p>
              </div>
            </div>

            {/* <!-- Observer Pattern --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-l18oxr2h"
            >
              <div class="border-b border-gray-200 p-4" id="el-65giyujr">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-sw7f6sxd"
                >
                  Observer Pattern
                </h3>
              </div>
              <div class="p-4" id="el-5j1c37wj">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-d72ck5wc">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-olxcjsel"
                  >
                    <code id="el-4rbv02li">
                      {`class Observer {
public:
    virtual void update(const std::string&amp; message) = 0;
};

class Subject {
private:
    std::vector&lt;Observer*&gt; observers;
public:
    void attach(Observer* observer) {
        observers.push_back(observer);
    }
    
    void notify(const std::string&amp; message) {
        for(auto observer : observers) {
            observer-&gt;update(message);
        }
    }
};`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-cr4x3ljh">
                  Implementation of the Observer design pattern
                </p>
              </div>
            </div>

            {/* <!-- Thread-Safe Queue --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-jvoeionj"
            >
              <div class="border-b border-gray-200 p-4" id="el-ee9532jl">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-t67hjpba"
                >
                  Thread-Safe Queue
                </h3>
              </div>
              <div class="p-4" id="el-flx4xiv1">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-zqel8zrb">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-aynluohf"
                  >
                    <code id="el-r8nqqwe8">
                      {`template&lt;typename T&gt;
class ThreadSafeQueue {
private:
    std::queue&lt;T&gt; queue;
    mutable std::mutex mutex;
public:
    void push(T value) {
        std::lock_guard&lt;std::mutex&gt; lock(mutex);
        queue.push(std::move(value));
    }
    
    bool try_pop(T&amp; value) {
        std::lock_guard&lt;std::mutex&gt; lock(mutex);
        if(queue.empty()) return false;
        value = std::move(queue.front());
        queue.pop();
        return true;
    }
};`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-t6n8t7tr">
                  Thread-safe queue implementation using mutex
                </p>
              </div>
            </div>

            {/* <!-- Factory Pattern --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-ok3t8xn9"
            >
              <div class="border-b border-gray-200 p-4" id="el-6v6tdyhh">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-9r031hj4"
                >
                  Factory Pattern
                </h3>
              </div>
              <div class="p-4" id="el-0kj3p5s5">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-oa1pltf1">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-i1ijuhm4"
                  >
                    <code id="el-pzlei124">
                      {`class Product {
public:
    virtual void operation() = 0;
};

class ConcreteProductA : public Product {
public:
    void operation() override {
        // Implementation
    }
};

class Factory {
public:
    static std::unique_ptr&lt;Product&gt; createProduct(
        const std::string&amp; type) {
        if(type == "A") 
            return std::make_unique&lt;ConcreteProductA&gt;();
        return nullptr;
    }
};`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-d0b4thjs">
                  Factory design pattern implementation
                </p>
              </div>
            </div>

            {/* <!-- RAII Resource Manager --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-7zuoc0rh"
            >
              <div class="border-b border-gray-200 p-4" id="el-3s3xgbwd">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-bhtozmpv"
                >
                  RAII Resource Manager
                </h3>
              </div>
              <div class="p-4" id="el-34ngc6v8">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-gbs17ojb">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-i6azle35"
                  >
                    <code id="el-m6hinhd7">
                      {`class ResourceManager {
private:
    FILE* file;
public:
    ResourceManager(const char* filename) {
        file = fopen(filename, "r");
        if(!file) throw std::runtime_error("File open failed");
    }
    
    ~ResourceManager() {
        if(file) {
            fclose(file);
            file = nullptr;
        }
    }
    
    ResourceManager(const ResourceManager&amp;) = delete;
    ResourceManager&amp; operator=(const ResourceManager&amp;) = delete;
};`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-m7z81ww0">
                  RAII-based resource management class
                </p>
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

export default cPlusPlus;
