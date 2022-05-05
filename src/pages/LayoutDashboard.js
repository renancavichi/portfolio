import Footer from '../estudo/Footer'
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <>
        <h1>Layout Dashboard</h1>
        <Outlet />
        <Footer />
    </>
  )
}

export default LayoutDashboard