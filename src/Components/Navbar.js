import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <Link id="logo" href="/">
            Your Logo Here
            </Link>
        </div>
        <div className='navmenu'>
            <Link id="link" href="/about">
            About
            </Link>

            <Link id="link" href="/learning">
            Learnings
            </Link>

            <Link id="link" href="/contact">
            Contact
            </Link>
        </div>
    </nav>
  );
};

export default Navbar;
