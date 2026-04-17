import mongoose from "mongoose";

import React from 'react'

export default async function dbConnect() {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    return conn
}
