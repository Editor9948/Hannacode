// Advanced PHP & MySQL Development helper functions
const getAdvancedPHPLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Advanced PHP Syntax": `
- Advanced PHP syntax features
- Namespaces and autoloading
- Traits and interfaces
- Closures and anonymous functions
- Generators and iterators`,

"Object-Oriented PHP": `
- Classes and objects
- Inheritance and polymorphism
- Encapsulation and abstraction
- Static properties and methods
- Magic methods`,

"PHP Design Patterns": `
- Singleton pattern
- Factory pattern
- Observer pattern
- Strategy pattern
- MVC pattern`,

"PHP Inheritance":`
-Single Inheritance in PHP
-Method Overriding in Inheritance`,

      "PHP Interfaces":`
-Declaring and Implementing Interfaces
-Multiple Interface Implementation`,

 "PHP Testing": `
- Unit testing with PHPUnit
- Test-driven development
- Mocking and stubbing
- Continuous integration
- Best practices`,

 "PHP Security": `
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- SQL injection prevention
- Secure coding practices
- Security tools`,

    "PHP Performance Optimization": `
- Code profiling
- Caching strategies
- Database optimization
- Load balancing
- Best practices`,

"PHP Frameworks": `
- Introduction to PHP frameworks
- Laravel basics
- Symfony basics
- CodeIgniter basics
- Framework comparison`,

    "PHP API Development": `
- RESTful API design
- API authentication
- API versioning
- API documentation
- Best practices`,

    "PHP Microservices": `
- Microservices architecture
- Service communication
- Containerization
- Orchestration
- Best practices`,

 "PHP DevOps": `
- Continuous integration
- Continuous deployment
- Docker and containers
- Kubernetes
- Best practices`,

    "PHP Cloud Services": `
- AWS services
- Azure services
- Google Cloud services
- Serverless architecture
- Best practices`,

    "PHP Machine Learning": `
- Introduction to machine learning
- PHP ML libraries
- Data preprocessing
- Model training
- Best practices`,

    "PHP Blockchain": `
- Blockchain basics
- Smart contracts
- Cryptocurrency integration
- Security considerations
- Best practices`,

    "PHP Internet of Things" : `
- IoT basics
- Device communication
- Data processing
- Security considerations
- Best practices`,

    "PHP Mobile Development": `
- Mobile app development
- API integration
- Push notifications
- Offline capabilities
- Best practices`,

    "PHP Game Development": `
- Game development basics
- Graphics and animation
- User input handling
- Game logic
- Best practices`,

    "PHP Virtual Reality": `
- VR basics
- 3D modeling
- User interaction
- Performance optimization
- Best practices`,

    "PHP Augmented Reality": `
- AR basics
- Marker-based AR
- Location-based AR
- User interaction
- Best practices`,

    "PHP Natural Language Processing": `
- NLP basics
- Text processing
- Sentiment analysis
- Language models
- Best practices`,

    "PHP Computer Vision": `
- Computer vision basics
- Image processing
- Object detection
- Facial recognition
- Best practices`,

    "PHP Robotics": `
- Robotics basics
- Robot control
- Sensor integration
- Autonomous systems
- Best practices`,

    "PHP Quantum Computing": `
- Quantum computing basics
- Quantum algorithms
- Quantum simulation
- Quantum cryptography
- Best practices`,

    "PHP Edge Computing": `
- Edge computing basics
- Edge devices
- Data processing
- Security considerations
- Best practices`,

    "PHP 5G": `
- 5G basics
- Network architecture
- Application development
- Security considerations
- Best practices`,

    "PHP Artificial Intelligence": `
- AI basics
- Machine learning integration
- Neural networks
- Deep learning
- Best practices`,

    "PHP Big Data": `
- Big data basics
- Data processing
- Data storage
- Data analysis
- Best practices`,

    "PHP Data Science": `
- Data science basics
- Data analysis
- Data visualization
- Statistical methods
- Best practices`,

    "Asynchronous PHP & Parallel Processing": `
- Introduction to asynchronous programming in PHP
- Using extensions like Swoole, ReactPHP, or pthreads
- Event loops and non-blocking I/O
- Parallel execution and concurrency
- Real-world use cases (websockets, task queues, APIs)
- Best practices and limitations
`,
  };
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3";
};

const getAdvancedPHPCodeExample = (lessonTitle) => {
  const examples = {
    "Advanced PHP Syntax": `
    <?php
    namespace App;
    use App\Traits\Loggable;
     class User {
      use Loggable;
       public function __construct() {
        $this->log(\"User created\");
                 }
             ?>`,

    "Object-Oriented PHP": `
    <?php
    class Animal {
     protected $name;
       public function __construct($name) {
         $this->name = $name;
              }
        public function speak() {
            return \"Some sound\";
              }
            }
              class Dog extends Animal {
                 public function speak() {
                        return \"Woof!\";
                           }
                        }
                           ?>`,

    "PHP Design Patterns": `
    <?php
    class Singleton {
       private static $instance = null;
         private function __construct() {}
          public static function getInstance() {
           if (self::$instance === null) {
             self::$instance = new self();
                   }    
               return self::$instance;
                   }
               }
                ?>`,

      "PHP Inheritance":`
      <?php
// PHP Inheritance Example: Vehicle Management System

// Base/Parent Class
abstract class Vehicle {
    protected $brand;
    protected $model;
    protected $year;
    protected $color;
    protected $engine;
    protected $isRunning = false;
    
    public function __construct($brand, $model, $year, $color) {
        $this->brand = $brand;
        $this->model = $model;
        $this->year = $year;
        $this->color = $color;
        echo "Vehicle created: {$this->brand} {$this->model} ({$this->year})\n";
    }
    
    // Methods that can be inherited
    public function startEngine() {
        if (!$this->isRunning) {
            $this->isRunning = true;
            return "Engine started for {$this->brand} {$this->model}";
        }
        return "Engine is already running";
    }
    
    public function stopEngine() {
        if ($this->isRunning) {
            $this->isRunning = false;
            return "Engine stopped for {$this->brand} {$this->model}";
        }
        return "Engine is already stopped";
    }
    
    public function getInfo() {
        return [
            'brand' => $this->brand,
            'model' => $this->model,
            'year' => $this->year,
            'color' => $this->color,
            'running' => $this->isRunning
        ];
    }
    
    // Abstract method - must be implemented by child classes
    abstract public function getVehicleType();
    
    // Method that can be overridden
    public function accelerate() {
        return $this->isRunning ? "Vehicle is accelerating" : "Start engine first";
    }
    
    // Protected method - accessible by child classes
    protected function performMaintenance($type) {
        return "Performing {$type} maintenance on {$this->brand} {$this->model}";
    }
}

// Child Class 1: Car (extends Vehicle)
class Car extends Vehicle {
    private $doors;
    private $transmission;
    private $currentGear = 0;
    private $maxSpeed = 200;
    
    public function __construct($brand, $model, $year, $color, $doors, $transmission) {
        // Call parent constructor
        parent::__construct($brand, $model, $year, $color);
        $this->doors = $doors;
        $this->transmission = $transmission;
    }
    
    // Implement abstract method
    public function getVehicleType() {
        return "Car";
    }
    
    // Method Overriding - specialized behavior for cars
    public function accelerate() {
        if (!$this->isRunning) {
            return "Please start the engine first";
        }
        
        if ($this->transmission === 'manual' && $this->currentGear === 0) {
            return "Please engage gear first";
        }
        
        return "Car is accelerating smoothly with {$this->transmission} transmission";
    }
    
    // Car-specific methods
    public function shiftGear($gear) {
        if ($this->transmission === 'automatic') {
            return "Automatic transmission - no manual gear shifting needed";
        }
        
        if ($gear >= 0 && $gear <= 6) {
            $this->currentGear = $gear;
            return "Shifted to gear {$gear}";
        }
        
        return "Invalid gear selection";
    }
    
    public function openDoors() {
        return "Opening {$this->doors} doors";
    }
    
    // Override parent method with additional functionality
    public function getInfo() {
        $parentInfo = parent::getInfo(); // Get parent info
        $parentInfo['doors'] = $this->doors;
        $parentInfo['transmission'] = $this->transmission;
        $parentInfo['current_gear'] = $this->currentGear;
        $parentInfo['vehicle_type'] = $this->getVehicleType();
        return $parentInfo;
    }
    
    // Access protected parent method
    public function scheduleMaintenance() {
        return $this->performMaintenance("routine car");
    }
}

// Child Class 2: Motorcycle (extends Vehicle)
class Motorcycle extends Vehicle {
    private $engineCapacity;
    private $hasSidecar;
    private $maxSpeed = 300;
    
    public function __construct($brand, $model, $year, $color, $engineCapacity, $hasSidecar = false) {
        parent::__construct($brand, $model, $year, $color);
        $this->engineCapacity = $engineCapacity;
        $this->hasSidecar = $hasSidecar;
    }
    
    // Implement abstract method
    public function getVehicleType() {
        return "Motorcycle";
    }
    
    // Method Overriding - specialized behavior for motorcycles
    public function accelerate() {
        if (!$this->isRunning) {
            return "Start the engine first";
        }
        
        $acceleration = $this->hasSidecar ? "moderate" : "rapid";
        return "Motorcycle is accelerating with {$acceleration} speed ({$this->engineCapacity}cc engine)";
    }
    
    // Motorcycle-specific methods
    public function wheelie() {
        if (!$this->isRunning) {
            return "Cannot perform wheelie - engine not running";
        }
        
        if ($this->hasSidecar) {
            return "Cannot perform wheelie with sidecar attached";
        }
        
        return "Performing wheelie on {$this->brand} {$this->model}!";
    }
    
    public function attachSidecar() {
        if ($this->hasSidecar) {
            return "Sidecar already attached";
        }
        
        $this->hasSidecar = true;
        return "Sidecar attached to motorcycle";
    }
    
    // Override parent method
    public function getInfo() {
        $parentInfo = parent::getInfo();
        $parentInfo['engine_capacity'] = $this->engineCapacity . 'cc';
        $parentInfo['has_sidecar'] = $this->hasSidecar;
        $parentInfo['vehicle_type'] = $this->getVehicleType();
        return $parentInfo;
    }
    
    public function scheduleMaintenance() {
        return $this->performMaintenance("motorcycle engine");
    }
}

// Child Class 3: Truck (extends Vehicle)
class Truck extends Vehicle {
    private $loadCapacity;
    private $currentLoad = 0;
    private $isLoading = false;
    
    public function __construct($brand, $model, $year, $color, $loadCapacity) {
        parent::__construct($brand, $model, $year, $color);
        $this->loadCapacity = $loadCapacity;
    }
    
    public function getVehicleType() {
        return "Truck";
    }
    
    // Method Overriding - trucks accelerate differently based on load
    public function accelerate() {
        if (!$this->isRunning) {
            return "Start the engine first";
        }
        
        if ($this->isLoading) {
            return "Cannot accelerate while loading/unloading";
        }
        
        $loadPercent = ($this->currentLoad / $this->loadCapacity) * 100;
        
        if ($loadPercent > 80) {
            return "Truck accelerating slowly due to heavy load ({$loadPercent}% capacity)";
        } elseif ($loadPercent > 50) {
            return "Truck accelerating moderately with {$loadPercent}% load";
        } else {
            return "Truck accelerating normally with light load";
        }
    }
    
    // Truck-specific methods
    public function loadCargo($weight) {
        if ($this->currentLoad + $weight > $this->loadCapacity) {
            return "Cannot load {$weight}kg - exceeds capacity limit";
        }
        
        $this->isLoading = true;
        $this->currentLoad += $weight;
        $this->isLoading = false;
        
        return "Loaded {$weight}kg. Current load: {$this->currentLoad}kg/{$this->loadCapacity}kg";
    }
    
    public function unloadCargo($weight = null) {
        $weight = $weight ?? $this->currentLoad; // Unload all if no weight specified
        
        if ($weight > $this->currentLoad) {
            return "Cannot unload {$weight}kg - current load is only {$this->currentLoad}kg";
        }
        
        $this->isLoading = true;
        $this->currentLoad -= $weight;
        $this->isLoading = false;
        
        return "Unloaded {$weight}kg. Remaining load: {$this->currentLoad}kg";
    }
    
    public function getInfo() {
        $parentInfo = parent::getInfo();
        $parentInfo['load_capacity'] = $this->loadCapacity . 'kg';
        $parentInfo['current_load'] = $this->currentLoad . 'kg';
        $parentInfo['load_percentage'] = round(($this->currentLoad / $this->loadCapacity) * 100, 1) . '%';
        $parentInfo['vehicle_type'] = $this->getVehicleType();
        return $parentInfo;
    }
    
    public function scheduleMaintenance() {
        return $this->performMaintenance("heavy-duty truck");
    }
}

// Usage Examples and Demonstrations
echo "=== PHP INHERITANCE DEMONSTRATION ===\n\n";

// Create different vehicle instances
$car = new Car("Toyota", "Camry", 2023, "Blue", 4, "automatic");
$motorcycle = new Motorcycle("Honda", "CBR600RR", 2023, "Red", 600);
$truck = new Truck("Ford", "F-150", 2023, "White", 1000);

echo "\n--- Testing Inherited Methods ---\n";

// Test inherited methods
echo $car->startEngine() . "\n";
echo $motorcycle->startEngine() . "\n";
echo $truck->startEngine() . "\n";

echo "\n--- Testing Method Overriding ---\n";

// Test method overriding - each vehicle accelerates differently
echo "Car: " . $car->accelerate() . "\n";
echo "Motorcycle: " . $motorcycle->accelerate() . "\n";
echo "Truck: " . $truck->accelerate() . "\n";

echo "\n--- Testing Specific Methods ---\n";

// Test car-specific methods
echo $car->shiftGear(3) . "\n";
echo $car->openDoors() . "\n";

// Test motorcycle-specific methods
echo $motorcycle->wheelie() . "\n";
echo $motorcycle->attachSidecar() . "\n";
echo $motorcycle->wheelie() . "\n"; // Try wheelie with sidecar

// Test truck-specific methods
echo $truck->loadCargo(500) . "\n";
echo $truck->accelerate() . "\n"; // Test acceleration with load
echo $truck->loadCargo(600) . "\n"; // This should exceed capacity

echo "\n--- Testing Polymorphism ---\n";

// Array of different vehicles - demonstrating polymorphism
$vehicles = [$car, $motorcycle, $truck];

foreach ($vehicles as $vehicle) {
    echo "Vehicle Type: " . $vehicle->getVehicleType() . "\n";
    echo "Acceleration: " . $vehicle->accelerate() . "\n";
    echo "Maintenance: " . $vehicle->scheduleMaintenance() . "\n";
    echo "---\n";
}

echo "\n--- Vehicle Information ---\n";

// Display detailed information for each vehicle
foreach ($vehicles as $vehicle) {
    $info = $vehicle->getInfo();
    echo "{$info['vehicle_type']}: {$info['brand']} {$info['model']}\n";
    foreach ($info as $key => $value) {
        if ($key !== 'vehicle_type') {
            echo "  {$key}: " . (is_bool($value) ? ($value ? 'Yes' : 'No') : $value) . "\n";
        }
    }
    echo "\n";
}
?>`,

    "PHP Interfaces": `
    <?php
// PHP Interfaces Example: E-commerce Payment System

// Base Interface for all payment methods
interface PaymentInterface {
    public function processPayment($amount);
    public function validatePayment($paymentData);
    public function getPaymentStatus();
    public function refund($transactionId, $amount);
}

// Interface for secure payment methods
interface SecurePaymentInterface {
    public function encrypt($data);
    public function decrypt($encryptedData);
    public function generateSecurityToken();
}

// Interface for subscription-based payments
interface SubscriptionInterface {
    public function createSubscription($planId, $customerId);
    public function cancelSubscription($subscriptionId);
    public function updateSubscription($subscriptionId, $newPlanId);
    public function getSubscriptionStatus($subscriptionId);
}

// Interface for payment notifications
interface NotificationInterface {
    public function sendSuccessNotification($transactionId, $email);
    public function sendFailureNotification($error, $email);
    public function sendRefundNotification($transactionId, $amount, $email);
}

// Interface for analytics and reporting
interface AnalyticsInterface {
    public function trackTransaction($transactionData);
    public function generateReport($startDate, $endDate);
    public function getTransactionMetrics();
}

// Credit Card Payment Class - Implements multiple interfaces
class CreditCardPayment implements PaymentInterface, SecurePaymentInterface, NotificationInterface {
    private $cardNumber;
    private $expiryDate;
    private $cvv;
    private $cardHolderName;
    private $transactionStatus;
    private $lastTransactionId;
    
    public function __construct($cardNumber, $expiryDate, $cvv, $cardHolderName) {
        $this->cardNumber = $this->encrypt($cardNumber);
        $this->expiryDate = $expiryDate;
        $this->cvv = $this->encrypt($cvv);
        $this->cardHolderName = $cardHolderName;
        $this->transactionStatus = 'pending';
    }
    
    // Implement PaymentInterface methods
    public function processPayment($amount) {
        // Simulate payment processing
        $securityToken = $this->generateSecurityToken();
        
        if ($this->validatePayment(['amount' => $amount, 'token' => $securityToken])) {
            $this->lastTransactionId = 'CC_' . uniqid();
            $this->transactionStatus = 'completed';
            
            return [
                'status' => 'success',
                'transaction_id' => $this->lastTransactionId,
                'amount' => $amount,
                'method' => 'Credit Card',
                'timestamp' => date('Y-m-d H:i:s')
            ];
        } else {
            $this->transactionStatus = 'failed';
            return [
                'status' => 'failed',
                'error' => 'Payment validation failed',
                'timestamp' => date('Y-m-d H:i:s')
            ];
        }
    }
    
    public function validatePayment($paymentData) {
        // Simulate validation logic
        $amount = $paymentData['amount'];
        $token = $paymentData['token'] ?? '';
        
        // Basic validation
        if ($amount <= 0) return false;
        if (strlen($token) < 10) return false;
        if ($this->isCardExpired()) return false;
        
        return true;
    }
    
    public function getPaymentStatus() {
        return [
            'status' => $this->transactionStatus,
            'last_transaction' => $this->lastTransactionId,
            'payment_method' => 'Credit Card'
        ];
    }
    
    public function refund($transactionId, $amount) {
        if ($transactionId === $this->lastTransactionId) {
            $refundId = 'REF_' . uniqid();
            return [
                'status' => 'refund_processed',
                'refund_id' => $refundId,
                'original_transaction' => $transactionId,
                'refund_amount' => $amount,
                'timestamp' => date('Y-m-d H:i:s')
            ];
        }
        
        return ['status' => 'refund_failed', 'error' => 'Transaction not found'];
    }
    
    // Implement SecurePaymentInterface methods
    public function encrypt($data) {
        // Simple encryption simulation (use proper encryption in production)
        return base64_encode(str_rot13($data));
    }
    
    public function decrypt($encryptedData) {
        return str_rot13(base64_decode($encryptedData));
    }
    
    public function generateSecurityToken() {
        return hash('sha256', uniqid() . $this->cardNumber . time());
    }
    
    // Implement NotificationInterface methods
    public function sendSuccessNotification($transactionId, $email) {
        return "Success notification sent to {$email} for transaction {$transactionId}";
    }
    
    public function sendFailureNotification($error, $email) {
        return "Failure notification sent to {$email}: {$error}";
    }
    
    public function sendRefundNotification($transactionId, $amount, $email) {
        return "Refund notification sent to {$email}: $amount refunded for transaction {$transactionId}";
    }
    
    // Helper methods
    private function isCardExpired() {
        $expiry = DateTime::createFromFormat('m/y', $this->expiryDate);
        return $expiry < new DateTime();
    }
}

// PayPal Payment Class - Different interface implementation
class PayPalPayment implements PaymentInterface, NotificationInterface, AnalyticsInterface {
    private $email;
    private $apiKey;
    private $transactionStatus;
    private $transactions = [];
    
    public function __construct($email, $apiKey) {
        $this->email = $email;
        $this->apiKey = $apiKey;
        $this->transactionStatus = 'pending';
    }
    
    // Implement PaymentInterface methods
    public function processPayment($amount) {
        if ($this->validatePayment(['amount' => $amount, 'email' => $this->email])) {
            $transactionId = 'PP_' . uniqid();
            $this->transactionStatus = 'completed';
            
            $transaction = [
                'status' => 'success',
                'transaction_id' => $transactionId,
                'amount' => $amount,
                'method' => 'PayPal',
                'email' => $this->email,
                'timestamp' => date('Y-m-d H:i:s')
            ];
            
            $this->transactions[] = $transaction;
            $this->trackTransaction($transaction);
            
            return $transaction;
        } else {
            $this->transactionStatus = 'failed';
            return [
                'status' => 'failed',
                'error' => 'PayPal payment validation failed',
                'timestamp' => date('Y-m-d H:i:s')
            ];
        }
    }
    
    public function validatePayment($paymentData) {
        $amount = $paymentData['amount'];
        $email = $paymentData['email'] ?? '';
        
        // PayPal-specific validation
        if ($amount <= 0) return false;
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) return false;
        if (strlen($this->apiKey) < 20) return false;
        
        return true;
    }
    
    public function getPaymentStatus() {
        return [
            'status' => $this->transactionStatus,
            'total_transactions' => count($this->transactions),
            'payment_method' => 'PayPal',
            'account_email' => $this->email
        ];
    }
    
    public function refund($transactionId, $amount) {
        foreach ($this->transactions as $transaction) {
            if ($transaction['transaction_id'] === $transactionId) {
                $refundId = 'PP_REF_' . uniqid();
                return [
                    'status' => 'refund_processed',
                    'refund_id' => $refundId,
                    'original_transaction' => $transactionId,
                    'refund_amount' => $amount,
                    'method' => 'PayPal',
                    'timestamp' => date('Y-m-d H:i:s')
                ];
            }
        }
        
        return ['status' => 'refund_failed', 'error' => 'PayPal transaction not found'];
    }
    
    // Implement NotificationInterface methods
    public function sendSuccessNotification($transactionId, $email) {
        return "PayPal success notification sent to {$email} for transaction {$transactionId}";
    }
    
    public function sendFailureNotification($error, $email) {
        return "PayPal failure notification sent to {$email}: {$error}";
    }
    
    public function sendRefundNotification($transactionId, $amount, $email) {
        return "PayPal refund notification sent to {$email}: $amount refunded for transaction {$transactionId}";
    }
    
    // Implement AnalyticsInterface methods
    public function trackTransaction($transactionData) {
        // Simulate analytics tracking
        $analytics = [
            'transaction_id' => $transactionData['transaction_id'],
            'amount' => $transactionData['amount'],
            'method' => 'PayPal',
            'timestamp' => $transactionData['timestamp'],
            'user_email' => $this->email
        ];
        
        // In real implementation, this would send to analytics service
        return "Transaction tracked: " . json_encode($analytics);
    }
    
    public function generateReport($startDate, $endDate) {
        $reportTransactions = array_filter($this->transactions, function($transaction) use ($startDate, $endDate) {
            $transactionDate = $transaction['timestamp'];
            return $transactionDate >= $startDate && $transactionDate <= $endDate;
        });
        
        $totalAmount = array_sum(array_column($reportTransactions, 'amount'));
        
        return [
            'period' => $startDate . ' to ' . $endDate,
            'total_transactions' => count($reportTransactions),
            'total_amount' => $totalAmount,
            'average_transaction' => count($reportTransactions) > 0 ? $totalAmount / count($reportTransactions) : 0,
            'payment_method' => 'PayPal'
        ];
    }
    
    public function getTransactionMetrics() {
        if (empty($this->transactions)) {
            return ['message' => 'No transactions available'];
        }
        
        $amounts = array_column($this->transactions, 'amount');
        
        return [
            'total_transactions' => count($this->transactions),
            'total_revenue' => array_sum($amounts),
            'average_transaction' => array_sum($amounts) / count($amounts),
            'min_transaction' => min($amounts),
            'max_transaction' => max($amounts),
            'payment_method' => 'PayPal'
        ];
    }
}

// Subscription Service - Implements subscription interface
class SubscriptionService implements SubscriptionInterface, NotificationInterface {
    private $subscriptions = [];
    private $plans = [
        'basic' => ['price' => 9.99, 'features' => ['Basic Support']],
        'premium' => ['price' => 19.99, 'features' => ['Priority Support', 'Advanced Features']],
        'enterprise' => ['price' => 49.99, 'features' => ['24/7 Support', 'Custom Integration']]
    ];
    
    public function createSubscription($planId, $customerId) {
        if (!isset($this->plans[$planId])) {
            return ['status' => 'failed', 'error' => 'Invalid plan ID'];
        }
        
        $subscriptionId = 'SUB_' . uniqid();
        $subscription = [
            'subscription_id' => $subscriptionId,
            'plan_id' => $planId,
            'customer_id' => $customerId,
            'status' => 'active',
            'created_at' => date('Y-m-d H:i:s'),
            'next_billing' => date('Y-m-d H:i:s', strtotime('+1 month')),
            'price' => $this->plans[$planId]['price']
        ];
        
        $this->subscriptions[$subscriptionId] = $subscription;
        
        return [
            'status' => 'success',
            'subscription' => $subscription
        ];
    }
    
    public function cancelSubscription($subscriptionId) {
        if (!isset($this->subscriptions[$subscriptionId])) {
            return ['status' => 'failed', 'error' => 'Subscription not found'];
        }
        
        $this->subscriptions[$subscriptionId]['status'] = 'cancelled';
        $this->subscriptions[$subscriptionId]['cancelled_at'] = date('Y-m-d H:i:s');
        
        return [
            'status' => 'success',
            'message' => 'Subscription cancelled successfully',
            'subscription_id' => $subscriptionId
        ];
    }
    
    public function updateSubscription($subscriptionId, $newPlanId) {
        if (!isset($this->subscriptions[$subscriptionId])) {
            return ['status' => 'failed', 'error' => 'Subscription not found'];
        }
        
        if (!isset($this->plans[$newPlanId])) {
            return ['status' => 'failed', 'error' => 'Invalid new plan ID'];
        }
        
        $oldPlan = $this->subscriptions[$subscriptionId]['plan_id'];
        $this->subscriptions[$subscriptionId]['plan_id'] = $newPlanId;
        $this->subscriptions[$subscriptionId]['price'] = $this->plans[$newPlanId]['price'];
        $this->subscriptions[$subscriptionId]['updated_at'] = date('Y-m-d H:i:s');
        
        return [
            'status' => 'success',
            'message' => "Subscription updated from {$oldPlan} to {$newPlanId}",
            'subscription' => $this->subscriptions[$subscriptionId]
        ];
    }
    
    public function getSubscriptionStatus($subscriptionId) {
        if (!isset($this->subscriptions[$subscriptionId])) {
            return ['status' => 'not_found', 'error' => 'Subscription not found'];
        }
        
        return [
            'status' => 'found',
            'subscription' => $this->subscriptions[$subscriptionId]
        ];
    }
    
    // Implement NotificationInterface methods
    public function sendSuccessNotification($transactionId, $email) {
        return "Subscription success notification sent to {$email} for transaction {$transactionId}";
    }
    
    public function sendFailureNotification($error, $email) {
        return "Subscription failure notification sent to {$email}: {$error}";
    }
    
    public function sendRefundNotification($transactionId, $amount, $email) {
        return "Subscription refund notification sent to {$email}: $amount refunded for transaction {$transactionId}";
    }
}

// Usage Examples and Demonstrations
echo "=== PHP INTERFACES DEMONSTRATION ===\n\n";

// Create different payment method instances
$creditCard = new CreditCardPayment("1234567890123456", "12/25", "123", "John Doe");
$paypal = new PayPalPayment("john.doe@example.com", "paypal_api_key_1234567890");
$subscriptionService = new SubscriptionService();

echo "--- Testing Payment Processing ---\n";

// Test credit card payment
$ccResult = $creditCard->processPayment(99.99);
echo "Credit Card Payment: " . json_encode($ccResult) . "\n";

// Test PayPal payment
$ppResult = $paypal->processPayment(149.50);
echo "PayPal Payment: " . json_encode($ppResult) . "\n";

echo "\n--- Testing Interface Polymorphism ---\n";

// Array of payment methods - demonstrating interface polymorphism
$paymentMethods = [$creditCard, $paypal];

foreach ($paymentMethods as $index => $payment) {
    echo "Payment Method " . ($index + 1) . ":\n";
    echo "  Status: " . json_encode($payment->getPaymentStatus()) . "\n";
    echo "  Success Notification: " . $payment->sendSuccessNotification("TXN_123", "customer@example.com") . "\n";
    echo "\n";
}

echo "--- Testing Multiple Interface Implementation ---\n";

// Test interfaces that only some classes implement
if ($creditCard instanceof SecurePaymentInterface) {
    echo "Credit Card Security Token: " . $creditCard->generateSecurityToken() . "\n";
}

if ($paypal instanceof AnalyticsInterface) {
    // Process a few more transactions for analytics
    $paypal->processPayment(75.00);
    $paypal->processPayment(120.25);
    
    echo "PayPal Analytics Metrics: " . json_encode($paypal->getTransactionMetrics()) . "\n";
    
    $report = $paypal->generateReport('2024-01-01', '2024-12-31');
    echo "PayPal Report: " . json_encode($report) . "\n";
}

echo "\n--- Testing Subscription Interface ---\n";

// Test subscription functionality
$subscription = $subscriptionService->createSubscription('premium', 'CUST_001');
echo "Created Subscription: " . json_encode($subscription) . "\n";

$status = $subscriptionService->getSubscriptionStatus($subscription['subscription']['subscription_id']);
echo "Subscription Status: " . json_encode($status) . "\n";

$update = $subscriptionService->updateSubscription($subscription['subscription']['subscription_id'], 'enterprise');
echo "Updated Subscription: " . json_encode($update) . "\n";

echo "\n--- Testing Refund Functionality ---\n";

// Test refunds across different payment methods
if (isset($ccResult['transaction_id'])) {
    $ccRefund = $creditCard->refund($ccResult['transaction_id'], 50.00);
    echo "Credit Card Refund: " . json_encode($ccRefund) . "\n";
    echo $creditCard->sendRefundNotification($ccResult['transaction_id'], 50.00, "customer@example.com") . "\n";
}

if (isset($ppResult['transaction_id'])) {
    $ppRefund = $paypal->refund($ppResult['transaction_id'], 75.00);
    echo "PayPal Refund: " . json_encode($ppRefund) . "\n";
    echo $paypal->sendRefundNotification($ppResult['transaction_id'], 75.00, "customer@example.com") . "\n";
}

echo "\n--- Interface Type Checking ---\n";

// Demonstrate interface type checking
function processPaymentWithNotification(PaymentInterface $payment, NotificationInterface $notification, $amount, $email) {
    $result = $payment->processPayment($amount);
    
    if ($result['status'] === 'success') {
        return $notification->sendSuccessNotification($result['transaction_id'], $email);
    } else {
        return $notification->sendFailureNotification($result['error'], $email);
    }
}

// Both credit card and paypal implement both interfaces
echo "Credit Card with Notification: " . processPaymentWithNotification($creditCard, $creditCard, 25.99, "test@example.com") . "\n";
echo "PayPal with Notification: " . processPaymentWithNotification($paypal, $paypal, 35.50, "test@example.com") . "\n";

echo "\n--- Interface Constants Example ---\n";

// Interface with constants
interface PaymentConstants {
    const MIN_PAYMENT = 1.00;
    const MAX_PAYMENT = 10000.00;
    const CURRENCY = 'USD';
    const TRANSACTION_FEE_PERCENT = 2.9;
}

class PaymentValidator implements PaymentConstants {
    public static function validateAmount($amount) {
        if ($amount < self::MIN_PAYMENT) {
            return "Amount must be at least $" . self::MIN_PAYMENT;
        }
        
        if ($amount > self::MAX_PAYMENT) {
            return "Amount cannot exceed $" . self::MAX_PAYMENT;
        }
        
        return "Amount is valid";
    }
    
    public static function calculateFee($amount) {
        return round($amount * (self::TRANSACTION_FEE_PERCENT / 100), 2);
    }
    
    public static function getPaymentInfo() {
        return [
            'min_payment' => self::MIN_PAYMENT,
            'max_payment' => self::MAX_PAYMENT,
            'currency' => self::CURRENCY,
            'fee_percent' => self::TRANSACTION_FEE_PERCENT
        ];
    }
}

echo "Payment Validation (0.50): " . PaymentValidator::validateAmount(0.50) . "\n";
echo "Payment Validation (150.00): " . PaymentValidator::validateAmount(150.00) . "\n";
echo "Transaction Fee for $100: $" . PaymentValidator::calculateFee(100.00) . "\n";
echo "Payment Info: " . json_encode(PaymentValidator::getPaymentInfo()) . "\n";

?>`,

    "PHP Testing": `
     <?php
      use PHPUnit\\Framework\\TestCase;
      class UserTest extends TestCase {
         public function testUserCreation() {
          $user = new User(\"John\");
             $this->assertEquals(\"John\", $user->getName());
                 }
             }
                 ?>`,

    "PHP Security": `
<?php
// Securely handle user input to prevent XSS
$input = $_POST['user_input'];
// Always sanitize input before outputting to the browser
$sanitized = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
echo $sanitized; // Safe output

// Best Practice: Use prepared statements for database queries to prevent SQL injection
// Example with PDO:
    $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
    $stmt->execute([$email]);
?>

<?php
// Generate a CSRF token and store in session
session_start();
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Include this token in your form as a hidden field
   <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">

// On form submission, validate the token
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
        die('Invalid CSRF token');
    }
    // Process the form safely
}
// Best Practice: Always use CSRF tokens for forms that modify data.
?>
`,

    "PHP Performance Optimization": `
<?php
// Use caching to avoid expensive operations
$cache = new Cache();
$data = $cache->get('key');
if ($data === null) {
    // Only run this if not cached
    $data = expensiveOperation(); // e.g., a slow DB query or API call
    $cache->set('key', $data); // Store result in cache
}
// Best Practice: Choose the right cache backend (APCu, Redis, Memcached) for your use case
// and set appropriate cache expiration times.
?>

<?php
// Use Redis for high-performance caching
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

$key = 'expensive_data';
$data = $redis->get($key);

if ($data === false) {
    $data = expensiveOperation(); // e.g., slow DB query
    $redis->setex($key, 3600, $data); // Cache for 1 hour
}
// Use $data
// Best Practice: Use Redis for distributed, persistent,
//  and fast caching in scalable apps.
?>
`,

    "PHP Frameworks": `
    <?php
    // Laravel example
    Route::get('/users', function () {
      return User::all();
      });
       ?>`,

    "PHP API Development": `
     <?php
     header('Content-Type: application/json');
      echo json_encode(['status' => 'success']);
      ?>
      
       <?php
// Using firebase/php-jwt for JWT authentication
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$key = 'your-secret-key';
$payload = [
    'iss' => 'your-domain.com',
    'sub' => $userId,
    'exp' => time() + 3600
];

// Encode
$jwt = JWT::encode($payload, $key, 'HS256');

// Decode (on protected endpoints)
try {
    $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
    // $decoded->sub contains the user ID
} catch (Exception $e) {
    http_response_code(401);
    echo 'Invalid token';
}
// Best Practice: Use JWT for stateless, secure API authentication.
?>`,

    "PHP Microservices": `
      <?php
    // Microservice communication example
       $response = $httpClient->get('http://service-b/api/data');
        $data = json_decode($response->getBody(), true);
        ?>
        
        <?php
// Register a service with Consul (using Guzzle HTTP client)
$client = new \GuzzleHttp\Client(['base_uri' => 'http://localhost:8500']);
$response = $client->put('/v1/agent/service/register', [
    'json' => [
        'Name' => 'user-service',
        'ID' => 'user-service-1',
        'Address' => '127.0.0.1', 
        'Port' => 8080
    ]
]);
// Best Practice: Use service discovery for dynamic microservice architectures.
?>`,

    "PHP DevOps": `
    <?php
     // CI/CD example
      if (getenv('CI')) {
         runTests();
            deploy();
            } 
            ?>
            
  // Bash script for zero-downtime deployment (not PHP, but essential for DevOps)
# Assume /var/www/myapp/releases/new contains new code
ln -sfn /var/www/myapp/releases/new /var/www/myapp/current
# Then reload PHP-FPM or web server
# Best Practice: Use atomic symlink swaps for instant, safe deployments.`,

    "PHP Cloud Services": `
     <?php
      // AWS S3 example
        $s3Client = new Aws\\S3\\S3Client([
           'version' => 'latest',
              'region'  => 'us-east-1'
              ]);
              $result = $s3Client->putObject([
                 'Bucket' => 'my-bucket',
                    'Key'    => 'my-key',
                       'Body'   => 'Hello, world!'
                       ]);
                       ?>`,

    "PHP Machine Learning": `
    <?php
/*
==========================================
PHP MACHINE LEARNING EXAMPLES
==========================================
*/

// ========================================
// 1. PHP ML Libraries Setup (Rubix ML Example)
// ========================================
require __DIR__ . '/vendor/autoload.php';

use Rubix\ML\Datasets\Labeled;
use Rubix\ML\Classifiers\KNearestNeighbors;
use Rubix\ML\CrossValidation\HoldOut;
use Rubix\ML\CrossValidation\Metrics\Accuracy;

// ========================================
// 2. Data Preprocessing
// ========================================
function preprocessData(array $samples, array $labels) {
    // Simple normalization example
    $normalized = [];
    foreach ($samples as $sample) {
        $max = max($sample);
        $normalized[] = array_map(function($value) use ($max) {
            return $value / $max;
        }, $sample);
    }
    
    return new Labeled($normalized, $labels);
}

// Sample dataset (features and labels)
$samples = [
    [3, 4, 50.5],
    [1, 5, 24.7],
    [4, 4, 62.0],
    [3, 2, 31.1]
];

$labels = ['spam', 'ham', 'spam', 'ham'];

$dataset = preprocessData($samples, $labels);

// ========================================
// 3. Model Training & Evaluation
// ========================================
$estimator = new KNearestNeighbors(3); // k=3
$validator = new HoldOut(0.2); // 20% test set
$metric = new Accuracy();

$results = $validator->test($estimator, $dataset, $metric);

echo "Model Accuracy: " . round($results * 100, 2) . "%\n";

// ========================================
// 4. Making Predictions
// ========================================
$newSample = [[2, 3, 45.2]];
$preprocessedSample = preprocessData($newSample, ['']); // Empty labels for prediction

$prediction = $estimator->predict($preprocessedSample)->current();

echo "Predicted class: $prediction\n";
`,

    "PHP Blockchain": `
    /*
==========================================
PHP BLOCKCHAIN EXAMPLES
==========================================
*/

// ========================================
// 1. Basic Blockchain Implementation
// ========================================
class Block {
    public $index;
    public $timestamp;
    public $data;
    public $previousHash;
    public $hash;

    public function __construct($index, $timestamp, $data, $previousHash = '') {
        $this->index = $index;
        $this->timestamp = $timestamp;
        $this->data = $data;
        $this->previousHash = $previousHash;
        $this->hash = $this->calculateHash();
    }

    public function calculateHash() {
        return hash('sha256', 
            $this->index . 
            $this->timestamp . 
            json_encode($this->data) . 
            $this->previousHash
        );
    }
}

class Blockchain {
    public $chain;

    public function __construct() {
        $this->chain = [$this->createGenesisBlock()];
    }

    private function createGenesisBlock() {
        return new Block(0, time(), "Genesis Block", "0");
    }

    public function getLatestBlock() {
        return $this->chain[count($this->chain) - 1];
    }

    public function addBlock($newBlock) {
        $newBlock->previousHash = $this->getLatestBlock()->hash;
        $newBlock->hash = $newBlock->calculateHash();
        $this->chain[] = $newBlock;
    }

    public function isChainValid() {
        for ($i = 1; $i < count($this->chain); $i++) {
            $currentBlock = $this->chain[$i];
            $previousBlock = $this->chain[$i - 1];

            if ($currentBlock->hash !== $currentBlock->calculateHash()) {
                return false;
            }

            if ($currentBlock->previousHash !== $previousBlock->hash) {
                return false;
            }
        }
        return true;
    }
}

// ========================================
// 2. Using the Blockchain
// ========================================
$phpCoin = new Blockchain();
$phpCoin->addBlock(new Block(1, time(), ["amount" => 4]));
$phpCoin->addBlock(new Block(2, time(), ["amount" => 8]));

echo "Blockchain valid? " . ($phpCoin->isChainValid() ? "Yes" : "No") . "\n";

// ========================================
// 3. Smart Contract Simulation
// ========================================
class SmartContract {
    private $conditions;
    private $actions;

    public function __construct(array $conditions, array $actions) {
        $this->conditions = $conditions;
        $this->actions = $actions;
    }

    public function execute($blockData) {
        foreach ($this->conditions as $condition) {
            if (!$condition($blockData)) {
                return false;
            }
        }

        foreach ($this->actions as $action) {
            $action($blockData);
        }

        return true;
    }
}

// Example contract: Transfer if amount > 5
$contract = new SmartContract(
    [
        function($data) { return $data['amount'] > 5; }
    ],
    [
        function($data) { echo "Transferring {$data['amount']} tokens\n"; }
    ]
);

foreach ($phpCoin->chain as $block) {
    if ($block->index !== 0 && is_array($block->data)) {
        $contract->execute($block->data);
    }
}

// ========================================
// 4. Cryptocurrency Integration (Simplified)
// ========================================
class Wallet {
    private $privateKey;
    public $publicKey;

    public function __construct() {
        $this->privateKey = bin2hex(random_bytes(32));
        $this->publicKey = hash('sha256', $this->privateKey);
    }

    public function sign($data) {
        return hash_hmac('sha256', json_encode($data), $this->privateKey);
    }

    public static function verify($data, $signature, $publicKey) {
        // In real implementation, you'd recover public key from signature
        $expected = hash('sha256', $signature);
        return hash_equals($expected, $publicKey);
    }
}

// Example usage
$alice = new Wallet();
$transaction = [
    'from' => $alice->publicKey,
    'to' => 'recipient_public_key',
    'amount' => 10,
    'timestamp' => time()
];

$signature = $alice->sign($transaction);
$isValid = Wallet::verify($transaction, $signature, $alice->publicKey);

echo "Transaction valid? " . ($isValid ? "Yes" : "No") . "\n";
`,

     "PHP Internet of Things": `
    <?php
// PHP IoT Example: Smart Home Temperature Monitoring System

class IoTDevice {
    private $deviceId;
    private $deviceType;
    private $location;
    private $apiKey;
    
    public function __construct($id, $type, $location, $apiKey) {
        $this->deviceId = $id;
        $this->deviceType = $type;
        $this->location = $location;
        $this->apiKey = $apiKey;
    }
    
    // Simulate reading sensor data
    public function readSensorData() {
        // In real scenario, this would communicate with actual hardware
        return [
            'device_id' => $this->deviceId,
            'temperature' => round(rand(180, 280) / 10, 1), // 18-28°C
            'humidity' => rand(30, 80), // 30-80%
            'timestamp' => date('Y-m-d H:i:s'),
            'location' => $this->location
        ];
    }
    
    // Send command to device
    public function sendCommand($command, $value = null) {
        $payload = [
            'device_id' => $this->deviceId,
            'command' => $command,
            'value' => $value,
            'timestamp' => time(),
            'api_key' => $this->apiKey
        ];
        
        // Simulate API call to device
        return $this->makeAPICall('/device/command', $payload);
    }
    
    private function makeAPICall($endpoint, $data) {
        // Simulate HTTP request to device
        return [
            'status' => 'success',
            'message' => "Command '{$data['command']}' sent to device {$data['device_id']}",
            'timestamp' => date('Y-m-d H:i:s')
        ];
    }
}

class IoTDataProcessor {
    private $pdo;
    private $devices = [];
    
    public function __construct($dbConfig) {
        // Database connection
        $dsn = "mysql:host={$dbConfig['host']};dbname={$dbConfig['dbname']}";
        $this->pdo = new PDO($dsn, $dbConfig['username'], $dbConfig['password']);
        $this->createTables();
    }
    
    private function createTables() {
        $sql = "CREATE TABLE IF NOT EXISTS sensor_data (
            id INT AUTO_INCREMENT PRIMARY KEY,
            device_id VARCHAR(50),
            temperature FLOAT,
            humidity INT,
            location VARCHAR(100),
            timestamp DATETIME,
            INDEX idx_device_time (device_id, timestamp)
        )";
        $this->pdo->exec($sql);
    }
    
    public function addDevice($device) {
        $this->devices[$device->deviceId] = $device;
    }
    
    // Collect data from all devices
    public function collectData() {
        $collectedData = [];
        
        foreach ($this->devices as $device) {
            $data = $device->readSensorData();
            $this->storeSensorData($data);
            $collectedData[] = $data;
        }
        
        return $collectedData;
    }
    
    private function storeSensorData($data) {
        $sql = "INSERT INTO sensor_data (device_id, temperature, humidity, location, timestamp) 
                VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            $data['device_id'],
            $data['temperature'],
            $data['humidity'],
            $data['location'],
            $data['timestamp']
        ]);
    }
    
    // Get recent data for monitoring
    public function getRecentData($hours = 24) {
        $sql = "SELECT * FROM sensor_data 
                WHERE timestamp >= DATE_SUB(NOW(), INTERVAL ? HOUR) 
                ORDER BY timestamp DESC";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$hours]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    // Temperature alert system
    public function checkAlerts() {
        $alerts = [];
        $recentData = $this->getRecentData(1); // Last hour
        
        foreach ($recentData as $reading) {
            if ($reading['temperature'] > 25) {
                $alerts[] = [
                    'type' => 'HIGH_TEMPERATURE',
                    'device_id' => $reading['device_id'],
                    'location' => $reading['location'],
                    'temperature' => $reading['temperature'],
                    'message' => "High temperature detected: {$reading['temperature']}°C"
                ];
            }
            
            if ($reading['humidity'] > 70) {
                $alerts[] = [
                    'type' => 'HIGH_HUMIDITY',
                    'device_id' => $reading['device_id'],
                    'location' => $reading['location'],
                    'humidity' => $reading['humidity'],
                    'message' => "High humidity detected: {$reading['humidity']}%"
                ];
            }
        }
        
        return $alerts;
    }
    
    // Generate IoT dashboard data
    public function getDashboardData() {
        $recentData = $this->getRecentData(24);
        $deviceStats = [];
        
        foreach ($recentData as $reading) {
            $deviceId = $reading['device_id'];
            
            if (!isset($deviceStats[$deviceId])) {
                $deviceStats[$deviceId] = [
                    'location' => $reading['location'],
                    'readings' => [],
                    'avg_temp' => 0,
                    'avg_humidity' => 0
                ];
            }
            
            $deviceStats[$deviceId]['readings'][] = $reading;
        }
        
        // Calculate averages
        foreach ($deviceStats as $deviceId => &$stats) {
            $temps = array_column($stats['readings'], 'temperature');
            $humidity = array_column($stats['readings'], 'humidity');
            
            $stats['avg_temp'] = round(array_sum($temps) / count($temps), 1);
            $stats['avg_humidity'] = round(array_sum($humidity) / count($humidity));
            $stats['last_reading'] = end($stats['readings'])['timestamp'];
        }
        
        return $deviceStats;
    }
}

// MQTT Communication Class (simplified)
class MQTTCommunication {
    private $broker;
    private $port;
    private $clientId;
    
    public function __construct($broker, $port = 1883) {
        $this->broker = $broker;
        $this->port = $port;
        $this->clientId = 'php_iot_' . uniqid();
    }
    
    // Publish sensor data to MQTT topic
    public function publishSensorData($topic, $data) {
        // In real implementation, use libraries like ReactPHP/Socket or phpMQTT
        $message = json_encode($data);
        
        // Simulate MQTT publish
        return [
            'status' => 'published',
            'topic' => $topic,
            'message' => $message,
            'timestamp' => date('c')
        ];
    }
    
    // Subscribe to device commands
    public function subscribeToCommands($topic, $callback) {
        // Simulate subscription
        return "Subscribed to topic: $topic";
    }
}

// Usage Example
try {
    // Database configuration
    $dbConfig = [
        'host' => 'localhost',
        'dbname' => 'iot_system',
        'username' => 'root',
        'password' => ''
    ];
    
    // Initialize IoT system
    $processor = new IoTDataProcessor($dbConfig);
    $mqtt = new MQTTCommunication('localhost');
    
    // Create IoT devices
    $livingRoom = new IoTDevice('LR001', 'temperature_sensor', 'Living Room', 'api_key_123');
    $bedroom = new IoTDevice('BR001', 'temperature_sensor', 'Bedroom', 'api_key_456');
    $kitchen = new IoTDevice('KT001', 'temperature_sensor', 'Kitchen', 'api_key_789');
    
    // Add devices to processor
    $processor->addDevice($livingRoom);
    $processor->addDevice($bedroom);
    $processor->addDevice($kitchen);
    
    // Collect sensor data
    echo "Collecting sensor data...\n";
    $collectedData = $processor->collectData();
    
    foreach ($collectedData as $data) {
        echo "Device: {$data['device_id']} | Location: {$data['location']} | ";
        echo "Temp: {$data['temperature']}°C | Humidity: {$data['humidity']}% | ";
        echo "Time: {$data['timestamp']}\n";
        
        // Publish to MQTT
        $mqtt->publishSensorData("sensors/{$data['device_id']}", $data);
    }
    
    // Check for alerts
    echo "\nChecking alerts...\n";
    $alerts = $processor->checkAlerts();
    
    if (empty($alerts)) {
        echo "No alerts detected.\n";
    } else {
        foreach ($alerts as $alert) {
            echo "ALERT: {$alert['message']} at {$alert['location']}\n";
        }
    }
    
    // Get dashboard data
    echo "\nDashboard Summary:\n";
    $dashboardData = $processor->getDashboardData();
    
    foreach ($dashboardData as $deviceId => $stats) {
        echo "Device: $deviceId | Location: {$stats['location']} | ";
        echo "Avg Temp: {$stats['avg_temp']}°C | Avg Humidity: {$stats['avg_humidity']}% | ";
        echo "Readings: " . count($stats['readings']) . "\n";
    }
    
    // Send command example
    echo "\nSending command to adjust thermostat...\n";
    $response = $livingRoom->sendCommand('set_temperature', 22);
    echo $response['message'] . "\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>`,


    "PHP Mobile Development": `
      <?php
/*
==========================================
PHP MOBILE DEVELOPMENT EXAMPLES
==========================================
*/

// ========================================
// 1. Mobile App Development (API Endpoint)
// ========================================
header('Content-Type: application/json');

// Simple REST API endpoint for mobile apps
if ($_SERVER['REQUEST_URI'] === '/api/users') {
    $response = [
        'status' => 'success',
        'data' => [
            'users' => [
                ['id' => 1, 'name' => 'John', 'email' => 'john@example.com'],
                ['id' => 2, 'name' => 'Jane', 'email' => 'jane@example.com']
            ]
        ]
    ];
    
    echo json_encode($response);
    exit;
}

// ========================================
// 2. API Integration (Weather API Example)
// ========================================
if ($_SERVER['REQUEST_URI'] === '/api/weather') {
    $city = $_GET['city'] ?? 'London';
    $apiKey = 'your_api_key';
    $url = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey";

    $response = file_get_contents($url);
    $weatherData = json_decode($response, true);

    $mobileResponse = [
        'city' => $weatherData['name'],
        'temp' => round($weatherData['main']['temp'] - 273.15, 1),
        'conditions' => $weatherData['weather'][0]['description']
    ];

    echo json_encode($mobileResponse);
    exit;
}

// ========================================
// 3. Push Notifications (FCM Example)
// ========================================
if ($_SERVER['REQUEST_URI'] === '/send-notification') {
    function sendPushNotification($token, $title, $message) {
        $url = 'https://fcm.googleapis.com/fcm/send';
        
        $fields = [
            'to' => $token,
            'notification' => [
                'title' => $title,
                'body' => $message,
                'sound' => 'default'
            ]
        ];
        
        $headers = [
            'Authorization: key=YOUR_SERVER_KEY',
            'Content-Type: application/json'
        ];
        
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => $url,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POSTFIELDS => json_encode($fields)
        ]);
        
        $result = curl_exec($ch);
        curl_close($ch);
        
        return $result;
    }

    // Example usage
    echo sendPushNotification('device_token', 'New Message', 'Hello from PHP backend!');
    exit;
}

// ========================================
// 4. Offline Capabilities (Caching System)
// ========================================
if ($_SERVER['REQUEST_URI'] === '/cached-data') {
    function getCachedData($key, $expiryMinutes = 60) {
        $cacheFile = "cache/" . md5($key) . ".json";
        
        if (file_exists($cacheFile)) {
            $fileTime = filemtime($cacheFile);
            if (time() - $fileTime < $expiryMinutes * 60) {
                return json_decode(file_get_contents($cacheFile), true);
            }
        }
        return false;
    }

    function saveToCache($key, $data) {
        if (!is_dir('cache')) mkdir('cache');
        $cacheFile = "cache/" . md5($key) . ".json";
        file_put_contents($cacheFile, json_encode($data));
    }

    $cacheKey = 'mobile_data_' . date('Y-m-d');
    if (!$data = getCachedData($cacheKey)) {
        // Simulate database fetch
        $data = ['last_updated' => time(), 'content' => 'This data was cached'];
        saveToCache($cacheKey, $data);
    }

    echo json_encode($data);
    exit;
}`,

    "PHP Game Development": `
    <?php 
/*
==========================================
PHP GAME DEVELOPMENT EXAMPLES
==========================================
*/

// ========================================
// 1. Game Basics (Text Adventure Game)
// ========================================
if ($_SERVER['REQUEST_URI'] === '/text-adventure') {
    session_start();

    // Initialize game state
    if (!isset($_SESSION['game_state'])) {
        $_SESSION['game_state'] = [
            'room' => 'start',
            'inventory' => [],
            'health' => 100,
            'score' => 0
        ];
    }

    $game = $_SESSION['game_state'];

    // Process player input
    if (isset($_POST['action'])) {
        switch ($_POST['action']) {
            case 'move':
                $game['room'] = 'forest';
                $game['score'] += 10;
                break;
            case 'take':
                $game['inventory'][] = 'sword';
                break;
            case 'attack':
                $game['health'] -= 15;
                $game['score'] += 20;
                break;
        }
        
        $_SESSION['game_state'] = $game;
    }

    // Display game state
    echo '<pre>';
    print_r($game);
    echo '</pre>';
    
    // Simple HTML form for game actions
    echo '<form method="post">
        <button name="action" value="move">Move to Forest</button>
        <button name="action" value="take">Take Sword</button>
        <button name="action" value="attack">Attack Monster</button>
    </form>';
    exit;
}

// ========================================
// 2. Game Logic (Simple Battle System)
// ========================================
if ($_SERVER['REQUEST_URI'] === '/battle-system') {
    class Character {
        public $health;
        public $attack;
        
        public function __construct($health, $attack) {
            $this->health = $health;
            $this->attack = $attack;
        }
        
        public function takeDamage($damage) {
            $this->health -= $damage;
            return $this->health > 0;
        }
    }

    $player = new Character(100, 15);
    $enemy = new Character(50, 10);
    
    $battleLog = [];
    
    // Simulate battle turns
    while ($player->health > 0 && $enemy->health > 0) {
        // Player attacks
        $enemyAlive = $enemy->takeDamage($player->attack);
        $battleLog[] = "Player hits enemy for {$player->attack} damage";
        
        if (!$enemyAlive) {
            $battleLog[] = "Enemy defeated!";
            break;
        }
        
        // Enemy attacks
        $playerAlive = $player->takeDamage($enemy->attack);
        $battleLog[] = "Enemy hits player for {$enemy->attack} damage";
        
        if (!$playerAlive) {
            $battleLog[] = "Player defeated!";
            break;
        }
    }
    
    echo '<h2>Battle Results</h2>';
    echo '<ul>';
    foreach ($battleLog as $log) {
        echo "<li>$log</li>";
    }
    echo '</ul>';
    exit;
}

// Default response if no routes match
http_response_code(404);
echo json_encode(['error' => 'Endpoint not found']);
?>`,

    "PHP Virtual Reality": `
     <?php
     // VR example
        $vr = new VR();
         $vr->initialize();
          $vr->render();
           ?>`,

    "PHP Augmented Reality": `
      <?php
       // AR example 
          $ar = new AR();
           $ar->initialize();
             $ar->render();
               ?>`,

    "PHP Natural Language Processing": `
     <?php
     // NLP example
        $nlp = new NLP();
         $result = $nlp->process($text);
           ?>`,

    "PHP Computer Vision": `
    <?php
    // Computer vision example
       $cv = new ComputerVision();
        $result = $cv->detect($image);
          ?>`,

    "PHP Robotics": `
      <?php 
       // Robotics example
           $robot = new Robot();
             $robot->move();
              ?>`,

    "PHP Quantum Computing": `
     <?php
     // Quantum computing example
        $quantum = new Quantum();
         $result = $quantum->compute();
           ?>`,

    "PHP Edge Computing": `
     <?php
     // Edge computing example
         $edge = new Edge();
           $edge->process();
           ?>`,

    "PHP 5G": `
// ========================================
// 1. Code Example:EdgeServiceAPI
// ========================================
<?php

// This example conceptualizes how a PHP application might interact with an edge computing service.
// In a real-world scenario, 'EdgeServiceAPI' would be a robust client for a specific edge platform.

class EdgeServiceAPI
{
    private $baseUrl;
    private $apiKey;

    public function __construct($baseUrl, $apiKey)
    {
        $this->baseUrl = $baseUrl;
        $this->apiKey = $apiKey;
    }

    /**
     * Sends data to an edge processing unit for low-latency analysis.
     * @param array $data The data payload (e.g., sensor readings, user actions).
     * @param string $edgeNodeId Identifier for the target edge node.
     * @return array Decoded response from the edge service.
     * @throws Exception If the API call fails.
     */
    public function sendToEdgeProcessor(array $data, string $edgeNodeId): array
    {
        $endpoint = "{$this->baseUrl}/process/{$edgeNodeId}";
        $headers = [
            "Content-Type: application/json",
            "Authorization: Bearer {$this->apiKey}"
        ];

        $ch = curl_init($endpoint);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            throw new Exception("Edge service API error: " . curl_error($ch));
        }
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $decodedResponse = json_decode($response, true);

        if ($httpCode >= 400 || !isset($decodedResponse['status']) || $decodedResponse['status'] !== 'success') {
            throw new Exception("Edge service API responded with error ({$httpCode}): " . ($decodedResponse['message'] ?? 'Unknown error'));
        }

        return $decodedResponse;
    }

    /**
     * Retrieves aggregated results from a specific edge node.
     * @param string $edgeNodeId Identifier for the target edge node.
     * @return array Decoded response with aggregated data.
     * @throws Exception If the API call fails.
     */
    public function getAggregatedEdgeData(string $edgeNodeId): array
    {
        $endpoint = "{$this->baseUrl}/aggregated-data/{$edgeNodeId}";
        $headers = [
            "Authorization: Bearer {$this->apiKey}"
        ];

        $ch = curl_init($endpoint);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            throw new Exception("Edge service API error: " . curl_error($ch));
        }
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $decodedResponse = json_decode($response, true);

        if ($httpCode >= 400 || !isset($decodedResponse['status']) || $decodedResponse['status'] !== 'success') {
            throw new Exception("Edge service API responded with error ({$httpCode}): " . ($decodedResponse['message'] ?? 'Unknown error'));
        }

        return $decodedResponse;
    }
}

// --- Usage Example ---
$edgeApi = new EdgeServiceAPI('https://api.example.com/edge-service/v1', 'your_super_secret_api_key');

try {
    // Simulate sending real-time sensor data from an IoT device to an edge node
    $sensorData = [
        'device_id' => 'IoT-001',
        'temperature' => 25.5,
        'humidity' => 60,
        'timestamp' => time()
    ];
    $edgeNode = 'region-a-edge-01';

    echo "Sending data to edge processor...\n";
    $processResult = $edgeApi->sendToEdgeProcessor($sensorData, $edgeNode);
    echo "Processing result: " . json_encode($processResult, JSON_PRETTY_PRINT) . "\n\n";

    // Simulate fetching aggregated data from the edge node
    echo "Fetching aggregated data from edge node...\n";
    $aggregatedData = $edgeApi->getAggregatedEdgeData($edgeNode);
    echo "Aggregated data: " . json_encode($aggregatedData, JSON_PRETTY_PRINT) . "\n";

} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}

?>


    
// ========================================
// 2. Code Example:Application Development
// ========================================
<?php

// This example shows a PHP endpoint optimized for fast data delivery,
// leveraging features beneficial for 5G's high throughput.

// Set appropriate headers for fast content delivery and caching
header('Content-Type: application/json');
header('Cache-Control: public, max-age=3600'); // Cache for 1 hour
header('Access-Control-Allow-Origin: *'); // Allow CORS for broad access

// Simulate a database query or data fetching that returns a large dataset
function getHighVolumeProductData(int $limit = 1000): array
{
    // In a real application, this would fetch from a database or a fast cache like Redis
    $products = [];
    for ($i = 0; $i < $limit; $i++) {
        $products[] = [
            'id' => uniqid('prod_'),
            'name' => 'Product ' . ($i + 1) . ' Ultra HD 4K Display with Quantum Dot Technology',
            'category' => 'Electronics',
            'price' => round(mt_rand(10000, 500000) / 100, 2),
            'stock' => mt_rand(0, 500),
            'description' => 'A highly detailed description of ' . ($i + 1) . ' to simulate large text data. ' . str_repeat('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 10),
            'image_url' => 'https://example.com/images/product_' . ($i % 10 + 1) . '.jpg',
            'specs' => [
                'display_size' => '65 inches',
                'resolution' => '3840x2160',
                'refresh_rate' => '120Hz',
                'connectivity' => ['HDMI 2.1', 'USB-C', 'Ethernet'],
            ],
            'last_updated' => date('Y-m-d H:i:s', strtotime('-' . mt_rand(1, 30) . ' days'))
        ];
    }
    return $products;
}

// Check for a specific endpoint/action
if (isset($_GET['action']) && $_GET['action'] === 'get_products') {
    $startTime = microtime(true);

    // Get a large dataset
    $data = getHighVolumeProductData(2000); // Request 2000 products

    // Consider using ob_gzhandler for GZIP compression if not handled by web server
    // ob_start('ob_gzhandler');

    // Encode to JSON and send. Use JSON_UNESCAPED_SLASHES and JSON_UNESCAPED_UNICODE for cleaner output
    echo json_encode([
        'status' => 'success',
        'timestamp' => time(),
        'data' => $data,
        'data_count' => count($data),
        'processing_time_ms' => round((microtime(true) - $startTime) * 1000, 2)
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

    // ob_end_flush(); // If ob_gzhandler is used

    exit;
}

// Default response if no action is specified
echo json_encode([
    'status' => 'error',
    'message' => 'Invalid action.'
]);

?>`,



    "PHP Artificial Intelligence": `
// ========================================
// 1. Code Example:common ML application
// ========================================
      <?php

// This example demonstrates how a PHP application can integrate with an external
// Machine Learning (ML) API for sentiment analysis of text.

class SentimentAnalyzer
{
    private $apiUrl;
    private $apiKey;

    public function __construct(string $apiUrl, string $apiKey)
    {
        $this->apiUrl = $apiUrl;
        $this->apiKey = $apiKey;
    }

    /**
     * Analyzes the sentiment of a given text using an external ML API.
     * @param string $text The text string to analyze.
     * @return array An associative array containing the sentiment result (e.g., ['sentiment' => 'positive', 'score' => 0.92])
     * @throws Exception If the API call fails or returns an error.
     */
    public function analyzeSentiment(string $text): array
    {
        if (empty($text)) {
            throw new InvalidArgumentException("Text for sentiment analysis cannot be empty.");
        }

        $postData = [
            'text' => $text,
            // 'language' => 'en' // Optional: specify language
        ];

        $headers = [
            "Content-Type: application/json",
            "Authorization: Bearer {$this->apiKey}", // API key for authentication
            "Accept: application/json"
        ];

        $ch = curl_init($this->apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Timeout after 10 seconds

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        if ($curlError) {
            throw new Exception("cURL error during sentiment analysis API call: " . $curlError);
        }

        $decodedResponse = json_decode($response, true);

        if ($httpCode !== 200 || !isset($decodedResponse['sentiment']) || !isset($decodedResponse['score'])) {
            $errorMessage = $decodedResponse['message'] ?? 'Unknown API error';
            throw new Exception("Sentiment API returned an error ({$httpCode}): " . $errorMessage);
        }

        return $decodedResponse;
    }
}

// --- Usage Example ---
// In a real scenario, API URL and Key would come from secure environment variables.
$sentimentApiUrl = 'https://api.example.com/ml/sentiment/v1/analyze';
$sentimentApiKey = 'your_ml_api_secret_key';

$analyzer = new SentimentAnalyzer($sentimentApiUrl, $sentimentApiKey);

$comments = [
    "This product is absolutely fantastic! I love it.",              // Positive
    "The service was okay, but the delivery was quite slow.",         // Neutral/Mixed
    "I am extremely disappointed with my purchase. Never again.",    // Negative
    "It's good.",                                                      // Neutral/Positive
    "Completely unacceptable and a total waste of money.",             // Strongly Negative
    "" // Empty text for testing error handling
];

echo "--- Sentiment Analysis Results ---\n";

foreach ($comments as $index => $comment) {
    echo "Comment " . ($index + 1) . ": \"{$comment}\"\n";
    try {
        $result = $analyzer->analyzeSentiment($comment);
        echo sprintf(
            "  Sentiment: %s (Score: %.2f)\n",
            $result['sentiment'],
            $result['score']
        );
    } catch (InvalidArgumentException $e) {
        echo "  Error: " . $e->getMessage() . "\n";
    } catch (Exception $e) {
        echo "  API Error: " . $e->getMessage() . "\n";
    }
    echo "-----------------------------------\n";
}

?>`,

    "PHP Big Data": `
      <?php
      // Big data example
          $data = new BigData();
            $data->process();
              ?>`,
    "PHP Data Science": `
      <?php
// PHP Data Science Example: Sales Data Analysis

class DataScience {
    private $data = [];
    
    // Load data from CSV
    public function loadCSV($filename) {
        $file = fopen($filename, 'r');
        $headers = fgetcsv($file);
        
        while (($row = fgetcsv($file)) !== FALSE) {
            $this->data[] = array_combine($headers, $row);
        }
        fclose($file);
        return $this;
    }
    
    // Basic statistical analysis
    public function calculateStats($column) {
        $values = array_column($this->data, $column);
        $values = array_map('floatval', $values);
        
        return [
            'mean' => array_sum($values) / count($values),
            'median' => $this->median($values),
            'min' => min($values),
            'max' => max($values),
            'std_dev' => $this->standardDeviation($values)
        ];
    }
    
    private function median($values) {
        sort($values);
        $count = count($values);
        $middle = floor($count / 2);
        
        return $count % 2 ? $values[$middle] : 
               ($values[$middle - 1] + $values[$middle]) / 2;
    }
    
    private function standardDeviation($values) {
        $mean = array_sum($values) / count($values);
        $variance = array_sum(array_map(function($x) use ($mean) {
            return pow($x - $mean, 2);
        }, $values)) / count($values);
        
        return sqrt($variance);
    }
    
    // Data visualization (simple HTML chart)
    public function generateChart($column, $title = '') {
        $values = array_column($this->data, $column);
        $maxValue = max($values);
        
        $html = "<div class='chart'><h3>$title</h3>";
        foreach ($values as $i => $value) {
            $height = ($value / $maxValue) * 200;
            $html .= "<div class='bar' style='height: {$height}px; 
                     background: #3498db; width: 20px; margin: 2px; 
                     display: inline-block;'></div>";
        }
        $html .= "</div>";
        
        return $html;
    }
    
    // Correlation analysis
    public function correlation($col1, $col2) {
        $x = array_map('floatval', array_column($this->data, $col1));
        $y = array_map('floatval', array_column($this->data, $col2));
        
        $meanX = array_sum($x) / count($x);
        $meanY = array_sum($y) / count($y);
        
        $numerator = $denomX = $denomY = 0;
        
        for ($i = 0; $i < count($x); $i++) {
            $numerator += ($x[$i] - $meanX) * ($y[$i] - $meanY);
            $denomX += pow($x[$i] - $meanX, 2);
            $denomY += pow($y[$i] - $meanY, 2);
        }
        
        return $numerator / sqrt($denomX * $denomY);
    }
}

// Usage Example
$ds = new DataScience();

// Sample data creation (normally loaded from file)
$sampleData = [
    ['date' => '2024-01-01', 'sales' => 1500, 'customers' => 45],
    ['date' => '2024-01-02', 'sales' => 1800, 'customers' => 52],
    ['date' => '2024-01-03', 'sales' => 1200, 'customers' => 38],
    ['date' => '2024-01-04', 'sales' => 2100, 'customers' => 61],
    ['date' => '2024-01-05', 'sales' => 1650, 'customers' => 48]
];

// Simulate loading data
$ds->data = $sampleData;

// Perform analysis
$salesStats = $ds->calculateStats('sales');
echo "Sales Statistics:\n";
echo "Mean: " . round($salesStats['mean'], 2) . "\n";
echo "Median: " . $salesStats['median'] . "\n";
echo "Standard Deviation: " . round($salesStats['std_dev'], 2) . "\n";

// Calculate correlation
$correlation = $ds->correlation('sales', 'customers');
echo "Sales-Customer Correlation: " . round($correlation, 3) . "\n";

// Generate visualization
echo $ds->generateChart('sales', 'Daily Sales Chart');
?>`,

    
   

    "Asynchronous PHP & Parallel Processing": `
<?php
// Example using ReactPHP for asynchronous HTTP requests
require 'vendor/autoload.php';

use React\EventLoop\Factory;
use React\HttpClient\Client;

$loop = Factory::create();
$client = new Client($loop);

$request = $client->request('GET', 'http://example.com');
$request->on('response', function ($response) {
    // This callback runs asynchronously when the response is received
    $response->on('data', function ($chunk) {
        echo "Received chunk: $chunk\n"; // Non-blocking output
    });
});
$request->end();

$loop->run(); // Starts the event loop
// Real-world: Useful for high-performance APIs, websockets, or background jobs
?>

<?php
// In Symfony, using Messenger for async jobs
// src/Message/SendEmailMessage.php
class SendEmailMessage {
    public $userId;
    public function __construct($userId) { $this->userId = $userId; }
}

// Dispatch a message (controller/service)
$bus->dispatch(new SendEmailMessage($userId));

// Handle the message asynchronously (worker)
class SendEmailHandler {
    public function __invoke(SendEmailMessage $message) {
        // Send email to $message->userId
    }
}
// Best Practice: Use queues for email, notifications, and heavy tasks.
?>`,
  };
  return examples[lessonTitle] || "<?php\n// Example code will be provided\n?>";
};

const getAdvancedPHPCodeExplanation =(lessonTitle) => {
    const explanations = {
      "Advanced PHP Syntax": `
This code demonstrates advanced PHP syntax features:

- **Namespaces and Autoloading**: The \`namespace\` keyword organizes code and prevents naming conflicts. 
Using namespaces is a best practice in modern PHP applications,
 especially for large projects or when using third-party libraries.
- **Traits**: The \`use Loggable;\` statement shows how to include reusable methods in a class,
 promoting code reuse and modularity.
- **Class Structure**: The \`User\` class uses a trait and logs a message in its constructor, 
demonstrating how to combine traits and class logic.
- **Best Practice**: Always use namespaces and traits to keep your code organized and maintainable.
`,

      "Object-Oriented PHP": `
This code demonstrates object-oriented programming in PHP:

- **Classes and Inheritance**: The \`Animal\` class is a base class, and \`Dog\` 
extends it, showing inheritance and method overriding.
- **Encapsulation**: The \`$name\` property is protected, meaning it can only 
be accessed within the class or its subclasses.
- **Polymorphism**: The \`speak\` method is overridden in the \`Dog\` class, 
allowing different behavior for different subclasses.
- **Best Practice**: Use inheritance and encapsulation to create flexible and reusable code structures.
`,

      "PHP Design Patterns": `
This code demonstrates the Singleton design pattern:

- **Singleton Pattern**: Ensures only one instance of a class exists. 
The constructor is private, and the static \`getInstance\` method controls object creation.
 This is useful for shared resources like database connections or configuration.
- **Best Practice**: Use the Singleton pattern sparingly, as it can make testing and
code maintenance more difficult if overused.
`,

      "PHP Inheritance": `
**Code Explanation**
Inheritance in PHP allows a class (child/derived class) to inherit properties and methods 
from another class (parent/base class). PHP supports single inheritance, meaning a class can 
only extend one parent class at a time. This promotes code reusability and establishes an "is-a" 
relationship between classes.

*Key Concepts*:

- **Single Inheritance**: A child class extends only one parent class using the \`extends\` keyword
- **Method Overriding**: Child classes can override parent methods to provide specialized behavior
- **Access Modifiers**: \`public\`, \`protected\`, and \`private\` control inheritance visibility
- **Parent Access**: Use \`parent::\` to access parent class methods and properties
- **Constructor Inheritance**: Child classes inherit parent constructors unless overridden

***Inheritance Characteristics***:
- Single inheritance only - a class can extend only one parent class
- Code reuse - inherits actual implementation from parent
- "Is-a" relationship - child class is a specialized version of parent
- Can override methods - child classes can modify parent behavior
- Access to parent methods - can call parent methods using \`parent::\`

**Inheritance Best Practices**:
- Use inheritance for "is-a" relationships
- Keep inheritance hierarchies shallow (max 3-4 levels)
- Use abstract classes for common functionality
- Override methods thoughtfully to maintain expected behavior
- Use final keyword to prevent unwanted inheritance`,

      "PHP Interfaces":`
      Code Explanation
Interfaces in PHP define contracts that classes must follow. They specify which
methods a class must implement without providing the implementation details. 
Unlike inheritance, a class can implement multiple interfaces, enabling multiple 
inheritance of behavior. Interfaces promote loose coupling and ensure consistent 
method signatures across different classes.

**Key Concepts**:

- **Interface Declaration**: Use \`interface\` keyword to define contracts
- **Implementation**: Classes use \`implements\` keyword to implement interfaces
- **Multiple Implementation**: A class can implement multiple interfaces
- **Method Signatures**: Interfaces define method names and parameters, not implementations
- **Constants**: Interfaces can contain constants but not properties
- **Inheritance**: Interfaces can extend other interfaces

*Interface Characteristics*:
- Multiple implementation - a class can implement multiple interfaces
- Contract definition - specifies what methods must exist, not how
- "Can-do" relationship - defines capabilities/behaviors
- No implementation - interfaces only define method signatures
- Constants allowed - can contain constants but not properties

*Interface Best Practices*:
- Use interfaces for "can-do" relationships and contracts
- Keep interfaces focused and cohesive (Single Responsibility)
- Use multiple interfaces to compose complex behaviors
- Name interfaces with descriptive suffixes (-Interface, -able)
- Use interface segregation - many small interfaces vs few large ones
- Leverage interface polymorphism for flexible code design`,

      "PHP Testing": `
This code demonstrates unit testing with PHPUnit:

- **Test Case Structure**: The test class extends \`TestCase\`, and each test is a 
public method starting with \`test\`.
- **Assertions**: The \`assertEquals\` method checks that the expected and actual values match.
- **Best Practice**: Write tests for all critical code paths to ensure reliability and catch bugs early.
`,

      "PHP Security": `
This code demonstrates secure handling of user input:

- **Input Sanitization**: The \`htmlspecialchars\` function escapes special 
characters to prevent XSS attacks.
- **Best Practice**: Always sanitize user input before displaying it in the browser 
to protect against security vulnerabilities.
`,

      "PHP Performance Optimization": `
This code demonstrates caching for performance:

- **Caching**: The code checks if data is in the cache before performing an expensive operation,
 reducing redundant computation and improving performance.
- **Best Practice**: Use caching for frequently accessed data to optimize application speed and scalability.
`,

      "PHP Frameworks": `
This code demonstrates a simple route in Laravel:

- **Routing**: The \`Route::get\` method defines a route that returns all users. Laravel's 
routing system makes it easy to handle HTTP requests and responses.
- **Best Practice**: Use frameworks like Laravel to speed up development and 
follow best practices for web applications.
`,

      "PHP API Development": `
This code demonstrates a simple RESTful API response:

- **JSON Response**: The \`header\` function sets the content type, and \`json_encode\` 
returns a JSON response. 
This is the standard way to build APIs in PHP.
- **Best Practice**: Always return properly formatted JSON and set the correct headers for API endpoints.
`,

      "PHP Microservices": `
This code demonstrates communication between microservices:

- **HTTP Requests**: The code uses an HTTP client to fetch data from another 
service and decodes the JSON response. 
This is a common pattern in microservice architectures.
- **Best Practice**: Use HTTP clients and JSON for inter-service communication, 
and handle errors gracefully.
`,

      "PHP DevOps": `
This code demonstrates a simple CI/CD check:

- **Environment Variables**: The code checks for a CI environment variable to run 
tests and deploy automatically. 
This is a key part of modern DevOps workflows.
- **Best Practice**: Automate testing and deployment to improve reliability and reduce manual errors.
`,

      "PHP Cloud Services": `
This code demonstrates uploading a file to AWS S3:

- **AWS SDK**: The code creates an S3 client and uploads an object to a bucket. Using cloud services 
like S3 is common for scalable file storage.
- **Best Practice**: Use official SDKs for cloud services and handle errors and permissions securely.
`,

      "PHP Machine Learning": `
This code demonstrates using a machine learning library in PHP:

- **Model Training and Prediction**: The code trains a classifier and makes a prediction. 
While PHP is not commonly used for ML, libraries exist for basic tasks.
- **Best Practice**: Use specialized libraries for ML tasks and validate your models with real data.
`,

      "PHP Blockchain": `
This code demonstrates basic blockchain operations:

- **Block Creation and Mining**: The code creates a new block and mines it, 
showing the core concepts of blockchain technology.
- **Best Practice**: Understand the security and performance implications before 
implementing blockchain in production.
`,

      "PHP Internet of Things": `
**Code Explanation**
PHP IoT involves using PHP to interact with IoT devices, process sensor 
data, and manage device communication. PHP serves as a bridge between IoT 
devices and web applications, handling data collection, processing, and visualization.

**Key Components:**

- **Device Communication**: REST APIs, MQTT, WebSockets for device interaction
- **Data Processing**: Real-time sensor data handling and storage
- **Security**: Authentication, encryption, and secure communication protocols
- **Dashboard Creation**: Web interfaces for monitoring and controlling devices
- **Database Integration**: Storing and retrieving IoT data efficiently

*IoT Best Practices*

- Implement robust authentication and encryption
- Use message queues for reliable communication
- Implement proper error handling and retry mechanisms
- Monitor device health and connectivity
- Use database indexing for time-series data
- Implement rate limiting and security measures
`,

      "PHP Mobile Development": `
This code demonstrates a simple mobile API response:

- **API Response**: The code returns a JSON response for a mobile app, 
which is a common requirement for mobile backends.
- **Best Practice**: Design APIs to be efficient and secure for mobile clients.
`,

      "PHP Game Development": `
This code demonstrates a basic game loop:

- **Game Loop**: The code runs update and render methods while the game is running, 
which is the core of most game engines.
- **Best Practice**: Keep game loops efficient and responsive to user input.
`,

      "PHP Virtual Reality": `
This code demonstrates initializing and rendering a VR scene:

- **VR Initialization**: The code sets up and renders a VR environment, 
which is the foundation for VR applications.
- **Best Practice**: Optimize VR code for performance and user experience.
`,

      "PHP Augmented Reality": `
This code demonstrates initializing and rendering an AR scene:

- **AR Initialization**: The code sets up and renders an AR environment, 
which is the basis for AR applications.
- **Best Practice**: Test AR features on real devices and handle user interaction smoothly.
`,

      "PHP Natural Language Processing": `
This code demonstrates basic NLP processing:

- **Text Processing**: The code uses an NLP library to process text, 
which is useful for sentiment analysis and language understanding.
- **Best Practice**: Use established libraries for NLP and preprocess text for better results.
`,

      "PHP Computer Vision": `
This code demonstrates basic computer vision tasks:

- **Image Processing and Detection**: The code uses a computer vision library 
to detect objects in an image, 
which is common in image analysis applications.
- **Best Practice**: Validate image data and handle errors in computer vision pipelines.
`,

      "PHP Robotics": `
This code demonstrates basic robot control:

- **Robot Movement**: The code creates a robot object and calls its move method, 
showing how to control hardware with PHP.
- **Best Practice**: Ensure safety and reliability when controlling physical devices.
`,

      "PHP Quantum Computing": `
This code demonstrates basic quantum computing simulation:

- **Quantum Computation**: The code creates a quantum object and runs a computation, 
illustrating the basics of quantum 
programming in PHP.
- **Best Practice**: Use quantum libraries for simulation and understand the 
limitations of classical hardware.
`,

      "PHP Edge Computing": `
This code demonstrates edge data processing:

- **Edge Processing**: The code creates an edge object and processes data locally, 
which is important for low-latency applications.
- **Best Practice**: Secure edge devices and manage data efficiently.
`,

      "PHP 5G": `
5G, the fifth generation of cellular technology, is designed to deliver significantly 
faster speeds (up to 10 Gbps peak data rates), ultra-low latency (as low as 1 millisecond), 
and massive capacity for connecting a multitude of devices (up to 1 million devices per square kilometer). 
Key features include:

- **Enhanced Mobile Broadband (eMBB)**: For faster data speeds and higher capacity.
- **Ultra-Reliable Low-Latency Communications (URLLC)**: Critical for applications like autonomous vehicles, remote surgery, 
and industrial automation.
- **Massive Machine-Type Communications (mMTC)**: Enabling connectivity for billions of IoT devices
PHP applications would primarily benefit from eMBB (for faster content delivery to users) and low latency (for highly responsive
web applications or real-time data processing). The core concept for PHP developers is to build applications that can leverage these 
network capabilities, rather than directly managing 5G connections.

NOTE: *(No direct PHP code example for 5G basics, as it's a conceptual network 
understanding. PHP's role comes in leveraging the network's capabilities.)*

**Network Architecture**
5G's network architecture is characterized by a move towards a cloud-native, service-based architecture (SBA) with features like network 
slicing, edge computing, and virtualization (NFV, SDN).

- **Network Slicing**: Allows multiple virtual networks to run on a single physical infrastructure, each optimized for specific use cases 
(e.g., a slice for IoT, a slice for URLLC). PHP applications might interact with APIs to request or manage resources within specific network slices.
- **Edge Computing**: Processing data closer to the source (e.g., at a cell tower) reduces latency and bandwidth usage. PHP applications could serve as 
backend for edge services, processing data streams from IoT devices at the edge before sending aggregated data to a central cloud.
- **Virtualization (NFV/SDN)**: Network functions are software-defined and run on generic hardware, making the network more flexible and programmable.
PHP applications could potentially interact with orchestration layers to provision or manage virtualized network resources, though 
this is typically handled by specialized network management systems.

NOTE: *(Direct PHP code to demonstrate network architecture concepts like slicing or edge computing would involve complex API interactions with network
orchestrators, which are highly vendor-specific and beyond a general example. Instead, a conceptual PHP interaction with an "edge service" might be illustrative.)*

**Explanation of Code Example**:
This code demonstrates a \`EdgeServiceAPI\` class in PHP that acts as a conceptual client for an edge 
computing service. It uses \`cURL\` to make HTTP requests.

- **sendToEdgeProcessor**: Simulates sending real-time data (like sensor readings) to an edge node for immediate, low-latency processing.
- **getAggregatedEdgeData**: Simulates retrieving results that have been aggregated at the edge, reducing the need to send raw, high-volume data back to the central cloud.
This showcases how PHP applications would leverage 5G's edge computing capabilities by integrating with specialized edge APIs.

**Application Development**
Developing applications for 5G environments focuses on leveraging its key characteristics:

- **High Throughput**: PHP applications can serve high-resolution media, interactive content, 
and large datasets faster. Optimizing image/video delivery, using efficient caching mechanisms, 
and CDN integration are crucial.
- **Low Latency**: For real-time applications (e.g., online gaming, live collaboration, AR/VR), PHP can power 
highly responsive APIs, real-time data streams (using WebSockets with libraries like Ratchet), 
and microservices architectures that reduce processing overhead.
- **Massive Connectivity**: For IoT platforms, PHP can handle high volumes of concurrent connections 
and process large amounts of data ingested from millions of devices, often interacting with message queues 
(e.g., RabbitMQ, Kafka) or specialized IoT platforms.
- **API-First Design**: With 5G's SBA, applications will increasingly interact with network functions and services 
via APIs. PHP, with its strong support for RESTful and GraphQL API development, is well-suited for building these integrations.

**Explanation of Code Example**:
This PHP script \`(api.php)\` serves as a mock API endpoint designed for high throughput.

- **HTTP Headers**: Sets \`Content-Type\` to \`application/json\` and Cache-Control for client-side caching. 
\`Access-Control-Allow-Origin: *\` is included for broad API access, common in public APIs (though in production, this should be restricted).

- \`getHighVolumeProductData\`: A simulated function that generates a large array of product data. 
In a real application, this would fetch from a highly optimized data source (e.g., Redis cache, a fast database).
- **JSON Encoding**: The data is encoded as JSON using \`json_encode\`. **JSON_UNESCAPED_SLASHES** and **JSON_UNESCAPED_UNICODE** 
are flags for cleaner, more compact JSON output, reducing payload size.
- **Performance Measurement**: Measures the server-side processing time, indicating efficiency.
- **GZIP Compression (Commented)**: \`ob_gzhandler\` is commented out but highlighted as a crucial server-side optimization 
to compress output, significantly reducing data transfer size over high-speed 5G networks. This is typically handled 
by the web server (Nginx/Apache) for better performance.

*This example illustrates how PHP, despite being server-side, plays a vital role in delivering optimized content quickly, directly 
benefiting from 5G's enhanced mobile broadband capabilities*.`,

      "PHP Artificial Intelligence": `
While Python is often the primary language for AI development due to its rich ecosystem of libraries (TensorFlow, PyTorch, Scikit-learn), 
PHP can play a significant role in integrating AI capabilities into web applications. This often involves consuming AI models exposed via APIs, 
pre-processing data for AI models, or serving AI-driven recommendations.

1. **AI Basics**
Artificial Intelligence (AI) encompasses various techniques that enable machines to simulate human intelligence. Key concepts include:

- **Machine Learning (ML)**: A subset of AI where systems learn from data without explicit programming. This involves algorithms that identify 
patterns and make predictions.
- **Deep Learning (DL)**: A subset of ML that uses neural networks with many layers ("deep" networks) to learn complex patterns, especially 
from large datasets like images, audio, and text.
- **Natural Language Processing (NLP)**: Enables computers to understand, interpret, and generate human language.
- **Computer Vision**: Enables computers to "see" and interpret visual information from images and videos.
For PHP, the interaction with AI typically involves making API calls to external AI services 
(like Google Cloud AI, AWS AI Services, OpenAI) or to custom-built AI models exposed as RESTful endpoints, rather than building complex models directly within PHP.

*(No direct PHP code example for AI basics, as it's a conceptual understanding. 
PHP's role comes in integrating with AI services.)*

2. **Machine Learning Integration**
Integrating Machine Learning (ML) with PHP usually means your PHP application acts as a client to 
an ML model or service. This involves:

- **API Interaction**: Sending input data (e.g., user preferences, product details, text for sentiment analysis)
to an ML model exposed via a REST API and receiving predictions or classifications.
- **Data Preparation**: PHP might be used to preprocess data (cleaning, formatting, normalization) before sending 
it to the ML model, ensuring it meets the model's input requirements.
- **Result Interpretation**: Receiving ML outputs (e.g., a probability score, a predicted category) and integrating 
them into the application's logic (e.g., showing personalized recommendations, flagging spam comments).
- **Batch Processing**: For large datasets, PHP can orchestrate batch processing jobs where data is sent to an ML service, 
and results are retrieved later.

*Code Explanation*:
This SentimentAnalyzer class demonstrates how a PHP application integrates with an external Machine Learning (ML) API:

1. **Constructor**: Initializes with the API endpoint and an API key for authentication.

2. \`analyzeSentiment\` Method:
- Performs basic input validation \`(empty($text))\`.
- Constructs a JSON payload with the text to be analyzed.
- Sets HTTP headers, including \`Content-Type\`, \`Authorization\` 
(using a Bearer token for the API key), and \`Accept\`.
- Uses \`cURL\` to make a POST request to the ML API. \`CURLOPT_TIMEOUT\` is set to prevent indefinite waits.
- Handles cURL errors and parses the JSON response.
- Throws exceptions for API errors or invalid responses, providing robust error handling.

*Usage Example*: Iterates through an array of comments, sending each to the analyzeSentiment method and printing the 
received sentiment and score. It includes examples of positive, neutral, and negative comments, as well as an empty 
comment to trigger the input validation.




`,

      "PHP Big Data": `
This code demonstrates big data processing:

- **Data Processing**: The code creates a BigData object and processes large datasets, 
which is common in analytics applications.
- **Best Practice**: Use efficient algorithms and storage solutions for big data.
`,

      "PHP Data Science": `
**Code Explanation**
PHP Data Science involves using PHP to collect, analyze, and visualize data to extract 
meaningful insights. While not traditionally associated with data science, PHP can effectively 
handle data processing tasks through its extensive libraries and built-in functions.

**Key Components**:

- **Data Collection**: Reading from databases, APIs, CSV files, and web scraping
- **Data Processing**: Cleaning, transforming, and manipulating datasets
- **Statistical Analysis**: Calculating means, medians, correlations, and distributions
- **Data Visualization**: Creating charts and graphs to represent findings
- **Machine Learning**: Basic predictive modeling and pattern recognition

*Data Science Best Practices*
- Use appropriate data structures and validate input data
- Implement proper error handling for file operations
- Optimize database queries for large datasets
- Use statistical libraries when available (like Math_Stats)
- Implement data caching for performance`,
 
      "Asynchronous PHP & Parallel Processing": `
This code demonstrates asynchronous programming in PHP using ReactPHP:

- **Event Loop**: The event loop allows PHP to handle multiple operations concurrently without blocking, similar to Node.js.
- **Non-blocking I/O**: The HTTP client makes a request and processes the response asynchronously, 
so PHP can handle other tasks while waiting for data.
- **Callbacks**: The \`on('response', ...)\` and \`on('data', ...)\` callbacks are triggered when data is available,
 enabling efficient, scalable applications.
- **Real-world Use**: This approach is ideal for high-performance APIs, websocket servers, or 
background processing where traditional synchronous PHP would be too slow.
- **Best Practice**: Use asynchronous libraries for I/O-bound tasks, but be aware of PHP's 
limitations and the need for compatible hosting environments.
`,
    };
return explanations[lessonTitle] || "// Example code will be provided"
}

const getAdvancedPHPExercises = (lessonTitle) => {
  const exercises = {
    "Advanced PHP Syntax": `
- Create a namespace and use traits in a class.
- Implement a closure and an anonymous function.`,

    "Object-Oriented PHP": `
- Create a class hierarchy with inheritance.
- Implement a static method and a magic method.`,

    "PHP Design Patterns": `
- Implement the Singleton pattern.
- Use the Factory pattern to create objects.`, 

    "PHP Testing": `
- Write a unit test for a class.
- Use mocking to test a class with dependencies.`,

    "PHP Security": `
- Implement measures to prevent XSS and CSRF.
- Use prepared statements to prevent SQL injection.`,

    "PHP Performance Optimization": `
- Profile a PHP script and optimize it.
- Implement caching for a frequently accessed resource.`,

    "PHP Frameworks": `
- Create a simple application using Laravel.
- Use Symfony components in a project.`,

    "PHP API Development": `
- Design a RESTful API.
- Implement authentication for the API.`,

    "PHP Microservices": `
- Create a microservice architecture.
- Use Docker to containerize a microservice.`,

    "PHP DevOps": `
- Set up continuous integration for a project.
- Deploy a project using continuous deployment.`,

    "PHP Cloud Services": `
- Use AWS S3 to store files.
- Deploy a PHP application on Azure.`,

    "PHP Machine Learning": `
- Use a PHP ML library to train a model.
- Make predictions using the trained model.`,

    "PHP Blockchain": `
- Create a simple blockchain.
- Implement a smart contract.`,

  "PHP Internet of Things": `
- Connect an IoT device.
- Process data from the device.`,

    "PHP Mobile Development": `
- Create a mobile API.
- Implement push notifications.`,

    "PHP Game Development": `
- Create a simple game loop.
- Handle user input in the game.`,

    "PHP Virtual Reality": `
- Create a simple VR scene.
- Handle user interaction in VR.`, 

    "PHP Augmented Reality": `
- Create a simple AR application.
- Use markers for AR.`,

    "PHP Natural Language Processing": `
- Process text using NLP.
- Perform sentiment analysis on text.`, 

    "PHP Computer Vision": `
- Process images using computer vision.
- Detect objects in an image.`,

    "PHP Robotics": `
- Control a robot using PHP.
- Process sensor data from the robot.`,

    "PHP Quantum Computing": `
- Simulate a quantum algorithm.
- Use quantum cryptography.`,

    "PHP Edge Computing": `
- Process data on an edge device.
- Implement security measures for edge computing.`,

    "PHP 5G": `
- Connect to a 5G network.
- Develop an application for 5G.`,

    "PHP Artificial Intelligence": `
- Train an AI model.
- Use the model to make predictions.`,

    "PHP Big Data": `
- Process big data using PHP.
- Store and analyze the data.`,

    "PHP Data Science": `
- Analyze data using PHP.
- Visualize the results.`,

    "Asynchronous PHP & Parallel Processing": `
- Install ReactPHP and make an asynchronous HTTP request to two different APIs in parallel.
- Build a simple websocket server using Swoole or ReactPHP.
- Refactor a blocking file read operation to use non-blocking I/O.
- Discuss the pros and cons of asynchronous PHP compared to traditional synchronous PHP.
`,
  };
  return exercises[lessonTitle] || "1. Basic exercise\n2. Advanced exercise\n3. Project work";
};

module.exports = {
    getAdvancedPHPLessonConcepts,
    getAdvancedPHPCodeExample,
    getAdvancedPHPCodeExplanation,
    getAdvancedPHPExercises,
    
    };