"use strict";
exports.__esModule = true;
require("./App.css");
var SideBar_1 = require("./components/SideBar");
var NavBar_1 = require("./components/NavBar");
var AsideBar_1 = require("./components/AsideBar");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex w-full flex-row p-2" },
            React.createElement("div", { className: "w-1/4" },
                React.createElement(SideBar_1.SideBar, null)),
            React.createElement("div", { className: "w-3/4" },
                React.createElement(NavBar_1.NavBar, null),
                React.createElement(AsideBar_1.AsideBar, null)))));
}
exports["default"] = App;
