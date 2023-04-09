import "./App.css"
import { Task } from "./Task"
import React, { useState } from "react"

function App() {
	const [inputText, setInputText] = useState("")
	const [taskList, setTaskList] = useState([])

	const inputTextChange = e => {
		setInputText(e.target.value)
	}
	const addTask = () => {
		const task = {
			inputText: inputText,
			id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
			complete: false,
		}
		task.inputText !== "" && setTaskList([...taskList, task])
	}

	const handleKeyPress = e => {
		e.key === "Enter" && addTask()
	}

	const deleteTask = id => {
		const newToDoList = taskList.filter(task => {
			if (task.id === id) {
				return false
			} else return true
		})
		setTaskList(newToDoList)
	}
	const completeTask = id => {
		setTaskList(
			taskList.map(task => {
				if (task.id === id) {
					return { ...task, complete: true }
				}
				return task
			})
		)
	}

	return (
		<div className='App'>
			<div className='w-full flex items-center flex-col gap-7'>
				<div className='flex items-center justify-center  p-10'>
					<input
						onKeyPress={handleKeyPress}
						onChange={inputTextChange}
						placeholder='Task name'
						className='w-1/5 min-w-[300px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					/>

					<button
						onClick={addTask}
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3'>
						Add Task
					</button>
				</div>
				<div className='flex flex-col gap-6'>
					{taskList.map(task => {
						return (
							<Task
								inputText={task.inputText}
								id={task.id}
								complete={completeTask}
								completeTask={task.complete}
								deleteTask={deleteTask}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default App
