webpackHotUpdate_N_E("pages/_app",{

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! exports provided: getGun, asList, getSwapUsers, addSwapUser, addListing, getListings, getPaths, escapeRegExp, shortenHex, CHAIN_ID_NAMES, INFURA_PREFIXES, ExplorerTXType, EXPLORER_PREFIXES, NETWORK_SHORTNAMES, formatEtherscanLink, getTokenDisplayValue, getPercentChange, formatQueryParams, validImage, isETHAddress, toContractValue, fromContractValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGun\", function() { return getGun; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asList\", function() { return asList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSwapUsers\", function() { return getSwapUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addSwapUser\", function() { return addSwapUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addListing\", function() { return addListing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListings\", function() { return getListings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPaths\", function() { return getPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeRegExp\", function() { return escapeRegExp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortenHex\", function() { return shortenHex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHAIN_ID_NAMES\", function() { return CHAIN_ID_NAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INFURA_PREFIXES\", function() { return INFURA_PREFIXES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExplorerTXType\", function() { return ExplorerTXType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EXPLORER_PREFIXES\", function() { return EXPLORER_PREFIXES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NETWORK_SHORTNAMES\", function() { return NETWORK_SHORTNAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatEtherscanLink\", function() { return formatEtherscanLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTokenDisplayValue\", function() { return getTokenDisplayValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPercentChange\", function() { return getPercentChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatQueryParams\", function() { return formatQueryParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validImage\", function() { return validImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isETHAddress\", function() { return isETHAddress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toContractValue\", function() { return toContractValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromContractValue\", function() { return fromContractValue; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniswap/sdk */ \"./node_modules/@uniswap/sdk/dist/sdk.esm.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3-utils */ \"./node_modules/web3-utils/lib/index.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gun */ \"../../../node_modules/gun/browser.js\");\n/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gun__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var gun_sea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gun/sea */ \"../../../node_modules/gun/sea.js\");\n/* harmony import */ var gun_sea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gun_sea__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar gun = gun__WEBPACK_IMPORTED_MODULE_5___default()(['https://emblem-gun.herokuapp.com/gun']);\nvar API = 'https://gun-api-ev.herokuapp.com';\nvar PATHS = {};\nfunction getGun() {\n  return gun;\n}\nvar SWAP_USER_PATH = 'ev-swap40';\nvar SWAP_LISTINGS_PATH = \"listings-test10\";\n\nfunction getFromGun(path, cb) {\n  gun.get(path + '/', function (ack) {\n    if (!ack.put) {\n      console.log('Not Found');\n      return cb({});\n    } else {\n      return cb(ack.put);\n    }\n  });\n}\n\ngetRemoteGunPaths(function (_paths) {\n  PATHS = _paths;\n});\n\nfunction getFromGunObject(path) {\n  return gun.get(path + '/');\n}\n\nfunction withinGunCollection(collection, needle) {\n  return asList(collection).filter(function (item) {\n    return item.id == needle;\n  }).length > 0;\n}\n\nfunction asList(collection) {\n  return Object.keys(collection).map(function (key) {\n    return {\n      \"id\": key,\n      \"val\": collection[key]\n    };\n  }).filter(function (item) {\n    return item.val != \"\" && item.id != \"_\";\n  });\n}\nfunction getSwapUsers(_asList, cb) {\n  getFromGun(SWAP_USER_PATH, function (users) {\n    if (_asList) {\n      return cb(asList(users));\n    } else {\n      return cb(users);\n    }\n  });\n}\nfunction addSwapUser(_user, cb) {\n  console.log(_user);\n  getSwapUsers(false, function (users) {\n    if (!withinGunCollection(users, _user.is.alias)) {\n      getFromGunObject(SWAP_USER_PATH).get(_user.is.alias).put(_user.is.pub, function () {\n        return addSwapUser(_user, cb);\n      });\n    } else {\n      return cb(asList(users));\n    }\n  });\n}\nfunction addListing(_user, payload, cb) {\n  var id = Math.floor(Math.random() * 4294967296);\n  console.log(_user);\n\n  _user.get(SWAP_LISTINGS_PATH).get(id).put({\n    id: id,\n    payload: payload\n  });\n\n  return cb(true);\n}\nfunction getListings(_user, cb) {\n  _user.get(SWAP_LISTINGS_PATH).map().val(function (v, k) {\n    return cb({\n      k: k,\n      v: v\n    });\n  });\n}\n\nfunction getRemoteGunPaths(_x) {\n  return _getRemoteGunPaths.apply(this, arguments);\n}\n\nfunction _getRemoteGunPaths() {\n  _getRemoteGunPaths = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cb) {\n    var response, jsonData;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(API + '/path', {\n              method: 'GET',\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            });\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            jsonData = _context.sent;\n            return _context.abrupt(\"return\", cb(jsonData));\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getRemoteGunPaths.apply(this, arguments);\n}\n\nfunction getPaths() {\n  console.log('returning paths', PATHS);\n  return PATHS;\n} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping\n\nfunction escapeRegExp(string) {\n  return string.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'); // $& means the whole matched string\n}\nfunction shortenHex(hex) {\n  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;\n  return \"\".concat(hex.substring(0, length + 2), \"\\u2026\").concat(hex.substring(hex.length - length));\n}\nvar CHAIN_ID_NAMES = {\n  1: 'Ethereum Mainnet',\n  3: 'Ropsten',\n  4: 'Rinkeby',\n  5: 'Görli',\n  42: 'Kovan',\n  80001: 'Mumbai',\n  137: 'Polygon',\n  97: 'bnbsc',\n  100: 'xDai',\n  56: 'Binance Smart Chain',\n  250: 'Fantom'\n};\nvar INFURA_PREFIXES = {\n  1: 'mainnet',\n  3: 'ropsten',\n  4: 'rinkeby',\n  5: 'goerli',\n  42: 'kovan',\n  80001: 'mumbai',\n  137: 'matic',\n  97: 'bnbsc',\n  100: 'xdai',\n  56: 'bsc',\n  250: 'fantom'\n};\nvar ExplorerTXType;\n\n(function (ExplorerTXType) {\n  ExplorerTXType[ExplorerTXType[\"Account\"] = 0] = \"Account\";\n  ExplorerTXType[ExplorerTXType[\"TokenBalance\"] = 1] = \"TokenBalance\";\n  ExplorerTXType[ExplorerTXType[\"Transaction\"] = 2] = \"Transaction\";\n  ExplorerTXType[ExplorerTXType[\"Token\"] = 3] = \"Token\";\n})(ExplorerTXType || (ExplorerTXType = {}));\n\nvar EXPLORER_PREFIXES = {\n  1: 'etherscan.io',\n  3: 'ropsten.etherscan.io',\n  4: 'rinkeby.etherscan.io',\n  5: 'goerli.',\n  42: 'kovan.',\n  80001: 'mumbai-explorer.matic.today',\n  137: 'polygonscan.com',\n  97: 'bnbsc',\n  100: 'blockscout.com/xdai/mainnet',\n  56: 'bscscan.com',\n  250: 'ftmscan.com'\n};\nvar NETWORK_SHORTNAMES = {\n  1: 'eth',\n  3: 'ropsten',\n  4: 'rinkeby',\n  5: 'goerli',\n  42: 'kovan',\n  80001: 'mumbai',\n  137: 'matic',\n  97: 'bsctest',\n  100: 'xdai',\n  56: 'bsc',\n  250: 'fantom'\n};\nfunction formatEtherscanLink(type, data) {\n  switch (type) {\n    case ExplorerTXType.Account:\n      {\n        var _ref = data,\n            _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n            chainId = _ref2[0],\n            address = _ref2[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[chainId], \"/address/\").concat(address);\n      }\n\n    case ExplorerTXType.TokenBalance:\n      {\n        var _ref3 = data,\n            _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, 2),\n            token = _ref4[0],\n            _address = _ref4[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[token.chainId], \"/token/\").concat(token.address, \"?a=\").concat(_address);\n      }\n\n    case ExplorerTXType.Transaction:\n      {\n        var _ref5 = data,\n            _ref6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref5, 2),\n            _chainId = _ref6[0],\n            hash = _ref6[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[_chainId], \"/tx/\").concat(hash);\n      }\n\n    case ExplorerTXType.Token:\n      {\n        var _ref7 = data,\n            _ref8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref7, 2),\n            _chainId2 = _ref8[0],\n            _hash = _ref8[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[_chainId2], \"/token/\").concat(_hash);\n      }\n  }\n}\nvar SAI = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"ChainId\"].MAINNET, '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359', 18);\nfunction getTokenDisplayValue(token) {\n  var _token$symbol;\n\n  return token.equals(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"WETH\"][token.chainId]) ? 'ETH' : token.equals(SAI) ? 'SAI' : (_token$symbol = token.symbol) !== null && _token$symbol !== void 0 ? _token$symbol : 'UNKNOWN';\n}\nfunction getPercentChange(referenceRate, newRate) {\n  var flipOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  // calculate (referenceRate - newRate) / referenceRate or (newRate - referenceRate) / referenceRate\n  var difference = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Fraction\"](flipOrder ? _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].subtract(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(newRate.adjusted.numerator, referenceRate.adjusted.denominator), _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(referenceRate.adjusted.numerator, newRate.adjusted.denominator)) : _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].subtract(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(referenceRate.adjusted.numerator, newRate.adjusted.denominator), _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(newRate.adjusted.numerator, referenceRate.adjusted.denominator)), _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(referenceRate.adjusted.denominator, newRate.adjusted.denominator));\n  var percentChange = difference.multiply(referenceRate.adjusted.invert());\n  return new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Percent\"](percentChange.numerator, percentChange.denominator);\n}\nfunction formatQueryParams(params) {\n  var formatted = Object.keys(params).map(function (key) {\n    return \"\".concat(key, \"=\").concat(params[key]);\n  }).join('&');\n  return formatted === '' ? formatted : \"?\".concat(formatted);\n}\nfunction validImage(data) {\n  if (data && (data.includes('http') || data.includes('data:image'))) {\n    return true;\n  } else {\n    return false;\n  }\n}\nfunction isETHAddress(address) {\n  return Object(web3_utils__WEBPACK_IMPORTED_MODULE_4__[\"isAddress\"])(address);\n}\nfunction toContractValue(amount, decimal) {\n  return Object(web3_utils__WEBPACK_IMPORTED_MODULE_4__[\"toWei\"])(amount, decimal);\n}\nfunction fromContractValue(amount, decimal) {\n  return Number(Object(web3_utils__WEBPACK_IMPORTED_MODULE_4__[\"fromWei\"])(amount, decimal));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMudHM/ODgxMyJdLCJuYW1lcyI6WyJndW4iLCJHdW4iLCJBUEkiLCJQQVRIUyIsImdldEd1biIsIlNXQVBfVVNFUl9QQVRIIiwiU1dBUF9MSVNUSU5HU19QQVRIIiwiZ2V0RnJvbUd1biIsInBhdGgiLCJjYiIsImdldCIsImFjayIsInB1dCIsImNvbnNvbGUiLCJsb2ciLCJnZXRSZW1vdGVHdW5QYXRocyIsIl9wYXRocyIsImdldEZyb21HdW5PYmplY3QiLCJ3aXRoaW5HdW5Db2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIm5lZWRsZSIsImFzTGlzdCIsImZpbHRlciIsIml0ZW0iLCJpZCIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJ2YWwiLCJnZXRTd2FwVXNlcnMiLCJfYXNMaXN0IiwidXNlcnMiLCJhZGRTd2FwVXNlciIsIl91c2VyIiwiaXMiLCJhbGlhcyIsInB1YiIsImFkZExpc3RpbmciLCJwYXlsb2FkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0TGlzdGluZ3MiLCJ2IiwiayIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImpzb25EYXRhIiwiZ2V0UGF0aHMiLCJlc2NhcGVSZWdFeHAiLCJzdHJpbmciLCJyZXBsYWNlIiwic2hvcnRlbkhleCIsImhleCIsInN1YnN0cmluZyIsIkNIQUlOX0lEX05BTUVTIiwiSU5GVVJBX1BSRUZJWEVTIiwiRXhwbG9yZXJUWFR5cGUiLCJFWFBMT1JFUl9QUkVGSVhFUyIsIk5FVFdPUktfU0hPUlROQU1FUyIsImZvcm1hdEV0aGVyc2NhbkxpbmsiLCJ0eXBlIiwiZGF0YSIsIkFjY291bnQiLCJjaGFpbklkIiwiYWRkcmVzcyIsIlRva2VuQmFsYW5jZSIsInRva2VuIiwiVHJhbnNhY3Rpb24iLCJoYXNoIiwiVG9rZW4iLCJTQUkiLCJDaGFpbklkIiwiTUFJTk5FVCIsImdldFRva2VuRGlzcGxheVZhbHVlIiwiZXF1YWxzIiwiV0VUSCIsInN5bWJvbCIsImdldFBlcmNlbnRDaGFuZ2UiLCJyZWZlcmVuY2VSYXRlIiwibmV3UmF0ZSIsImZsaXBPcmRlciIsImRpZmZlcmVuY2UiLCJGcmFjdGlvbiIsIkpTQkkiLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwiYWRqdXN0ZWQiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInBlcmNlbnRDaGFuZ2UiLCJpbnZlcnQiLCJQZXJjZW50IiwiZm9ybWF0UXVlcnlQYXJhbXMiLCJwYXJhbXMiLCJmb3JtYXR0ZWQiLCJqb2luIiwidmFsaWRJbWFnZSIsImluY2x1ZGVzIiwiaXNFVEhBZGRyZXNzIiwiaXNBZGRyZXNzIiwidG9Db250cmFjdFZhbHVlIiwiYW1vdW50IiwiZGVjaW1hbCIsInRvV2VpIiwiZnJvbUNvbnRyYWN0VmFsdWUiLCJOdW1iZXIiLCJmcm9tV2VpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFJQSxJQUFNQSxHQUFHLEdBQUdDLDBDQUFHLENBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQWY7QUFDQSxJQUFJQyxHQUFHLEdBQUcsa0NBQVY7QUFDQSxJQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVPLFNBQVNDLE1BQVQsR0FBa0I7QUFDdkIsU0FBT0osR0FBUDtBQUNEO0FBRUQsSUFBTUssY0FBYyxHQUFHLFdBQXZCO0FBQ0EsSUFBTUMsa0JBQWtCLG9CQUF4Qjs7QUFHQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQkMsRUFBMUIsRUFBOEI7QUFDNUJULEtBQUcsQ0FBQ1UsR0FBSixDQUFRRixJQUFJLEdBQUcsR0FBZixFQUFvQixVQUFTRyxHQUFULEVBQWE7QUFDL0IsUUFBRyxDQUFDQSxHQUFHLENBQUNDLEdBQVIsRUFBWTtBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsYUFBT0wsRUFBRSxDQUFDLEVBQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLGFB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U0FBU0UsaUJBQVQsQ0FBMkJILE1BQTNCLEVBQWdEQyxPQUFoRCxFQUFvRjtBQUN6RixTQUFPRyxNQUFNLENBQUNDLDBEQUFPLENBQUNMLE1BQUQsRUFBU0MsT0FBVCxDQUFSLENBQWI7QUFDRCIsImZpbGUiOiIuL3V0aWxzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvYmlnbnVtYmVyJ1xuaW1wb3J0IHsgSlNCSSwgRnJhY3Rpb24sIFBlcmNlbnQsIFByaWNlLCBUb2tlbiwgV0VUSCwgQ2hhaW5JZCB9IGZyb20gJ0B1bmlzd2FwL3NkaydcbmltcG9ydCBCTiBmcm9tICdibi5qcydcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGlzQWRkcmVzcywgdG9XZWksIGZyb21XZWksIFVuaXQgfSBmcm9tICd3ZWIzLXV0aWxzJ1xuXG5pbXBvcnQgR3VuIGZyb20gJ2d1bic7XG5pbXBvcnQgJ2d1bi9zZWEnXG5cbmltcG9ydCB7IGlzSVBGUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5jb25zdCBndW4gPSBHdW4oWydodHRwczovL2VtYmxlbS1ndW4uaGVyb2t1YXBwLmNvbS9ndW4nXSlcbmxldCBBUEkgPSAnaHR0cHM6Ly9ndW4tYXBpLWV2Lmhlcm9rdWFwcC5jb20nXG5sZXQgUEFUSFMgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3VuKCkge1xuICByZXR1cm4gZ3VuXG59XG5cbmNvbnN0IFNXQVBfVVNFUl9QQVRIID0gJ2V2LXN3YXA0MCdcbmNvbnN0IFNXQVBfTElTVElOR1NfUEFUSCA9IGBsaXN0aW5ncy10ZXN0MTBgXG5cblxuZnVuY3Rpb24gZ2V0RnJvbUd1bihwYXRoLCBjYikgeyAgXG4gIGd1bi5nZXQocGF0aCArICcvJywgZnVuY3Rpb24oYWNrKXtcbiAgICBpZighYWNrLnB1dCl7XG4gICAgICBjb25zb2xlLmxvZygnTm90IEZvdW5kJylcbiAgICAgIHJldHVybiBjYih7fSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNiKGFjay5wdXQpXG4gICAgfVxuICB9KVxufVxuXG5nZXRSZW1vdGVHdW5QYXRocyhfcGF0aHM9PntcbiAgUEFUSFMgPSBfcGF0aHNcbn0pXG5cbmZ1bmN0aW9uIGdldEZyb21HdW5PYmplY3QocGF0aCk6IGFueSB7XG4gIHJldHVybiBndW4uZ2V0KHBhdGggKyAnLycpXG59XG5cbmZ1bmN0aW9uIHdpdGhpbkd1bkNvbGxlY3Rpb24oY29sbGVjdGlvbiwgbmVlZGxlKSB7XG4gIHJldHVybiBhc0xpc3QoY29sbGVjdGlvbikuZmlsdGVyKGl0ZW09PntyZXR1cm4gaXRlbS5pZCA9PSBuZWVkbGV9KS5sZW5ndGggPiAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc0xpc3QoY29sbGVjdGlvbikge1xuICByZXR1cm4gT2JqZWN0LmtleXMoY29sbGVjdGlvbikubWFwKChrZXkpID0+IHsgcmV0dXJuIHsgXCJpZFwiOiBrZXksIFwidmFsXCI6IGNvbGxlY3Rpb25ba2V5XSB9IH0pLmZpbHRlcihpdGVtID0+IHsgcmV0dXJuIGl0ZW0udmFsICE9IFwiXCIgJiYgaXRlbS5pZCAhPSBcIl9cIiB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3dhcFVzZXJzKF9hc0xpc3QsIGNiKSB7XG4gIGdldEZyb21HdW4oU1dBUF9VU0VSX1BBVEgsIHVzZXJzPT57XG4gICAgaWYgKF9hc0xpc3QpIHtcbiAgICAgIHJldHVybiBjYihhc0xpc3QodXNlcnMpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2IodXNlcnMpXG4gICAgfSAgICBcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN3YXBVc2VyKF91c2VyLCBjYikge1xuICBjb25zb2xlLmxvZyhfdXNlcilcbiAgZ2V0U3dhcFVzZXJzKGZhbHNlLCB1c2Vycz0+e1xuICAgIGlmICghd2l0aGluR3VuQ29sbGVjdGlvbih1c2VycywgX3VzZXIuaXMuYWxpYXMpKSB7XG4gICAgICBnZXRGcm9tR3VuT2JqZWN0KFNXQVBfVVNFUl9QQVRIKS5nZXQoX3VzZXIuaXMuYWxpYXMpLnB1dChfdXNlci5pcy5wdWIsICgpPT57XG4gICAgICAgIHJldHVybiBhZGRTd2FwVXNlcihfdXNlciwgY2IpXG4gICAgICB9KTsgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNiKGFzTGlzdCh1c2VycykpXG4gICAgfSAgICBcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RpbmcoX3VzZXIsIHBheWxvYWQsIGNiKSB7XG4gIGxldCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQyOTQ5NjcyOTYpO1xuICBjb25zb2xlLmxvZyhfdXNlcilcbiAgX3VzZXIuZ2V0KFNXQVBfTElTVElOR1NfUEFUSCkuZ2V0KGlkKS5wdXQoe2lkOiBpZCwgcGF5bG9hZDogcGF5bG9hZH0pIFxuICByZXR1cm4gY2IodHJ1ZSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdGluZ3MoX3VzZXIsIGNiKSB7XG4gIF91c2VyLmdldChTV0FQX0xJU1RJTkdTX1BBVEgpLm1hcCgpLnZhbCgodixrKT0+e1xuICAgIHJldHVybiBjYih7ayx2fSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVtb3RlR3VuUGF0aHMoY2IpIHsgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUEkgKyAnL3BhdGgnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gY2IoanNvbkRhdGEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXRocygpIHtcbiAgY29uc29sZS5sb2coJ3JldHVybmluZyBwYXRocycsIFBBVEhTKVxuICByZXR1cm4gUEFUSFNcbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zI0VzY2FwaW5nXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpIC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRlbkhleChoZXg6IHN0cmluZywgbGVuZ3RoID0gNCk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtoZXguc3Vic3RyaW5nKDAsIGxlbmd0aCArIDIpfeKApiR7aGV4LnN1YnN0cmluZyhoZXgubGVuZ3RoIC0gbGVuZ3RoKX1gXG59XG5cbmV4cG9ydCBjb25zdCBDSEFJTl9JRF9OQU1FUzogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgMTogJ0V0aGVyZXVtIE1haW5uZXQnLFxuICAzOiAnUm9wc3RlbicsXG4gIDQ6ICdSaW5rZWJ5JyxcbiAgNTogJ0fDtnJsaScsXG4gIDQyOiAnS292YW4nLFxuICA4MDAwMTogJ011bWJhaScsXG4gIDEzNzogJ1BvbHlnb24nLFxuICA5NzogJ2JuYnNjJyxcbiAgMTAwOiAneERhaScsXG4gIDU2OiAnQmluYW5jZSBTbWFydCBDaGFpbicsXG4gIDI1MDogJ0ZhbnRvbSdcbn1cblxuZXhwb3J0IGNvbnN0IElORlVSQV9QUkVGSVhFUzogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgMTogJ21haW5uZXQnLFxuICAzOiAncm9wc3RlbicsXG4gIDQ6ICdyaW5rZWJ5JyxcbiAgNTogJ2dvZXJsaScsXG4gIDQyOiAna292YW4nLFxuICA4MDAwMTogJ211bWJhaScsXG4gIDEzNzogJ21hdGljJyxcbiAgOTc6ICdibmJzYycsXG4gIDEwMDogJ3hkYWknLFxuICA1NjogJ2JzYycsXG4gIDI1MDogJ2ZhbnRvbSdcbn1cblxuZXhwb3J0IGVudW0gRXhwbG9yZXJUWFR5cGUge1xuICBBY2NvdW50LFxuICBUb2tlbkJhbGFuY2UsXG4gIFRyYW5zYWN0aW9uLFxuICBUb2tlblxufVxuXG5leHBvcnQgY29uc3QgRVhQTE9SRVJfUFJFRklYRVM6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gIDE6ICdldGhlcnNjYW4uaW8nLFxuICAzOiAncm9wc3Rlbi5ldGhlcnNjYW4uaW8nLFxuICA0OiAncmlua2VieS5ldGhlcnNjYW4uaW8nLFxuICA1OiAnZ29lcmxpLicsXG4gIDQyOiAna292YW4uJyxcbiAgODAwMDE6ICdtdW1iYWktZXhwbG9yZXIubWF0aWMudG9kYXknLFxuICAxMzc6ICdwb2x5Z29uc2Nhbi5jb20nLFxuICA5NzogJ2JuYnNjJyxcbiAgMTAwOiAnYmxvY2tzY291dC5jb20veGRhaS9tYWlubmV0JyxcbiAgNTY6ICdic2NzY2FuLmNvbScsXG4gIDI1MDogJ2Z0bXNjYW4uY29tJ1xufVxuXG5leHBvcnQgY29uc3QgTkVUV09SS19TSE9SVE5BTUVTOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICAxOiAnZXRoJyxcbiAgMzogJ3JvcHN0ZW4nLFxuICA0OiAncmlua2VieScsXG4gIDU6ICdnb2VybGknLFxuICA0MjogJ2tvdmFuJyxcbiAgODAwMDE6ICdtdW1iYWknLFxuICAxMzc6ICdtYXRpYycsXG4gIDk3OiAnYnNjdGVzdCcsXG4gIDEwMDogJ3hkYWknLFxuICA1NjogJ2JzYycsXG4gIDI1MDogJ2ZhbnRvbSdcbn1cblxuaW50ZXJmYWNlIEV4cGxvcmVyVHlwZURhdGEge1xuICBbRXhwbG9yZXJUWFR5cGUuQWNjb3VudF06IFtudW1iZXIsIHN0cmluZ11cbiAgW0V4cGxvcmVyVFhUeXBlLlRva2VuQmFsYW5jZV06IFtUb2tlbiwgc3RyaW5nXVxuICBbRXhwbG9yZXJUWFR5cGUuVHJhbnNhY3Rpb25dOiBbbnVtYmVyLCBzdHJpbmddXG4gIFtFeHBsb3JlclRYVHlwZS5Ub2tlbl06IFtudW1iZXIsIHN0cmluZ11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEV0aGVyc2NhbkxpbmsodHlwZTogRXhwbG9yZXJUWFR5cGUsIGRhdGE6IEV4cGxvcmVyVHlwZURhdGFbRXhwbG9yZXJUWFR5cGVdKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBFeHBsb3JlclRYVHlwZS5BY2NvdW50OiB7XG4gICAgICBjb25zdCBbY2hhaW5JZCwgYWRkcmVzc10gPSBkYXRhIGFzIEV4cGxvcmVyVHlwZURhdGFbRXhwbG9yZXJUWFR5cGUuQWNjb3VudF1cbiAgICAgIHJldHVybiBgaHR0cHM6Ly8ke0VYUExPUkVSX1BSRUZJWEVTW2NoYWluSWRdfS9hZGRyZXNzLyR7YWRkcmVzc31gXG4gICAgfVxuICAgIGNhc2UgRXhwbG9yZXJUWFR5cGUuVG9rZW5CYWxhbmNlOiB7XG4gICAgICBjb25zdCBbdG9rZW4sIGFkZHJlc3NdID0gZGF0YSBhcyBFeHBsb3JlclR5cGVEYXRhW0V4cGxvcmVyVFhUeXBlLlRva2VuQmFsYW5jZV1cbiAgICAgIHJldHVybiBgaHR0cHM6Ly8ke0VYUExPUkVSX1BSRUZJWEVTW3Rva2VuLmNoYWluSWRdfS90b2tlbi8ke3Rva2VuLmFkZHJlc3N9P2E9JHthZGRyZXNzfWBcbiAgICB9XG4gICAgY2FzZSBFeHBsb3JlclRYVHlwZS5UcmFuc2FjdGlvbjoge1xuICAgICAgY29uc3QgW2NoYWluSWQsIGhhc2hdID0gZGF0YSBhcyBFeHBsb3JlclR5cGVEYXRhW0V4cGxvcmVyVFhUeXBlLlRyYW5zYWN0aW9uXVxuICAgICAgcmV0dXJuIGBodHRwczovLyR7RVhQTE9SRVJfUFJFRklYRVNbY2hhaW5JZF19L3R4LyR7aGFzaH1gXG4gICAgfVxuICAgIGNhc2UgRXhwbG9yZXJUWFR5cGUuVG9rZW46IHtcbiAgICAgIGNvbnN0IFtjaGFpbklkLCBoYXNoXSA9IGRhdGEgYXMgRXhwbG9yZXJUeXBlRGF0YVtFeHBsb3JlclRYVHlwZS5UcmFuc2FjdGlvbl1cbiAgICAgIHJldHVybiBgaHR0cHM6Ly8ke0VYUExPUkVSX1BSRUZJWEVTW2NoYWluSWRdfS90b2tlbi8ke2hhc2h9YFxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBTQUkgPSBuZXcgVG9rZW4oQ2hhaW5JZC5NQUlOTkVULCAnMHg4OWQyNEE2YjRDY0IxQjZmQUEyNjI1ZkU1NjJiREQ5YTIzMjYwMzU5JywgMTgpXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW5EaXNwbGF5VmFsdWUodG9rZW46IFRva2VuKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRva2VuLmVxdWFscyhXRVRIW3Rva2VuLmNoYWluSWRdKSA/ICdFVEgnIDogdG9rZW4uZXF1YWxzKFNBSSkgPyAnU0FJJyA6IHRva2VuLnN5bWJvbCA/PyAnVU5LTk9XTidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBlcmNlbnRDaGFuZ2UocmVmZXJlbmNlUmF0ZTogUHJpY2UsIG5ld1JhdGU6IFByaWNlLCBmbGlwT3JkZXIgPSBmYWxzZSk6IFBlcmNlbnQge1xuICAvLyBjYWxjdWxhdGUgKHJlZmVyZW5jZVJhdGUgLSBuZXdSYXRlKSAvIHJlZmVyZW5jZVJhdGUgb3IgKG5ld1JhdGUgLSByZWZlcmVuY2VSYXRlKSAvIHJlZmVyZW5jZVJhdGVcbiAgY29uc3QgZGlmZmVyZW5jZSA9IG5ldyBGcmFjdGlvbihcbiAgICBmbGlwT3JkZXJcbiAgICAgID8gSlNCSS5zdWJ0cmFjdChcbiAgICAgICAgICBKU0JJLm11bHRpcGx5KG5ld1JhdGUuYWRqdXN0ZWQubnVtZXJhdG9yLCByZWZlcmVuY2VSYXRlLmFkanVzdGVkLmRlbm9taW5hdG9yKSxcbiAgICAgICAgICBKU0JJLm11bHRpcGx5KHJlZmVyZW5jZVJhdGUuYWRqdXN0ZWQubnVtZXJhdG9yLCBuZXdSYXRlLmFkanVzdGVkLmRlbm9taW5hdG9yKVxuICAgICAgICApXG4gICAgICA6IEpTQkkuc3VidHJhY3QoXG4gICAgICAgICAgSlNCSS5tdWx0aXBseShyZWZlcmVuY2VSYXRlLmFkanVzdGVkLm51bWVyYXRvciwgbmV3UmF0ZS5hZGp1c3RlZC5kZW5vbWluYXRvciksXG4gICAgICAgICAgSlNCSS5tdWx0aXBseShuZXdSYXRlLmFkanVzdGVkLm51bWVyYXRvciwgcmVmZXJlbmNlUmF0ZS5hZGp1c3RlZC5kZW5vbWluYXRvcilcbiAgICAgICAgKSxcbiAgICBKU0JJLm11bHRpcGx5KHJlZmVyZW5jZVJhdGUuYWRqdXN0ZWQuZGVub21pbmF0b3IsIG5ld1JhdGUuYWRqdXN0ZWQuZGVub21pbmF0b3IpXG4gIClcbiAgY29uc3QgcGVyY2VudENoYW5nZSA9IGRpZmZlcmVuY2UubXVsdGlwbHkocmVmZXJlbmNlUmF0ZS5hZGp1c3RlZC5pbnZlcnQoKSlcbiAgcmV0dXJuIG5ldyBQZXJjZW50KHBlcmNlbnRDaGFuZ2UubnVtZXJhdG9yLCBwZXJjZW50Q2hhbmdlLmRlbm9taW5hdG9yKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogc3RyaW5nIHtcbiAgY29uc3QgZm9ybWF0dGVkID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5tYXAoKGtleSkgPT4gYCR7a2V5fT0ke3BhcmFtc1trZXldfWApXG4gICAgLmpvaW4oJyYnKVxuICByZXR1cm4gZm9ybWF0dGVkID09PSAnJyA/IGZvcm1hdHRlZCA6IGA/JHtmb3JtYXR0ZWR9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRJbWFnZShkYXRhOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICBpZiAoZGF0YSAmJiAoZGF0YS5pbmNsdWRlcygnaHR0cCcpIHx8IGRhdGEuaW5jbHVkZXMoJ2RhdGE6aW1hZ2UnKSkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VUSEFkZHJlc3MoYWRkcmVzczogc3RyaW5nKSB7XG4gIHJldHVybiBpc0FkZHJlc3MoYWRkcmVzcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQ29udHJhY3RWYWx1ZShhbW91bnQ6IEJOLCBkZWNpbWFsOiBVbml0IHwgdW5kZWZpbmVkKSB7XG4gIHJldHVybiB0b1dlaShhbW91bnQsIGRlY2ltYWwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQ29udHJhY3RWYWx1ZShhbW91bnQ6IHN0cmluZyB8IEJOLCBkZWNpbWFsOiBVbml0IHwgdW5kZWZpbmVkKSA6IG51bWJlciB7XG4gIHJldHVybiBOdW1iZXIoZnJvbVdlaShhbW91bnQsIGRlY2ltYWwpKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils.ts\n");

/***/ })

})