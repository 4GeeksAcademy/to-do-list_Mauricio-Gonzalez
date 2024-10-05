import React, { useState } from "react";

const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	// Agregar tarea al presionar Enter
	const addTask = (e) => {
		if (e.key === "Enter" && newTask.trim()) {
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	};

	// Eliminar tarea
	const deleteTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Todo List</h1>
			<input
				type="text"
				placeholder="Add a new task"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				onKeyPress={addTask}
				className="form-control my-3"
			/>
			<ul className="list-group">
				{tasks.length === 0 ? (
					<li className="list-group-item">No hay tareas, añadir tareas</li>
				) : (
					tasks.map((task, index) => (
						<li
							className="list-group-item d-flex justify-content-between align-items-center"
							key={index}>
							{task}
							<span  	className="delete-icon"
									onClick={() => deleteTask(index)}
									style={{ cursor: "pointer" }}>
									❌
								</span>
						</li>
					))
				)}
			</ul>
			<style>{`
				.list-group-item:hover .delete-icon {
					display: inline;
				}
			`}</style>
		</div>
	);
};

export default Home;