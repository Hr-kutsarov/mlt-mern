#

# FAQ

## Why not Django-REST or ASP.NET or else?

   I want to spin this project around the idea of using GraphQL instead of AJAX for two reasons - 
   I only get the data properties that I need hence reducing data size and secondly GraphQL has built-in state 
   management storage.

## Why MongoDB and not PostgreSQL for example?

   There is no need for relational databases. Quick reminder to use KISS today. And if ever needed 
   it can also support object relationships without applying the so necessary algorithms used by relational databases.

## What do you get from MongoDB?

   Mainly, GraphQL support, instant cloud storage, great free tier (512mb free storage) and lots of upgrade options.

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
  The client (React) sends requests via GraphQL language (gql). Those requests are either queries or mutations and are wrapped in gql tag.
  Those queries are sent with the 'useQuery(gql_code)' hook from Apollo client. 
  As a result from the 'useQuery' callback function we can get the loading state of the data, the error object and the data itself that wraps the
  entire json response. The data is also cached in the process. The data is dynamically unpacked in react components and then 
  the browser renders everything.
  
#

# TODOs

    [x] Install express, graphql 
    [x] Initialize Express app
    [x] Configure environmental variables storage
    [x] Fix CORS issue
    [x] Connect to Mongo Database
    [x] Create object schema - Event (GraphQL object type, the fields property tag defines the type of data that will be stored - id, title, summary, content)
    [x] Create object schema - Artist (GraphQL object type, fields - name, birthDate, bio)
    [x] Create object schema - Ticket (GraphQL object type, fields - built with collective data from the user and event models)
    [x] Create object schema - User - (GraphQL object type, fields - email, password, role  
      !TODO implement email validation? JWT token validation? salting/hashing passwords?
    [x] Create queries for each Model (get one by id, get all)
    [x] Create mutations (create new Model, edit Model by id and delete Model by id)
    [x] Create mongoose schemas for Event, Artist, Ticket, User
    [x] Put Mutations and Queries into different files
    
    [x] Initialize React client and install dependencies
    [x] Divide the root element into three main components - Header , Main, Footer
    
