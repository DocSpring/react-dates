function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default function getRenderComponent(Component) {
  return typeof Component === 'string' ? Component : React.forwardRef(function (props, ref) {
    return React.createElement(Component, _extends({}, props, {
      innerRef: ref
    }));
  });
}