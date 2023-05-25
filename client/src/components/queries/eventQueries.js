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
