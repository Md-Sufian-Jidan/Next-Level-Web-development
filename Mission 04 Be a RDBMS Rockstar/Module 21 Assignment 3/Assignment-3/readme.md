# 🚗 Vehicle Rental System – Database Design & SQL
## 📌 Overview

This project demonstrates the design and implementation of a Vehicle Rental System database using relational database concepts and SQL.

## 🧩 ERD Diagram

The complete Entity Relationship Diagram (ERD) for this project was designed using **Lucidchart**.

### 🔗 ERD Link: 
https://drawsql.app/teams/jjerd/diagrams/vehicle-rental-system

This ERD clearly shows:
- Primary Keys (PK)
- Foreign Keys (FK)
- One-to-Many and Many-to-One relationships
- Booking and Vehicle status fields

### 📌 ERD includes:
- Primary Keys (PK)
- Foreign Keys (FK)
- Relationship cardinality
- Status fields

### The goal of this project is to showcase:
- Strong understanding of database design (ERD)
- Proper use of primary keys and foreign keys
- Ability to write real-world SQL queries
- Clear understanding of SQL theory concepts

This project is suitable for junior database roles, backend internships, and SQL-based assessments.

## 🎯Objectives

### By completing this project, I demonstrated the ability to:
- Design an Entity Relationship Diagram (ERD)
- Implement 1-to-Many and Many-to-1 relationships
- Enforce data integrity using constraints

### Write SQL queries using:
- JOIN
- NOT EXISTS
- WHERE
- GROUP BY and HAVING

### Explain core SQL concepts clearly (Viva-ready)

🧱 Database Schema <br>
📋 Tables Included

The system consists of three core tables:

#### 1️⃣ Users

- Stores information about system users (Admin or Customer).
- Fields:
    - user_id (Primary Key)
    - name
    - email (Unique)
    - password
    -phone
    - role (Admin / Customer)

#### 2️⃣ Vehicles

- Stores all rentable vehicles.
- Fields:
    - vehicle_id (Primary Key)
    - vehicle_name
    - type (car / bike / truck)
    - model
    - registration_number (Unique)
    - rental_price_per_day
    - availability_status (available / rented / maintenance)

#### 3️⃣ Bookings

- Tracks vehicle rental bookings.
- Fields:
    - booking_id (Primary Key)
    - user_id (Foreign Key → Users)
    - vehicle_id (Foreign Key → Vehicles)
    - start_date
    - end_date
    - booking_status (pending / confirmed / completed / cancelled)
    - total_cost

### 🔗 Relationships (ERD Summary)
#### Relationship Type	Description
- One-to-Many : One User → Many Bookings
- Many-to-One : Many Bookings → One Vehicle
- Logical One-to-One : Each Booking links one User and one Vehicle

#### 📎 ERD was designed using Lucidchart and submitted as a public link.

- 🧪 SQL Queries Implemented
    - ✅ Query 1: INNER JOIN
    - Retrieve booking details with customer and vehicle names

- Concepts: INNER JOIN
    - ✅ Query 2: NOT EXISTS
    - Find vehicles that have never been booked

- Concepts: NOT EXISTS
    - ✅ Query 3: WHERE
    - Retrieve all available vehicles of a specific type (e.g. cars)

- Concepts: SELECT, WHERE
    - ✅ Query 4: GROUP BY & HAVING
    - Find vehicles with more than 2 bookings
    - Concepts: GROUP BY, HAVING, COUNT

### 🎤 Theory (Viva Practice)

The following concepts were explained in my own words (English):

#### Question 1: What is a foreign key and why is it important in relational databases?

A foreign key is a column (or a set of columns) in one table that refers to the primary key of another table.
Its main purpose is to create a relationship between two tables.

##### For example, in a Vehicle Rental System, we have:
- a users table
- a vehicles table
- a bookings table

##### In the bookings table:
- user_id is a foreign key that references users(user_id)
- vehicle_id is a foreign key that references vehicles(vehicle_id)

This means every booking must be linked to a valid user and a valid vehicle.

##### Why is a foreign key important?

- First, it maintains data integrity.
It prevents invalid data. For example, you cannot insert a booking with a user_id that does not exist in the users table. This avoids orphan records.

- Second, it enforces relationships between tables.
Databases are relational systems, and foreign keys are how tables “talk” to each other.

- Third, it helps with real-world logic.
In real life, a booking cannot exist without a user and a vehicle. Foreign keys enforce this rule at the database level.

- Finally, foreign keys help with better querying and joins.
Because of foreign keys, we can confidently use JOINs and know the data is consistent.

##### So in short, a foreign key is important because it:
- maintains accuracy
- enforces relationships
- protects data consistency
- reflects real-world business rules

#### Question 2: What is the difference between WHERE and HAVING clauses in SQL?

The main difference between WHERE and HAVING is when they are applied in a query.

##### WHERE clause
- The WHERE clause is used to filter rows before grouping happens.
- It works on individual rows, not aggregated data.

###### Example:
```sql
SELECT *
FROM vehicles
WHERE tatus = 'available'; 
```

Here, SQL checks each row and filters the rows before any grouping or aggregation.

##### Important point:
- WHERE cannot be used with aggregate functions like COUNT, SUM, or AVG.
- HAVING clause
- The HAVING clause is used to filter groups after aggregation.
- It works on grouped data.

###### Example:
```sql
SELECT vehicle_id, COUNT(*) 
FROM bookings
GROUP BY vehicle_id
HAVING COUNT(*) > 2;
```

##### Here:
- SQL groups bookings by vehicle_id
- It calculates COUNT(*)
- THEN HAVING filters the result

##### Key differences (easy to remember):

| WHERE | HAVING |
| :---------- | :---------- |
| Filters rows | Filters groups |
| Used before GROUP BY | Used after GROUP BY |
| Cannot use aggregates | Uses aggregate functions |

##### So in short:

- WHERE = row-level filtering
- HAVING = group-level filtering

#### Question 3: What is a primary key and what are its characteristics?

A primary key is a column (or combination of columns) that uniquely identifies each record in a table.

###### For example:
- user_id in users table
- vehicle_id in vehicles table
- booking_id in bookings table

Each of these primary keys ensures that every row is unique.

##### Characteristics of a primary key

1. Uniqueness
    - No two rows can have the same primary key value.

2. Not NULL
    - A primary key can never be NULL because it must always identify a record.

3. One per table
    - Each table can have only one primary key, but that key can consist of multiple columns (composite key).

4. Stable
    - Primary key values should not change frequently. That’s why we often use SERIAL or auto-increment values.

5. Referenced by foreign keys
    - Primary keys are used by other tables as foreign keys to create relationships.

##### Why primary keys are important

- They uniquely identify data
- They improve query performance
- They help maintain data integrity
- They allow table relationships

###### Without a primary key, a relational database loses structure and reliability.

#### Question 4: What is the difference between INNER JOIN and LEFT JOIN in SQL?

The difference between INNER JOIN and LEFT JOIN is about which rows are included in the result.

##### INNER JOIN

An INNER JOIN returns only matching records from both tables.

###### Example:
```sql
SELECT u.user_name, v.vehicle_name
FROM bookings b
INNER JOIN users u ON u.user_id = b.user_id
INNER JOIN vehicles v ON v.vehicle_id = b.vehicle_id;
```

This query:
- shows only users who have bookings
- excludes users with no bookings

So INNER JOIN is useful when:
- you only care about matching data
- missing data is not important

##### LEFT JOIN

A LEFT JOIN returns:
- all rows from the left table
- and matching rows from the right table
- unmatched rows show NULL values

###### Example:
```sql
SELECT s.first_name, c.course_title
FROM students s
LEFT JOIN enrollments e ON s.student_id = e.student_id
LEFT JOIN courses c ON c.course_id = e.course_id;
```

This query:
- includes students with or without enrollments
- shows NULL where no match exists

##### LEFT JOIN is useful when:
- you want complete data
- missing relationships are important

##### Simple comparison
| INNER JOIN | LEFT JOIN |
|:---------- | :---------- |
| Only matching rows | All left table rows |
| Excludes unmatched data |	Includes unmatched data|
| Strict | Flexible |

### 🛠️ Technologies Used
- PostgreSQL
- drawsql (ERD Design)

### 🎬 Video Walkthrough & Viva Presentation

📌 **Video Link:**  
👉 https://docs.google.com/document/d/1ykts_lSehStBW06evGypz65n-J0BfEGH2ngKtRmsYCc/edit

#### In this video, I explain:
- What is a foreign key and why is it important?
- Difference between WHERE and HAVING
- What is a primary key?
- Difference between INNER JOIN and LEFT JOIN
- Viva questions and answers (spoken explanation)

This video was recorded as part of viva practice to demonstrate both technical understanding and communication skills.


### 📌 Why This Project Matters

This project reflects real-world backend database scenarios, including:

- Data integrity
- Business rules
- Clean relational design
- Query optimization thinking
- It demonstrates readiness for:
    - Junior Backend Developer roles
    - SQL-focused interviews
    - Database fundamentals assessments

### 📬 Contact & Collaboration

Thank you for taking the time to review this project. If you have any questions, feedback, or would like to discuss opportunities,
Feel free to reach out, I’d be happy to connect.

**Author:** Md Abu Sufian Jidan  
**Role:** Junior Web Developer   

🌐 **<a href="https://mdabusufianjidan-portfolio.vercel.app" target="_blank">
Visit my portfolio & send a message
</a>**  

💼 **<a href="https://www.linkedin.com/in/md-abu-sufian-jidan" target="_blank">
Connect with me on LinkedIn
</a>**  

📘 **<a href="https://www.facebook.com/profile.php?id=61580036619103" target="_blank">
Follow me on Facebook
</a>**
