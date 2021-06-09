module.exports = function (grunt) {

  grunt.initConfig({
    aws: grunt.file.readJSON("credentials.json"),
      s3: {
      options: {
        accessKeyId: "<%= aws.key %>",
        secretAccessKey: "<%= aws.secret %>",
        bucket: "fec.audible.itempage"

      },
      build: {
        cwd: "../price-service/public",
        src: "**",
        dest: "Price/"
      },
      build: {
        cwd: "../title-service/public",
        src: "**",
        dest: "Title/"
      },
      build: {
        cwd: "../also-enjoyed-service/public",
        src: "**",
        dest: "AlsoEnjoyed/"
      },
      build: {
        cwd: "../reviews-service/dist",
        src: "**",
        dest: "Reviews/"
      },
      build: {
        cwd: "../FEC-Publishers-Summary/public",
        src: "**",
        dest: "Summary/"
      },
      build: {
        cwd: "../FEC-AggReview/public",
        src: "**",
        dest: "AggReviews/"
      },
      specificFiles: {
        files: [{
          src: "public/index.html",
          dest: "Proxy/index.html"
        },{
          src: "public/style.css",
          dest: "Proxy/proxyStyle.css"
        }, {
          src: "../title-service/client/styles.css",
          dest: "Proxy/titleStyle.css"
        },{
          src: "../price-service/client/assets/styles.css",
          dest: "Proxy/priceStyle.css"
        },{
          src: "../title-service/public/title-service.js",
          dest: "Title/title-service.js"
        }, {
          src: "../also-enjoyed-service/client/assets/styles.css",
          dest: "Proxy/alsoEnjoyedStyle.css"
        },{
          src: "../reviews-service/dist/reviews.js",
          dest: "Reviews/reviews.js"
        }, {
          src: "../price-service/public/priceBundle.js",
          dest: "Price/priceBundle.js"
        },{
          src: "../also-enjoyed-service/public/alsoEnjoyedBundle.js",
          dest: "AlsoEnjoyed/alsoEnjoyedBundle.js"
        },{
          src: "../FEC-Agg.Review/public/aggReview.js",
          dest: "AggReviews/aggReview.js"
        },{
          src: "../FEC-Publishers-Summary/public/summary.js",
          dest: "Summary/summary.js"
        }]
      }
    }
  });


  grunt.loadNpmTasks("grunt-aws");
  grunt.registerTask("default", ["s3"]);
};