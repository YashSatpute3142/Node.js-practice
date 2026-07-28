import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: "Yash",
//       email: "yash@gmail.com",
//     },
// multiple 
//  const newUser = await prisma.user.createMany({
//     data:[
//         {name: "Rahul", email: "rahul@gmail.com",},
//         {name:"Shubh", email: "shubh@gmail.com"}
//     ]
//   });
//  console.log(newUser)

// read

// const users = await prisma.user.findMany()
// console.log(users);

//finding

// const users = await prisma.user.findUnique({
//     where:{id:2},
// })
// console.log(users);

//update

// const updatedUser = await prisma.user.update({
//     where: {id:3},
//     data: {name:"Shubham"}
// })
// console.log(updatedUser);

// multiple user

// const updatedUser = await prisma.user.updateMany({
//     where: {id:3},
//     data: {name:"Shub"}
// })
// console.log(updatedUser);

// delete

const deletedUser = await prisma.user.delete({
    where:{id:3}
})
console.log(deletedUser);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });