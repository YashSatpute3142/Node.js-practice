import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";
import { eq } from "drizzle-orm";

const main = async () => {
    // insert
    // const insertUser = await db
    // .insert(usersTable)
    // .values({
    //     name:"Yash", age: "20", email: "yash@gmail.com"
    // })

    // const insertUser = await db
    // .insert(usersTable)
    // .values([
    //     {name:"Rahul", age: "20", email: "rahul@gmail.com"},
    //     {name:"Shubh", age: "20", email: "shubh@gmail.com"}

    // ])

    // console.log(insertUser);

    // Read

    // const users = await db.select().from(usersTable).where({
    //     email:'yash@gmail.com'
    // });
    // console.log(users);

    // update

//     const updatedUser = await db
//   .update(usersTable)
//   .set({
//     name: "YashSatpute",
//   })
//   .where(eq(usersTable.email, "yash@gmail.com"));

// console.log(updatedUser);
    
    
// delete

await db.delete(usersTable).where(eq(usersTable.email,"yash@gmail.com"));
}

main().catch((error) => {
    console.log(error);
    
})