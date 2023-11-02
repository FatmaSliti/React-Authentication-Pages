import { Outlet } from "react-router-dom"
import MainHeader from "../components/mainNavigation"

function RootLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
}

export default RootLayout
