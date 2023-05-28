import { gql } from '@apollo/client'

const DELETE_EVENT = gql`
    mutation deleteEvent($id: ID!) {
        deleteEvent(id: $id) {
            title
            summary
        }
    }
`

const ADD_EVENT = gql`
    mutation addEvent($title: String!, $summary: String!, $content: String!, $pictureUrl: String! ) {
        addEvent(title: $title, summary: $summary, content: $content, pictureUrl: $pictureUrl) {
            title
            summary
            content
            pictureUrl
        }
    }
`

const EDIT_EVENT = gql`
    mutation editEvent(
        $id: ID!
        $title: String!
        $summary: String!
        $content: String!
        $pictureUrl: String!
        ) {
            editEvent(
                id: $id,
                title: $title
                summary: $summary
                content: $content
                pictureUrl: $pictureUrl
                ) {
                    title
                    pictureUrl
                }
        }
`


export { DELETE_EVENT, ADD_EVENT , EDIT_EVENT}