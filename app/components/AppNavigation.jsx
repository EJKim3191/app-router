import Link from "next/link";

function AppNavigation() {
    return (
        <div>
            <br />
            <a href="/">Home</a> / &nbsp;
            <a href="/login">Login</a>  
            <br />
            <Link href="/">Home</Link> / &nbsp;
            <Link href="/login">Login</Link>  
            <br />
            <br />
        </div>
    )
}

export default AppNavigation;