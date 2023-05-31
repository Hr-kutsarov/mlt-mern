import { gql } from '@apollo/client'

const DELETE_DEVLOG = gql`
    mutation deleteDevlog($id: ID!) {
        deleteDevlog(id: $id) {
            title
            entry
        }
    }
`

const CREATE_DEVLOG = gql`
    mutation addDevlog($title: String! $created: String! $entry: String!) {
        addDevlog(title: $title, created: $created entry: $entry) {
            title
            entry
        }
    }
`

const EDIT_DEVLOG = gql`
    mutation editDevlog(
        $id: ID!
        $title: String!
        $entry: String!
        ) {
            editDevlog(
                id: $id,
                title: $title,
                entry: $entry
                ) {
                    _id
                    title
                }
        }
`


export { CREATE_DEVLOG, EDIT_DEVLOG , DELETE_DEVLOG}