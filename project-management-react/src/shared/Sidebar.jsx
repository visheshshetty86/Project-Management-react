import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar() {
  return (
    <div>
      <aside className="fixed left-0 top-0 h-screen w-[271px] bg-[#18328F]">
        <div className="flex flex-col items-center border border-gray-700 mt-40 p-12 gap-10">
          <button className="w-[140px] h-[50px] bg-gray-900 rounded-md border text-white p-3 flex items-center gap-2">
            <HomeIcon/>
            Dashboard
            </button> 

            <button className="w-[140px] h-[50px] bg-gray-900 rounded-md border text-white p-3 flex items-center gap-2">
            <PersonIcon/>
            Clients
            </button> 

            <button className="w-[140px] h-[50px] bg-gray-900 rounded-md border text-white p-3 flex items-center gap-2">
            <CalendarMonthIcon/>
            Calendar
            </button> 

            <button className="w-[140px] h-[50px] bg-gray-900 rounded-md border text-white p-3 flex items-center gap-2">
            <SettingsIcon/>
            Settings
            </button> 

        </div>
      </aside>
    </div>
  )
}