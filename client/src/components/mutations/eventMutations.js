import { gql } from '@apollo/client'

const DELETE_EVENT = gql`
    mutation deleteEvent($id: ID!) {
        deleteEvent(id: $id) {
            title
            content
        }
    }
`

const ADD_EVENT = gql`
    mutation addEvent($title: String!, $summary: String!, $content: String!) {
        addEvent(title: $title, summary: $summary, content: $content) {
            title
            summary
            content
        }
    }
`


export { DELETE_EVENT, ADD_EVENT }