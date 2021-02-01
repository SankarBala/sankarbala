import {
    IoSpeedometerOutline,
    FaDesktop,
    BsFileEarmarkText,
    FaCogs,
    AiOutlinePushpin,
    AiOutlineFundProjectionScreen,
    FaFolderOpen
} from 'react-icons/all';


const adminNav = [
    { to: '/admin/', exact: true, name: 'Dashboard', icon: IoSpeedometerOutline },
    { to: '/admin/services/', exact: true, name: 'Services', icon: FaDesktop },
    { to: '/admin/portfolios/', exact: true, name: 'Portfolios', icon: FaFolderOpen },
    { to: '/admin/projects/', exact: true, name: 'Projects', icon: AiOutlineFundProjectionScreen },
    { to: '/admin/pages/', exact: true, name: 'Pages', icon: BsFileEarmarkText },
    { to: '/admin/posts/', exact: true, name: 'Posts', icon: AiOutlinePushpin },
    { to: '/admin/settings/', exact: true, name: 'Settings', icon: FaCogs },
];


const nav = [
    { to: "/", exact: true, name: "Home" },
    { to: "/services", exact: true, name: "Services" },
    { to: "/portfolios", exact: true, name: "Portfolios" },
    { to: "/qualifications", exact: true, name: "Qulifications" },
    { to: "/photos", exact: true, name: "Photos" },
    { to: "/contact", exact: true, name: "Contact" }
];



export { adminNav, nav };