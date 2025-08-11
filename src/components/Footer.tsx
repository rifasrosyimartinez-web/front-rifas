import { FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#ff9f1c] to-[#ff7f11] text-white text-center p-4 mt-12">
      <p className="text-sm">© Rifas Rosyi Martinez</p>

      <div className="flex justify-center gap-4 my-3">
        <a
          href="https://www.instagram.com/rosyioficial?igsh=Zzl5M3hobng2YXV0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white rounded-full p-3"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@rosyi4?_t=ZM-8yk5UEL3gOL&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full p-3"
        >
          <FaTiktok size={20} />
        </a>
      </div>

      <p className="text-sm">Gracias por Confiar en Nosotros.</p>
    </footer>
  );
};

export default Footer;
