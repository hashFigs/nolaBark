import AdminSideNav from "./AdminSideNav";


export default function AdminLayout({ children, home }) {
  return (

    <>
    <AdminSideNav></AdminSideNav>

    <div className="p-4 sm:ml-64">
        {children}
    </div>

    
    </>
  )}