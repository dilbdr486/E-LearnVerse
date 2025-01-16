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
        </div>
      </section>
    </div>
  );
}

export default JavaComponent;
