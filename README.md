# Project Audible Item Page
![Deploy](https://github.com/huang-pei-mei/FEC-Aschale-Proxy/blob/master/Pictures%20and%20gifs/Final%20Audible%20Item%20Page.gif)

## Table of Contents
- [Project Audible Item Page](#project-audible-item-page)
  - [Table of Contents](#table-of-contents)
- [Overview: Audible Item Page](#overview-audible-item-page)
  - [Product Page Live Demos and Screenshots Below](#product-page-live-demos-and-screenshots-below)
    - [Title Bar Gif and Images](#title-bar-gif-and-images)
    - [Summary and Aggregate Review Service](#summary-and-aggregate-review-service)
    - [Review Service](#review-service)
  - [Related Services](#related-services)
  - [My contributions](#my-contributions)
  - [Requirements](#requirements)
  - [Requirements](#requirements-1)
    - [Usage](#usage)
  - [Sample Results from the Project](#sample-results-from-the-project)
  - [Technologies Used](#technologies-used)
  - [Copyright and License](#copyright-and-license)


# Overview: Audible Item Page
This is an mock-up audible item page built during the Hack Reactor immersive's Front End Capstone project. This project is designed to maintain all original functionality and mimic the style of audible item page. This is a proxy server that combines 5 different services together to displayes the audible item page for a given book.

The proxy has book data that is always associated with a certain book id and is hosted on AWS EC2 instances and S3 buckets. This proxy contains data for 100 books with the information stored both in Mysql and Mongo databases. It also plays audio of the book when you click on the book cover icon

## Product Page Live Demos and Screenshots Below
Full Page Demo

![Deploy](https://github.com/huang-pei-mei/FEC-Aschale-Proxy/blob/master/Pictures%20and%20gifs/Full%20Page.jpg)

### Title Bar Gif and Images
![Deploy](https://github.com/huang-pei-mei/FEC-Aschale-Proxy/blob/master/Pictures%20and%20gifs/Title%20Bar%20Desktop%20View.jpg)

### Summary and Aggregate Review Service
![Deploy](https://github.com/huang-pei-mei/FEC-Aschale-Proxy/blob/master/Pictures%20and%20gifs/Summary%20and%20Aggregate%20Review%20desktop%20View.jpg)


### Review Service
![Deploy](https://github.com/huang-pei-mei/FEC-Aschale-Proxy/blob/master/Pictures%20and%20gifs/Review%20Desktop%20View.jpg)


## Related Services

  - https://github.com/huang-pei-mei/FEC-Publishers-Summary
  - https://github.com/huang-pei-mei/FEC-Agg.Review
  - https://github.com/huang-pei-mei/title-service
  - https://github.com/huang-pei-mei/reviews-service
  - https://github.com/huang-pei-mei/price-service


## My contributions
Designed and built the Publisher's Summary and the Aggregare Review Services.
Coordinated and deployed entire team’s modules on proxy server in AWS EC2 instance.
Utilized agile workflow practices on a 4 -person remote team.

## Requirements
An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm)
Node 6.13.0.

## Requirements
An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm)
Node 6.13.0.

### Usage
Clone the repository from github into your local machine to make edits.
Code is available to view on github at https://github.com/huang-pei-mei/FEC-Aschale-Proxy.
Once you clone the repository, from within the root directory:

npm install
This will install the main server side dependencies.

npm run react-dev
Builds the app for production to the public folder. It correctly bundles React in production mode and optimizes the build for the best performance.

Make sure nodemon is installed on your system and then from the root directory:

npm run start
Runs the app in the development mode. Open http://localhost:3300 to view it in the browser.

## Sample Results from the Project
'http://18.188.223.199:3300/?bookId=1'  returns product page for 'A Promised Land by  Barak Obama'

'http://18.188.223.199:3300/?bookId=8' returns product page for 'Bossypants by Tina Fey'

'http://18.188.223.199:3300/?bookId=29' returns product page for 'Born a Crime by Trevor Noah'


## Technologies Used
  JavaScript
  React
  Node/Express
  Webpack
  Babel
  Grunt
  AWS (EC2, S3)

## Copyright and License
The MIT License (MIT) http://www.opensource.org/licenses/mit-license.php

