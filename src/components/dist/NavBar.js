"use strict";
exports.__esModule = true;
exports.NavBar = void 0;
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var Add_1 = require("@mui/icons-material/Add");
var AddBox_1 = require("@mui/icons-material/AddBox");
var ShareOutlined_1 = require("@mui/icons-material/ShareOutlined");
var Square_1 = require("@mui/icons-material/Square");
var SearchOutlined_1 = require("@mui/icons-material/SearchOutlined");
var NavAvatar_1 = require("./NavAvatar");
var sam1_png_1 = require("../assets/sam1.png");
var sam2_png_1 = require("../assets/sam2.png");
var sam3_png_1 = require("../assets/sam3.png");
var sam4_png_1 = require("../assets/sam4.png");
var imgPath = [
    sam1_png_1["default"],
    sam2_png_1["default"],
    sam3_png_1["default"],
    sam4_png_1["default"],
    sam1_png_1["default"],
    sam2_png_1["default"],
    sam3_png_1["default"],
    sam4_png_1["default"],
    sam1_png_1["default"],
    sam2_png_1["default"],
    sam3_png_1["default"],
    sam4_png_1["default"],
];
exports.NavBar = function () {
    return (React.createElement("div", { className: "font-bold" },
        React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(material_2.Stack, { direction: "row" },
                    React.createElement("div", { className: "flex flex-col w-full" },
                        React.createElement("h3", { style: { fontWeight: "800px" } },
                            React.createElement("img", { src: "src\\assets\\qwerty.png", alt: "icon", className: "inline-block mr-2 w-12 h-12" }),
                            "Customer Stories-Q4"),
                        React.createElement("h2", null,
                            React.createElement(Square_1["default"], { className: "text-green-500 inline-block ml-12 w-6 h-3" }),
                            "On Track")),
                    React.createElement("div", { className: "flex items-center w-full" },
                        React.createElement(material_2.AvatarGroup, { max: 4, className: "text-purple-400 " }, imgPath.map(function (item, i) {
                            return React.createElement(NavAvatar_1["default"], { imgName: item });
                        })),
                        React.createElement(material_1.Button, { variant: "text", className: "flex w-full h-7 mr-1 text-gray-600" },
                            React.createElement(ShareOutlined_1["default"], { className: "inline-block mr-2" }),
                            "share"),
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement("span", { className: " border-l border-t border-b border-gray-300 text-gray-300 h-6" },
                                React.createElement(SearchOutlined_1["default"], null)),
                            React.createElement("input", { type: "text", placeholder: "search", className: "ml-auto p-1 right-4 border-t border-b border-r focus:outline-none border-gray-300 text-gray-300 h-6" })),
                        React.createElement(AddBox_1["default"], { className: "inline-block mr-2 h-12 w-9 text-pink-400" }),
                        React.createElement(material_2.Avatar, { src: "src\\assets\\sam3.png", alt: "avatar", className: "w-8 h-8", "text-gray-300": true }, "TN")))),
            React.createElement("div", { className: "border border-1 border-gray-300 flex justify-between  rounded-md text-gray-500 h-12 items-center my-2 leading-none  w-full" },
                React.createElement(material_2.Stack, { direction: "row", spacing: 6 },
                    React.createElement("div", { className: "border-b hover:border-purple-700 " },
                        React.createElement("p", { className: "hover:text-purple-700   p-4" }, "OverView")),
                    React.createElement("div", { className: "border-b  hover:border-purple-700 " },
                        React.createElement("p", { className: "hover:text-purple-700  p-4 " }, "List")),
                    React.createElement("div", { className: "border-b  hover:border-purple-700 " },
                        React.createElement("p", { className: "hover:text-purple-700   p-4" }, "Board")),
                    React.createElement("div", { className: "border-b  hover:border-purple-700 " },
                        React.createElement("p", { className: "hover:text-purple-700   p-4" }, "TimeLine")),
                    React.createElement("div", { className: "border-b  hover:border-purple-700 " },
                        React.createElement("p", { className: "hover:text-purple-700  p-4" }, "Dashboard")),
                    React.createElement("div", { className: "border-b  hover:border-purple-700 mr-14" },
                        React.createElement("p", { className: "hover:text-purple-700  p-4" }, "More..."))),
                React.createElement("div", { className: "flex p-2 " },
                    React.createElement(material_1.Button, { variant: "contained", sx: {
                            backgroundColor: "#7e02fa",
                            color: "white",
                            height: "10px",
                            padding: "8px",
                            fontSize: "0.6em"
                        }, className: "w-15 h-8 " },
                        React.createElement(Add_1["default"], { className: " inline-block mr-2 w-4" }),
                        "Add chart"))))));
};
exports["default"] = exports.NavBar;
