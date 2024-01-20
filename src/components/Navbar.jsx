import logo from "../assets/logo.svg";
const leftNavLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Events',
        path: '/events'
    },
]
const rightNavLinks = [
    {
        title: 'Sponsors',
        path: '/sponsors'
    },
    {
        title: 'Glimpses',
        path: '/glimpses'
    }
]

const Navbar = () => {
    return (
        <div>
            <div className="flex items-center py-4 px-8 w-full z-10 justify-around  relative">

                <div className=" md:flex items-center space-x-5">
                    {leftNavLinks.map((link, index) => (
                        <a href={link.path} key={index} className="text-lg font-semibold text-navtext transition duration-300">{link.title}</a>
                    ))}
                </div>
                <div className="">

                    <img src={logo} alt="logo" />
                </div>
                <div className=" md:flex items-center space-x-5">
                    {rightNavLinks.map((link, index) => (
                        <a href={link.path} key={index} className="text-lg font-semibold text-navtext  transition duration-300">{link.title}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar