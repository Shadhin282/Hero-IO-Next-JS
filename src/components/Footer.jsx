import Image from "next/image";
import logo from '../../public/logo.png' 
import { FaFacebook,FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <div className="flex justify-center items-center gap-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span className="font-semibold text-lg">HERO.IO</span>
        </div>

        <p>
          HERO.IO Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>

      <nav>
        <h6 className=" text-white/80 font-semibold text-lg">Social</h6>

        <div className="grid grid-flow-col gap-4">
          {/* Twitter */}
          <a>
                      
          <BsTwitterX className="w-10 h-10 text-black bg-white rounded-full" />
            
          </a>

          {/* YouTube */}
          <a>
           <FaYoutube className="w-10 h-10 text-red-500 bg-white rounded-full" />
          </a>

          {/* Facebook */}
          <a>
             <FaFacebook className="w-10 h-10 text-blue-500 bg-white rounded-full" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
