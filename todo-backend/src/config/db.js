import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Pass the database name  here
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME,
        });
        
        // This will print something like: MongoDB Connected: 127.0.0.1 (taskmaster)
        console.log(`MongoDB Connected: ${conn.connection.host} (${conn.connection.name})`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};