import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
        <div class='logo'>
            <Link id="logo" href="/">
            Your Logo Here
            </Link>
        </div>
        <div class='navmenu'>
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
