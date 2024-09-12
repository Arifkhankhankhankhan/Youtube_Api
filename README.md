#Backend Assignment

## Project Goal

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.

## Basic Requirements

- Server should call the YouTube API continuously in background (async) with some interval (say 10 seconds) for fetching the latest videos for a predefined search query and should store the data of videos (specifically these fields - Video title, description, publishing datetime, thumbnails URLs and any other fields you require) in a database with proper indexes.

- A GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.

- A basic search API to search the stored videos using their title and description

## Getting Started

### Step 1: Configure Environment

Create a `.env` file in the root directory of your project with the following content:

```env
MONGO_URI='mongodb+srv://<your-mongo-uri>'
YOUTUBE_API_URL='https://www.googleapis.com/youtube/v3/search/'
GOOGLE_API_KEY='<your-google-api-key>'
