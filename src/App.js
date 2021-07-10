import {useState} from "react";


//import other components to be used as HTML tags
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {

    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Go to work',
            day: 'July 12th at 9:00',
            reminder: true,
        },
        {
            id: 2,
            text: 'Metting at school',
            day: 'July 31th at 7:40',
            reminder: false,
        },
        {
            id: 3,
            text: 'Surprise girlfriend',
            day: 'October 14th at 18:14',
            reminder: false,
        }
    ]);

    //Add task
    const addTask = (task) => {
        const id = Math.max(...tasks.map(a => a.id)) + 1;
        const newTask = {
            id, ...task
        }
        setTasks([...tasks, newTask]);
    }

    //Delete task
    const deleteTask = (id) => {
        //filter out the task with the id passed on the function
        setTasks(tasks.filter((task) => task.id !== id));
    }

    //Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, reminder: !task.reminder} : task
        ))

    }



    return (
        <div className="container">
            <Header title='Hello' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
                'No tasks to show'}
        </div>
    );
}

export default App;
