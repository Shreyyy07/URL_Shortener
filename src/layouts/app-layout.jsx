import { Outlet } from "react-router-dom"
import Header from "@/components/header"

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        {/* Header */}
        <Header/>
        <Outlet/>
      </main>
      <div className="p-10 mt-10 bg-gray-800 text-center">
Made By Gonu
      </div>
    </div>
  )
}

export default AppLayout

