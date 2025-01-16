import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Add your preferred Prism.js theme
import "prismjs/components/prism-javascript"; // Add JavaScript language support

function JavaScriptComponents() {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          JavaScript Components
        </h1>
        <p className="text-gray-600">
          Interactive components built with vanilla JavaScript
        </p>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Modal Component Card */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Modal Dialog
            </h3>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code className="language-javascript">
                  {`// Modal JavaScript Implementation
const modal = {
  open() {
    document.getElementById('modal').classList.remove('hidden');
  },
  close() {
    document.getElementById('modal').classList.add('hidden');
  }
};`}
                </code>
              </pre>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert("Demo Modal")}
            >
              Demo Modal
            </button>
          </div>
        </div>

        {/* Form Validation Component Card */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Form Validation
            </h3>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code className="language-javascript">
                  {`// Form Validation JavaScript
function validateForm(event) {
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Invalid email format');
    return false;
  }
  return true;
}`}
                </code>
              </pre>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert("Try Validation")}
            >
              Try Validation
            </button>
          </div>
        </div>

        {/* Tabs Component Card */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Tab Navigation
            </h3>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code className="language-javascript">
                  {`// Tab Navigation JavaScript
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.add('hidden');
  });
  document.getElementById(tabId).classList.remove('hidden');
}`}
                </code>
              </pre>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert("View Tabs Demo")}
            >
              View Tabs Demo
            </button>
          </div>
        </div>

        {/* Accordion Component Card */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-800">Accordion</h3>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code className="language-javascript">
                  {`// Accordion JavaScript
function toggleAccordion(elementId) {
  const content = document.getElementById(elementId);
  content.classList.toggle('hidden');
  content.classList.toggle('active');
}`}
                </code>
              </pre>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert("Try Accordion")}
            >
              Try Accordion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavaScriptComponents;
