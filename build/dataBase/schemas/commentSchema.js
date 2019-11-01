"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var schema = _mongoose["default"].Schema;
var commentSchema = new schema({
  comment: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    "default": true
  },
  postID: {
    type: schema.Types.ObjectId,
    ref: 'post'
  },
  authorID: {
    type: schema.Types.ObjectId,
    ref: 'user'
  }
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

var _default = commentSchema;
exports["default"] = _default;
//# sourceMappingURL=commentSchema.js.map