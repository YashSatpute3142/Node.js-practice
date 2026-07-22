// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

import {z, ZodError} from "zod"




// const ageSchema = z.number().min(18).max(100).int();
// const age =11


// try {
//     const parceUserAge = ageSchema.parse(age)
// console.log(parceUserAge);
    
// } catch (error) {

//     if(error instanceof ZodError){
//         console.log(error.issues[0].message);
        
//     }else{
//         console.log("Unexpected Error: " , error);
        
//     }
    
// }

const portSchema = z.coerce.number().min(1).max(65535).default(3000);
export const PORT = portSchema.parse(process.env.PORT)