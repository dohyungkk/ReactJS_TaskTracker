import{ useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import TAddasks from './components/AddTask'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Work Monday',
        day: 'March 8th at 9:00am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Golf Tuesday',
        day: 'March 9th at 11:00am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Car Checkup',
        day: 'March 10th at 1:45pm',
        reminder: true,
    }
  ]) 

  // Add Task

  // Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : ('No tasks to show')}
    </div>
  );
}

export default App;
