import { NavLink } from 'react-router-dom';
import { Home, Film, Dices, Smile, List, Settings } from 'lucide-react';

const navItems = [
  { path: '/', name: 'Accueil', icon: Home },
  { path: '/catalog', name: 'Catalogue', icon: Film },
  { path: '/mood', name: 'Mood', icon: Smile },
  { path: '/roulette', name: 'Roulette', icon: Dices },
  { path: '/library', name: 'Bibliothèque', icon: List },
];

export default function Sidebar() {
  return (
    <nav className="w-20 lg:w-64 flex flex-col bg-[#111115] border-r border-zinc-800 p-4">
      <div className="text-2xl font-bold text-white mb-10 px-2">NEXORA</div>
      <div className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl transition ${
                isActive ? 'bg-red-600 text-white' : 'text-zinc-400 hover:bg-zinc-800'
              }`
            }
          >
            <item.icon size={24} />
            <span className="hidden lg:block">{item.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="mt-auto">
        <NavLink
            to="/settings"
            className="flex items-center gap-4 p-3 rounded-xl text-zinc-400 hover:bg-zinc-800 transition"
        >
            <Settings size={24} />
            <span className="hidden lg:block">Paramètres</span>
        </NavLink>
      </div>
    </nav>
  );
}
