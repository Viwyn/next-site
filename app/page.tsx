import Link from "next/link";
import { Tasks } from '../types'
import TaskCard from "./components/TaskCard";

const MainPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const tasks: Tasks[] = await res.json()

  return (
    <main>
      <ul>
        {tasks.map(task => <li key={task.id}>
          <TaskCard userId={task.id} title={task.title} id={task.id} completed={task.completed}/>
          </li>)}
      </ul>
      <Link href="login">Click me</Link>
    </main>
  );
}

export default MainPage