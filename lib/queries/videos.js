import Videos from "../models/videos";

import React from 'react'

export  async function getvideos() {
    const videos = await Videos.find().lean()
    return videos
}
export async function getvideobyid(_id) {
    const video = await Videos.findById(_id).lean()
    return video
}

export async function getSimilarVideos(currentId,categories) {
    const videos = await Videos.find({_id: { $ne: currentId }, 
    categories: { $in: categories }, 
     }).limit(8).lean()
     return videos
}

export async function searchVideos(query) {
    const videos = await Videos.find({
    $or: [
      { videoTitle: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
      { categories: { $regex: query, $options: "i" } },
      { channelName: { $regex: query, $options: "i" } },
    ],
  }).lean()

  return videos
}