import gpl from "graphql-tag";


export const CREATE_AUTHOR = gpl`
mutation($author: AuthorInput!) {
    createAuthor(input: $author){
        id
        name
        birth_date
        genre
        nationality
    }
}
`;

export const DELETE_AUTHOR = gpl`
mutation($id: ID!) {
    deleteAuthor(id: $id){
        id
    }
}
`;

export const UPDATE_AUTHOR = gpl`
mutation($author: UpdateAuthorInput!) {
    updateAuthor(input: $author){
        id
    }
}
`;