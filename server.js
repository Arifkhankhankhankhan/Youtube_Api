const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Video=require('./models/Video');
const connectDB = require('./db');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cache = {};


connectDB();


app.use(express.json());

//query section 

app.get('/query/:page?', async (req, res) => {
  const page = parseInt(req.params.page) || 1;
  const pageLimit = 20;
  try {
    const videos = await Video.find() //video find (give data from mongodb )
      .skip((page - 1) * pageLimit) // Skip the number of items based on the current page    
      .limit(pageLimit)       // Limit the number of items per pag             
      .sort({ publishTime: -1 }); //sorting give the informatin in descending order.
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
    //if code not work or any error res.status show the the error
  }
});


//Searches for videos based on a provided tag.

app.get('/search', async (req, res) => {
  const tag = req.query.tag || ''; // Access the tag from query parameters; return all videos if the tag is empty
  try {              
    //Create a search query based on the tag provided
    const searchQuery = tag ? { Title: { $regex: tag, $options: 'i' } } : {};
    const videos = await Video.find(searchQuery);
    res.json(videos); //search result in json format
  } catch (err) {
    res.status(500).json({ message: err.message });//error
  }
});




// Fetch the latest videos from the YouTube API
 


app.get('/start', async (req, res) => {
  let pageToken = '';
  let videos = [];
  const maxIterations = 10; // Set the maximum number of API calls
  const queryParams = {
    part: 'snippet',
    maxResults: 50,
    type: 'video',
    key: process.env.GOOGLE_API_KEY,
    publishedAfter: '2020-01-01T00:00:00Z',
    order: 'date',
    q: 'bollywood music',
  };


  try {
    for (let i = 0; i < maxIterations; i++) {
      if (pageToken) queryParams.pageToken = pageToken; // Add pageToken for pagination

      // Fetch data from YouTube API
      const { data } = await axios.get(process.env.YOUTUBE_API_URL, { params: queryParams });
      const { items, nextPageToken } = data;

      pageToken = nextPageToken;// Update pageToken for the next request
 
      // Process each video item
      for (const item of items) {
        const videoData = {
          _id: item.id.videoId,
          Title: item.snippet.title,
          Description: item.snippet.description,
          Thumbnails_urls: item.snippet.thumbnails.default.url,
          publishTime: item.snippet.publishedAt,
        };

        // Check if video already exists in the database
        const existingVideo = await Video.findById(videoData._id);
        if (!existingVideo) {
          await Video.create(videoData);
          videos.push(videoData);
        }
      }

      if (!pageToken) break;
      await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 seconds before the next API call
    }

    res.json(videos);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Error fetching data');
  }
});


//server

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
