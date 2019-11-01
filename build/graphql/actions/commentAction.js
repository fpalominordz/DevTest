"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geCommentsFromPostAction = exports.deleteCommentAction = exports.updateContentCommentAction = exports.updateCommentAction = exports.addCommentAction = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../../dataBase/models");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var addCommentAction =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(commentData, authorID) {
    var commentIfo;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            commentIfo = _objectSpread({}, commentData, {
              authorID: authorID
            });
            _context.next = 4;
            return _models.CommentModel.create(commentIfo);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("TCL: addCommentAction -> error", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function addCommentAction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addCommentAction = addCommentAction;

var updateCommentAction =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(filter, update) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.CommentModel.findOneAndUpdate(filter, update, {
              "new": true
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.log("TCL: updateUserAction -> error", _context2.t0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function updateCommentAction(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateCommentAction = updateCommentAction;

var updateContentCommentAction =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(comment, commentID) {
    var filter, update;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            filter = {
              _id: commentID
            };
            update = {
              $set: {
                comment: comment
              }
            };
            _context3.next = 5;
            return updateCommentAction(filter, update);

          case 5:
            return _context3.abrupt("return", _context3.sent);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log("TCL: updateContentCommentAction -> error", _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function updateContentCommentAction(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateContentCommentAction = updateContentCommentAction;

var deleteCommentAction =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(commentID) {
    var filter, update;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            filter = {
              _id: commentID
            };
            update = {
              $set: {
                isActive: false
              }
            };
            _context4.next = 5;
            return updateCommentAction(filter, update);

          case 5:
            return _context4.abrupt("return", _context4.sent);

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log("TCL: deleteCommentAction -> error", _context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function deleteCommentAction(_x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteCommentAction = deleteCommentAction;

var geCommentsFromPostAction =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(postID) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _models.CommentModel.find({
              postID: postID,
              isActive: true
            });

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            console.log("TCL: geCommentsFromPostAction -> error", _context5.t0);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function geCommentsFromPostAction(_x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.geCommentsFromPostAction = geCommentsFromPostAction;
//# sourceMappingURL=commentAction.js.map