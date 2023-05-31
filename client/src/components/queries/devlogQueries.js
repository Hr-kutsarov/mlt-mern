import { gql } from '@apollo/client'

export const GET_ALL_DEVLOGS = gql`
    query {
        getAllDevlogs {
            _id
            title
            created
            entry
        }
    }
`

export const GET_DEVLOG = gql`
    query getDevlog($id: ID!) {
        getDevlog(id: $id) {
            _id
            title
            created
            entry
        }
    }
`