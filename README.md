# Audible Item Page

This is an mock-up audible item page built during the Hack Reactor immersive's Front End Capstone project. This project is designed to maintain all original functionality and mimic the style of audible item page. This is a proxy server that combines 5 different services together to displayes the audible item page for a given book.

The proxy has book data that is always associated with a certain book id and is hosted on AWS EC2 instances and S3 buckets. This proxy contains data for 100 books with the information stored both in Mysql  and Mongo databases. It also plays audio of the book when you click on the book cover icon



## Related Projects
  - https://github.com/huang-pei-mei/jm-proxy
  - https://github.com/huang-pei-mei/CM-proxy
  - https://github.com/huang-pei-mei/mkk-proxy


## Installation

Clone the repository from github onto your local machine to make edits. However page will not run locally with data because the service routes are directed to an AWS EC2 instance

Code is available to view on github at https://github.com/huang-pei-mei/FEC-Aschale-Proxy.

Run the following commands from within the root directory to run the services in your local machione once you pulle down the repository(alternatively you can follow the steps below):

```bash
fork 'https://github.com/huang-pei-mei/FEC-Aschale-Proxy'
git clone /path/to/clone.git
cd FEC-Aschale-Proxy
npm install
npm run server

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

