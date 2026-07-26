import mysql from "mysql2/promise";

// connect to mysql server
const db = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"yash@2006",
    database:"mysql_db",
})
console.log("MySql Connect Successfully");
// this is using inline valus [not recomanded]
//2 we need to create database

//await db.execute(`create database mysql_db`)
// const [rows] = await db.execute("SHOW DATABASES");
// console.log(rows);

// creating table

// await db.execute(`
//     create table users(
//     id int auto_increment primary key,
//     username varchar(100) not null,
//     email varchar(100) not null unique
//     );
//     `);

// 4 CRUD Operation

// insert

// await db.execute(`
//     insert into users(username, email)values
//     ('Yash', 'yash@example.com'),
//     ('Rahul', 'rahul@example.com'),
//     ('Priya', 'priya@example.com')
//     `);

// read

// const [rows] = await db.execute(`select * from users`);
// console.log(rows);


// usinng Prepared Statments

// await db.execute(
//     `INSERT INTO users (username, email) VALUES (?, ?)`,
//     ["Avi", "avi@example.com"]
// );

// const values = [
//     ["Alice", "alice@example.com"],
//     ["Bob", "bob@example.com"],
//     ["Emma", "emma@example.com"]
// ]

// await db.query("insert into users(username,email) values ?", [values]);




// update

// try {
//     const [rows] = await db.execute("update users set email = 'yashsatpute@gmail.com' where username = 'Yash'");
//     console.log("All Users: ", rows);
    
    
// } catch (error) {
//     console.error(error); 
// }

// delete

// try {
//     const [rows] = await db.execute("delete from  users where username = 'Emma'");
//     console.log("All Users: ", rows);
    
    
// } catch (error) {
//     console.error(error); 
// }
// const [rows] = await db.execute(`select * from users`);
// console.log(rows);
