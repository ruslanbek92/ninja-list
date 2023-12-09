import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <nav className="logo">
            <h1>Ninja List</h1>
            <Image src="/muxr.jpg" width={128} height={77}/>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Linja listing</Link>    
        </nav>
     );
}
 
export default Navbar;