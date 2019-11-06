import { gql } from 'apollo-server';
const typeDefs = gql`
directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD
scalar Date
type Book {
  title: String
  author: String
}
type Token {
  token: String
}
type Comment {
  _id: ID
  comment: String
  isActive: Boolean
  postID: ID
  authorID: ID
  createdAt: Date
  updatedAt: Date
}
type User {
  name: String
  lastName: String
  email: String
  gender: String
  posts: [Post]
}
input UserInput {
  name: String
  lastName: String
  email: String
  gender: String
  password: String
  profileImage: Upload
}
type Post {
  _id: ID
  title: String
  content: String
  likes: Int
}
input PostInput {
  title: String
  content: String
  likes: Int
}
input CommentInput {
  comment: String
  postID: ID
}
type Query {
  books: [Book] @AuthDirective
  getPostComments(postID: String): [Comment] @AuthDirective
  getUserData : User @AuthDirective
}
type Mutation {
  addUser(data: UserInput) : Token
  addPost(postInfo: PostInput) : Post @AuthDirective
  addComment(commentData: CommentInput) : Comment @AuthDirective
  doLogin(userName: String, password: String) : Token
  updateComment(comment: String, commentID: ID) : Comment @AuthDirective
  delteComment(commentID: ID) : Comment @AuthDirective
}
type Subscription {
  postAdded: Post
}
`;
export default typeDefs;