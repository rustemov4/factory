import { TEACHER_PAGE_ROUTE, COURSES_ROUTE, REGISTRATION_ROUTE, PROFILE_ROUTE, LOGIN_ROUTE, LANDING_ROUTE, SUBSCRIPTION_ROUTE } from "./utils/consts"
import Auth from "./pages/Auth"
import Courses from "./pages/Courses"
import Profile from "./pages/Profile"
import TeacherPage from "./pages/TeacherPage"
import Landing from "./pages/Landing"
import Subscription from './pages/Subscription'

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: COURSES_ROUTE,
        Component: Courses
    },
    {
        path: TEACHER_PAGE_ROUTE + '/:id',
        Component: TeacherPage
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LANDING_ROUTE,
        Component: Landing
    },
    {
        path: SUBSCRIPTION_ROUTE,
        Component: Subscription
    }
]