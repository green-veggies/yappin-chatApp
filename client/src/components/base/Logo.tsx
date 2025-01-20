import Image from 'next/image';
import Link from 'next/link';


const Logo = () => {
  return (
    <div className="text-2xl md:text-4xl font-extrabold italic">
      <Link href="/">
        <Image
          src="/images/logo1.png"
          alt="Yappin Logo"
          width={100}
          height={50}
          className="rounded-full object-cover"
        />
      </Link>
    </div>
  );
};

export default Logo;