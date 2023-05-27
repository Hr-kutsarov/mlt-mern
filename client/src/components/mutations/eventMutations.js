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

const EDIT_EVENT = gql`
    mutation editEvent(
        $id: ID!
        $title: String!
        $summary: String!
        $content: String!
        ) {
            editEvent(
                id: $id,
                title: $title
                summary: $summary
                content: $content
                ) {
                    title
                }
        }
`


export { DELETE_EVENT, ADD_EVENT , EDIT_EVENT}