import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
      setTimeout(()=>{
        router.push("/")
      },3000 );
    }, []);
    return ( 
    <div className="not-found">
        <h1>Oooooops...</h1>
        <h2>That page cannot be found</h2>
        <p>go back to the <Link href="/" className="link">HomePage</Link></p>
    </div> );
}
 
export default NotFound;