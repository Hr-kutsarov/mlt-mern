# My Local Theatre App
Rework of my past project "My local theatre" project at SoftUni done with React, Express, NodeJS and MongoDB

# Depoloyment

[See this project live here](https://my-local-theatre.onrender.com/)

# Case study

## Copy the functionality of already existing website, assume the needs of the administrators and clients and build upon the key concepts. 
[The website in question.](http://www.tba.art.bg/)

## Key concepts

- Display the upcoming events (sorted from the earliest to the latest on the home page).

- Display announcements from the staff. (the latest)

- Show profiles of the artists and staff.

- Secure the application - add role based access to certain content. (Moderator, Authenticated and Visitor)

- Secure the passwords and add validation to all forms.

- Moderators can manage the entire website - perform full CRUD operations on Events, Announcements, Artist profiles and tickets. 

- Provide Admin panel for Moderators to track ticket income as a summary and also with graphs (income and ticket purchases per day of the week in this case)

- Moderators can create new Events and attach the Artist profiles to those events. Users viewing the artist profile can see in which Events they perform.

- Authorized users can view Events/Plays in two ways - as a list of events or as events displayed on a calendar.

- Selecting an Event will provide with an option to purchase a Ticket.

- A Ticket combines the information of the Event and User objects as well as the Chosen Seat Number.

- Each User may see their purchased tickets in their Profile. Tickets in the User profile are related by their object key.

- The Ticket information contains a QR code for scanners. (In case the User needs to present their Ticket at the entrance)

- Ticket purchases require few steps. A registered user, authorization, event selection, selected seat, confirmation for purchase and a confirmation from the server (upon successful request/payment).

- Each event has a layout of all available (and unavailable) seats. Purchased Tickets will mark the seats unavailable.

### Queries

> Initially, this project was done with Apollo client and GraphQL. The implementation of the Calendar caused React to not be able to display data. Weird enough but switching to axios solved the issue.
The only reason why I chose Axios over FetchAPI is the shorter syntax.

All server-db queries are done with MongoDB's client - Mongoose.

Displaying long-listed queries are handled with Lodash.

### Form libraries

Some form layouts are plainly written in CSS. There is also an implementation of MaterialUI's form. 
Errors are handled by useState.
> This is not how it should be done though. It's better to use React-hook-form.

### Scrolling effects

There's an implementation of Framer Motion. 
> Looks cool but it's not recommended for responsive desgin. Swiper would be a better choice.

### Styling 

> The main approach here is to give an ID to a new View, separate the content of it into smaller components and use the Parent > Child syntax to specifically target DOM elements. This approach proved to be slow, inefficient, hard to maintain and excludes classes as a whole. On the other hand though there are no mishaps between components, if the style breaks in one place it does not affect any other so problems can be resolved within the JS and CSS files of that particular component. There is Cascade-style targetting and zero amount Cascade-style disasters. 

### Seats layout 
> This is a question that's been bugging me for a while. I don't like having to scroll off-screen just to select a ticket and given the seriousness and real-life application of this project I decided that displaying the exact layout of the stage and seats in front of it is not of primary concern.

> The obvious choice, given the tech stack was to give a number that is the maximum available seats and place them in a grid that changes according to screen size. When the user attemps to purchase a ticket a query to the DB is made requesting the numbers of the already purchased tickets. Then the layout will render the modal while the buttons matching a ticket with that number will be labeled and disabled. 

### Image upload

> I'm not using an S3 bucket or similar. It is entirely up to the moderator to select which online service for hosting images they would use and just post the link to that image in the creation form.
> The entire content of the site is hosted in NoSQL database and all data is essentially a collection of objects and strings. My main concern for this decision was the storage size, the cost and the needs of the users. There might be an event twice per day and that's just about images per month. Paying for a bucket is not an essential feature.

### Testing

> The tests done for this app are only E2E with Selenium

### Email confirmation service

> In development


### Cost

> FREE!

