import { gql } from '@apollo/client'

export const GET_EVENTS = gql`
    query {
        allEvents {
            _id
            title
            summary
            content
        }
    }
`

export const GET_EVENT = gql`
    query getEvent($id: ID!) {
        getEvent(id: $id) {
            _id
            title
            summary
            content
        }
    }
`