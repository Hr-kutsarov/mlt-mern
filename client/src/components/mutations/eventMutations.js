import { gql } from '@apollo/client'

const DELETE_EVENT = gql`
    mutation deleteEvent($id: ID!) {
        deleteEvent(id: $id) {
            title
            content
        }
    }
`


export { DELETE_EVENT }