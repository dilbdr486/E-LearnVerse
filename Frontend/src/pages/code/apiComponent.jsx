import React, { useEffect } from "react";

function api() {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);
  return (
    <div>
      <section
        id="APIIntegrationExamples"
        class="min-h-screen bg-gray-50 py-12"
      >
        <div class="container mx-auto px-4" id="el-za1sjwph">
          {/* <!-- Header --> */}
          <div class="mb-12" id="el-lli8wxv9">
            <h1 class="text-3xl font-bold text-gray-900 mb-4" id="el-klanrfis">
              API Integration Examples
            </h1>
            <p class="text-gray-600" id="el-qx9vk1qr">
              API integration implementations across different languages and
              frameworks
            </p>
          </div>

          {/* <!-- API Examples Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-buc9ae4t">
            {/* <!-- Fetch API --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-nk6jo68r"
            >
              <div class="border-b border-gray-200 p-4" id="el-zr9cu2io">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-45sgt1lh"
                >
                  Fetch API
                </h3>
              </div>
              <div class="p-4" id="el-u1c09asy">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-t8muo7b7">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-jietujqo"
                  >
                    <code id="el-m96kokki">
                      {`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-gp7ka69m">
                  JavaScript Fetch API implementation with error handling
                </p>
              </div>
            </div>

            {/* <!-- Axios Example --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-col0qooq"
            >
              <div class="border-b border-gray-200 p-4" id="el-uctgedxe">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-r6rkjsj3"
                >
                  Axios Integration
                </h3>
              </div>
              <div class="p-4" id="el-4hjxye5q">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-1p9mbji5">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-twm29rne"
                  >
                    <code id="el-5k07jxfa">
                      {`const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {'X-Custom-Header': 'value'}
});

async function getData() {
  try {
    const response = await api.get('/endpoint');
    return response.data;
  } catch (error) {
    handleError(error);
  }
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-cwgafnwg">
                  Axios HTTP client setup and usage example
                </p>
              </div>
            </div>

            {/* <!-- Spring RestTemplate --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-pgekwz69"
            >
              <div class="border-b border-gray-200 p-4" id="el-y88ebndf">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-a28jhs87"
                >
                  Spring RestTemplate
                </h3>
              </div>
              <div class="p-4" id="el-2wdywudo">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-r1hfonhn">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-dlx2va97"
                  >
                    <code id="el-9h2l4rlp">
                      {`@Service
public class ApiService {
    private final RestTemplate restTemplate;
    
    public ApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
    
    public UserDto getUser(Long id) {
        return restTemplate.getForObject(
            "https://api.example.com/users/{id}",
            UserDto.class,
            id
        );
    }
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-86q30zen">
                  Spring RestTemplate implementation for API calls
                </p>
              </div>
            </div>

            {/* <!-- Python Requests --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-yonkpfrz"
            >
              <div class="border-b border-gray-200 p-4" id="el-c5jp3gn5">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-lpov2ci0"
                >
                  Python Requests
                </h3>
              </div>
              <div class="p-4" id="el-i1r17vwf">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-0dfvnzpw">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-ppfrkvam"
                  >
                    <code id="el-sdgfzns5">
                      {`import requests

def fetch_data():
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    try:
        response = requests.get(
            'https://api.example.com/data',
            headers=headers
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-2pdi7xvu">
                  Python requests library implementation
                </p>
              </div>
            </div>

            {/* <!-- GraphQL Query --> */}
            <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-pu3bvorp">
              <pre
                class="text-sm text-gray-800 overflow-x-auto"
                id="el-yvbn5rzh"
              >
                <code id="el-xkc0e4az">
                  {`import { gql, useQuery } from '@apollo/client';

const GET_USER = gql'
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
      }
    }
  }
';

function UserProfile({ userId }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });
}`}
                </code>
              </pre>
            </div>

            {/* <!-- WebSocket Integration --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-h835o135"
            >
              <div class="border-b border-gray-200 p-4" id="el-qta5l2pt">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-e1nsgwev"
                >
                  WebSocket Client
                </h3>
              </div>
              <div class="p-4" id="el-qu1hd8gs">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-3023b3e6">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-k7dj1y5a"
                  >
                    <code id="el-7jzxbnzn">
                      {`class WebSocketClient {
  constructor(url) {
    this.ws = new WebSocket(url);
    
    this.ws.onopen = () =&gt; {
      console.log('Connected to WebSocket');
    };
    
    this.ws.onmessage = (event) =&gt; {
      const data = JSON.parse(event.data);
      this.handleMessage(data);
    };
    
    this.ws.onerror = (error) =&gt; {
      console.error('WebSocket error:', error);
    };
  }
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-xeil0qn7">
                  WebSocket client implementation for real-time data
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

export default api;
