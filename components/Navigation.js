import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="flex">
      <h1 className="text-xl font-bold p-4">Ninjalist</h1>
      <Link href="/" className="text-xl font-medium ml-auto p-4">
        Home
      </Link>
      <Link href="/about" className="text-xl font-medium p-4">
        About
      </Link>
      <Link href="/ninjas" className="text-xl font-medium p-4">
        Ninja Listing
      </Link>
    </nav>
  );
};

export default Navigation;
