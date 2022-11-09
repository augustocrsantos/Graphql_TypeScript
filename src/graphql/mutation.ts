import {userMutation} from './userSchema' ;

const Mutation = `
type Mutation {

    ${userMutation}
}
`;
export {Mutation};