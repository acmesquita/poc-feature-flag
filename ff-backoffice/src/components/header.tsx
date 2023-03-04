import { Link } from "react-router-dom"

const MENUS = [
  { path: '/', label: "Home" },
  { path: '/create-feature', label: "Create new Feature" },
  { path: '/add-user-to-feature', label: "Add User to Feature" },
  { path: '/disable-user-to-feature', label: "Disabel User to Feature" },
]

export function Header() {
  return (
    <header className="header-container">
      <h1 className="text-3xl pl-3">Feature Flag - Backoffice</h1>
        <ul className="flex items-center gap-4 pr-3">
          {MENUS.map((menu) => (
            <li key={menu.path} className="header-menu_item">
              <Link to={menu.path}>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
    </header>
  )
}