import {useState} from "react";

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!text){
            alert('Please add text');
            return;
        }

        onAdd({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>

            {/*task name*/}
            <div className="form-control">
                <label htmlFor="addTask">Task</label>
                <input type="text"
                       placeholder="add task"
                       name="addTask"
                       value={text}
                       onChange={(e) =>
                           setText(e.target.value)
                       }
                />
            </div>

            {/*task date*/}
            <div className="form-control">
                <label htmlFor="date">Day & time</label>
                <input type="text" placeholder="Month 00th at 12:00" name="date"
                       value={day}
                       onChange={(e) =>
                           setDay(e.target.value)
                       }/>
            </div>

            {/*Reminder*/}
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set reminder</label>
                <input type="checkbox" checked={reminder} name="reminder"
                       value={reminder}
                       onChange={(e) =>
                           setReminder(e.currentTarget.checked)
                       }/>
            </div>

            {/*Submit button*/}
            <div>
                <input type="submit" value="Save task" className='btn btn-block'/>
            </div>
        </form>
    );
};

export default AddTask;