import React, { useEffect } from "react";

function cProgramming() {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);
  return (
    <div>
      <section
        id="CProgrammingComponents"
        class="min-h-screen bg-gray-50 py-12"
      >
        <div class="container mx-auto px-4" id="el-914ozmvq">
          {/* <!-- Header --> */}
          <div class="mb-12" id="el-94elmtr4">
            <h1 class="text-3xl font-bold text-gray-900 mb-4" id="el-fh7b5zfi">
              C Programming Components
            </h1>
            <p class="text-gray-600" id="el-l54g3lps">
              Standard C programming implementations and data structures
            </p>
          </div>

          {/* <!-- Components Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-qhtw3dxu">
            {/* <!-- Linked List Implementation --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-qnpkcquc"
            >
              <div class="border-b border-gray-200 p-4" id="el-42gfpacu">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-n3zh52gr"
                >
                  Linked List
                </h3>
              </div>
              <div class="p-4" id="el-h9fsbquc">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-jxa1j5ir">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-3sxwk12b"
                  >
                    <code id="el-irc266nr">
                      {`struct Node {
    int data;
    struct Node* next;
};

struct Node* createNode(int data) {
    struct Node* newNode = 
        (struct Node*)malloc(sizeof(struct Node));
    newNode-&gt;data = data;
    newNode-&gt;next = NULL;
    return newNode;
}

void insertNode(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    newNode-&gt;next = *head;
    *head = newNode;
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-c5wg8z1o">
                  A simple linked list implementation with insertion operation
                </p>
              </div>
            </div>

            {/* <!-- Binary Search Tree --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-qucz8qc5"
            >
              <div class="border-b border-gray-200 p-4" id="el-swpfnqd8">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-x149vzn0"
                >
                  Binary Search Tree
                </h3>
              </div>
              <div class="p-4" id="el-af4x175f">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-b65vu9sd">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-9io7y737"
                  >
                    <code id="el-jplwjzzj">
                      {`struct TreeNode {
    int data;
    struct TreeNode *left, *right;
};

struct TreeNode* newNode(int item) {
    struct TreeNode* temp = 
        (struct TreeNode*)malloc(sizeof(struct TreeNode));
    temp-&gt;data = item;
    temp-&gt;left = temp-&gt;right = NULL;
    return temp;
}

struct TreeNode* insert(struct TreeNode* node, int key) {
    if (node == NULL) return newNode(key);
    if (key &lt; node-&gt;data)
        node-&gt;left = insert(node-&gt;left, key);
    else if (key &gt; node-&gt;data)
        node-&gt;right = insert(node-&gt;right, key);
    return node;
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-pnk536kc">
                  Binary Search Tree implementation with insertion functionality
                </p>
              </div>
            </div>

            {/* <!-- Stack Implementation --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-u5wkhd17"
            >
              <div class="border-b border-gray-200 p-4" id="el-c4035qjr">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-zm72py8t"
                >
                  Stack
                </h3>
              </div>
              <div class="p-4" id="el-fpbwpp9o">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-zivnns3c">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-8bgcg9j5"
                  >
                    <code id="el-n30czlga">
                      {`#define MAX 100

struct Stack {
    int top;
    int array[MAX];
};

void initialize(struct Stack* stack) {
    stack-&gt;top = -1;
}

void push(struct Stack* stack, int item) {
    if (stack-&gt;top &gt;= MAX-1) return;
    stack-&gt;array[++stack-&gt;top] = item;
}

int pop(struct Stack* stack) {
    if (stack-&gt;top &lt; 0) return -1;
    return stack-&gt;array[stack-&gt;top--];
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-8k7bmyhw">
                  Array-based stack implementation with push and pop operations
                </p>
              </div>
            </div>

            {/* <!-- Queue Implementation --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-4y39o0nv"
            >
              <div class="border-b border-gray-200 p-4" id="el-0lrznjyt">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-7int8wz5"
                >
                  Queue
                </h3>
              </div>
              <div class="p-4" id="el-3xtsy657">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-730gdp1r">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-0g4oeve4"
                  >
                    <code id="el-oe8qvhg8">
                      {`struct Queue {
    int front, rear, size;
    unsigned capacity;
    int* array;
};

struct Queue* createQueue(unsigned capacity) {
    struct Queue* queue = 
        (struct Queue*)malloc(sizeof(struct Queue));
    queue-&gt;capacity = capacity;
    queue-&gt;front = queue-&gt;size = 0;
    queue-&gt;rear = capacity - 1;
    queue-&gt;array = 
        (int*)malloc(queue-&gt;capacity * sizeof(int));
    return queue;
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-yd1mal74">
                  Dynamic array-based queue implementation
                </p>
              </div>
            </div>

            {/* <!-- File Handling --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-8goq8y0w"
            >
              <div class="border-b border-gray-200 p-4" id="el-0cbwzda9">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-3t796hzm"
                >
                  File Operations
                </h3>
              </div>
              <div class="p-4" id="el-u54xjchi">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-pume0fvl">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-xx5nwvtf"
                  >
                    <code id="el-4cq6k7ql">
                      {`#include &lt;stdio.h&gt;

void writeToFile(const char* filename, const char* data) {
    FILE *fp = fopen(filename, "w");
    if (fp != NULL) {
        fprintf(fp, "%s", data);
        fclose(fp);
    }
}

void readFromFile(const char* filename) {
    FILE *fp = fopen(filename, "r");
    char buffer[100];
    if (fp != NULL) {
        while (fgets(buffer, 100, fp) != NULL) {
            printf("%s", buffer);
        }
        fclose(fp);
    }
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-i36bq8uu">
                  Basic file handling operations in C
                </p>
              </div>
            </div>

            {/* <!-- Memory Management --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-i8nvos49"
            >
              <div class="border-b border-gray-200 p-4" id="el-zd670zjy">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-hrij00fh"
                >
                  Memory Management
                </h3>
              </div>
              <div class="p-4" id="el-p1kdackx">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-o6i2pvdy">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-pwashu3k"
                  >
                    <code id="el-06ntyagz">
                      {`void* safeAlloc(size_t size) {
    void* ptr = malloc(size);
    if (ptr == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }
    return ptr;
}

void safeFree(void** ptr) {
    if (ptr != NULL &amp;&amp; *ptr != NULL) {
        free(*ptr);
        *ptr = NULL;
    }
}

// Usage example
int* array = safeAlloc(10 * sizeof(int));
safeFree((void**)&amp;array);`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-je0mr027">
                  Safe memory allocation and deallocation utilities
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

export default cProgramming;
