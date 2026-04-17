import mongoose from "mongoose";
import { Schema } from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    videoTitle: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    videoURL: {
      type: String,
      required: true,
    },
    thumbnailURL: {
      type: String,
      required: true,
    },
    duration: {
      type: String, // e.g. "12:26"
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    channelName: {
      type: String,
      required: true,
    },
    channelAvatar: {
      type: String,
      default: "",
    },
    categories: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Videos = mongoose.models.Video || mongoose.model("Video", VideoSchema);
export default Videos