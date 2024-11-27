import { Outlet } from "react-router-dom"
import Navbar from '/home/askeladd/pratham/sjec/7th_sem/major_project/CraveCure/Client/src/pages/Components/Navbar.jsx';
import Footer from "./Components/Footer";

const Layout = () => {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout;