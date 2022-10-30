"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const userrouters_js_1 = __importDefault(require("./routes/userrouters.js"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_js_1 = require("./config/index.js");
const errorHandler_js_1 = require("./middlewears/errorHandler.js");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.json());
app.use("/api/v1/user", userrouters_js_1.default);
app.use(() => { throw (0, http_errors_1.default)(404, "Route not found"); });
app.use(errorHandler_js_1.errorHandler);
mongoose_1.default.connect(index_js_1.DB).then(() => {
    console.log("Connect to DB");
    app.listen(index_js_1.PORT, () => {
        console.log(`Listening On Port ${index_js_1.PORT}`);
    });
}).catch(() => {
    throw (0, http_errors_1.default)(501, "Unable to connect database!!");
});
