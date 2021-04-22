"use strict";

var _react = _interopRequireWildcard(require("react"));

var _simpleGit = _interopRequireDefault(require("simple-git"));

var _ink = require("ink");

var _inkSelectInput = _interopRequireDefault(require("ink-select-input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const thisFolder = process.cwd();
const git = (0, _simpleGit.default)({
  baseDir: thisFolder
});

const App = () => {
  const [branches, setBranches] = (0, _react.useState)([]);
  const [error, setError] = (0, _react.useState)('');
  const {
    exit
  } = (0, _ink.useApp)();
  (0, _react.useEffect)(() => {
    git.branchLocal(async (_commands, output) => {
      if (!output) {
        setError(`😕 This folder (${thisFolder}) is not a git repository.`);
        exit();
      } else {
        console.log(output);
        const branchItems = output.all.map((branch, i) => ({
          label: `${i + 1}) ${branch}`,
          value: branch
        }));
        setBranches(branchItems);
      }
    });
  }, []);
  (0, _ink.useInput)((input, key) => {
    if (input === 'q') {
      exit();
    }
  });

  if (error) {
    return /*#__PURE__*/_react.default.createElement(_ink.Text, null, error);
  }

  if (branches.length === 0) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: "green"
  }, "These are your local branches"), /*#__PURE__*/_react.default.createElement(_inkSelectInput.default, {
    items: branches,
    onSelect: a => {
      console.log(a);
    }
  }));
};

(0, _ink.render)( /*#__PURE__*/_react.default.createElement(App, null));
