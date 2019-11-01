
import {
  addUserAction,
  updateUserAction,
  doLoginAction,
  getUserDataAction
} from './actions/usersActions';

import {
  addPostAction
} from './actions/postsActions';

import {
  addCommentAction,
  updateContentCommentAction,
  deleteCommentAction,
  geCommentsFromPostAction,
} from './actions/commentAction';

import { storeUpload } from '../graphql/actions/utils/uploader';

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

const resolvers = {
  Query: {
    books: () => books,
    getPostComments: async (parent, data, context, info) => {
      try {
        const { postID } = data;
        return geCommentsFromPostAction(postID);
      } catch (error) {
        console.log("TCL: error", error)
      }
    },
    getUserData: async (parent, data, context, info) => {
      try {
        const { user } = context;
        return await getUserDataAction(user);
      } catch (error) {
        console.log("TCL: error", error)
      }
    },
  },
  Mutation: {
    addUser: async (parent, { data }, context, info) => {
      try {
        // sube el archivo
        const { createReadStream } = await data.profileImage;
        const stream = createReadStream();
        const { url } = await storeUpload(stream, 'video');

        // registra usario
        const userIfo = {
          ...data,
          profileImage: url,
        }

        return await addUserAction(userIfo);
      } catch (error) {
        console.log("TCL: error", error)
      }
    },
    addPost: async (parent, data, context, info) => {
      try {
        const { postInfo } = data;
        const { user } = context;
        const newPost = await addPostAction(postInfo);
        const filter = { _id: user._id };
        const update = { $push: { 'posts': newPost._id } };
        await updateUserAction(filter, update);
        return newPost;
      } catch (error) {

      }
    },
    doLogin: async (parent, data, context, info) => {
      try {
        const { userName, password } = data;
        return await doLoginAction(userName, password);
      } catch (error) {
        console.log("TCL: error", error)
      }
    },
    addComment: async (parent, data, context, info) => {
      try {
        const { user } = context;
        const { commentData } = data;
        return await addCommentAction(commentData, user._id);
      } catch (error) {
        console.log("TCL: error", error)
      }
    },
    updateComment: async (parent, data, context, info) => {
      try {
        const { comment, commentID } = data;
        return await updateContentCommentAction(comment, commentID);
      } catch (error) {
        console.log("TCL: error", error)
      }
    },
    delteComment: async (parent, data, context, info) => {
      try {
        const { commentID } = data;
        return await deleteCommentAction(commentID);
      } catch (error) {
        console.log("TCL: error", error)
      }
    }
  }
};

// parent: funciones necesarias para interno de graphql
// data: argumentos de la funcion resolver
// context: variables globales entre resolvers
// info: informacion del user agent

export default resolvers;
