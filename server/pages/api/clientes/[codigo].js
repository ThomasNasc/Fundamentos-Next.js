"use strict";
(() => {
var exports = {};
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 1357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    const codigo = req.query.codigo;
    res.status(200).json({
        id: codigo,
        nome: "Maria" + codigo,
        idade: 33 + codigo
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1357));
module.exports = __webpack_exports__;

})();