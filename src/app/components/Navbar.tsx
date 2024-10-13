import Link from "next/link"
import "./Navbar.css"; // Replace "styles.css" with the actual filename if you named it differently

export default function Navbar (){
    return(
        <header style={{backgroundColor:"gray", color:"white"}}>
            <nav>
                <ul>
                    <li style={{color:"white"}}>
                        <Link href="/category/crypto">Crypto</Link>
                    </li> 
                    <li style={{color:"white"}}>
                        <Link href="/products/product1">Laptop</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}