const getMongoDBLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to MongoDB": `
- What is MongoDB and its role in modern development
- NoSQL database concepts and advantages
- JSON-like document storage (BSON)
- Flexible schema vs rigid schema
- Horizontal scalability and sharding
- MongoDB vs traditional SQL databases
- MongoDB ecosystem and tools
- Use cases for MongoDB applications`,

    "MongoDB Installation and Setup": `
- Installing MongoDB Community Server
- MongoDB Compass GUI tool
- MongoDB Shell (mongosh)
- MongoDB Atlas cloud setup
- Environment configuration
- Database connection methods
- Authentication and security basics
- Local vs cloud development`,

    "MongoDB Data Types and Documents": `
- BSON data types overview
- Document structure and nesting
- Field types (String, Number, Boolean, Date, Array, Object)
- ObjectId and unique identifiers
- Embedded documents vs references
- Data validation and constraints
- Best practices for document design
- Schema design patterns`,

    "Basic CRUD Operations": `
- Creating databases and collections
- Insert operations (insertOne, insertMany)
- Query operations (find, findOne)
- Update operations (updateOne, updateMany)
- Delete operations (deleteOne, deleteMany)
- Upsert operations
- Bulk operations and performance
- Error handling and validation`,

    "Querying and Filtering": `
- Basic query syntax and operators
- Comparison operators ($eq, $ne, $gt, $lt, $gte, $lte)
- Logical operators ($and, $or, $not, $nor)
- Array operators ($in, $nin, $all)
- Element operators ($exists, $type)
- Query projection and field selection
- Limiting and skipping results
- Query optimization basics`,

    "MongoDB Indexing": `
- Understanding indexes and their purpose
- Creating single and compound indexes
- Index types (ascending, descending, text, geospatial)
- Index performance and optimization
- Index usage analysis (explain plans)
- When to create indexes
- Index maintenance and monitoring
- Common indexing patterns`,

    "Aggregation Pipeline": `
- Introduction to aggregation framework
- Pipeline stages ($match, $group, $project, $sort)
- Accumulator operators ($sum, $avg, $min, $max)
- Array operators ($push, $addToSet, $first, $last)
- Conditional operators ($cond, $ifNull)
- Date operators and formatting
- Lookup operations ($lookup)
- Pipeline optimization and performance`,

    "MongoDB with Node.js": `
- Installing MongoDB Node.js driver
- Connection strings and options
- Database connection patterns
- CRUD operations in Node.js
- Error handling and connection management
- Async/await vs callback patterns
- Connection pooling and performance
- Best practices for Node.js integration`,

    "Advanced MongoDB Features": `
- Transactions and ACID properties
- Change streams and real-time updates
- GridFS for file storage
- Map-reduce operations
- Full-text search capabilities
- Geospatial queries and indexing
- Replica sets and high availability
- Sharding and horizontal scaling`,

    "MongoDB Security and Performance": `
- Authentication and authorization
- Role-based access control
- Network security and encryption
- Performance monitoring and profiling
- Query optimization techniques
- Memory management and caching
- Backup and recovery strategies
- Production deployment best practices`
  };

  return concepts[lessonTitle] || "MongoDB concept not found";
};

const getMongoDBCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to MongoDB": `
// Example 1: Basic MongoDB Document Structure
 // MongoDB stores data as BSON (Binary JSON) documents
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  },
  "hobbies": ["reading", "swimming", "coding"],
  "createdAt": new Date(),
  "isActive": true
}

// Example 2: MongoDB vs SQL Comparison
 // SQL Table Structure:
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INT
);

// MongoDB Collection (flexible schema):
// No predefined schema - documents can have different fields
// Documents are stored as JSON-like objects`,

    "MongoDB Installation and Setup": `
// Example 1: MongoDB Connection String
 // Local MongoDB connection
mongodb://localhost:27017/mydatabase

 // MongoDB Atlas cloud connection
mongodb+srv://username:password@cluster.mongodb.net/mydatabase?retryWrites=true&w=majority

// Example 2: Basic MongoDB Shell Commands
// Connect to MongoDB
mongosh

// Show databases
show dbs

// Use a database
use mydatabase

// Show collections
show collections

// Example 3: MongoDB Compass Connection
 // Connection settings in MongoDB Compass:
// Host: localhost
// Port: 27017
// Authentication: None (for local development)`,

    "MongoDB Data Types and Documents": `
// Example 1: MongoDB Data Types
{
  "_id": ObjectId("507f1f77bcf86cd799439011"), // ObjectId
  "name": "John Doe",                          // String
  "age": 30,                                   // Number (Integer)
  "salary": 75000.50,                         // Number (Double)
  "isActive": true,                           // Boolean
  "birthDate": new Date("1990-01-01"),        // Date
  "skills": ["JavaScript", "Python", "MongoDB"], // Array
  "address": {                                // Embedded Document
    "street": "123 Main St",
    "city": "New York",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.0060
    }
  },
  "tags": ["developer", "senior", "remote"]   // Array of Strings
}

// Example 2: Document vs Reference Pattern
// Embedded Document (Denormalized)
{
  "_id": ObjectId("..."),
  "user": {
    "name": "John Doe",
    "email": "john@example.com"
  },
  "order": {
    "items": ["laptop", "mouse"],
    "total": 1200.00
  }
}

// Reference Pattern (Normalized)
// Users Collection
{
  "_id": ObjectId("user123"),
  "name": "John Doe",
  "email": "john@example.com"
}

// Orders Collection
{
  "_id": ObjectId("order456"),
  "userId": ObjectId("user123"), // Reference
  "items": ["laptop", "mouse"],
  "total": 1200.00
}`,

    "Basic CRUD Operations": `
// Example 1: Create Operations
 // Insert a single document
db.users.insertOne({
  name: "Alice Smith",
  email: "alice@example.com",
  age: 28,
  department: "Engineering"
});

// Insert multiple documents
db.users.insertMany([
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    age: 32,
    department: "Marketing"
  },
  {
    name: "Carol Davis",
    email: "carol@example.com",
    age: 29,
    department: "Sales"
  }
]);

// Example 2: Read Operations
// Find all documents
db.users.find();

// Find with filter
db.users.find({ department: "Engineering" });

// Find one document
db.users.findOne({ name: "Alice Smith" });

// Find with projection (select specific fields)
db.users.find(
  { department: "Engineering" },
  { name: 1, email: 1, _id: 0 }
);

// Example 3: Update Operations
// Update one document
db.users.updateOne(
  { name: "Alice Smith" },
  { $set: { age: 29, lastUpdated: new Date() } }
);

// Update multiple documents
db.users.updateMany(
  { department: "Engineering" },
  { $set: { bonus: 1000 } }
);

// Upsert (insert if not exists, update if exists)
db.users.updateOne(
  { email: "newuser@example.com" },
  { 
    $set: { 
      name: "New User", 
      age: 25,
      department: "HR",
      createdAt: new Date()
    }
  },
  { upsert: true }
);

// Example 4: Delete Operations
// Delete one document
db.users.deleteOne({ name: "Bob Johnson" });

// Delete multiple documents
db.users.deleteMany({ department: "Marketing" });`,

    "Querying and Filtering": `
// Example 1: Comparison Operators
// Equal to
db.products.find({ price: 29.99 });

// Not equal to
db.products.find({ category: { $ne: "electronics" } });

// Greater than
db.products.find({ price: { $gt: 50 } });

// Less than or equal to
db.products.find({ stock: { $lte: 10 } });

// In array
db.products.find({ category: { $in: ["books", "electronics"] } });

// Not in array
db.products.find({ category: { $nin: ["clothing", "shoes"] } });

// Example 2: Logical Operators
// AND operator (implicit)
db.users.find({
  age: { $gte: 25 },
  department: "Engineering",
  isActive: true
});

// AND operator (explicit)
db.users.find({
  $and: [
    { age: { $gte: 25 } },
    { department: "Engineering" },
    { isActive: true }
  ]
});

// OR operator
db.users.find({
  $or: [
    { department: "Engineering" },
    { department: "Marketing" }
  ]
});

// NOR operator (not matching any conditions)
db.users.find({
  $nor: [
    { age: { $lt: 25 } },
    { department: "HR" }
  ]
});

// Example 3: Array Operators
// Array contains all elements
db.products.find({ tags: { $all: ["featured", "sale"] } });

// Array size
db.products.find({ tags: { $size: 3 } });

// Element exists
db.users.find({ phone: { $exists: true } });

// Element type check
db.users.find({ age: { $type: "number" } });

// Example 4: Query Projection and Limits
// Select specific fields
db.users.find(
  { department: "Engineering" },
  { name: 1, email: 1, _id: 0 }
);

// Limit results
db.users.find().limit(10);

// Skip documents
db.users.find().skip(20).limit(10);

// Sort results
db.users.find().sort({ age: 1 }); // ascending
db.users.find().sort({ createdAt: -1 }); // descending`,

    "MongoDB Indexing": `
// Example 1: Single Field Indexes
// Create index on email field
db.users.createIndex({ email: 1 });

// Create descending index on createdAt
db.products.createIndex({ createdAt: -1 });

// Check existing indexes
db.users.getIndexes();

// Example 2: Compound Indexes
// Create compound index on category and price
db.products.createIndex({ category: 1, price: 1 });

// Create compound index with different sort orders
db.orders.createIndex({ userId: 1, createdAt: -1 });

// Example 3: Text Indexes
// Create text index for full-text search
db.articles.createIndex({ 
  title: "text", 
  content: "text",
  tags: "text" 
});

// Search using text index
db.articles.find({ 
  $text: { $search: "MongoDB tutorial" } 
});

// Example 4: Unique Indexes
// Create unique index on username
db.users.createIndex({ username: 1 }, { unique: true });

// Create unique compound index
db.sessions.createIndex(
  { userId: 1, sessionId: 1 }, 
  { unique: true }
);

// Example 5: Sparse Indexes
// Create sparse index (only indexes documents with the field)
db.users.createIndex({ phone: 1 }, { sparse: true });

// Example 6: Partial Indexes
// Create index only for active users
db.users.createIndex(
  { email: 1 }, 
  { partialFilterExpression: { isActive: true } }
);

// Example 7: Geospatial Indexes
// Create 2dsphere index for location data
db.restaurants.createIndex({ location: "2dsphere" });

// Query restaurants near a location
db.restaurants.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.9857, 40.7484] // NYC coordinates
      },
      $maxDistance: 1000 // 1km radius
    }
  }
});

// Example 8: Index Performance Analysis
// Analyze query performance
db.users.find({ email: "john@example.com" }).explain("executionStats");

// Compare with and without index
db.users.find({ email: "john@example.com" }).explain("queryPlanner");`,

    "Aggregation Pipeline": `
// Example 1: Basic Aggregation Stages
// Group products by category and calculate statistics
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      totalProducts: { $sum: 1 },
      averagePrice: { $avg: "$price" },
      minPrice: { $min: "$price" },
      maxPrice: { $max: "$price" },
      totalValue: { $sum: { $multiply: ["$price", "$stock"] } }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
]);

// Example 2: Match and Project Stages
// Filter and transform user data
db.users.aggregate([
  {
    $match: {
      age: { $gte: 18 },
      isActive: true
    }
  },
  {
    $project: {
      _id: 0,
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      email: 1,
      age: 1,
      birthYear: { $subtract: [new Date().getFullYear(), "$age"] },
      userType: {
        $cond: {
          if: { $gte: ["$age", 65] },
          then: "Senior",
          else: {
            $cond: {
              if: { $gte: ["$age", 18] },
              then: "Adult",
              else: "Minor"
            }
          }
        }
      }
    }
  }
]);

// Example 3: Lookup (Join) Operations
// Join users with their orders
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders"
    }
  },
  {
    $project: {
      name: 1,
      email: 1,
      orderCount: { $size: "$userOrders" },
      totalSpent: { $sum: "$userOrders.total" }
    }
  }
]);

// Example 4: Date Operations and Grouping
// Calculate monthly sales
db.orders.aggregate([
  {
    $match: {
      status: "completed",
      createdAt: { $gte: new Date("2024-01-01") }
    }
  },
  {
    $group: {
      _id: {
        year: { $year: "$createdAt" },
        month: { $month: "$createdAt" }
      },
      totalSales: { $sum: "$total" },
      orderCount: { $sum: 1 },
      averageOrderValue: { $avg: "$total" }
    }
  },
  {
    $sort: { "_id.year": 1, "_id.month": 1 }
  }
]);

// Example 5: Array Operations
// Analyze user skills and interests
db.users.aggregate([
  {
    $unwind: "$skills"
  },
  {
    $group: {
      _id: "$skills",
      userCount: { $sum: 1 },
      averageAge: { $avg: "$age" }
    }
  },
  {
    $sort: { userCount: -1 }
  },
  {
    $limit: 10
  }
]);

// Example 6: Conditional Aggregation
// Categorize customers by spending
db.orders.aggregate([
  {
    $group: {
      _id: "$userId",
      totalSpent: { $sum: "$total" },
      orderCount: { $sum: 1 }
    }
  },
  {
    $addFields: {
      customerTier: {
        $switch: {
          branches: [
            { case: { $gte: ["$totalSpent", 5000] }, then: "VIP" },
            { case: { $gte: ["$totalSpent", 1000] }, then: "Gold" },
            { case: { $gte: ["$totalSpent", 500] }, then: "Silver" }
          ],
          default: "Bronze"
        }
      }
    }
  },
  {
    $group: {
      _id: "$customerTier",
      customerCount: { $sum: 1 },
      totalRevenue: { $sum: "$totalSpent" }
    }
  }
]);

// Example 7: Facet for Multiple Aggregations
// Multiple aggregations in one pipeline
db.products.aggregate([
  {
    $facet: {
      "priceStats": [
        {
          $group: {
            _id: null,
            averagePrice: { $avg: "$price" },
            minPrice: { $min: "$price" },
            maxPrice: { $max: "$price" }
          }
        }
      ],
      "categoryCount": [
        {
          $group: {
            _id: "$category",
            count: { $sum: 1 }
          }
        },
        {
          $sort: { count: -1 }
        }
      ],
      "recentProducts": [
        {
          $sort: { createdAt: -1 }
        },
        {
          $limit: 5
        }
      ]
    }
  }
]);`,

    "MongoDB with Node.js": `
// Example 1: Basic Connection Setup
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('mydatabase');
    return db;
  } catch (error) {
    console.error('Connection failed:', error);
    throw error;
  }
}

// Example 2: CRUD Operations with Node.js Driver
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();

app.use(express.json());

// Connection setup
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let db;

async function startServer() {
  try {
    await client.connect();
    db = client.db('myapp');
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on port 3000'));
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

// Create user
app.post('/users', async (req, res) => {
  try {
    const result = await db.collection('users').insertOne(req.body);
    res.status(201).json({ 
      message: 'User created', 
      id: result.insertedId 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await db.collection('users').find({}).toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await db.collection('users').findOne({
      _id: new ObjectId(req.params.id)
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user
app.put('/users/:id', async (req, res) => {
  try {
    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete user
app.delete('/users/:id', async (req, res) => {
  try {
    const result = await db.collection('users').deleteOne({
      _id: new ObjectId(req.params.id)
    });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

startServer();

// Example 3: Using Mongoose ODM
const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0, max: 120 },
  address: {
    street: String,
    city: String,
    zipCode: String
  },
  skills: [String],
  createdAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

// Create model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp');

// CRUD operations with Mongoose
async function userOperations() {
  try {
    // Create user
    const user = new User({
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
        zipCode: '10001'
      },
      skills: ['JavaScript', 'Node.js', 'MongoDB']
    });
    
    await user.save();
    console.log('User created:', user);

    // Find users
    const users = await User.find({ isActive: true });
    console.log('Active users:', users);

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { age: 31 },
      { new: true }
    );
    console.log('Updated user:', updatedUser);

    // Delete user
    await User.findByIdAndDelete(user._id);
    console.log('User deleted');

  } catch (error) {
    console.error('Error:', error);
  }
}

// Example 4: Error Handling and Validation
const userSchemaWithValidation = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$/, 'Invalid email format']
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative'],
    max: [120, 'Age cannot exceed 120']
  }
});

// Example 5: Connection Pooling and Performance
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  bufferMaxEntries: 0 // Disable mongoose buffering
});

// Example 6: Advanced Querying with Node.js
async function advancedQueries(db) {
  // Aggregation pipeline
  const pipeline = [
    { $match: { isActive: true } },
    { $group: { _id: '$department', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ];
  
  const results = await db.collection('users').aggregate(pipeline).toArray();
  console.log('Department stats:', results);

  // Text search
  const searchResults = await db.collection('articles').find({
    $text: { $search: 'MongoDB tutorial' }
  }).toArray();
  
  console.log('Search results:', searchResults);
}`,

    "Advanced MongoDB Features": `
// Example 1: Transactions
const { MongoClient } = require('mongodb');

async function transferMoney(fromUserId, toUserId, amount) {
  const client = new MongoClient('mongodb://localhost:27017');
  const session = client.startSession();
  
  try {
    await session.withTransaction(async () => {
      const accounts = client.db('bank').collection('accounts');
      
      // Debit from source account
      await accounts.updateOne(
        { userId: fromUserId, balance: { $gte: amount } },
        { $inc: { balance: -amount } },
        { session }
      );
      
      // Credit to destination account
      await accounts.updateOne(
        { userId: toUserId },
        { $inc: { balance: amount } },
        { session }
      );
    });
    
    console.log('Transaction completed successfully');
  } catch (error) {
    console.error('Transaction failed:', error);
  } finally {
    await session.endSession();
    await client.close();
  }
}

// Example 2: Change Streams
async function watchForChanges() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  
  const db = client.db('myapp');
  const collection = db.collection('users');
  
  // Watch for changes
  const changeStream = collection.watch([
    { $match: { operationType: { $in: ['insert', 'update', 'delete'] } } }
  ]);
  
  changeStream.on('change', (change) => {
    console.log('Change detected:', change);
    
    switch (change.operationType) {
      case 'insert':
        console.log('New user created:', change.fullDocument);
        break;
      case 'update':
        console.log('User updated:', change.documentKey);
        break;
      case 'delete':
        console.log('User deleted:', change.documentKey);
        break;
    }
  });
  
  changeStream.on('error', (error) => {
    console.error('Change stream error:', error);
  });
}

// Example 3: GridFS for File Storage
const { GridFSBucket } = require('mongodb');
const fs = require('fs');

async function storeFile() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  
  const db = client.db('myapp');
  const bucket = new GridFSBucket(db, { bucketName: 'files' });
  
  // Upload file
  const uploadStream = bucket.openUploadStream('document.pdf');
  const fileStream = fs.createReadStream('./document.pdf');
  
  fileStream.pipe(uploadStream);
  
  uploadStream.on('finish', () => {
    console.log('File uploaded with ID:', uploadStream.id);
  });
  
  // Download file
  const downloadStream = bucket.openDownloadStream(uploadStream.id);
  const writeStream = fs.createWriteStream('./downloaded-document.pdf');
  
  downloadStream.pipe(writeStream);
  
  downloadStream.on('finish', () => {
    console.log('File downloaded successfully');
  });
}

// Example 4: Geospatial Queries
// Insert location data
db.restaurants.insertMany([
  {
    name: "Pizza Palace",
    location: {
      type: "Point",
      coordinates: [-73.9857, 40.7484] // NYC coordinates
    },
    cuisine: "Italian"
  },
  {
    name: "Burger Joint",
    location: {
      type: "Point", 
      coordinates: [-73.9848, 40.7489]
    },
    cuisine: "American"
  }
]);

// Create geospatial index
db.restaurants.createIndex({ location: "2dsphere" });

// Find restaurants near a location
db.restaurants.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.9857, 40.7484]
      },
      $maxDistance: 1000 // 1km radius
    }
  }
});

// Find restaurants within a polygon
db.restaurants.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[
          [-73.99, 40.74],
          [-73.98, 40.74],
          [-73.98, 40.75],
          [-73.99, 40.75],
          [-73.99, 40.74]
        ]]
      }
    }
  }
});

// Example 5: Full-Text Search
// Create text index
db.articles.createIndex({
  title: "text",
  content: "text",
  tags: "text"
});

// Text search with ranking
db.articles.find(
  { $text: { $search: "MongoDB tutorial database" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } });

// Text search with language specification
db.articles.find({
  $text: { 
    $search: "MongoDB tutorial",
    $language: "english"
  }
});

// Example 6: Replica Set Configuration
// Start replica set (command line)
// mongod --port 27017 --replSet rs0 --dbpath /data/db0
// mongod --port 27018 --replSet rs0 --dbpath /data/db1  
// mongod --port 27019 --replSet rs0 --dbpath /data/db2

// Initialize replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017", priority: 2 },
    { _id: 1, host: "localhost:27018", priority: 1 },
    { _id: 2, host: "localhost:27019", priority: 1 }
  ]
});

// Check replica set status
rs.status();

// Example 7: Map-Reduce Operations
// Map function
const mapFunction = function() {
  emit(this.category, { count: 1, totalPrice: this.price });
};

// Reduce function
const reduceFunction = function(key, values) {
  let result = { count: 0, totalPrice: 0 };
  values.forEach(function(value) {
    result.count += value.count;
    result.totalPrice += value.totalPrice;
  });
  return result;
};

// Execute map-reduce
db.products.mapReduce(
  mapFunction,
  reduceFunction,
  {
    out: "product_stats",
    query: { price: { $gt: 10 } }
  }
);`,

    "MongoDB Security and Performance": `
// Example 1: User Authentication and Authorization
// Create admin user
use admin;
db.createUser({
  user: "admin",
  pwd: "securePassword123",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" }
  ]
});

// Create application user with limited permissions
use myapp;
db.createUser({
  user: "appUser",
  pwd: "appPassword123",
  roles: [
    { role: "readWrite", db: "myapp" },
    { role: "read", db: "myapp_logs" }
  ]
});

// Create custom role
db.createRole({
  role: "dataAnalyst",
  privileges: [
    {
      resource: { db: "myapp", collection: "" },
      actions: ["find", "aggregate"]
    }
  ],
  roles: []
});

// Example 2: Connection with Authentication
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://appUser:appPassword123@localhost:27017/myapp', {
  authSource: 'myapp',
  authMechanism: 'SCRAM-SHA-256'
});

// Example 3: Performance Monitoring and Profiling
// Enable profiling for slow operations
db.setProfilingLevel(2, { slowms: 100 }); // Log operations slower than 100ms

// View profiling results
db.system.profile.find().sort({ ts: -1 }).limit(5);

// Analyze query performance
db.users.find({ email: "john@example.com" }).explain("executionStats");

// Example 4: Index Optimization
// Check index usage
db.users.aggregate([{ $indexStats: {} }]);

// Drop unused indexes
db.users.dropIndex({ "lastLogin": 1 });

// Create optimized compound index
db.orders.createIndex(
  { userId: 1, status: 1, createdAt: -1 },
  { name: "user_status_time_idx" }
);

// Example 5: Query Optimization
// Use projection to limit returned fields
db.users.find(
  { department: "Engineering" },
  { name: 1, email: 1, _id: 0 }
);

// Use limit and skip efficiently
db.products.find({ category: "Electronics" })
  .sort({ price: 1 })
  .limit(10)
  .skip(0);

// Use aggregation for complex queries instead of multiple find operations
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", totalSpent: { $sum: "$total" } } },
  { $sort: { totalSpent: -1 } },
  { $limit: 10 }
]);

// Example 6: Backup and Recovery
// Create backup using mongodump
// mongodump --host localhost:27017 --db myapp --out /backup/2024-01-15

// Restore backup using mongorestore
// mongorestore --host localhost:27017 --db myapp /backup/2024-01-15/myapp

// Automated backup script
const { exec } = require('child_process');

function createBackup() {
  const date = new Date().toISOString().split('T')[0];
  const backupPath = \`/backups/\${date}\`;
  
  exec(\`mongodump --host localhost:27017 --db myapp --out \${backupPath}\`, 
    (error, stdout, stderr) => {
      if (error) {
        console.error('Backup failed:', error);
      } else {
        console.log('Backup completed:', backupPath);
      }
    }
  );
}

// Example 7: Network Security Configuration
// Enable SSL/TLS
// mongod --sslMode requireSSL --sslPEMKeyFile /path/to/server.pem

// Configure firewall rules
// Allow only specific IP addresses
// iptables -A INPUT -p tcp --dport 27017 -s 192.168.1.100 -j ACCEPT

// Use VPN or private networks for database access

// Example 8: Memory and Storage Optimization
// Check database size and collection stats
db.stats();
db.users.stats();

// Compact collection to reclaim space
db.users.runCommand("compact");

// Configure WiredTiger cache size
// mongod --wiredTigerCacheSizeGB 2

// Example 9: Connection Pooling and Timeouts
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/myapp', {
  maxPoolSize: 10,           // Maximum number of connections
  minPoolSize: 5,            // Minimum number of connections
  maxIdleTimeMS: 30000,      // Close connections after 30 seconds of inactivity
  serverSelectionTimeoutMS: 5000, // How long to try selecting a server
  socketTimeoutMS: 45000,    // How long to wait for socket operations
  connectTimeoutMS: 10000,   // How long to wait for initial connection
  heartbeatFrequencyMS: 10000 // How often to ping servers
});

// Example 10: Monitoring and Alerting
// Set up monitoring queries
const monitoringQueries = {
  slowQueries: db.system.profile.find({ millis: { $gt: 1000 } }),
  connectionCount: db.serverStatus().connections,
  memoryUsage: db.serverStatus().mem,
  indexUsage: db.users.aggregate([{ $indexStats: {} }])
};

// Example 11: Data Validation
// Create collection with validation rules
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"],
      properties: {
        name: {
          bsonType: "string",
          minLength: 2,
          maxLength: 50
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
        },
        age: {
          bsonType: "int",
          minimum: 0,
          maximum: 120
        }
      }
    }
  }
});`
  };

  return examples[lessonTitle] || "MongoDB code example not found";
};

const getMongoDBCodeExplanation = (lessonTitle) => {
  const explanations = {
    "Introduction to MongoDB": `
### Example 1
**Document Structure Benefits**
MongoDB's document-based approach offers several advantages:
1. FLEXIBLE SCHEMA: Unlike SQL databases, MongoDB doesn't require 
   a predefined schema. Documents can have different fields, making 
   it easier to evolve your data model over time.

2. NATURAL DATA REPRESENTATION: Documents closely mirror objects 
   in programming languages, reducing the impedance mismatch 
   between application code and database storage.

3. EMBEDDED DOCUMENTS: Related data can be stored together in a 
   single document, reducing the need for complex joins and 
   improving read performance.

4. ARRAY SUPPORT: MongoDB natively supports arrays, making it 
   easy to store and query lists of values without creating 
   separate tables.

### Example 2 
## BSON vs JSON
BSON (Binary JSON) is MongoDB's binary representation of JSON-like documents:
- EXTENDED DATA TYPES: BSON supports additional types like Date, 
  ObjectId, and Binary data that JSON doesn't support natively.

- EFFICIENCY: Binary format is more efficient for storage and 
  network transmission than text-based JSON.

- QUERY CAPABILITIES: BSON enables MongoDB to create indexes and 
  perform queries directly on the binary data.

- TYPE SAFETY: BSON preserves type information, so numbers stay 
  as numbers and dates stay as dates.
`,

    "MongoDB Installation and Setup": `
### Example 1 
## Connection String Components
MongoDB connection strings follow this format:
\`mongodb://[username:password@]host[:port][/database][?options]\`

COMPONENTS:
- PROTOCOL: mongodb:// for local, mongodb+srv:// for Atlas
- CREDENTIALS: username:password@ (optional for local)
- HOST: localhost for local, cluster URL for Atlas
- PORT: 27017 (default MongoDB port)
- DATABASE: target database name
- OPTIONS: connection parameters like retryWrites, w=majority

EXAMPLE BREAKDOWN:
\`mongodb+srv://user:pass@cluster.mongodb.net/mydb?retryWrites=true&w=majority\`

| Part         | Example Value         | Description                                       |
| ------------ | --------------------- | ------------------------------------------------- |
| **protocol** | \`mongodb+srv://\`      | Connection protocol for MongoDB Atlas             |
| **user**     | \`user\`                | Username for database authentication              |
| **pass**     | \`pass\`                | Password for the database user                    |
| **host**     | \`cluster.mongodb.net\` | Hostname or cluster address                       |
| **db**       | \`mydb\`                | The specific database to connect to               |
| **option1**  | \`retryWrites=true\`    | Enables automatic retry for writes                |
| **option2**  | \`w=majority\`          | Ensures write acknowledgment by majority of nodes |


### Example 2 
MONGODB SHELL (mongosh):
- Command-line interface for MongoDB
- Best for scripting and automation
- Direct access to all MongoDB operations
- Can execute JavaScript code
- Ideal for database administration

### Example 3 
MONGODB COMPASS:
- Graphical user interface
- Visual query builder and data explorer
- Real-time performance monitoring
- Schema analysis and visualization
- User-friendly for beginners and data exploration

BOTH ARE ESSENTIAL:
- Use Compass for exploration and visualization
- Use mongosh for scripting and complex operations`,

    "MongoDB Data Types and Documents": `
### Example 1
ObjectId is MongoDB's default primary key format:

text\nObjectId(\"507f1f77bcf86cd799439011\")\n|       |                        |\n|       |                        └─ Random bytes (3 bytes)\n|       └─ Counter (3 bytes)\n└─ Timestamp (4 bytes)\n


TIMESTAMP (4 bytes): Creation time in seconds since Unix epoch
COUNTER (3 bytes): Incremental counter for uniqueness within same second
RANDOM (3 bytes): Random bytes for additional uniqueness

BENEFITS:
- Globally unique across all collections
- Sortable by creation time
- No coordination needed between servers
- Compact (12 bytes vs 16 bytes for UUID)


### Example 2 
EMBEDDED DOCUMENTS (Denormalization):
PROS:
- Single query retrieves all related data
- Better performance for read-heavy workloads
- Atomic updates within a document
- Simpler queries (no joins needed)

CONS:
- Document size limits (16MB max)
- Data duplication if referenced by multiple documents
- Difficult to update across multiple documents

REFERENCED DOCUMENTS (Normalization):
PROS:
- No document size limitations
- No data duplication
- Easier to maintain consistency
- Better for write-heavy workloads

CONS:
- Multiple queries needed for related data
- Potential for inconsistent data
- More complex queries with $lookup operations

CHOOSE EMBEDDED WHEN:
- Data is always accessed together
- One-to-few relationship
- Read-heavy workload

CHOOSE REFERENCED WHEN:
- One-to-many or many-to-many relationship
- Referenced data changes frequently
- Large amount of related data
`,

    "Basic CRUD Operations": `
### Example 1 
INSERTONE vs INSERTMANY:

insertOne():
- Inserts a single document
- Returns InsertOneResult with insertedId
- Atomic operation
- Use for single document insertion

insertMany():
- Inserts multiple documents
- Returns InsertManyResult with array of insertedIds
- Can be ordered or unordered
- More efficient for bulk operations

### Example 2 
ORDERED vs UNORDERED:
- ORDERED (default): Stops on first error, returns partial results
- UNORDERED: Continues on errors, returns all successful insertions
- Use unordered for better performance when errors are acceptable

### Example 3 
UPDATEONE vs UPDATEMANY:

updateOne():
- Updates the first document matching the filter
- Returns UpdateResult with matchedCount and modifiedCount
- Use when you know only one document should be updated

updateMany():
- Updates all documents matching the filter
- Returns UpdateResult with matchedCount and modifiedCount
- Use for bulk updates

UPDATE OPERATORS:
- $set: Sets field values
- $unset: Removes fields
- $inc: Increments numeric values
- $push: Adds to arrays
- $pull: Removes from arrays
- $addToSet: Adds to array if not exists

UPSERT:
- If document exists: updates it
- If document doesn't exist: creates it
- Useful for "insert or update" scenarios

### Example 4 
DELETEONE vs DELETEMANY:

deleteOne():
- Deletes the first document matching the filter
- Returns DeleteResult with deletedCount
- Use when you know only one document should be deleted

deleteMany():
- Deletes all documents matching the filter
- Returns DeleteResult with deletedCount
- Use for bulk deletions

SAFETY CONSIDERATIONS:
- Always test delete operations with find() first
- Use specific filters to avoid accidental deletions
- Consider soft deletes (mark as deleted) instead of hard deletes
- Use transactions for critical delete operations
`,


    "Querying and Filtering": `
### Example 1
COMPARISON OPERATORS:

$eq (equal): Exact match
$ne (not equal): Not matching
$gt (greater than): Values greater than specified
$gte (greater than or equal): Values greater than or equal
$lt (less than): Values less than specified
$lte (less than or equal): Values less than or equal
$in (in array): Matches any value in array
$nin (not in array): Doesn't match any value in array

PERFORMANCE CONSIDERATIONS:
- Use indexes on filtered fields
- $in with small arrays is efficient
- $nin can be slow on large collections
- Range queries ($gt, $lt) work well with indexes


### Example 2
LOGICAL OPERATORS:
$and: All conditions must be true
$or: At least one condition must be true
$not: Inverts the condition
$nor: None of the conditions should be true

IMPLICIT AND:
- Multiple conditions in same object are implicitly ANDed
- More readable than explicit $and
- Better performance

EXPLICIT AND:
- Use when combining different operator types
- Required for complex nested conditions
- Useful for clarity in complex queries

OR OPERATOR USAGE:
- Use for alternative conditions
- Can be combined with AND for complex logic
- Consider query performance with large datasets

### Example 3
ARRAY OPERATORS:

$all: Array contains all specified elements
$size: Array has exact size
$elemMatch: Array contains element matching condition
$exists: Field exists in document
$type: Field has specific data type

ARRAY QUERYING STRATEGIES:
- Use $all for "contains all" scenarios
- Use $size for exact array length
- Use $elemMatch for complex array element conditions
- Combine with other operators for flexible queries

PERFORMANCE TIPS:
- Create indexes on array fields for better performance
- $size queries can be slow on large arrays
- $elemMatch works well with compound indexes


### Example 4
## PROJECTION AND RESULT LIMITING:
QUERY PROJECTION:
- Select only specific fields to return
- Use 1 to include fields, 0 to exclude
- Improves performance by reducing data transfer
- _id field is included by default unless explicitly excluded

LIMIT AND SKIP:
- limit(): Restricts number of returned documents
- skip(): Skips specified number of documents
- Useful for pagination and result control
- Combine with sort() for predictable results

SORTING RESULTS:
- sort(): Orders results by specified fields
- Use 1 for ascending, -1 for descending
- Can sort by multiple fields
- Performance improves with proper indexes

PAGINATION PATTERNS:
- Use skip() and limit() for pagination
- Consider cursor-based pagination for large datasets
- Combine with sort() for consistent ordering
- Monitor performance with large skip values`,

    "MongoDB Indexing": `
### Example 1
## INDEXES ARE CRITICAL FOR PERFORMANCE:
WHAT IS AN INDEX:
- An index is a data structure that improves query performance
- It's like an index in a book - helps find information quickly
- MongoDB creates B-tree indexes by default
- Indexes store references to documents in sorted order

INDEX TYPES:
- SINGLE FIELD: Index on one field (ascending/descending)
- COMPOUND: Index on multiple fields (order matters!)
- MULTIKEY: Index on array fields
- TEXT: Full-text search indexes
- GEOSPATIAL: Location-based queries (2d, 2dsphere)
- HASHED: For sharding key distribution

PERFORMANCE IMPACT:
- Indexes speed up queries but slow down writes
- Each index consumes storage space
- Too many indexes can hurt performance
- Choose indexes based on query patterns

### Example 2
## COMPOUND INDEX ORDER MATTERS:

RULE OF THUMB:
- Most selective field first
- Equality fields before range fields
- Sort fields last

EXAMPLE ANALYSIS:
{ userId: 1, status: 1, createdAt: -1 }

QUERY PATTERNS:
✅ db.orders.find({ userId: 123 })
✅ db.orders.find({ userId: 123, status: "pending" })
✅ db.orders.find({ userId: 123, status: "pending" }).sort({ createdAt: -1 })
❌ db.orders.find({ status: "pending" }) // Cannot use index efficiently

INDEX PREFIXES:
- Compound index supports queries on prefixes
- { a: 1, b: 1, c: 1 } supports queries on:
  - { a: 1 }
  - { a: 1, b: 1 }
  - { a: 1, b: 1, c: 1 }
- But NOT: { b: 1 } or { c: 1 }

### Example 3
## TEXT SEARCH CAPABILITIES:
TEXT INDEX FEATURES:
- Full-text search across multiple fields
- Language-specific stemming and stop words
- Relevance scoring for search results
- Support for multiple languages

TEXT SEARCH SYNTAX:
- $text operator for text queries
- $search field for search terms
- $language field for language specification
- $caseSensitive for case sensitivity

SEARCH RANKING:
- MongoDB scores documents based on relevance
- Use $meta: "textScore" to get relevance scores
- Sort by textScore for best results first
- Combine with other query operators

PERFORMANCE CONSIDERATIONS:
- Text indexes are larger than regular indexes
- Search performance depends on index size
- Consider field selection for text indexes
- Monitor index usage and performance
*/

### Example 4
## UNIQUE CONSTRAINT ENFORCEMENT:

UNIQUE INDEX BENEFITS:
- Prevents duplicate values in indexed fields
- Automatic validation on insert/update operations
- Error handling for duplicate key violations
- Can be applied to single or compound fields

UNIQUE INDEX TYPES:
- Single field unique indexes
- Compound unique indexes
- Sparse unique indexes (skip null values)
- Partial unique indexes (with filter conditions)

ERROR HANDLING:
- DuplicateKeyError on violation attempts
- Graceful handling in application code
- Bulk operation considerations
- Rollback strategies for failed operations

BEST PRACTICES:
- Use unique indexes for primary identifiers
- Consider sparse indexes for optional fields
- Handle duplicate key errors gracefully
- Monitor unique index performance

### Example 5
## SPARSE INDEX OPTIMIZATION

SPARSE INDEX CONCEPT:
- Only indexes documents that have the indexed field
- Skips documents where the field is missing or null
- Reduces index size and improves performance
- Useful for optional fields with few values

USE CASES:
- Optional user profile fields
- Conditional data that's not always present
- Fields with many null values
- Performance optimization scenarios

PERFORMANCE BENEFITS:
- Smaller index size
- Faster index operations
- Reduced memory usage
- Better query performance for existing values

CONSIDERATIONS:
- Queries for missing values won't use sparse index
- Combine with partial indexes for complex conditions
- Monitor index usage patterns
- Consider data distribution before creating

### Example 6
## PARTIAL INDEX FILTERING:

PARTIAL INDEX CONCEPT:
- Index only documents that match filter criteria
- Reduces index size by excluding irrelevant documents
- Improves performance for filtered queries
- Combines indexing with query filtering

FILTER CONDITIONS:
- Simple field equality checks
- Range queries on indexed fields
- Multiple field combinations
- Complex logical expressions

PERFORMANCE OPTIMIZATION:
- Smaller index size than full indexes
- Faster queries on filtered data
- Reduced maintenance overhead
- Better memory utilization

DESIGN CONSIDERATIONS:
- Match filter conditions to query patterns
- Consider data distribution
- Monitor query performance
- Balance between index size and coverage

### Example 7
## GEOSPATIAL QUERY CAPABILITIES:
2DSPHERE INDEX:
- Supports queries on Earth-like sphere
- Handles longitude/latitude coordinates
- Supports GeoJSON geometry types
- Accurate for geographic applications

GEOSPATIAL QUERY OPERATORS:
- $near: Find documents near a point
- $geoWithin: Find documents within a shape
- $geoIntersects: Find documents that intersect
- $nearSphere: Spherical distance calculations

COORDINATE SYSTEMS:
- WGS84 (World Geodetic System)
- Longitude: -180 to 180 degrees
- Latitude: -90 to 90 degrees
- GeoJSON format support

PERFORMANCE CONSIDERATIONS:
- Geospatial indexes are memory intensive
- Query performance depends on data distribution
- Consider data precision requirements
- Monitor index size and query times

### Example 8
## USING EXPLAIN() FOR OPTIMIZATION:

EXECUTION STATS:
- Shows actual performance metrics
- Execution time, documents examined, index usage
- Helps identify slow queries

QUERY PLANNER:
- Shows how MongoDB plans to execute query
- Lists available indexes and chosen plan
- Helps understand index selection

KEY METRICS:
- executionTimeMillis: Query execution time
- totalDocsExamined: Documents scanned
- totalDocsReturned: Documents returned
- indexUsed: Whether index was used

OPTIMIZATION GOALS:
- Minimize executionTimeMillis
- Minimize totalDocsExamined
- Maximize index usage
- Balance between reads and writes`,

    "Aggregation Pipeline": `
### Example 1
## AGGREGATION PIPELINE CONCEPTS:

PIPELINE STAGES:
- Each stage processes documents and passes results to next stage
- Stages can filter, transform, group, or calculate data
- Pipeline is executed in order from left to right
- Early stages can reduce data volume for better performance

COMMON STAGES:
- $match: Filter documents (like WHERE in SQL)
- $project: Select/transform fields (like SELECT in SQL)
- $group: Group and aggregate data (like GROUP BY in SQL)
- $sort: Sort documents (like ORDER BY in SQL)
- $limit: Limit number of documents (like LIMIT in SQL)
- $lookup: Join collections (like JOIN in SQL)

DATA FLOW:
Input → $match → $project → $group → $sort → $limit → Output
 1000      500       500       10       10        5       5

PERFORMANCE TIPS:
- Place $match early to reduce data volume
- Use $project to limit fields early
- Index fields used in $match and $sort
- Use $limit after sorting

### Example 2
## FILTERING AND TRANSFORMATION:

$MATCH STAGE:
- Filters documents based on specified criteria
- Similar to WHERE clause in SQL
- Should be placed early in pipeline for performance
- Can use all MongoDB query operators

$PROJECT STAGE:
- Selects and transforms fields
- Can add new computed fields
- Can rename existing fields
- Can suppress fields by setting to 0

FIELD TRANSFORMATIONS:
- Mathematical operations on numeric fields
- String concatenation and manipulation
- Date formatting and extraction
- Conditional field values with $cond

PERFORMANCE OPTIMIZATION:
- Use $match early to reduce document count
- Use $project to limit fields early
- Create indexes on $match criteria
- Avoid expensive operations in $project

### Example 3
### LOOKUP OPERATIONS ($LOOKUP):
EQUIVALENT TO SQL JOINS:
- Left outer join between collections
- Matches documents based on field values
- Can perform complex join conditions

LOOKUP SYNTAX:
{
  $lookup: {
    from: "target_collection",
    localField: "source_field",
    foreignField: "target_field", 
    as: "output_array_field"
  }
}

JOIN TYPES:
- One-to-many relationships
- Many-to-many relationships
- Self-joins within same collection
- Multiple collection joins

PERFORMANCE CONSIDERATIONS:
- $lookup can be expensive on large collections
- Consider data volume and join complexity
- Use indexes on join fields
- Consider denormalization for better performance
*/

### Example 4
## DATE MANIPULATION:

DATE EXTRACTION:
- $year, $month, $dayOfMonth: Extract date parts
- $dayOfWeek, $dayOfYear: Get day information
- $hour, $minute, $second: Extract time components
- $isoWeekYear, $isoWeek: ISO week functions

DATE FORMATTING:
- $dateToString: Format dates as strings
- $dateFromString: Parse date strings
- $dateTrunc: Truncate dates to specified unit
- Custom format strings and timezone support

GROUPING BY DATE:
- Group documents by time periods
- Calculate time-based aggregations
- Create time series data
- Monthly, quarterly, yearly summaries

BEST PRACTICES:
- Use proper date formats in documents
- Consider timezone handling
- Index date fields for better performance
- Use $dateTrunc for consistent grouping

### Example 5
## ARRAY MANIPULATION:

$UNWIND STAGE:
- Flattens array fields into separate documents
- Creates one document per array element
- Preserves original document fields
- Can handle nested arrays

ARRAY ACCUMULATORS:
- $push: Add items to arrays
- $addToSet: Add unique items to arrays
- $first/$last: Get first/last array elements
- $max/$min: Find max/min values in arrays

ARRAY QUERYING:
- $slice: Limit array elements
- $size: Get array length
- $elemMatch: Query array elements
- Array indexing and manipulation

USE CASES:
- Analyzing array contents
- Creating summary statistics
- Flattening nested data structures
- Processing multi-value fields

### Example 6
## CONDITIONAL LOGIC:

$COND OPERATOR:
- Implements if-then-else logic
- Evaluates conditions and returns values
- Can be nested for complex conditions
- Works in various aggregation stages

$SWITCH OPERATOR:
- Multiple condition evaluation
- Similar to switch statements
- More readable than nested $cond
- Supports default cases

CONDITIONAL ACCUMULATION:
- Apply different logic based on conditions
- Filter data within grouping operations
- Create computed fields conditionally
- Handle edge cases and validation

BEST PRACTICES:
- Use $switch for multiple conditions
- Keep conditions simple and readable
- Test edge cases thoroughly
- Consider performance implications

### Example 7
## FACET OPERATIONS:

MULTIPLE PIPELINES:
- Run multiple pipelines in parallel
- Combine different aggregation results
- Useful for dashboard-style queries
- Each facet operates independently

FACET SYNTAX:
{
  $facet: {
    "facet1": [pipeline1],
    "facet2": [pipeline2],
    "facet3": [pipeline3]
  }
}

USE CASES:
- Dashboard aggregations
- Multiple summary statistics
- Different views of same data
- Parallel processing of related queries

PERFORMANCE CONSIDERATIONS:
- Each facet runs independently
- Consider resource usage
- Optimize individual pipelines
- Monitor execution time`,

    "MongoDB with Node.js": `
### Example 1
## CONNECTION STRATEGIES:

CONNECTION POOLING:
- MongoDB driver maintains connection pool
- Reuses connections for better performance
- Configurable pool size and timeouts
- Automatic connection management

CONNECTION OPTIONS:
- maxPoolSize: Maximum connections in pool
- minPoolSize: Minimum connections to maintain
- maxIdleTimeMS: Close idle connections
- serverSelectionTimeoutMS: Connection timeout

ERROR HANDLING:
- Network errors and reconnection
- Connection timeouts and retries
- Database unavailable scenarios
- Proper cleanup of resources

BEST PRACTICES:
- Use connection pooling for production
- Handle connection errors gracefully
- Monitor connection metrics
- Implement proper shutdown procedures


### Example 2
## NATIVE DRIVER OPERATIONS:

CRUD OPERATIONS:
- Direct MongoDB operations without abstraction
- Full control over query execution
- Native MongoDB query syntax
- Optimized performance for simple operations

ADVANTAGES:
- Better performance (less overhead)
- Full MongoDB feature support
- Smaller bundle size
- More control over queries
- Direct access to MongoDB options

USE CASES:
- Performance-critical applications
- Simple database operations
- Full MongoDB feature utilization
- Custom query optimization

BEST PRACTICES:
- Use connection pooling
- Handle errors properly
- Implement proper logging
- Monitor performance metrics

### Example 3
## MONGOOSE ODM ADVANTAGES:

SCHEMA DEFINITION:
- Define data structure and validation
- Type checking and casting
- Default values and required fields
- Virtual fields and methods

MIDDLEWARE SUPPORT:
- Pre/post hooks for operations
- Document and query middleware
- Schema middleware for validation
- Plugin system for extensions

RELATIONSHIPS:
- Population for document references
- Embedded documents support
- Virtual populate for complex relationships
- Automatic reference handling

WHEN TO USE MONGOOSE:
- Rapid development scenarios
- Complex schema requirements
- Data validation needs
- Object-oriented approach preferred

### Example 4
## ERROR HANDLING STRATEGIES:

MONGOOSE VALIDATION:
- Built-in validators (required, min, max, enum)
- Custom validators with functions
- Schema-level validation
- Error messages and custom errors

NATIVE DRIVER ERRORS:
- Duplicate key errors
- Connection errors
- Timeout errors
- Write concern errors

ERROR HANDLING PATTERNS:
- Try-catch blocks for async operations
- Specific error type checking
- Graceful degradation
- Logging and monitoring

PRODUCTION CONSIDERATIONS:
- Input sanitization
- Rate limiting
- Error logging
- User-friendly error messages

### Example 5
## PERFORMANCE OPTIMIZATION:

CONNECTION POOLING:
- Maintains pool of reusable connections
- Reduces connection overhead
- Configurable pool size and timeouts
- Automatic connection management

PERFORMANCE CONFIGURATIONS:
- maxPoolSize: Maximum connections
- minPoolSize: Minimum connections
- maxIdleTimeMS: Idle connection timeout
- serverSelectionTimeoutMS: Selection timeout

MONITORING:
- Connection metrics
- Query performance
- Error rates
- Resource utilization

BEST PRACTICES:
- Configure appropriate pool sizes
- Monitor connection usage
- Handle connection failures gracefully
- Implement proper cleanup procedures

### Example 6
## ADVANCED QUERYING TECHNIQUES:

AGGREGATION PIPELINES:
- Complex data processing
- Multi-stage transformations
- Performance optimization
- Parallel processing

TEXT SEARCH:
- Full-text search capabilities
- Relevance scoring
- Language-specific features
- Search result ranking

PERFORMANCE OPTIMIZATION:
- Index utilization
- Query optimization
- Caching strategies
- Connection management

BEST PRACTICES:
- Use appropriate indexes
- Optimize aggregation pipelines
- Monitor query performance
- Implement proper error handling`,

    "Advanced MongoDB Features": `
### Example 1
## MONGODB TRANSACTIONS:

ACID PROPERTIES:
- ATOMICITY: All operations succeed or all fail
- CONSISTENCY: Database remains in valid state
- ISOLATION: Concurrent transactions don't interfere
- DURABILITY: Committed changes are permanent

TRANSACTION LIMITATIONS:
- Only supported in replica sets and sharded clusters
- Limited to 16MB of data per transaction
- Some operations not supported in transactions
- Performance impact on concurrent operations

TRANSACTION PATTERNS:
- Multi-document operations
- Financial transactions
- Data consistency requirements
- Complex business logic

BEST PRACTICES:
- Keep transactions short
- Minimize data locked in transactions
- Handle transaction conflicts
- Use appropriate isolation levels

### Example 2
## CHANGE STREAMS CONCEPTS:

REAL-TIME MONITORING:
- Watch for changes to collections or databases
- Event-driven architecture support
- Real-time data synchronization
- Audit and compliance tracking

CHANGE STREAM EVENTS:
- insert: New document created
- update: Document modified
- delete: Document removed
- replace: Document replaced
- drop: Collection dropped

USE CASES:
- Real-time dashboards
- Data synchronization
- Event sourcing
- Audit logging
- Cache invalidation

PERFORMANCE CONSIDERATIONS:
- Change streams consume resources
- Network overhead for remote monitoring
- Resumability for connection failures
- Filtering to reduce unnecessary events

### Example 3
## GRIDFS OVERVIEW:

FILE STORAGE SOLUTION:
- Store files larger than 16MB BSON limit
- Automatic chunking of large files
- Metadata storage alongside file data
- Streaming support for large files

GRIDFS COLLECTIONS:
- fs.files: File metadata
- fs.chunks: File data chunks
- Custom bucket names supported

ADVANTAGES:
- No file size limitations
- Streaming support
- Metadata queries
- Automatic chunking

ALTERNATIVES:
- Cloud storage (AWS S3, Google Cloud)
- File system storage
- External file servers
- CDN integration

WHEN TO USE GRIDFS:
- Files larger than 16MB
- Need metadata queries
- Streaming requirements
- MongoDB-centric architecture

### Example 4
## GEOSPATIAL QUERY CAPABILITIES:

2DSPHERE INDEX:
- Supports queries on Earth-like sphere
- Handles longitude/latitude coordinates
- Supports GeoJSON geometry types
- Accurate for geographic applications

GEOSPATIAL QUERY OPERATORS:
- $near: Find documents near a point
- $geoWithin: Find documents within a shape
- $geoIntersects: Find documents that intersect
- $nearSphere: Spherical distance calculations

COORDINATE SYSTEMS:
- WGS84 (World Geodetic System)
- Longitude: -180 to 180 degrees
- Latitude: -90 to 90 degrees
- GeoJSON format support

PERFORMANCE CONSIDERATIONS:
- Geospatial indexes are memory intensive
- Query performance depends on data distribution
- Consider data precision requirements
- Monitor index size and query times

### Example 5
## TEXT SEARCH CAPABILITIES:

TEXT INDEX FEATURES:
- Full-text search across multiple fields
- Language-specific stemming and stop words
- Relevance scoring for search results
- Support for multiple languages

TEXT SEARCH SYNTAX:
- $text operator for text queries
- $search field for search terms
- $language field for language specification
- $caseSensitive for case sensitivity

SEARCH RANKING:
- MongoDB scores documents based on relevance
- Use $meta: "textScore" to get relevance scores
- Sort by textScore for best results first
- Combine with other query operators

PERFORMANCE CONSIDERATIONS:
- Text indexes are larger than regular indexes
- Search performance depends on index size
- Consider field selection for text indexes
- Monitor index usage and performance

### Example 6
## HIGH AVAILABILITY SETUP:

REPLICA SET CONCEPTS:
- Primary-secondary architecture
- Automatic failover capabilities
- Data replication across nodes
- Read preference options

CONFIGURATION:
- Minimum 3 nodes for production
- Odd number of nodes recommended
- Automatic primary election
- Configurable priority settings

MONITORING:
- Replica set status monitoring
- Health checks and alerts
- Performance metrics
- Failover testing

BEST PRACTICES:
- Deploy across multiple data centers
- Monitor replica set health
- Test failover procedures
- Configure appropriate read preferences

### Example 7
## LEGACY AGGREGATION METHOD:

MAP-REDUCE CONCEPT:
- JavaScript-based processing
- Two-phase operation (map and reduce)
- Custom logic implementation
- Flexible data transformation

MAP FUNCTION:
- Processes each document
- Emits key-value pairs
- Defines grouping criteria
- Handles data transformation

REDUCE FUNCTION:
- Processes grouped data
- Aggregates values by key
- Combines results
- Returns final output

MODERN ALTERNATIVES:
- Aggregation pipeline preferred
- Better performance and flexibility
- Native MongoDB operators
- Easier to maintain and debug`,

    "MongoDB Security and Performance": `
### Example 1
## MONGODB SECURITY MODEL:

AUTHENTICATION:
- Verify user identity
- SCRAM-SHA-256 (default)
- x.509 certificates
- LDAP integration
- Kerberos support

AUTHORIZATION:
- Role-based access control (RBAC)
- Built-in roles (read, readWrite, dbAdmin, etc.)
- Custom roles with specific privileges
- Database-level and collection-level permissions

SECURITY BEST PRACTICES:
- Use strong passwords
- Enable authentication
- Create minimal privilege users
- Regular security audits
- Network encryption (TLS/SSL)

COMMON ROLES:
- read: Read-only access
- readWrite: Read and write access
- dbAdmin: Database administration
- userAdmin: User management
- clusterAdmin: Cluster administration

### Example 2
## SECURE CONNECTIONS:

CONNECTION STRING SECURITY:
- Include authentication credentials
- Use encrypted connections (TLS/SSL)
- Specify authentication source
- Configure authentication mechanism

CONNECTION OPTIONS:
- authSource: Database for authentication
- authMechanism: Authentication method
- ssl: Enable SSL/TLS encryption
- tls: Transport Layer Security

BEST PRACTICES:
- Use environment variables for credentials
- Implement connection pooling securely
- Monitor connection attempts
- Log authentication events

ERROR HANDLING:
- Handle authentication failures gracefully
- Implement retry logic with backoff
- Log security-related errors
- Alert on suspicious activities

### Example 3
## PERFORMANCE MONITORING:

PROFILING:
- Enable profiling for slow operations
- Set threshold for operation logging
- Analyze profiling results
- Identify performance bottlenecks

QUERY ANALYSIS:
- Use explain() for query plans
- Monitor execution statistics
- Index usage analysis
- Query optimization

MONITORING METRICS:
- Operation execution time
- Memory usage
- Connection counts
- Index hit ratios
- Lock contention

OPTIMIZATION STRATEGIES:
- Proper indexing
- Query optimization
- Connection pooling
- Caching strategies
- Hardware optimization

### Example 4
## INDEX PERFORMANCE MANAGEMENT:

INDEX USAGE ANALYSIS:
- Monitor index utilization
- Identify unused indexes
- Analyze index performance
- Optimize index selection

INDEX MAINTENANCE:
- Regular index statistics review
- Drop unused indexes
- Rebuild fragmented indexes
- Monitor index size growth

PERFORMANCE IMPACT:
- Index creation overhead
- Storage space requirements
- Write operation impact
- Memory usage considerations

BEST PRACTICES:
- Create indexes based on query patterns
- Monitor index usage regularly
- Balance query performance vs write performance
- Use compound indexes efficiently

### Example 5*
## QUERY PERFORMANCE TUNING:

QUERY ANALYSIS:
- Use explain() for execution plans
- Monitor query execution time
- Analyze document examination ratios
- Identify slow queries

OPTIMIZATION TECHNIQUES:
- Use appropriate indexes
- Optimize query structure
- Limit result sets with projection
- Use efficient sorting and limiting

PERFORMANCE MONITORING:
- Track query execution statistics
- Monitor index usage
- Analyze slow query logs
- Set up performance alerts

BEST PRACTICES:
- Test queries with realistic data volumes
- Use query profiler regularly
- Optimize based on actual usage patterns
- Consider query caching strategies

### Example 6
## BACKUP STRATEGIES:

MONGODUMP/MONGORESTORE:
- Logical backup of collections
- Point-in-time recovery
- Selective backup options
- Compression support

FILESYSTEM BACKUPS:
- Copy database files directly
- Requires database shutdown
- Faster for large databases
- Platform-specific

REPLICA SET BACKUPS:
- Backup from secondary members
- No impact on primary performance
- Consistent snapshots
- Point-in-time recovery

BACKUP BEST PRACTICES:
- Regular automated backups
- Test backup restoration
- Multiple backup locations
- Retention policies
- Encryption of backups

RECOVERY PROCEDURES:
- Document recovery processes
- Test recovery regularly
- Monitor backup integrity
- Plan for disaster recovery

### Example 7
## NETWORK SECURITY:

SSL/TLS ENCRYPTION:
- Enable transport encryption
- Use strong cipher suites
- Validate certificates
- Monitor encryption status

FIREWALL CONFIGURATION:
- Restrict network access
- Use IP whitelisting
- Configure port restrictions
- Monitor network traffic

SECURITY MONITORING:
- Log security events
- Monitor access patterns
- Detect suspicious activities
- Set up security alerts

BEST PRACTICES:
- Use VPN for remote access
- Implement network segmentation
- Regular security audits
- Keep security configurations updated

### Example 8
## RESOURCE OPTIMIZATION:

MEMORY MANAGEMENT:
- Configure appropriate cache sizes
- Monitor memory usage patterns
- Optimize working set size
- Manage memory pressure

STORAGE OPTIMIZATION:
- Use appropriate storage engines
- Monitor disk usage and performance
- Implement data compression
- Optimize storage allocation

PERFORMANCE TUNING:
- Adjust configuration parameters
- Monitor resource utilization
- Optimize based on workload
- Scale resources as needed

MONITORING:
- Track resource usage metrics
- Set up performance alerts
- Analyze resource bottlenecks
- Plan capacity requirements

### Example 9
## CONNECTION MANAGEMENT:

CONNECTION POOLING:
- Maintain optimal connection pool size
- Configure connection timeouts
- Monitor connection usage
- Handle connection failures

TIMEOUT CONFIGURATIONS:
- Connection timeout settings
- Query timeout limits
- Idle connection management
- Server selection timeouts

PERFORMANCE CONSIDERATIONS:
- Balance pool size vs resource usage
- Monitor connection metrics
- Optimize for application patterns
- Handle connection errors gracefully

BEST PRACTICES:
- Use appropriate pool sizes
- Configure reasonable timeouts
- Monitor connection health
- Implement proper error handling

### Example 10
## COMPREHENSIVE MONITORING:

MONITORING QUERIES:
- Track slow operations
- Monitor connection counts
- Analyze memory usage
- Review index utilization

ALERTING SYSTEMS:
- Set up performance alerts
- Configure security notifications
- Monitor system health
- Implement escalation procedures

DASHBOARD CREATION:
- Create monitoring dashboards
- Visualize key metrics
- Track trends over time
- Share insights with teams

BEST PRACTICES:
- Define clear monitoring objectives
- Set appropriate alert thresholds
- Regular review of monitoring data
- Continuous improvement of monitoring

### Example 11
## DATA INTEGRITY:

SCHEMA VALIDATION:
- Define document structure rules
- Enforce data type constraints
- Validate field requirements
- Implement custom validation logic

VALIDATION RULES:
- JSON Schema validation
- Field-level constraints
- Document-level validation
- Custom validation functions

ERROR HANDLING:
- Handle validation errors gracefully
- Provide meaningful error messages
- Log validation failures
- Implement retry mechanisms

BEST PRACTICES:
- Start with basic validation
- Gradually add more constraints
- Test validation thoroughly
- Monitor validation performance`
  };

  return explanations[lessonTitle] || "MongoDB code explanation not found";
};

const getMongoDBExercises = (lessonTitle) => {
  const exercises = {
    "Introduction to MongoDB": [
      "Create a MongoDB document representing a blog post with title, content, author, tags, and creation date",
      "Design a user profile document that includes nested address information and an array of skills",
      "Compare the structure of a relational database table vs MongoDB document for storing product information",
      "List three advantages of MongoDB's flexible schema over traditional SQL databases",
      "Explain the difference between BSON and JSON and why MongoDB uses BSON"
    ],
    "MongoDB Installation and Setup": [
      "Install MongoDB Community Server on your local machine",
      "Create a MongoDB Atlas account and set up a free cluster",
      "Connect to your local MongoDB instance using MongoDB Shell",
      "Use MongoDB Compass to explore your local database",
      "Write a connection string for both local and Atlas MongoDB instances"
    ],
    "MongoDB Data Types and Documents": [
      "Create a document with all MongoDB data types: ObjectId, String, Number, Boolean, Date, Array, and Object",
      "Design an embedded document structure for a shopping cart with items, quantities, and prices",
      "Create a reference-based structure for users and their orders",
      "Explain when to use embedded documents vs references",
      "Create a document with nested arrays and objects"
    ],
    "Basic CRUD Operations": [
      "Insert a single user document into a 'users' collection",
      "Insert multiple product documents using insertMany",
      "Find all users with age greater than 25",
      "Update a user's email address using updateOne",
      "Delete all products with stock quantity less than 5",
      "Use upsert to create or update a user profile"
    ],
    "Querying and Filtering": [
      "Find products with price between $10 and $50",
      "Query users by multiple conditions using logical operators",
      "Find documents where an array field contains specific values",
      "Use projection to return only name and email fields",
      "Sort results by creation date in descending order",
      "Limit query results to 10 documents and skip the first 5"
    ],
    "MongoDB Indexing": [
      "Create a single field index on the 'email' field of a users collection",
      "Create a compound index on 'category' and 'price' fields for products",
      "Create a text index on the 'description' field for full-text search",
      "Use explain() to analyze query performance with and without indexes",
      "Drop an index that's no longer needed",
      "Create a unique index on the 'username' field to prevent duplicates"
    ],
    "Aggregation Pipeline": [
      "Group products by category and calculate average price",
      "Filter and transform user data using $match and $project stages",
      "Sort and limit aggregated results",
      "Use $lookup to join user and order collections",
      "Calculate total sales by month using date operators",
      "Create a pipeline to find the top 5 customers by order value"
    ],
    "MongoDB with Node.js": [
      "Set up a MongoDB connection in a Node.js application",
      "Create a CRUD API using Express.js and MongoDB driver",
      "Implement error handling for database operations",
      "Use async/await pattern for database queries",
      "Create a data model with validation using Mongoose",
      "Implement connection pooling for better performance"
    ],
    "Advanced MongoDB Features": [
      "Implement transactions for multi-document operations",
      "Set up change streams to monitor real-time data changes",
      "Store and retrieve files using GridFS",
      "Create a geospatial index and perform location-based queries",
      "Implement full-text search on product descriptions",
      "Set up a replica set for high availability"
    ],
    "MongoDB Security and Performance": [
      "Create users with specific roles and permissions",
      "Enable authentication and configure access control",
      "Monitor query performance using profiler",
      "Optimize slow queries using explain plans",
      "Implement proper backup and recovery procedures",
      "Configure network security and encryption"
    ]
  };

  return exercises[lessonTitle] || [];
};

const getMongoDBQuiz = (lessonTitle) => {
  const quizzes = {
    "Introduction to MongoDB": [
      {
        question: "What does MongoDB use to store data?",
        options: [
          "Tables and rows",
          "Documents and collections", 
          "Nodes and edges",
          "Key-value pairs"
        ],
        explanation: "MongoDB is a document database that stores data in flexible, JSON-like documents within collections.",
        correctAnswer: 1
      },
      {
        question: "Which of the following is NOT a key feature of MongoDB?",
        options: [
          "Flexible schema",
          "Horizontal scalability", 
          "ACID transactions (always)",
          "JSON-like documents"
        ],
        explanation: "While MongoDB supports ACID transactions, it's not always ACID by default like traditional SQL databases. ACID is available but optional.",
        correctAnswer: 2
      },
      {
        question: "What does BSON stand for?",
        options: [
          "Binary Structured Object Notation",
          "Binary JSON",
          "Basic Structured Object Notation", 
          "Binary Standard Object Notation"
        ],
        explanation: "BSON stands for Binary JSON - it's MongoDB's binary representation of JSON-like documents with additional data types.",
        correctAnswer: 1
      }
    ],
    "MongoDB Installation and Setup": [
      {
        question: "What is the default port for MongoDB?",
        options: [
          "3306",
          "5432",
          "27017",
          "8080"
        ],
        explanation: "MongoDB uses port 27017 as its default port for client connections.",
        correctAnswer: 2
      },
      {
        question: "Which tool provides a GUI for MongoDB?",
        options: [
          "MongoDB Shell",
          "MongoDB Compass",
          "MongoDB Studio", 
          "MongoDB GUI"
        ],
        explanation: "MongoDB Compass is the official GUI tool for MongoDB that provides a visual interface for database operations.",
        correctAnswer: 1
      }
    ],
    "Basic CRUD Operations": [
      {
        question: "Which method inserts a single document?",
        options: [
          "insert()",
          "insertOne()",
          "insertSingle()",
          "addOne()"
        ],
        explanation: "insertOne() is the method used to insert a single document into a MongoDB collection.",
        correctAnswer: 1
      },
      {
        question: "What does upsert do?",
        options: [
          "Updates only",
          "Inserts only",
          "Updates if exists, inserts if not",
          "Deletes and inserts"
        ],
        explanation: "Upsert combines update and insert - it updates the document if it exists, or inserts a new document if it doesn't exist.",
        correctAnswer: 2
      }
    ],
    "MongoDB Indexing": [
      {
        question: "What is the primary benefit of creating an index?",
        options: [
          "Reduces storage space",
          "Improves query performance",
          "Increases data security",
          "Enables data encryption"
        ],
        explanation: "Indexes are data structures that improve query performance by allowing MongoDB to find documents more quickly.",
        correctAnswer: 1
      },
      {
        question: "In a compound index {userId: 1, status: 1, createdAt: -1}, which query patterns can efficiently use this index?",
        options: [
          "Only queries with all three fields",
          "Queries with userId only",
          "Queries with status only",
          "Queries with createdAt only"
        ],
        explanation: "Compound indexes support queries on prefixes. This index supports queries with userId, userId+status, or all three fields, but not status or createdAt alone.",
        correctAnswer: 1
      },
      {
        question: "What happens to write performance when you add more indexes?",
        options: [
          "Write performance improves",
          "Write performance stays the same",
          "Write performance degrades",
          "Write performance becomes unpredictable"
        ],
        explanation: "More indexes generally slow down write operations because MongoDB must update all relevant indexes when documents are modified.",
        correctAnswer: 2
      }
    ],
    "Aggregation Pipeline": [
      {
        question: "Which aggregation stage is equivalent to SQL's WHERE clause?",
        options: [
          "$project",
          "$group",
          "$match",
          "$sort"
        ],
        explanation: "$match filters documents based on specified criteria, which is equivalent to the WHERE clause in SQL.",
        correctAnswer: 2
      },
      {
        question: "What does the $group stage do in aggregation?",
        options: [
          "Groups documents by specified field(s) and applies accumulator operations",
          "Groups documents into arrays",
          "Groups documents by size",
          "Groups documents alphabetically"
        ],
        explanation: "$group groups documents by the specified _id field(s) and applies accumulator operations like $sum, $avg, etc.",
        correctAnswer: 0
      },
      {
        question: "Which operator is used to join collections in aggregation?",
        options: [
          "$join",
          "$merge",
          "$lookup",
          "$union"
        ],
        explanation: "$lookup performs a left outer join between collections in the aggregation pipeline.",
        correctAnswer: 2
      }
    ],
    "MongoDB with Node.js": [
      {
        question: "What is the main advantage of using Mongoose over the native MongoDB driver?",
        options: [
          "Better performance",
          "Schema definition and validation",
          "Smaller bundle size",
          "More direct MongoDB access"
        ],
        explanation: "Mongoose provides schema definition, validation, middleware, and higher-level abstractions, making development faster and more structured.",
        correctAnswer: 1
      },
      {
        question: "What is connection pooling in MongoDB?",
        options: [
          "Storing connections in a pool for later use",
          "Maintaining a pool of reusable database connections",
          "Grouping multiple databases together",
          "Creating backup connections"
        ],
        explanation: "Connection pooling maintains a pool of reusable database connections to improve performance and resource utilization.",
        correctAnswer: 1
      }
    ],
    "Advanced MongoDB Features": [
      {
        question: "What are MongoDB transactions primarily used for?",
        options: [
          "Single document operations",
          "Multi-document operations that need ACID properties",
          "Improving query performance",
          "Creating indexes"
        ],
        explanation: "MongoDB transactions are used for multi-document operations that require ACID properties to ensure data consistency.",
        correctAnswer: 1
      },
      {
        question: "What is GridFS used for?",
        options: [
          "Creating database indexes",
          "Storing files larger than 16MB",
          "Managing user authentication",
          "Backing up databases"
        ],
        explanation: "GridFS is MongoDB's specification for storing and retrieving files larger than the 16MB BSON document size limit.",
        correctAnswer: 1
      },
      {
        question: "What do Change Streams provide?",
        options: [
          "Database backup capabilities",
          "Real-time monitoring of data changes",
          "Query optimization",
          "User authentication"
        ],
        explanation: "Change Streams allow applications to access real-time data changes in MongoDB collections.",
        correctAnswer: 1
      }
    ],
    "MongoDB Security and Performance": [
      {
        question: "What is the default authentication mechanism in MongoDB?",
        options: [
          "x.509 certificates",
          "LDAP",
          "SCRAM-SHA-256",
          "Kerberos"
        ],
        explanation: "SCRAM-SHA-256 is the default authentication mechanism in MongoDB, providing secure password-based authentication.",
        correctAnswer: 2
      },
      {
        question: "What does MongoDB profiling help with?",
        options: [
          "Creating indexes",
          "Identifying slow operations",
          "User authentication",
          "Data backup"
        ],
        explanation: "MongoDB profiling helps identify slow operations by logging operations that take longer than a specified threshold.",
        correctAnswer: 1
      },
      {
        question: "Which command is used to create a logical backup of MongoDB data?",
        options: [
          "mongorestore",
          "mongodump",
          "mongoexport",
          "mongoimport"
        ],
        explanation: "mongodump creates a logical backup of MongoDB data, creating BSON files that can be restored with mongorestore.",
        correctAnswer: 1
      }
    ]
  };

  return quizzes[lessonTitle] || [];
};

module.exports = {
  getMongoDBLessonConcepts,
  getMongoDBCodeExample,
  getMongoDBCodeExplanation,
  getMongoDBExercises,
  getMongoDBQuiz
};
