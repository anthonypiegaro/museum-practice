# museum-practice
This webapp allows users to display 10 random artworks from the desired department from the Metropolitan [Museum of Art Collection API](https://metmuseum.github.io/) and display these images on a webpage.
## Getting Started
To get started, you need to have [node.js installed](https://nodejs.org/en/). After you have node.js, you can download this repo by cloning it. To download the museum-practice, you can run the following in the command line:
```
git clone https://github.com/anthonypiegaro/museum-practice.git
```
Now enter the project. Then you need to install the following dependecies:
- express, for a framework
- ejs, for templating
- jest, for testing

To install these dependencies, you can run the following command:
```
npm install
```
The 'npm install' command should add all the dependencies and devDependencies automatically during installation. If you need to add specific devDependencies to your project, you can use this command:
```
npm install --save-dev
```
To run the project, you will want to select your PORT that you want your server to listen on, as well as the department you want to get your images from. To select your port, enter the server.js file and search at the top for the following line:
``` 
const PORT = 3000;
```
and enter the port of your choosing. It is currently preselect for port 3000.
To change the desired department, you may change the departmentName in the route art.js file. You need to make sure that the department in a valid department. You can check this by going to the [Museum of Art Collection API](https://metmuseum.github.io/).
Finally, to run the server, you execute the following command:
```
node server.js
```
This will start the server and listen on your desired port. To get to the webpage, enter the followig in your browser:
```
localhost:<port>
```
Where port is where the server is listening. For example, if your port is 3000, you would have the following:
```
localhost:3000
```
Now the web app should be up and running.
## Testing
The testing framework used for this project is jest. The tests are located in the returnImages.test.js file. These tests check that all images are valid and that all images returned are random. To run the tests, you can do either of the following two options:
- run a specific test file
- run all tests

To run a specific test file, execute the following in the command line:
```
npx jest <file-name>
```
for example, if I wanted to run the tests from returnImages.test.js, I would execute the following:
```
npx jest returnImages.test.js
```
To run all test, you just omit the specific filename and run
```
npx jest
```

## Thank you
That is all you need to start and test the project. I hope you enjoy. Thank you!
