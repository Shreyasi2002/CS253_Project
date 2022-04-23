# Clubzen IITK


A platform to integrate all clubs and societies under MnC, SnT, etc., and College fests in a modular format. A separate feed will be created for each club and community.

The main features of the app are - 
1) Upcoming events and workshop section. 
2) All club activities and achievements are posted publicly. 
3) Students' works posting and reviewing. 
4) Contact with Secys and Coordinators. 
5) Forums section for interacting with clubs. 
6) Access levels with restrictions based on the position of individuals. 
6) (Optional) Clubs' works in fests.


## About the Web App

As of now, the front-end and the backend are separate units.

For Back-end Part,

RESTful APIs are deployed on Heroku using Github and can be accessed anywhere worldwide.

For the Front-end Part,

The web app is deployed on Github-Pages and hosts the main page, login page, clubs page, councils page, festivals page, and calendar page for now.

## Installation Requirements

1) Web Browser
2) Node.js
3) npm
4) Maven
5) Tomcat
6) Spring Framework
7) Spring Boot
8) JDK (Java Development Kit)

## Installation

For Frontend, i.e., website,

1) Navigate to "/Interface Design/clubzen-iitk/".
2) Open Command Line Terminal in this folder.
3) Run the following commands one by one -
4) npm install
5) npm start

The webpage will automatically open in localhost (http://localhost:3000/).

If it doesn't automatically open, the user can open it manually.

For the Back-end part,

1) Navigate to "/Backend Units/{calendar or loginsignup or newsandevents}/".
2) Open Command Line Terminal in this folder.
3) Run the following commands one by one (assuming a Tomcat Local server has already been built) -
4) mvn clean install
5) mvn spring-boot:run

Now the user can test the APIs on localhost (http://localhost:8080/).

## Test Run

The webpage can be tested using npm as stated in "Installation" part.

The Backend Units can be tested using POSTMAN or any other API Client.

# User guide
![abc](/images/login_page.jpg "login_page")
Users who have previously registered for the ClubZen Web Application must login by: 
  - Entering their Username.
  - Entering their Password. 

 Clicking on Login will advance to the Profile page and logged in users can begin using the application.

Site Registration

Users who have not previously registered for the ClubZen Web Application must select     “Don’t have an account? Signup now” to access the “New User Registration” page.    



![abc](/images/home_page.jpg "home_page")

![abc](/images/events_section.jpg "events_section")

![abc](/images/festivals.png "festivals")

![abc](/images/calendar.png "calendar")
