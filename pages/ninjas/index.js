import Link from "next/link";
import styles from "../../styles/Ninjas.module.css"

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
        props:{
            ninjas:data
        }
    }
}
const Ninijas = ({ninjas}) => {
    return (  
    <div>
        <h1>All ninjas</h1>
        {ninjas.map((ninja)=>(
            <Link href={"/ninjas/"+ninja.id} key={ninja.id}>
                <p className={styles.single}>
                    <h3>{ninja.name}</h3>
                </p>
            </Link>
        ))}
    </div>
    );
}
 
export default Ninijas;