"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\ndirective @AuthDirective on QUERY | FIELD_DEFINITION | FIELD\nscalar Date\n\ntype Book {\n  title: String\n  author: String\n}\n\ntype Token {\n  token: String\n}\n\ntype Comment {\n  _id: ID\n  comment: String\n  isActive: Boolean\n  postID: ID\n  authorID: ID\n  createdAt: Date\n  updatedAt: Date\n}\n\ntype User {\n  name: String\n  lastName: String\n  email: String\n  gender: String\n  posts: [Post]\n}\n\ninput UserInput {\n  name: String\n  lastName: String\n  email: String\n  gender: String\n  password: String\n  profileImage: Upload\n}\n\ntype Post {\n  _id: ID\n  title: String\n  content: String\n  likes: Int\n}\n\ninput PostInput {\n  title: String\n  content: String\n  likes: Int\n}\n\ninput CommentInput {\n  comment: String\n  postID: ID\n}\n\ntype Query {\n  books: [Book] @AuthDirective\n  getPostComments(postID: String): [Comment] @AuthDirective\n  getUserData : User @AuthDirective\n}\n\ntype Mutation {\n  addUser(data: UserInput) : Token\n  addPost(postInfo: PostInput) : Post @AuthDirective\n  addComment(commentData: CommentInput) : Comment @AuthDirective\n  doLogin(userName: String, password: String) : Token\n  updateComment(comment: String, commentID: ID) : Comment @AuthDirective\n  delteComment(commentID: ID) : Comment @AuthDirective\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var typeDefs = (0, _apolloServer.gql)(_templateObject());
var _default = typeDefs;
exports["default"] = _default;
//# sourceMappingURL=schema.js.map