import Link from "next/link";
import { Tasks } from '../types'
import TaskCard from "./components/TaskCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function MainPage() {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const tasks: Tasks[] = await res.json()

    return (
        <main>
            <Header></Header>
            <ul>
                {tasks.map(task => <li key={task.id}>
                    <TaskCard userId={task.id} title={task.title} id={task.id} completed={task.completed} />
                </li>)}
            </ul>
            <Link href="login">Click me</Link>
            <Footer></Footer>
        </main>
    );
}
