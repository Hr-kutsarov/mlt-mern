#

# FAQ

## Why not Django-REST or ASP.NET or else?

    The structure is quite simple: the user can view the upcoming events at the theatre. The user can be 
    either 'admin' (may perform CRUID operations on the events) or 'customer' (may view events and 
    create ticket by successfully purchasing the 
    $Sum via Skrill or Stripe, PayPal).
    Tickets are composed by parameters found in the User model and the Event model.

## Why MongoDB and not PostgreSQL for example?

    There is no need for relational databases! Keep it simple! And if needed it can also support object 
    relationships without applying the so necessary algorithms used by relational databases.

## What do you get from MongoDB?

    Mainly, GraphQL support, instant cloud storage, great free tier (512mb free storage) and lots of upgrade options.

## Why Express ?

    Integrates well with GraphQL, MongoDB and React

## Why React and not Angular, Next 13 or anything Vite?

    Short answer - I do not like to keep my css in the component file. Long answer - Angular is a powerful 
    but an overcomplicated dinosaur which will be forgotten soon simply for its slow performence. SolidJS is extremely 
    fast but has a few quirks. Next seems great on paper but it has a few core concepts to get used with and right now 
    I'm most comfortable with React.

#

# TODOs

    [x] User model
    [x] Express init
