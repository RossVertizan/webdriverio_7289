## RossVertizan/weddriverio_7289
Testcase provided for webdriverio #7289

### How the repo was created

After creating a new repo on GitHub, it was cloned to my local machine.

I then ran the following commands:
```shell
npm init -y
npm install @wdio/cli
.\node_modules\.bin\wdio
```
At this point the configuration utility ran and I selected all default options.  I did not have scripts generated.

I copied the ```test``` folder and everything it contains into the hierarchy, as well as the wdio.conf.js file.

### Passing tests without @wdio/sync
I then ran:
```shell
.\node_modules\.bin\wdio
```
and all tests passed

### Failing test with @wdio/sync
I then did:
```shell
npm install @wdio/sync
.\node_modules\.bin\wdio
```
and now the final test fails with the error:
```text
SecurePage.btnSubmit.click is not a function
```

### How to use the repo
Here are the steps to replicate the above with this repo:

NOTE: The repo is also being used for a wdio-image-comparison-service issue, check the wdio.conf.js and make sure that only the example.e2e.js file is selected in the specs section.

1. Clone the repo and open a shell in the top level fo the repo
2. Run ```npm install``` - installs the necessary packages
3. Run ```.\node_modules\.bin\wdio``` - observe that all the tests pass
4. Run ```npm install @wdio/sync``` - install the sync package
5. Run ```.\node_modules\.bin\wdio``` - observe that the final test fails

The final test fails with the message:
```text
SecurePage.btnSubmit.click is not a function
```
This demonstrates the problem being described.

### Platform being used for preparation of repo

Node: v14.17.5
OS: Windows 10 Version 21H1 (OS Build 19043.1165)
