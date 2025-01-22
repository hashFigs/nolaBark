import AdminLayout from "../../components/admin/adminLayout"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Admin() {
  const { data: session, status } = useSession();
  const router = useRouter();
   
   
  console.log("admin sesion", session)


  // If session is still loading, show a loader
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session || !session.user?.isAdmin) {
    return (
      <div className="p-4">
        <h1>Access Denied</h1>
        <p>You must be an admin to view this page.</p>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Go to Home
        </button>
      </div>
    );
  }

  // Extract user information
  const user = session.user;

  return (
    <>
       <AdminLayout home> </AdminLayout>
      <div className="p-4 sm:ml-64">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-end-7 col-span-2">
            <p>Welcome Admin:</p>
            <p>{user?.email}</p>
          </div>
        </div>

        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1>Welcome to your admin dashboard</h1>
        </div>
      </div>
    </>
  );
}