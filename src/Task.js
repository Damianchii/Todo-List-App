import React from "react"
import { TbTrash } from "react-icons/tb"
import { TiTick } from "react-icons/ti"
//
export const Task = props => {
	return (
		<div
			className={`flex rounded-lg border-4 border-grey-500 p-3 items-center gap-6 justify-between shadow-sm ${
				props.completeTask
					? "shadow-green-500 border-green-500 animate-[shadowAfterClick_0.3s_ease-in-out_1]"
					: "shadow-gray-500 border-gray-500"
			}`}>
			<h1>{props.inputText}</h1>
			<div className='gap-3 flex items-center'>
				<button
					onClick={() => props.complete(props.id)}
					className='w-11 h-11 bg-green-500 rounded-full flex items-center justify-center text-2xl text-white '>
					<TiTick />
				</button>
				<button
					onClick={() => props.deleteTask(props.id)}
					className='w-11 h-11 bg-red-600 rounded-full flex items-center justify-center text-xl text-white'>
					<TbTrash />
				</button>
			</div>
		</div>
	)
}
