# Backend Assignment 

# Project Goal
 To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.
# Basic Requirements:
-Server should call the YouTube API continuously in background (async) with some interval (say 10 seconds) for fetching the latest videos for a predefined search query and should store the data of vid eos (specifically these fields - Video title, description, publishing datetime, thumbnails URLs and any other fields you require) in a database with proper indexes.

-A GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.

-It should be scalable and optimised.

# To Run the project:
 
## step 1 :  
create `.env` file containg <br>
```  SECRET_KEY=''
  MONGO_URI='mongodb+srv://'
  YOUTUBE_API_URL='https://www.googleapis.com/youtube/v3/search/'
  GOOGLE_API_KEY=''
```    
  
  
## step 2 : 
  Download required libraries by `npm install `<br>
  
## step 3 : 
  Start project use npm start or yarn start`

# References

## Quering(Paginated) -
![page 1](https://github.com/user-attachments/assets/285a15ed-04e2-4880-bbce-dc504c6d6f20)
![page 2](https://github.com/user-attachments/assets/b49649a8-5d71-4929-9859-9c33507c0069)
![page 3](https://github.com/user-attachments/assets/ecd7b88c-25eb-4ad1-b4d3-43ca5f1cd47c)
![page 4](https://github.com/user-attachments/assets/f8d51d80-ac20-4901-b80b-6cd5ca6c1ceb)

## Searching -
![searching](https://github.com/user-attachments/assets/ed3f9b81-11b9-4bed-9544-7409813a30dd)
![searching 2](https://github.com/user-attachments/assets/e2144d91-0866-4959-b98f-da0e429a9de5)


## Fetching Videos -
![latest data ](https://github.com/user-attachments/assets/8d84c42c-9b5a-400e-8bd1-41a06b7a3764)
![datasaved](https://github.com/user-attachments/assets/34d81c71-9ba7-4e85-a460-8fa8829dab07)



