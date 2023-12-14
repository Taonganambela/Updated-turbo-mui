import { Stack } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SquareIcon from "@mui/icons-material/Square";

export const SideBar = () => {
  return (
    <div className="">
      <Stack spacing={2} sx={{ fontWeight: "bold" }}>
        <h3 className="mb-4">
          <img
            src="src\assets\icons8-google-podcasts-48.png"
            alt="slack image"
            className="inline-block mr-4 h-7 w-7 "
          />
          turbo
          <MenuOutlinedIcon className="inline-block mr-2 w-32 ml-auto" />
        </h3>
        <p>
          <HomeOutlinedIcon className="inline-block mr-2 w-6 h-5" />
          Home
        </p>
        <p>
          <TaskAltOutlinedIcon className="inline-block mr-2 w-6 h-5" />
          My Tasks
        </p>
        <p>
          <NotificationsOutlinedIcon className="inline-block mr-2 w-6 h-5" />
          inbox
        </p>

        <h2 className="text-gray-600">Reporting</h2>
        <p>
          <BarChartOutlinedIcon className="inline-block mr-2 w-6 h-5" />
          Portforlios
        </p>
        <p>
          <MyLocationOutlinedIcon className="inline-block mr-2 w-6 h-5" />
          Goals
        </p>

        <h2 className="text-gray-600">Favourites</h2>
        <p>
          <SquareIcon className="text-blue-400 inline-block mr-2 w-6 h-3" />
          Recruiting weekly
        </p>
        <p>
          <SquareIcon className="text-red-700 inline-block mr-2 w-6 h-3" />
          Website launch
        </p>
        <p>
          <SquareIcon className="text-purple-600 inline-block mr-2 w-6 h-3" />
          Rebranding video
        </p>
        <p>
          <BarChartOutlinedIcon className="text-yellow-600 inline-block mr-2 w-6 h-5" />
          Marketing
          <LockOutlinedIcon className="text-gray-400 inline-block mr-2 absolute w-36  h-4 " />
        </p>
        <p>
          <SquareIcon className="text-pink-600 inline-block mr-2 w-6 h-3" />
          Email calender
        </p>
        <p>
          <SquareIcon className="text-orange-600 inline-block mr-2 w-6 h-3 rounded-md" />
          Website Dsign Requirements
        </p>
        <p>
          <SquareIcon className="text-green-600 inline-block mr-2 w-6 h-3 rounded-md" />
          Customer Stories
        </p>
        <p className="p-2 absolute bottom-0 left-0 h-16 w-full">
          <PersonAddAltOutlinedIcon className="inline-block mr-2 w-6 h-5" />
          invite teamates
        </p>
      </Stack>
    </div>
  );
};

export default SideBar;
