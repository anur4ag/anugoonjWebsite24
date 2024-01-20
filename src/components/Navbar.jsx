import logo from "../assets/logo.svg";
const leftNavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Events",
    path: "/events",
  },
];
const rightNavLinks = [
  {
    title: "Sponsors",
    path: "/sponsors",
  },
  {
    title: "Glimpses",
    path: "/glimpses",
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center py-4 px-8 w-full z-10 justify-evenly relative">
        <div className=" md:flex items-center space-x-5 gap-20">
          {leftNavLinks.map((link, index) => (
            <a
              href={link.path}
              key={index}
              className="text-lg font-semibold text-navtext uppercase transition duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="relative bottom-none md:-bottom-16 lg:-bottom-16">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="hidden lg:block absolute right-[22em] w-[28.5em] h-0.5 bg-[#1E1E1E]" />
            <img src={logo} alt="logo" className="w-[10em] md:w-[18em] lg:w-[20em]" />
            <div className="hidden lg:block absolute left-[22em] w-[28.5em] h-0.5 bg-[#1E1E1E]" />
          </div>
        </div>
        <div className=" md:flex items-center space-x-5 gap-20">
          {rightNavLinks.map((link, index) => (
            <a
              href={link.path}
              key={index}
              className="text-lg font-semibold text-navtext uppercase transition duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
