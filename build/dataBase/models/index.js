"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentModel = exports.PostModel = exports.UserModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userSchema = _interopRequireDefault(require("../schemas/userSchema"));

var _postSchema = _interopRequireDefault(require("../schemas/postSchema"));

var _commentSchema = _interopRequireDefault(require("../schemas/commentSchema"));

var UserModel = _mongoose["default"].model('user', _userSchema["default"]);

exports.UserModel = UserModel;

var PostModel = _mongoose["default"].model('post', _postSchema["default"]);

exports.PostModel = PostModel;

var CommentModel = _mongoose["default"].model('comment', _commentSchema["default"]);

exports.CommentModel = CommentModel;
//# sourceMappingURL=index.js.map