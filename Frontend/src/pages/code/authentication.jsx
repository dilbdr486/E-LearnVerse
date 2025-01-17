import React, { useEffect } from "react";

function authentication() {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);
  return (
    <div>
      <section
        id="AuthenticationExamples"
        class="min-h-screen bg-gray-50 py-12"
      >
        <div class="container mx-auto px-4" id="el-5mlq6ypr">
          {/* <!-- Header --> */}
          <div class="mb-12" id="el-4offio6i">
            <h1 class="text-3xl font-bold text-gray-900 mb-4" id="el-ecemxla3">
              Authentication Examples
            </h1>
            <p class="text-gray-600" id="el-2rckvz47">
              Authentication implementations across different frameworks and
              languages
            </p>
          </div>

          {/* <!-- Authentication Examples Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-3bqehstc">
            {/* <!-- JWT Authentication --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-9dxgm72z"
            >
              <div class="border-b border-gray-200 p-4" id="el-014aavzf">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-qh39k45j"
                >
                  JWT Authentication
                </h3>
              </div>
              <div class="p-4" id="el-h171a21q">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-k2g09z5d">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-ho26973t"
                  >
                    <code id="el-kts5afib">
                      {`const jwt = require('jsonwebtoken');

const generateToken = (user) =&gt; {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

const verifyToken = (token) =&gt; {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-cc0lpjgy">
                  JWT-based authentication implementation in Node.js
                </p>
              </div>
            </div>

            {/* <!-- Spring Security --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-7lkih5s0"
            >
              <div class="border-b border-gray-200 p-4" id="el-a9wgiznf">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-ms0elvtp"
                >
                  Spring Security
                </h3>
              </div>
              <div class="p-4" id="el-z65x7bmb">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-7kfob98o">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-6i2gx5yu"
                  >
                    <code id="el-pxq2dmws">
                      {`@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers("/api/public/**").permitAll()
            .antMatchers("/api/private/**").authenticated()
            .and()
            .formLogin()
            .and()
            .csrf().disable();
    }
}`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-037y84sx">
                  Spring Security configuration for web applications
                </p>
              </div>
            </div>

            {/* <!-- OAuth2 Implementation --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-qw63en4x"
            >
              <div class="border-b border-gray-200 p-4" id="el-d6v5wg99">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-rkn1eexa"
                >
                  OAuth2 Authentication
                </h3>
              </div>
              <div class="p-4" id="el-qprcgjlx">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-jy2umlb6">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-a3qpl314"
                  >
                    <code id="el-egvubrhs">
                      {`const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-4cumx8qu">
                  OAuth2 authentication with Google using Passport.js
                </p>
              </div>
            </div>

            {/* <!-- Session-based Auth --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-6id2fxgv"
            >
              <div class="border-b border-gray-200 p-4" id="el-vvpilozt">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-9ttqwkzk"
                >
                  Session Authentication
                </h3>
              </div>
              <div class="p-4" id="el-gquirg61">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-qcll3osn">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-bre50d2j"
                  >
                    <code id="el-3es1uvnj">
                      {`const express = require('express');
const session = require('express-session');

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: true,
    maxAge: 24 * 60 * 60 * 1000 
  }
}));

const authenticate = (req, res, next) =&gt; {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
};`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-26s3eq35">
                  Session-based authentication in Express.js
                </p>
              </div>
            </div>

            {/* <!-- Firebase Auth --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-ro8czhmd"
            >
              <div class="border-b border-gray-200 p-4" id="el-q1b0kqpd">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-uhntt975"
                >
                  Firebase Authentication
                </h3>
              </div>
              <div class="p-4" id="el-oa8l257g">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-594hb8fn">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-n3hzv27b"
                  >
                    <code id="el-cmlpvj21">
                      {`import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) =&gt; {
    const user = userCredential.user;
    // Signed in
  })
  .catch((error) =&gt; {
    const errorCode = error.code;
    const errorMessage = error.message;
  });`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-mwthxpdc">
                  Firebase authentication implementation
                </p>
              </div>
            </div>

            {/* <!-- Basic Auth --> */}
            <div
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
              id="el-bg9lr6mu"
            >
              <div class="border-b border-gray-200 p-4" id="el-atgtufed">
                <h3
                  class="text-lg font-semibold text-gray-800"
                  id="el-uabei71y"
                >
                  Basic Authentication
                </h3>
              </div>
              <div class="p-4" id="el-qmk7zjio">
                <div class="bg-gray-100 p-4 rounded-lg mb-4" id="el-tublbcz0">
                  <pre
                    class="text-sm text-gray-800 overflow-x-auto"
                    id="el-ylmhhm8d"
                  >
                    <code id="el-obvutfqz">
                      {`const basicAuth = (req, res, next) =&gt; {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  const credentials = Buffer.from(
    authHeader.split(' ')[1], 
    'base64'
  ).toString('utf-8');
  
  const [username, password] = credentials.split(':');
  
  if (validateCredentials(username, password)) {
    next();
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};`}
                    </code>
                  </pre>
                </div>
                <p class="text-sm text-gray-600" id="el-zbj5k5aq">
                  Basic HTTP authentication middleware
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

export default authentication;
