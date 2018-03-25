'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiplePageView = function (_Component) {
  _inherits(MultiplePageView, _Component);

  function MultiplePageView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MultiplePageView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiplePageView.__proto__ || Object.getPrototypeOf(MultiplePageView)).call.apply(_ref, [this].concat(args))), _this), _this.state = { when: _this.props.when, message: _this.props.message, nextPage: false }, _this.nextPage = function () {
      var _this$props = _this.props,
          location = _this$props.location,
          history = _this$props.history,
          pages = _this$props.pages;
      var state = location.state;


      if (state.mp_page < pages.length - 1) _this.setState({ when: false, nextPage: true });else console.error('\n      You wanna go to page index ' + (location.state.mp_page + 1) + ' on MultiplePageView.\n      But, You\'ve set page by ' + (pages.length - 1) + ' pages.\n      You\'d better check your code to change `pageController.nextPage` to `<Link to="/anywhere" />`\n      Or location.pushState(path, { page: ??? }).\n    ');
    }, _this.prevPage = function () {
      var _this$props2 = _this.props,
          location = _this$props2.location,
          history = _this$props2.history;

      if (location.state.mp_page > 0) history.goBack();else console.error('\n      You are in index 0 on MultiplePageView.\n      Have no more previous Page.\n      You\'d better check your code to change `pageController.prevPage` to `<Link to="/anywhere" />`\n      Or location.pushState(path, { page: ??? }).\n    ');
    }, _this.goPage = function (mp_page) {
      var _this$props3 = _this.props,
          location = _this$props3.location,
          history = _this$props3.history,
          pages = _this$props3.pages;
      var state = location.state;

      if (mp_page >= 0 && mp_page < pages.length) history.replace(location.pathname, _extends({}, state, { mp_page: mp_page }));else console.error('\n    You are in index 0 on MultiplePageView.\n    Have no more previous Page.\n    You\'d better check your code to change `pageController.goPage` to `<Link to="/anywhere" />`\n    Or location.pushState(path, { page: ??? }).\n  ');
    }, _this.when = function (when) {
      if (typeof when === 'function') _this.setState({ when: when() });else if (typeof when === 'boolean') _this.setState({ when: when });else return _this.setState({ when: false });
    }, _this.message = function (message) {
      if (typeof message === 'function') _this.setState({ message: message() });else if (typeof message === 'string') _this.setState({ message: message });else return _this.setState({ message: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MultiplePageView, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_, nextState) {
      var _props = this.props,
          location = _props.location,
          history = _props.history,
          pages = _props.pages;
      var state = location.state;


      if (this.state.nextPage && !nextState.nextPage) {
        this.setState({ when: nextState.when, nextPage: false });
        history.push(location.pathname, _extends({}, state, { mp_page: state.mp_page + 1 }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var nextPage = this.nextPage,
          goPage = this.goPage,
          prevPage = this.prevPage,
          when = this.when,
          message = this.message;
      var _props2 = this.props,
          location = _props2.location,
          pages = _props2.pages;
      var state = location.state;


      if (!state || !state.mp_page) location.state = _extends({}, state, { mp_page: 0 });

      return _react2.default.createElement(
        _react.Fragment,
        null,
        pages.map(function (PageComponent, index) {
          return _react2.default.createElement(PageComponent, _extends({
            key: index,
            pageController: {
              nextPage: nextPage,
              prevPage: prevPage,
              goPage: goPage,
              when: when,
              message: message
            }
          }, _this2.props));
        }).filter(function (_, index) {
          return index === location.state.mp_page;
        }),
        _react2.default.createElement(_reactRouterDom.Prompt, { when: this.state.when, message: this.state.message })
      );
    }
  }]);

  return MultiplePageView;
}(_react.Component);

MultiplePageView.defaultProps = {
  when: false,
  message: 'Are you sure move away from this page?',
  pages: []
};

exports.default = (0, _reactRouter.withRouter)(MultiplePageView);