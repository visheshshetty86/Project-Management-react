import NotificationsIcon from "@mui/icons-material/Notifications";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import Avatar from '@mui/material/Avatar';

const dummyUser = {
    name: "john doe",
    email:"john.doe@example.com"
  }

export default function Navbar({user}) {
  //  if (!user) {
  //   return (
  //     <nav className="w-full h-20 bg-white shadow-md">
  //       <span className="ml-4 text-gray-400">Loading user…</span>
  //     </nav>
  //   );
  //  }
 
  return (
    <nav className="w-full h-20 bg-white  shadow-md">
      <div className="max-w-7xl mx-auto px-2 h-full flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-[100px] ">
          <span className="text-2xl font-extrabold tracking-tight text-indigo-600">
            Blue<span className="text-black">Prnt</span>
          </span>

          <span className="text-3xl font-bold">
            Dashboard
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-12">
          <button type="button" className="relative">
            <NotificationsIcon className="w-6 h-6" />
          </button>

          <button type="button" className="relative">
            <MarkEmailUnreadIcon className="w-6 h-6" />
          </button>

        <div className="w-px h-10 bg-gray-500" />

        <div className="flex items-center gap-4">
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           <div className="flex flex-col">
           <span>{dummyUser.name}</span>
           <span>{dummyUser.email}</span>
           </div>
        </div>

        </div>

      </div>
    </nav>
  );
}