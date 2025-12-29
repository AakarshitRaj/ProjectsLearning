import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        // Mongoose 6 and later versions have these options enabled by default, so you don't need to specify them.
        // await mongoose.connect(process.env.MONGO_URI, {

        //     useNewUrlParser: true,//Tells Mongoose to use MongoDB’s new URL string parser
        //     useUnifiedTopology: true,//Enables MongoDB’s new server discovery and monitoring engine
        // });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);        
        }
    }
export default connectDB;