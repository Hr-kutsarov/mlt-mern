## How it works?
  The client (React) sends requests via GraphQL language (gql). Those requests are either queries or mutations and are wrapped in gql tag.
  Those queries are sent with the 'useQuery(gql_code)' hook from Apollo client. 
  As a result from the useQuery hook we can get the loading state of the data, the error object and the data itself that wraps the
  entire json response. The data is also cached in the process. The data is dynamically unpacked in react components and then 
  the browser renders everything.
  
