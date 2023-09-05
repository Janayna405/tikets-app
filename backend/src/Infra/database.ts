import mongoose from "mongoose"

export async function connect (){
 try{
   await mongoose.connect(
     'mongodb+srv://janainabatista405:<password>@janaynna.iwb2o2y.mongodb.net/tickets.app',
     );

     console.log('Connect database Sucess');
 } catch (error) {
      console.log ("~ files: databas.ts:5 ~ connect ~ error:", error)
 }
} 