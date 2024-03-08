import Link from "next/link"
import MenuItem from "./MenuItem"
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"
import DarkModeSwitch from "./DarkModeSwitch"

const Header = () => {
     return (
          <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
               <Link href={"/"}>
                    <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
               </Link>
               <div className="flex gap-4 items-center">
                    <MenuItem title="home" address="/" Icon={AiFillHome} />
                    <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
                    <DarkModeSwitch />
               </div>
          </div>
     )
}

export default Header
