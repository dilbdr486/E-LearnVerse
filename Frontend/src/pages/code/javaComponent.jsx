import React, { useEffect } from "react";

function JavaComponent() {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after rendering
  }, []);

  return (
    <div>
      <section id="JavaComponents" className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Java Components
            </h1>
            <p className="text-gray-600">
              Enterprise-ready Java components and implementations
            </p>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* REST Controller Component Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  REST Controller
                </h3>
              </div>
              <div className="p-4">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    <code>
                      {`@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}`}
                    </code>
                  </pre>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  A RESTful controller implementation with Spring Boot
                </p>
              </div>
            </div>

            {/* JPA Entity Component Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  JPA Entity
                </h3>
              </div>
              <div className="p-4">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    <code>
                      {`@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;
}`}
                    </code>
                  </pre>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  JPA Entity with relationships and validations
                </p>
              </div>
            </div>

            {/* Spring Service Component Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Service Layer
                </h3>
              </div>
              <div className="p-4">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    <code>
                      {`@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(UserDTO dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        return userRepository.save(user);
    }
}`}
                    </code>
                  </pre>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Service layer with transaction management
                </p>
              </div>
            </div>

            {/* Security Configuration Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Security Config
                </h3>
              </div>
              <div className="p-4">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    <code>
                      {`@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        return http
            .authorizeRequests()
            .antMatchers("/api/**").authenticated()
            .and()
            .build();
    }
}`}
                    </code>
                  </pre>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Spring Security configuration example
                </p>
              </div>
            </div>

            {/* JPA Repository Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  JPA Repository
                </h3>
              </div>
              <div className="p-4">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    <code>
                      {`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    @Query("SELECT u FROM User u WHERE u.status = ?1")
    List<User> findByStatus(String status);
}`}
                    </code>
                  </pre>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Custom repository with JPA queries
                </p>
              </div>
            </div>

            {/* Exception Handler Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Exception Handler
                </h3>
              </div>
              <div className="p-4">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    <code>
                      {`@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(new ErrorResponse(ex.getMessage()));
    }
}`}
                    </code>
                  </pre>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Global exception handling implementation
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

export default JavaComponent;
