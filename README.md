
# Restap
Food App

<br>

List of routes:
|   Route               | HTTP  |   Header(s) |Body    | Description
|---------------        |:------    |:---------|:-------|:-----------
|/user/googlesignup     |POST       |          | none   | **required** gmail signin
|/zomato/:lat/lon       |GET        | required | none   | Get all restaurant info based on geocode
|/zomato/:place         |GET        | required | none   | Get all restaurant info with based on place
|zomato/:origin/to/:destination   |GET | required  | none   | Get distance information from origin place to restaturant

# Usage
Make sure you have Node.js and npm installed in your computer, and then run these commands:
$ npm install <br/>
$ npm start <br/>
$ npm run dev
