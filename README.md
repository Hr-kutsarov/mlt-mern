# Progress:

    [x] Install express, ~~graphql~~
    [x] Initialize Express app
    [x] Configure environmental variables storage
    [x] Fix CORS issue
    [x] Connect to Mongo Database
    [x] Initialize React client and install dependencies
    [x] Home page "/" contains Header, Main and Footer element
    [x] Header element contains a logo element and a navigation bar
    [x] Header navigation uses react-router-dom to render other components
    [x] Tested navigation links with Selenium
    [x] Main element displays all crud pages, collections etc.
    [x] Footer UI
    [ ] Footer navigation and functionality
    [x] Login page form UI
    [x] Login page form functionality
    [x] Register page UI
    [x] Login page functionality
    [x] Logout page UI
    [x] Logout page functionality
    [x] Authentication system
    [x] Password hashing
    [-] (JWT) token validation - unneccesary
    [x] Event mongo schema
    [x] Event controller
    [-] Event queries and mutations
    [x] Event crud views
    [x] Event details and navigation ticket price display
    [x] Event error pages
    [x] Event callendar view UI
    [x] Event callendar functionality
    [x] Artist mongo schema
    [-] Artist queries and mutations
    [x] Artist controller
    [x] Artist create, edit, read, delete views
    [x] Artist error pages
    [x] User mongo schema
    [-] User queries and mutations
    [-] User controller
    [x] Profile page UI
    [x] Profile page functionality
    [x] User error pages
    [x] Ticket mongo schema
    [-] Ticket queries and mutations
    [x] Ticket controller
    [x] Ticket create and delete
    [-] Ticket error pages
    [maybe] Payment system - Stripe
    [x] Devlog mongo schema - storing milestone data
    [-] Devlog queries and mutations
    [x] Devlog controller
    [x] Devlog create, edit, read, delete views and navigation
    [x] Devlog error pages
    [x] Deployment - live at https://my-local-theatre-app.onrender.com/
    [ ] Responsive

# Now live at https://my-local-theatre-app.onrender.com/

# FAQ

## Why not Django-REST or ASP.NET or else?

I want to spin this project around the idea of using GraphQL instead of AJAX for two reasons -
I only get the data properties that I need hence reducing data size and secondly GraphQL has built-in state
management storage.

However the FullCalendar view caused problem with rerendering (maybe) and the client broke in a way that it did not display any data fetched from the server. 
So I switched to Axios. The schemas, queries and mutations remain intact in this project for future reference.

## Why MongoDB and not PostgreSQL for example?

There is no need for relational databases. Event has time and place, User has ID. Ticket is created by combining the time and place with the user's unique identifiers. User can access their profile and extend the ticket so it can be scanned at venues.

## What do you get from MongoDB?

Mainly, GraphQL support, instant cloud storage, great free tier (512mb free storage) and lots of upgrade options.
There's are no files that are not saved in anything else but JSON format. All images are saved as strings and referenced with the href tag.

## Why Express ?

Integrates well with GraphQL, MongoDB and React

## Why React and not Angular, Next 13 or anything Vite?

Short answer - I do not like to keep my css in the component file. Long answer - Angular is a powerful
but an overcomplicated dinosaur which will be forgotten soon simply for its slow performence. SolidJS is extremely
fast but has a few quirks. Next seems great on paper but it has a few core concepts to get used with and right now
I'm most comfortable with React. There's no need for TypeScript either.

## Why not Redux?

Google search react redux docs. First page - the guy who wrote TEN THOUSAND words in Redux documentation
summed it up with these sentences.
"Redux is not meant for state management."
"React developers in 2016 needed a state management system and Redux was a solution."
Nuff said. There's no edge that cuts everything equally well.
There has to be a better way.

Why Zustand?
Zustand is built to be a state management system for React.
Under the hood that is a quick shortcut to storing objects, arrays, booleans in the Local Storage with its own key-value system.
Stored variables such as response data, tokens, IS_LOGGED_IN can easily be accessed from a custom "Store" under the "state" property.
This store can be called between different components.
No more prop drilling!

## How it works?

~~The client (React) sends requests via GraphQL language (gql). Those requests are either queries or mutations and are wrapped in gql tag.
Those queries are sent with the 'useQuery(gql_code)' hook from Apollo client.
As a result from the 'useQuery' callback function we can get the loading state of the data, the error object and the data itself that wraps the
entire json response. ~The data is also cached in the process.~ The data is dynamically unpacked in react components and then
the react dom applies changes wherever it has to.~~

MongoDB <-> Mongoose Model <-> FetchAPI/Axios <-> React <-> Browser
