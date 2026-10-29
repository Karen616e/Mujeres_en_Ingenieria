import { Outlet } from 'react-router-dom'
import NavigationMain from '../components/NavigationMain'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="w-full">
      <NavigationMain />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}
