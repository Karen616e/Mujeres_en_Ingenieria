import { Outlet } from 'react-router-dom'
import NavigationMain from '../components/NavigationMain'

export default function MainLayout() {
  return (
    <div className="w-full">
      <NavigationMain />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
