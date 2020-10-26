# 03 - URL Shortener

Live Application: [URL-Shortener](https://url-shortener-03.herokuapp.com/)


To run locally: run the following commands:
    
    `npm install`

    `npm run dev`

To set up MongoDB locally, update the mongoURI variable located in './config/db.js' to local mongo uri.

### URL-Shortener Scope
1. Simple interface to take in a long URL Link
2. Pass Long URL through a package to return a unique short url string
3. Shortened URL string will link you to the original long url


### Express/Mongo - Atlas
Express & Mongo Atlas used to takin in and store the relationship between the long url and the short url
1. Saving and linking the Original Long url to the short url with a simple MongoDB - Atlas database
2. Utilizing  ShortId npm package to generate a short URL as soon as long url is passed through the schema
3. Utilizing a simple handlbars html interface to manage the views from express and display the URLs

### Assumtions & Limitations
1. UI accepts a long url and auto generates a short url
2. long & short url pair saved to a DB
3. short url provides access to long url
4. needed the database relationship to provide the link & redirect
5. deploying simple page to a hosting service such as heroku

