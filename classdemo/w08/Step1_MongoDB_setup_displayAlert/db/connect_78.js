import mongoose from "mongoose";

const connectDB_78 = (url) => {
    return mongoose.connect(url);
}

export default connectDB_78;