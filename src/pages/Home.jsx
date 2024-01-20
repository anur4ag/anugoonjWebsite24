import background from '../assets/background.svg'
import top from "../assets/top.svg"
import bottom from "../assets/bottom.svg"
import bottomIllustration from "../assets/bottomillustrations.svg"
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <>
            <div className="min-h-screen min-w-screen relative" style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <Navbar />
                <div className="absolute -top-20 left-0 ">
                    <img src={top} alt="top" />
                </div>
                <div className='flex absolute top-[40%] justify-center items-center w-full'>
                    <h1 className='text-center text-5xl lg:text-9xl z-10 uppercase text-navtext font-bold'>Comming Soon</h1>
                </div>
                <div className="absolute bottom-0 left-0">
                    <img src={bottom} alt="bottom" />
                </div>
                <div className="absolute bottom-0 -left-8 ">
                    <img src={bottomIllustration} alt="bottomIllustration" />
                </div>

            </div>
        </>
    )
}

export default Home