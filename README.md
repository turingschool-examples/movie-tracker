# Movie Tracker

This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api - note you'll need to go create an account to get an API key). The idea of the project is to be able to sign in as a user and save favorite movies.

This repository will serve as your "backend", allowing you to connect to Postgres. You'll need to set up a separate client-side application (use create-react-app), to sit alongside this one. Do not put that project in the same repository as this one, save yourself a headache.

## Projeict Setup

* Clone down this repo and run `npm install`
* If you don't have postgresSQl, scroll down to `Setup Postgresql` and follow those steps.
* Run `npm start` - visit `localhost:3000/api/users` - you should see a json response with a single user.

## Setup Postgresql

#### IMPORTANT: If you already have Postgresql on your computer for some reason, you will need to uninstall it
For information on how to do this read [this](https://postgresapp.com/documentation/remove.html)

#### What is Postgresql?
* PostgreSQL is a powerful, open source object-relational database system

#### Installation:
* Head over to [Postres.app](http://postgresapp.com/) to download and install PostgreSQL
* When you click `initialize`, you should now be able to see that postgreSQL is running
* To be able to use the command line tools, you will need to run the following commannd in your terminal to configure your $PATH `sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
* You will need to close your terminal window and re-open it for the changes to take effect
	
#### Creating our database
* Make sure you are in you `movie-tracker` project folder
* From the command line, run the following command to create a users database `psql -f ./database/users.sql`
* When you start up the server (`npm install` and `npm start`), you should now be able to visit `localhost:3000/api/users` and see the database with a single user (Taylor)
	
#### Press CMD-T to create a new tab in your terminal
* Type `psql`. This will get you into the interactive postgres terminal. From here you can run postgres and sql commands. You might get an error *psql: FATAL: database "username" does not exist* To resolve this error type *createdb 'somthing does not exist'*

#### [PSQL Commands](http://postgresguide.com/utilities/psql.html)

## API - Endpoints

You will be using the fetch API to make all your api calls. If you are making a post request, note that you will need to pass in an options object with a method and headers - with a `'Content-Type': 'application/json'`. Additionally you will need to pass any any required fields into the body. Check out the [docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for additional info.

###### Users

 * ##### Sign In `/api/users`

  To sign in you will need to pass in *email* and *password* to the *body*.
  Emails should be sent in all lowercase. - ex: `{..., body: {email: 'tim@aol.com', password: 'password'} }`
  The database starts off with a single user inside. -> { email: tman2272@aol.com password: password }. Keep in mind the response will send the entire user back.

* ##### Create Account - `/api/users/new`
  Creating an account must have all input fields filled in (name, email, password)
  You must send all three into the body. Passwords are case sensitive.
  Keep in mind the response only gives the new user ID.

* ##### Add Favorite - `/api/users/favorites/new`
  To save a favorite you must send into the body: movie_id, user_id and title, poster_path, release_date, vote_average, overview.
  Keep in mind the response only gives the new favorite id

* ##### Receive All Favorites - `/api/users/:user_id/favorites`
  To get a users favorite movies you need to send in the user ID through the params. This will return an array favorite objects.

* ##### Delete a Favorite - `/api/users/:user_id/favorites/:movie_id`
  To delete a users favorite you must send in the users id and id of the movie.

### Iterations

##### Iteration 0: Pull in movie API
  * Pull most recent movies from MovieDB API.
  * Display each movie on root index `/`

##### Iteration 1: Sign In / Sign Out Functionality
  * Be able to sign in on page `/login` and redirect user to `/`
    * Flash "Email and Password do not match" - if password is incorrect
  * Ability to create a user.
    * Flash "Email has already been used" - if email has been taken
  * The user has the ability to sign out. 
  
##### Iteration 2: Favorites
  * Each movie should be displayed with a favorite button.
  * If the user is not signed in and clicks on a favorite button the user will be prompted with the request to create an account.
  * Validate favorites before adding to db. Aka does that user already have the movie stored as favorites. There should be no duplicates. 
  * If the user visits `/favorites` they should see a list of all their favorite movies.
  * The user should be able to delete favorites from `/favorites` or `/`.
  * Favorite movies should have a visual indication on `/`.

##### Extensions:
  * A user stays signed in after refreshing the page. *Hint:* You will probably use localStorage. 
  * Should only take real email addresses *Hint:* Look into regular expressions
  * A user can click and view any individual movie.
  
## Rubric 

### Specification Adherence

* 4 - All requirements from 3 are met. The application completes all iterations above and implements one or 
  more of the extensions. And the evaluator has no recommendations for design changes.
* 3 - The application completes all iterations above without error. Evaluator has minimal
  recommendations for design changes.
* 2 - The application is in a usable state, but is missing part of one or more of the 
  features outlined above. Evaluator has multiple recommendations for design
  changes.
* 1 - The application is missing multiple features outlined above. Developer did
  minimal to no CSS for this project.
  
  [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)

### Project Professionalism

* 4 - All requirements from 3 met, codebase has zero linter errors/warnings and
  readme contains screenshots of application. Project team uses a rebase
  workflow, taking advantage of github issues to track work. Project shows a
  complete mastery of React architecture.
* 3 - PropType functionality is complete, the codebase has less than 5 linter
  errors, README has been updated with all group members. Project utilized
  wireframes from the outset. All git commits are atomic, made first to
  branches, and use descriptive and consise commit messages. Project
  demonstrates a fundamental understanding of React architecture.
* 2 - Project is missing PropTypes, README updates, wireframes, or has more
  than 5 linter errors. Project team makes large infrequent git commits.
  Project shows a basic understanding of React.
* 1 - PropTypes are substantially unused, README is incomplete, wireframes were
  not used, or more than 10 linter errors are present. Git history does not show
  evolution of project, with many large and inconsistent commits. Project shows
  little understanding of React and significant refactoring is required.

### Testing

* 4 - All requirements from 3 met, all async functionality is tested, tests are
  passing and run efficiently (using mount only when appropriate).
* 3 - All Redux functionality is tested (actions, reducers, mapStateToProps, mapDispatchToProps), all
  components are unit tested, and a valid attempt was made to test any async
  functionality.
* 2 - Nearly all unit tests for Redux and React are in place. No attempt to test
  async functionality was made.
* 1 - A valid attempt to test this application was made, but there are obvious
  gaps, with missing unit tests for Redux and React.

### Redux Architecture

* 4 - All requirements from 3 met, and no duplication of data exists in the
  store. Data in the store remains flat (not nested).
* 3 - Appropriate components are wrapped in connected Redux container components. The Redux store contains all necessary      application data. All state changes are handled through Redux actions and reducers.
* 2 - At least one component is not connected with Redux appropriately. Application state is mutated by more than just Redux. The Redux store is missing application data that it should be handling.
* 1 - Application state is mostly outside the control of Redux. Application did not make use of Redux actions and reducers to mutate state. Components do not demonstrate a clear understanding of stateful vs. statelessness.

### Routing

* 4 - All requirements from 3 met, and always chooses the correct component for
  rendering, as well as the correct Route API. Application should account for
  undefined routes.
* 3 - Application uses React Router to display appropriate components based on URL.
* 2 - Application uses React Router, but does not display the appropriate components upon navigating.
* 1 - Application uses React Router, but does not render/use all routes.

