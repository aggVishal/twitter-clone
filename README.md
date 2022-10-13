# twitter-clone

Steps to run this project:
1. git clone https://github.com/aggVishal/twitter-clone.git
2. npm i
3. cd twitter-clone 
4. npm start
5. API to test the reply feature (test it in postman): 
    
    URL: POST http://localhost:3000/api/replyToTweets
    BODY:
    {
        "query": "I had an accident",
        "n": 4,
        "replyMessage": "Are you fine now?"
    }
        

![image](https://user-images.githubusercontent.com/65781736/195557530-b65a9a11-41fe-45b1-8437-52866cd051ab.png)
