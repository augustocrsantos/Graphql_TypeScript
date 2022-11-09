import {userQueries} from "./userSchema";


const Query = `
type Query{
    ${userQueries}
}

`;

export { Query }