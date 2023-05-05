import Link from 'next/link';

const Navbar = () => {

  const Customlink = ({href, title, className=""}) => {
    return (
      <Link href={href} className={'${className}'}>
        {title}
      </Link>
    )
  }

  return (
    <nav>
        <div className='logo'>
            <Customlink href="/" title="Home" className=''/>
           
        </div>
        <div className='navmenu'>
            <Customlink href="/about" title="About" className=''/>


            <Customlink href="/learning" title="Learning" className=''/>
        

            <Customlink href="/" title="Contact" className=''/>
    
        </div>
    </nav>
  );
};

export default Navbar;
