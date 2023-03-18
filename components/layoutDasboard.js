import SideNavbar from "./sidenav";


export default function LayoutDashboard({ children, home }) {
  return (

    <>
    <SideNavbar></SideNavbar>

    <div class="p-4 sm:ml-64">
        {children}
    </div>


    
    </>
  )}