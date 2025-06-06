import Link from "next/link";
import TaskCard from "./components/TaskCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function MainPage() {
    return (
        <main>
            <Header></Header>
            <Link href="login">Click me</Link>
            <Footer></Footer>
        </main>
    );
}
