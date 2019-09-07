# tripBuddy Dashboard

## TODO
* Need to move images from ```public``` to ```src/assets/img``` - I'm having trouble referencing files in this directory from a page {favicon and images used in the ```<head>``` of pages can stay in ```public```}
* Create AuthenticationService file for ```src/components/PrivateRoutes```
* Find a better way to conditionally show header and sidebar on the login page

## Requirements
* https://nodejs.org/en/download/
* Make sure you have at least Node 4.3: ```node --v```

## Quick Start
1. Clone the repository: ```git clone https://www.bitbucket.org/tripbuddy-app/admin-dashboard.git```
2. Change current directory to '/admin-dashboard': ```cd admin-dashboard```
3. Install dependencies: ```npm install```
4. Run: ```npm start```
5. This should automatically open a new window to [http://localhost:3000](http://localhost:3000)
6. Create a new branch to start making contributions ```git checkout -b your-branch-name```

## Deploying
* When you're ready to push your changes to the repo, run ```npm run build```. This correctly bundles React in production mode and optimizes for the best performance.
* You can preview the production build by running ```NODE_ENV=production node server.js```
* Open [http://localhost:5000](http://localhost:5000) to view it in the browser
to confirm everything works!

### Creating a Page
* Create a new file in src/pages, ```YourNewPage.js```
 * Copy the code from ```src/pages/TemplatePage.js``` into your new file
 * Be sure to update the class name and the last line to reflect the new file name
* In ```src/components/app/App.js```, import your new page at the top of the file
* Add a new ```<Route>``` component to the ```App()``` function, following the style of the other pages
* Create a new function in ```App.js``` which returns your page that you imported
* And that's it!
 * One last note I'll add - in your new page, there is a function called ```routeChange()```. This helps you link to other pages. You'll need to modify the ```path``` variable to direct a button/link to a different page.
 * You can reference the 'sign in' button in the ```LoginPage.js``` file to get a better understanding of how it works.
  * {This may not be the best way to link to other pages. If you find a better method, please feel free to update this and make necessary changes elsewhere}

<!--
  This deploying section might need some rewording ^^

  I'm pretty sure this is what this command {^^^} does, but I'm not 100% sure :/
  * might need to modify .gitignore file with /build et al.
-->

## Learn More About React
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
