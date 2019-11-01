"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _usersActions = require("./actions/usersActions");

var _postsActions = require("./actions/postsActions");

var _commentAction = require("./actions/commentAction");

var _uploader = require("../graphql/actions/utils/uploader");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _books = [{
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J.K. Rowling'
}, {
  title: 'Jurassic Park',
  author: 'Michael Crichton'
}];
var resolvers = {
  Query: {
    books: function books() {
      return _books;
    },
    getPostComments: function () {
      var _getPostComments = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parent, data, context, info) {
        var postID;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                postID = data.postID;
                return _context.abrupt("return", (0, _commentAction.geCommentsFromPostAction)(postID));

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                console.log("TCL: error", _context.t0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));

      function getPostComments(_x, _x2, _x3, _x4) {
        return _getPostComments.apply(this, arguments);
      }

      return getPostComments;
    }(),
    getUserData: function () {
      var _getUserData = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(parent, data, context, info) {
        var user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                user = context.user;
                _context2.next = 4;
                return (0, _usersActions.getUserDataAction)(user);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("TCL: error", _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getUserData(_x5, _x6, _x7, _x8) {
        return _getUserData.apply(this, arguments);
      }

      return getUserData;
    }()
  },
  Mutation: {
    addUser: function () {
      var _addUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(parent, _ref, context, info) {
        var data, _ref2, createReadStream, stream, _ref3, url, userIfo;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = _ref.data;
                _context3.prev = 1;
                _context3.next = 4;
                return data.profileImage;

              case 4:
                _ref2 = _context3.sent;
                createReadStream = _ref2.createReadStream;
                stream = createReadStream();
                _context3.next = 9;
                return (0, _uploader.storeUpload)(stream, 'video');

              case 9:
                _ref3 = _context3.sent;
                url = _ref3.url;
                // registra usario
                userIfo = _objectSpread({}, data, {
                  profileImage: url
                });
                _context3.next = 14;
                return (0, _usersActions.addUserAction)(userIfo);

              case 14:
                return _context3.abrupt("return", _context3.sent);

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](1);
                console.log("TCL: error", _context3.t0);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 17]]);
      }));

      function addUser(_x9, _x10, _x11, _x12) {
        return _addUser.apply(this, arguments);
      }

      return addUser;
    }(),
    addPost: function () {
      var _addPost = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(parent, data, context, info) {
        var postInfo, user, newPost, filter, update;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                postInfo = data.postInfo;
                user = context.user;
                _context4.next = 5;
                return (0, _postsActions.addPostAction)(postInfo);

              case 5:
                newPost = _context4.sent;
                filter = {
                  _id: user._id
                };
                update = {
                  $push: {
                    'posts': newPost._id
                  }
                };
                _context4.next = 10;
                return (0, _usersActions.updateUserAction)(filter, update);

              case 10:
                return _context4.abrupt("return", newPost);

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](0);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 13]]);
      }));

      function addPost(_x13, _x14, _x15, _x16) {
        return _addPost.apply(this, arguments);
      }

      return addPost;
    }(),
    doLogin: function () {
      var _doLogin = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parent, data, context, info) {
        var userName, password;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                userName = data.userName, password = data.password;
                _context5.next = 4;
                return (0, _usersActions.doLoginAction)(userName, password);

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                console.log("TCL: error", _context5.t0);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function doLogin(_x17, _x18, _x19, _x20) {
        return _doLogin.apply(this, arguments);
      }

      return doLogin;
    }(),
    addComment: function () {
      var _addComment = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(parent, data, context, info) {
        var user, commentData;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                user = context.user;
                commentData = data.commentData;
                _context6.next = 5;
                return (0, _commentAction.addCommentAction)(commentData, user._id);

              case 5:
                return _context6.abrupt("return", _context6.sent);

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                console.log("TCL: error", _context6.t0);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 8]]);
      }));

      function addComment(_x21, _x22, _x23, _x24) {
        return _addComment.apply(this, arguments);
      }

      return addComment;
    }(),
    updateComment: function () {
      var _updateComment = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(parent, data, context, info) {
        var comment, commentID;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                comment = data.comment, commentID = data.commentID;
                _context7.next = 4;
                return (0, _commentAction.updateContentCommentAction)(comment, commentID);

              case 4:
                return _context7.abrupt("return", _context7.sent);

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                console.log("TCL: error", _context7.t0);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }));

      function updateComment(_x25, _x26, _x27, _x28) {
        return _updateComment.apply(this, arguments);
      }

      return updateComment;
    }(),
    delteComment: function () {
      var _delteComment = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(parent, data, context, info) {
        var commentID;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                commentID = data.commentID;
                _context8.next = 4;
                return (0, _commentAction.deleteCommentAction)(commentID);

              case 4:
                return _context8.abrupt("return", _context8.sent);

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                console.log("TCL: error", _context8.t0);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 7]]);
      }));

      function delteComment(_x29, _x30, _x31, _x32) {
        return _delteComment.apply(this, arguments);
      }

      return delteComment;
    }()
  }
}; // parent: funciones necesarias para interno de graphql
// data: argumentos de la funcion resolver
// context: variables globales entre resolvers
// info: informacion del user agent

var _default = resolvers;
exports["default"] = _default;
//# sourceMappingURL=resolvers.js.map