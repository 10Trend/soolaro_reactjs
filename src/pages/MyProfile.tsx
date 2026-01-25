import ProfileMobileView from "@/components/profile/ProfileMobileView"
import ProfileSidebar from "@/components/profile/ProfileSidebar"
import { Outlet, useLocation } from "react-router-dom"

const ProfilePage = () => {
  const location = useLocation()
  const isProfileRoot = location.pathname === "/profile"

  return (
    <section className="container mx-auto md:py-10">
      <div className="grid grid-cols-12 gap-8">

        <aside
          className={`col-span-12 md:col-span-3 ${
            !isProfileRoot ? "hidden md:block" : ""
          }`}
        >
          <div className="md:block hidden">
            <ProfileSidebar />
          </div>

          <div className="md:hidden block">
            <ProfileMobileView />
          </div>
        </aside>

        <main
          className={`col-span-12 md:col-span-9 ${
            isProfileRoot ? "hidden md:block" : ""
          }`}
        >
          <Outlet />
        </main>

      </div>
    </section>
  )
}

export default ProfilePage
