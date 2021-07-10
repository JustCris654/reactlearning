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
    ])

    return (
        <div className="container">
            <Header title='Hello'/>
            <Tasks tasks={tasks}/>
        </div>
    );
}

export default App;
