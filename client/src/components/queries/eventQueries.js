import { gql } from '@apollo/client'

export const GET_EVENTS = gql`
    query {
        allEvents {
            _id
            title
            summary
            content
            pictureUrl
        }
    }
`

// Not used at the moment
export const GET_EVENT = gql`
    query getEvent($id: ID!) {
        getEvent(id: $id) {
            _id
            title
            summary
            content
            pictureUrl
        }
    }
`