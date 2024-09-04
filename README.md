# Flight Service

## Table of Contents

- [Description](#description)
- [Key Functionalities](#key-functionalities)
  - [Airplane Management](#airplane-management)
  - [Airport Management](#airport-management)
  - [City Management](#city-management)
  - [Flight Management](#flight-management)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Related Microservices](#related-microservices)

## Description

**Flight Service** is a **microservice** for the **flight booking application**. It provides robust functionality for managing and validating data related to airplanes, airports, cities, and flights. The service ensures accurate and reliable flight data through a set of well-defined routes and middleware.

## Key Functionalities

### Airplane Management
- **Create Airplane**: `POST /` - Adds a new airplane after validating the request.
- **Get All Airplanes**: `GET /` - Retrieves a list of all airplanes.
- **Get Airplane by ID**: `GET /:id` - Fetches details of a specific airplane by its ID.
- **Update Airplane**: `PUT /:id` - Updates details of an existing airplane.
- **Delete Airplane**: `DELETE /:id` - Removes an airplane from the database.

### Airport Management
- **Create Airport**: `POST /` - Adds a new airport with request validation.
- **Get All Airports**: `GET /` - Lists all airports.
- **Get Airport by ID**: `GET /:id` - Retrieves information of a specific airport.
- **Update Airport**: `PUT /:id` - Updates the details of an existing airport.
- **Delete Airport**: `DELETE /:id` - Deletes an airport record.

### City Management
- **Create City**: `POST /` - Adds a new city with validation of the city name.
- **Update City**: `PUT /:id` - Updates details of an existing city.
- **Delete City**: `DELETE /:id` - Removes a city from the database.

### Flight Management
- **Create Flight**: `POST /` - Creates a new flight with request validation and time checks.
- **Get Flight by ID**: `GET /:id` - Retrieves details of a specific flight.
- **Get All Flights**: `GET /` - Lists all flights.
- **Update Seats**: `PATCH /:id/seats` - Updates seat availability for a specific flight.

## Technologies Used

- **Node.js** - JavaScript runtime for building scalable network applications.
- **Express.js** - Web application framework for Node.js.
- **MySQL** - Relational database management system.
- **Sequelize** - Promise-based Node.js ORM for MySQL.
- **dotenv** - Module to load environment variables from a `.env` file.
- **http-status-codes** - Provides constants for HTTP status codes.
- **nodemon** - Utility to automatically restart the server on file changes during development.
- **winston** - Logger for handling logging.

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ShubhamYv/flight-service.git
   cd flight-service
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   Add the `PORT` variable:

   ```env
   PORT=3000
   ```

4. **Start the server**

   ```bash
   npm run dev
   ```

   The server will run on the port specified in the `.env` file (default is 3000).

---

## Related Microservices

Explore the Skybook Flight Ecosystem:

1. **Flight Services**: Manages airplanes, airports, cities, and flights.
   - [Flight Services Repository](https://github.com/ShubhamYv/flight-service)

2. **Flight Booking Service**: Handles flight bookings, cancellations, and payments.
   - [Flight Booking Service Repository](https://github.com/ShubhamYv/flight-booking-service)

3. **Flight API Gateway**: Secures user authentication, implements rate limiting, and routes requests.
   - [Flight API Gateway Repository](https://github.com/ShubhamYv/flight-api-gateway)

4. **Flight Notification Service**: Manages ticket creation and sends email notifications via RabbitMQ.
   - [Flight Notification Service Repository](https://github.com/ShubhamYv/flight-notification-service)

Dive into these services to see how they work together to provide a seamless flight booking experience!

---
