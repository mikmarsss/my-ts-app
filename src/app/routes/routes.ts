import EditProfile from "../../pages/EditPropfile"
import MainPage from "../../pages/MainPage"
import { EDIT, MAIN_PAGE, USER } from "./utils"


export const authRouts = [
    {

    }
]

export const publicRoutes = [
    {
        path: MAIN_PAGE,
        Component: MainPage
    },
    {
        path: USER + EDIT + '/:id',
        Component: EditProfile
    }
]