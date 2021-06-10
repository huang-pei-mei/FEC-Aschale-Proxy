# Project Audible Item Page


## Table of Contents
- [Project Audible Item Page](#project-audible-item-page)
  - [Table of Contents](#table-of-contents)
- [Overview: Audible Item Page](#overview-audible-item-page)
  - [Product Page Live Demos and Screenshots Below](#product-page-live-demos-and-screenshots-below)
  - [Related Services](#related-services)
  - [My contributions](#my-contributions)
  - [Requirements](#requirements)
  - [Development](#development)
    - [Usage](#usage)
  - [Sample Results from the Project](#sample-results-from-the-project)
  - [Technologies Used](#technologies-used)
  - [Copyright and License](#copyright-and-license)
- [Audible Item Page](#audible-item-page)
  - [Related Projects](#related-projects)
  - [Installation](#installation)
  - [Installing Dependencies](#installing-dependencies)
  - [Contributing](#contributing)
  - [License](#license)


# Overview: Audible Item Page
This is an mock-up audible item page built during the Hack Reactor immersive's Front End Capstone project. This project is designed to maintain all original functionality and mimic the style of audible item page. This is a proxy server that combines 5 different services together to displayes the audible item page for a given book.

The proxy has book data that is always associated with a certain book id and is hosted on AWS EC2 instances and S3 buckets. This proxy contains data for 100 books with the information stored both in Mysql and Mongo databases. It also plays audio of the book when you click on the book cover icon

## Product Page Live Demos and Screenshots Below



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

## Development
<!-- The database folder includes two helper functions which generates random data and populates the generated data into the database. The first helper function which generates random data and save the generated data into the database is located in database/populateData.js file. The mongo db setup file which specifies the database schema is located in database/index.js file

The App componet which includes RenderDom is located in client/src/index.js file. Using the following url `http://localhost:1220/api/summary/${bookId}` the app component fetches publisher's summary and copyright information for a given book from the server to be rendered.

The server with two endpoints are located in server/index.js. The first endpoint is `/api/summary/:bookId` This takes a random book id and returns an object with the following data {id: Number, summary: String, short_summary: String, copyright: String}.

The second endpont`http://localhost:1220/api/summaries/:bookIds` will accept array of book ids and returns an array of objects with the following data for each of the book ids {id: Number, summary: String, short_summary: String, copyright: String} -->

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





# Audible Item Page





## Related Projects
  <!-- - https://github.com/huang-pei-mei/jm-proxy
  - https://github.com/huang-pei-mei/CM-proxy
  - https://github.com/huang-pei-mei/mkk-proxy -->


## Installation

Clone the repository from github onto your local machine to make edits. However page will not run locally with data because the service routes are directed to an AWS EC2 instance

Code is available to view on github at https://github.com/huang-pei-mei/FEC-Aschale-Proxy.

## Installing Dependencies
Once you clone the repository, navigate to the main directory and then from within the  directory:

npm install
This will install the main server side dependencies.


npm start
Run the following commands from within the root directory to run the proxy in your local machione once you pulle down the repository(alternatively you can follow the steps below):

```bash
fork 'https://github.com/huang-pei-mei/FEC-Aschale-Proxy'
git clone /path/to/clone.git
cd FEC-Aschale-Proxy
npm install

```

<!-- ## Usage

```javascript

'http://54.153.95.228/books/10/'  returns product page for 'The Fellowship of the Ring by  J. R. R. Tolkien'

'http://54.153.95.228/books/2/'  returns product page for 'My Own Words by Ruth Bader Ginsburg, Mary Hartnett, Wendy W. Williams'

``` -->

## Contributing
This page is not currently open for contributions

## License
N/A




<!-- ## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions -->

<!-- ## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
``` -->

