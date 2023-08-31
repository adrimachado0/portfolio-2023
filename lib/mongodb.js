import mongoose from "mongoose"
import { NextResponse } from "next/server";

const connectMongoDB = async () => {

    try {        
        await mongoose.connect('mongodb+srv://123elpijudo123:jy3XhskjZBSk411s@cluster0.v2a9jm8.mongodb.net/')
        console.log('MONGODB CONNECTED')
    } catch (error) {
        NextResponse.json({message:'Mongodb no se pudo conectar'})
        console.log(error, 'error de ruta')
    }
};

export default connectMongoDB;