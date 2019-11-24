/* eslint-disable consistent-return */
import { isValidElementType } from 'react-is';

var createComponentPropType = function createComponentPropType(isRequired) {
  return function (props, propName, componentName, location, propFullName) {
    var prop = "".concat(location, " `").concat(propFullName, "`");
    var comp = "`".concat(componentName, "`");
    var value = props[propName];

    if (isRequired && value == null) {
      throw new Error("The ".concat(prop, " is marked as required in ").concat(comp, ", but its value is `").concat(value === null ? 'null' : 'undefined', "`"));
    } else if (value && !isValidElementType(value)) {
      return new Error("Invalid prop ".concat(prop, " supplied to ").concat(comp, ": the prop is not a valid React component"));
    }
  };
};

var componentPropType = createComponentPropType(false);
componentPropType.isRequired = createComponentPropType(true);
export default componentPropType;