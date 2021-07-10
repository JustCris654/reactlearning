import {useState} from "react";


//import other components to be used as HTML tags
import Header from './components/Header';
import Tasks from "./components/Tasks";

const App = () => {

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
            <Header title='Hello'/>
            {tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
                'No tasks to show'}
        </div>
    );
}

export default App;
