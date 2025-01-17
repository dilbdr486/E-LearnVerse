import React, { useEffect } from "react";
import Prism from "prismjs";

function form() {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);
  return (
    <div>
      <section id="FormExamples" class="min-h-screen bg-gray-50 py-12">
        <div class="container mx-auto px-4" id="el-by228jde">
          {/* <!-- Header --> */}
          <div class="mb-12" id="el-t7l0eh22">
            <h1 class="text-3xl font-bold text-gray-900 mb-4" id="el-up8wmekp">
              Form Examples
            </h1>
            <p class="text-gray-600" id="el-cl42zl11">
              Form implementations in different languages and frameworks
            </p>
          </div>

          {/* <!-- Forms Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-s7jybn0o">
            {/* <!-- HTML/CSS Form --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-abglcdq7"
            >
              <div class="border-b border-gray-200 p-4" id="el-ho3y7t0x">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-gvn0v3xh"
                >
                  HTML/CSS Form
                </h3>
              </div>
              <div class="p-4" id="el-jdiphs8e">
                <form class="space-y-4 mb-4" id="el-hpufv708">
                  <div class="space-y-2" id="el-5c71wh3w">
                    <label
                      class="block text-sm font-medium text-gray-700"
                      id="el-73z28wzn"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="el-ovgk1svw"
                    />
                  </div>
                  <div class="space-y-2" id="el-mbal7xny">
                    <label
                      class="block text-sm font-medium text-gray-700"
                      id="el-3nxnhrse"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="el-bvqo9t7x"
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    id="el-lrpa2qsu"
                  >
                    Submit
                  </button>
                </form>
                <div class="bg-gray-100 p-4 rounded-lg" id="el-7dbjf7mj">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-hkmphyaw"
                  >
                    <code id="el-gwm2gqjr">
                      {`&lt;form class="space-y-4"&gt;
  &lt;div class="space-y-2"&gt;
    &lt;label&gt;Username&lt;/label&gt;
    &lt;input type="text" class="form-input"&gt;
  &lt;/div&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* <!-- JavaScript Form Validation --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-wwtrojgk"
            >
              <div class="border-b border-gray-200 p-4" id="el-f320smzn">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-bsuddca9"
                >
                  JavaScript Form Validation
                </h3>
              </div>
              <div class="p-4" id="el-o49nvyby">
                <form class="space-y-4 mb-4" id="el-4m13nsik">
                  <div class="space-y-2" id="el-gmapqvmn">
                    <label
                      class="block text-sm font-medium text-gray-700"
                      id="el-uf20dvv2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="el-s2eber2o"
                    />
                    <p class="text-red-500 text-sm hidden" id="el-rm3wvzet">
                      Please enter a valid email
                    </p>
                  </div>
                  <div class="space-y-2" id="el-xyke1sbu">
                    <label
                      class="block text-sm font-medium text-gray-700"
                      id="el-3zeqghcc"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="el-ronjo4qn"
                    />
                    <p class="text-sm text-gray-500" id="el-mfu4oz52">
                      Must be at least 8 characters
                    </p>
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    id="el-d28odcdp"
                  >
                    Validate &amp; Submit
                  </button>
                </form>
                <div class="bg-gray-100 p-4 rounded-lg" id="el-ycrmv0jp">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-8da3wlqu"
                  >
                    <code id="el-qh696644">
                      {`function validateForm(e) {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  
  if (!email.value.includes('@')) {
    showError('email', 'Invalid email format');
    return;
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* <!-- React Form --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-cg7bq56n"
            >
              <div class="border-b border-gray-200 p-4" id="el-ubybkv0r">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-av3pu6xq"
                >
                  React Form Component
                </h3>
              </div>
              <div class="p-4" id="el-zguphqe4">
                <form class="space-y-4 mb-4" id="el-91piopet">
                  <div class="space-y-2" id="el-gddwvni6">
                    <label
                      class="block text-sm font-medium text-gray-700"
                      id="el-iif3gtw7"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="el-gl4ty6xk"
                    />
                  </div>
                  <div class="space-y-2" id="el-77e546ha">
                    <label
                      class="block text-sm font-medium text-gray-700"
                      id="el-9q8skc97"
                    >
                      Message
                    </label>
                    <textarea
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="el-xvxsbo4y"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    id="el-hgmq1ngp"
                  >
                    Send
                  </button>
                </form>
                <div class="bg-gray-100 p-4 rounded-lg" id="el-liq4utev">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-xbicyraw"
                  >
                    <code id="el-aygsna7f">
                      {`function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    // Handle submission
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      // Form fields
    &lt;/form&gt;
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* <!-- PHP Form Handling --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-7jw2y3k8"
            >
              <div class="border-b border-gray-200 p-4" id="el-dnc8tq03">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-ssu2agdh"
                >
                  PHP Form Processing
                </h3>
              </div>
              <div class="p-4" id="el-ruzjdnbk">
                <form class="space-y-4 mb-4" id="el-fv8nhro1">
                  <div class="space-y-2" id="el-234v65oe">
                    <label
                      class="block text-sm font-medium text-gray-700"
                      id="el-81i48b20"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="el-if9hgacr"
                    />
                  </div>
                  <div class="space-y-2" id="el-8sett87w">
                    <label
                      class="block text-sm font-medium text-gray-700"
                      id="el-z2xuxh6t"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="el-a9ndfsbr"
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    id="el-xqq9a1ov"
                  >
                    Submit
                  </button>
                </form>
                <div class="bg-gray-100 p-4 rounded-lg" id="el-ph8b5okv">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-5mr49cvl"
                  >
                    <code id="el-k6a8g0bo">
                      {`&lt;?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitize($_POST['name']);
    $email = sanitize($_POST['email']);
    
    if (validateInput($name, $email)) {
        // Process form data
        saveToDatabase($name, $email);
    }
}
?&gt;`}
                    </code>
                  </pre>
                </div>
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

export default form;
