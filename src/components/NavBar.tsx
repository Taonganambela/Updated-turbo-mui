import { Button } from "@mui/material";
import { Avatar, Stack, AvatarGroup } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SquareIcon from "@mui/icons-material/Square";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NavAvatar from "./NavAvatar";
import Sam1 from "../assets/sam1.png";
import Sam2 from "../assets/sam2.png";
import Sam3 from "../assets/sam3.png";
import Sam4 from "../assets/sam4.png";

const imgPath = [
  Sam1,
  Sam2,
  Sam3,
  Sam4,
  Sam1,
  Sam2,
  Sam3,
  Sam4,
  Sam1,
  Sam2,
  Sam3,
  Sam4,
];

export const NavBar = () => {
  return (
    <div className="font-bold">
      <div>
        <div>
          <Stack direction="row">
            <div className="flex flex-col w-full">
              <h3 style={{ fontWeight: "800px" }}>
                <img
                  src="src\assets\qwerty.png"
                  alt="icon"
                  className="inline-block mr-2 w-12 h-12"
                />
                Customer Stories-Q4
              </h3>
              <h2>
                <SquareIcon className="text-green-500 inline-block ml-12 w-6 h-3" />
                On Track
              </h2>
            </div>

            <div className="flex items-center w-full">
              <AvatarGroup max={4} className="text-purple-400 ">
                {imgPath.map((item, i) => {
                  return <NavAvatar imgName={item} />;
                })}
              </AvatarGroup>
              <Button
                variant="text"
                className="flex w-full h-7 mr-1 text-gray-600"
              >
                <ShareOutlinedIcon className="inline-block mr-2" />
                share
              </Button>

              <div className="flex items-center">
                <span className=" border-l border-t border-b border-gray-300 text-gray-300 h-6">
                  <SearchOutlinedIcon />
                </span>
                <input
                  type="text"
                  placeholder="search"
                  className="ml-auto p-1 right-4 border-t border-b border-r focus:outline-none border-gray-300 text-gray-300 h-6"
                />
              </div>
              <AddBoxIcon className="inline-block mr-2 h-12 w-9 text-pink-400" />
              <Avatar
                src="src\assets\sam3.png"
                alt="avatar"
                className="w-8 h-8"
                text-gray-300
              >
                TN
              </Avatar>
            </div>
          </Stack>
        </div>

        <div className="border border-1 border-gray-300 flex justify-between  rounded-md text-gray-500 h-12 items-center my-2 leading-none  w-full">
          <Stack direction="row" spacing={6}>
              <div className="border-b hover:border-purple-700 ">
                <p className="hover:text-purple-700   p-4">OverView</p>
              </div>

              <div className="border-b  hover:border-purple-700 ">
                <p className="hover:text-purple-700  p-4 ">List</p>
              </div>
              <div className="border-b  hover:border-purple-700 ">
                <p className="hover:text-purple-700   p-4">Board</p>
              </div>

              <div className="border-b  hover:border-purple-700 ">
                <p className="hover:text-purple-700   p-4">TimeLine</p>
              </div>

              <div className="border-b  hover:border-purple-700 ">
                <p className="hover:text-purple-700  p-4">Dashboard</p>
              </div>

              <div className="border-b  hover:border-purple-700 mr-14">
                <p className="hover:text-purple-700  p-4">More...</p>
              </div>
          </Stack>
          <div className="flex p-2 ">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7e02fa",
                color: "white",
                height: "10px",
                padding: "8px",
                fontSize: "0.6em",
              }}
              className="w-15 h-8 "
            >
              <AddIcon className=" inline-block mr-2 w-4" />
              Add chart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
