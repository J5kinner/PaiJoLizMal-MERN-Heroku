
# [Paijolizmal](https://comp3120-group-x.herokuapp.com/) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)![npm version](https://img.shields.io/npm/v/react.svg?style=flat)![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

``Paijolizmal`` is a progressive web application which is for tracking productivity collaboratively built with React, MongoDB, Express, SASS and hosted with Heroku.
<p align="left"> 
    <p>   <a href="https://reactnative.dev/" target="_blank"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40" /> </a>
      <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />
 <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a>
  <a href="https://mui.com/" rel="noopener" target="_blank"><img width="40" src="https://mui.com/static/logo.svg" alt="MUI logo"></a>
  <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" /> </a>
</p>


* **Time Tracking:** Paijolizmal makes it painless to keep track of productivity of its users using a `pomodoro` to keep track of time when the user starts and finishes a task. 
* **Transaction System:** After every `pomodoro` completion the user is rewarded with a coin which they can spend on creating special notes about their experience during their period of focused work. 
* **Collaborative Homepage:** On the home page users notes will be visible to all users here where they can draw on inspiration or see other people working just as hard as they are, or even share their own tips on how they stayed productive in a fun and creative way. [HEROKU LINK](https://comp3120-group-x.herokuapp.com/).



## MVP Implementation

You can improve it by sending pull requests to [this repository](https://github.com/reactjs/reactjs.org).

## Where the most work has been done
📦group-web-project-group-x  
 ┣ 📂SCREENSHOTS  
 ┣ 📂public  
 ┣ 📂server  
 ┃ ┣ 📂controllers  
 ┃ ┣ 📂models  
 ┃ ┣ 📂testRequests  
 ┃ ┣ 📂tests  
 ┣ 📂src  
 ┃ ┣ 📂assets  
 ┃ ┃ ┣ 📂global  
 ┃ ┃ ┣ 📂img  
 ┃ ┃ ┣ 📂scss  
 ┃ ┃ ┃ ┣ 📂components  
 ┃ ┃ ┃ ┣ 📂layout  
 ┃ ┃ ┃ ┗ 📂views  
 ┃ ┣ 📂components  
 ┃ ┃ ┣ 📂header  
 ┃ ┃ ┣ 📂shop  
 ┃ ┣ 📂services  
 ┃ ┣ 📂tests  
 ┃ ┣ 📂views  
 ┃ ┃ ┣ 📂Dashboard  
 ┣ 📜DEPLOYMENT.md  
 ┣ 📜Procfile  
 ┣ 📜README.md  
 ┣ 📜jest.all.config.js  
 ┣ 📜package-lock.json  
 ┣ 📜package.json  
 ┗ 📜static.json  


`Paijolizmal` is a full-stack application composed of a frontend and backend section.

**Frontend**
        
The majority of the frontend source code will be found within the `src` directory.

`App.js`: serves as the core component and central controller of the application, rendering the routes used and collecting data from the server. `App.js` is generated by the application entry point `index.js`.

The `views` directory contains the main web pages and components of the application: 
* `HomePage.js`: Renders the home page with the list of notes.
* `LoginPage.js`: Contains the toggleable login and sign-up modules.
* `Navigation.js`: File which configures all the routes for the web page
* `PrivateRoute.js`: Used to render routes that require users to be authenticated before accessing.
* `Dashboard`: Directory containing all necessary elements for the Dashboard
    *` DashboardPage.js`: File responsible for the structure and rendering of all required components
    * `EarnedPopUp.js`: Component to calculate and display a pop-up message regarding earned coins after the Pomodoro session has been included.
    * `ErrorPopUp.js`: Component to be used to display any error message on the Dashboard
    * `PomodoroTimer.js`: The timer component that allows user to select an expected timeframe, then start, stop 
    * `ProfileCard.js`: Component to display user info, user statistics as well as the forms to allow the user to update their username or password

The `tests` directory contains all the frontend `jest` tests for the application. Inside this directory, we have:
* `jest.config.js`: Configures test environment and creates a mock server
* `Snapshots.test.js`: File containing various tests for frontend components

The `services` directory contains all the `axios` API calls required in the application. They separated into individual files: `TimerService.js`, `UserService.js`, and `NoteService`.js

The `assets` directory contains styling files used in all parts of the application:
* `Colours.js` contains all the colours used in the application, used to keep the theme of each page consistent
* `global` directory contains a file `_colours.scss` for all the available note blobs
* `img` directory contains the SVGs used in the `SlideShop` component
* `scss` contains an additional directory of all the `scss` files used to style pages in the applications

The `components` directory is for reusable or complex standalone components used in the application. 
* `Btn.js` styled button component used in the application for various buttons
* `Notes.js` and `NotesGrid.js` produce a styled view of all the notes currently used on the Homepage
* The `header` directory contains the files `Header.js` and `HeaderMenu.js` that renders the top navigation pane on the application
* The `shop` directory contains the `SlideShop.js` component and `NoteEditorjs`, which makes up the entire shop in the Dashboard



**Backend**
        
The backend code can be found in the `server` directory. The backend uses Node/Express and is connected to a MongoDB database. In that directory, we have: 
* `server.js`: initialises the server on the correct port
* `app.js`: contains the configuration of the Express server
* `ingestdb.js`: file used for a temporary replacement of database
* `models` directory: contains the Mongoose schema for each object to be stored in the database
* `controllers` directory: contains the routing for each request made for/to the objects in the database
* `testRequests` directory: contains a file for each request that allows for API requests to be made without the need of a frontend client
* `tests` directory: contains the various `jest` tests for the backend, including a configured test environment


## Next Steps
Given extra time to work on the application, there are a number of possible improvements.        
        
**Additional Note Designs**
        
More colours and shapes for the notes could be released for the shop, which could induce further excitement for the app.

**User Interaction** 
        
Include the capability of users to interact with each other using comments, likes, and public-facing profiles. Having this feature could increase user numbers as well as help to retain users on the platform.

**Visual Time Tracking Statistics**
        
Breakdown statistics by task category and provide a more detailed visual view in charts/graphs. By introducing this view on top of the numerical statistics, users with a preference for visual data can be inspired to continue being productive with their time.

**Enhanced Security** 
Use session tokens to manage the frontend login session instead of a `jwt` token. Handle the `jwt` tokens entirely on the server side. This would prevent malicious attackers from simulating legitimate user requests.

** Improved Scalability** Implement handling of many notes; this could either be listing notes by category or viewing notes by user groups or user associations. Currently, all existing notes are being displayed on the homepage, which could potentially get out of hand.


## Communication & Roles
### Communication
[Trello](https://trello.com/b/Qfrxz3KY/group-project-comp3120) 
Trello is a collaborative tool, useful for agile development. Trello tickets have the capability to assign members, add comments, establish checklists, attach deadlines, add labels (e.g. `blocked`, or `done`) and more. These features enabled group members to communicate their progress, constraints, as well as pass on directly relevant information. Group X used multiple lists throughout the project that contained tracked tasks to be completed. Notable lists were:
* Product Backlog: included the tickets to be completed in the project overall (scrum, comments, labels)
* Sprint Backlog: contained the tickets to be completed in the current sprint
* Increment: included completed tasks from all the completed sprints
* Action Items: miscellaneous and non-coding related tasks
* Bugs: the record of unexpected behaviours to address


[Discord Server](https://discord.com/) 

Discord serves as the primary communication platform for team members. Discord allows for the creation of separate channels in a private server for members to use, thus making it easier to track information shared by others, such as essential links or announcements. It also has voice channels, which was used to host weekly 1 hour meetings throughout the project.

[Google Drive](https://docs.google.com/document/d/13KKy5rsJJ_vo6XVw1Ib0G1EyBDpnYyWprtSj0C4mlhw/edit?usp=sharing)

Google Drive is a cloud platform to share and store relevant files for the project accessible by members of the group.

[GitHub](https://github.com/MQCOMP3120-2021/group-web-project-group-x)

GitHub is a version control platform that was used throughout development. To avoid clashes during development, members would break off into separate branches (for each feature). Once the feature was completed, a pull request would be created and reviewed by other members before being merged into the `master` branch.

[Figma](https://www.figma.com/file/F0mzjtvkoUU5UOSzJtzv1L/The-Second-Draft?node-id=0%3A1)

Figma was a visual tool used for various purposes. Initially it had been used to brainstorm ideas for the application, as multiple users can make changes simultaneously. Once the outline for the application had finished, wireframes for each page were constructed by the team to further solidify the design and flow for the application. The project's lead designer then built on the wireframes for a preliminary design and theme for the website. After the website had matured, the final theme and design were established and used as a reference for the developer to finalise the styling.


 ### Roles 
 * **Front-End Software Engineer/Lead Designer**: [Jonah Skinner](https://github.com/J5kinner)
 
    Main Responsibilities
    * Produce designs for the application, including the structure of visual elements and colour themes
    * Polish existing styling already live on the website
    * Communicate and distribute design elements to team members

    Additional Contributions
    * Deployment on Heroku
    * Shop development
    * Testing

 * **Middleware Software Engineer**: [Elizabeth Laham](https://github.com/elizabetht94)

    Main Responsibilities
    * Handle and streamline communication from the client-side to server-side

    Additional Contributions
    * User sign up/login and client-side authentication
    * Helped with deployment
    * Add styling to various components on client-side

 * **Frontend Software Engineer**: [Paige Anthony](https://github.com/paigelea)

    Main Responsibilities
    * Implement functionality for various components for the client-side application
    * Add in design to elements to the application

    Additional Contributions
    * Documentation
    * Establish the application logic for the timer

 * **Backend Software Engineer**:  [Malachi Mashiah](https://github.com/Ner0theHer0)

    Main Responsibilities
    * Set up database and server
    * Configure object models
    * Configure backend routing for object interaction/creation

    Additional Contributions
    * User authentication/token handling


