import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar() {
  const menu = [
    {name: "Dashboard", icon: <HomeIcon/>},
    {name: "Clients", icon: <PersonIcon/>},
    {name: "Calendar", icon: <CalendarMonthIcon/>},
    {name: "Settings", icon: <SettingsIcon/>},
  ]
  return (
    <div>
      <aside className="fixed left-0 top-0 h-screen w-[271px] bg-[#18328F] flex justify-center">
        <div className="flex flex-col  mt-40 p-12 gap-10">
           {menu.map((item, i) => (
          <button
            key={i}
            className="group relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-gray-900 text-white transition-all duration-500
            hover:w-[180px] ">
            {/* Glow Background */}
            <span
              className="absolute inset-0 rounded-full blur-[15px]
                         bg-gradient-to-r from-cyan-400 to-blue-600
                         opacity-0 transition duration-500
                         group-hover:opacity-100 z-10"
            />
            <span
              className="text-2xl transition-all duration-500
                         group-hover:scale-0"
            >
              {item.icon}
            </span>

            <span
              className="absolute text-sm tracking-widest uppercase
                         scale-0 transition-all duration-500
                         group-hover:scale-100 text-[#fff] z-20"
            >
              {item.name}
            </span>
          </button>
        ))}
        

        </div>
      </aside>
    </div>
  )
}