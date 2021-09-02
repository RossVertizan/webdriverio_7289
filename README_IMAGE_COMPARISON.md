## README for Image Comparison

### How to use this repo to reproduce the problem
Here are the steps to replicate the problem with this repo:

NOTE: The repo is also being used for a wdio issue, check the wdio.conf.js and make sure that only the savescreen_*.js files are selected in the specs section.

1. Clone the repo and open a shell in the top level of the repo
2. Run ```npm install``` - installs the necessary packages
3. Run ```npm install @wdio/sync``` - install the sync package
4. Run ```.\node_modules\.bin\wdio```

Check the directory .tmp/actual and see that the image screenshot_async_*.png has the page footer and the image screenshot_sync_*.png does not have the footer.


