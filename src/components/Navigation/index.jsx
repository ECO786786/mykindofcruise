import Image from "next/image";
import "./index.css";
const Navigation = () => {
  return (
    <header>
      <nav>
        <Image
          src="https://www.mykindofcruise.com/_next/static/media/logo-full-text-white-overlay.b8a950a4.png"
          width={140}
          height={36}
          alt="My kind of cruise logo"
        />
      </nav>
    </header>
  );
};

export default Navigation;
