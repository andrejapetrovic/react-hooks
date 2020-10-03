import React, { useState, useEffect } from 'react';
import { useForm } from "./useForm";
import './App.css';

const App = () => {
	// const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 }); 
	const [count, setCount] = useState(10);
	const [count2, setCount2] = useState(20);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [values, handleChange] = useForm({
		email: "", password: "", firstName: "" });

	useEffect(() => {
		console.log("Render");
	}, [values.password, values.firstName])

  return (
		<div>
			<button onClick={() =>  {
					// setCount(currentState => ({
					// 	...currentState,
					// 	count: currentState.count + 1
				// }))
					setCount(c => c + 1);
					setCount2(c => c + 1);
				}}>
				Count
			</button>
			<div >count 1: {count}</div>
			<div >count 2: {count2}</div>
			<br />
			<br />
			<br />
			<br />
			<input 
				name="email"
				value={values.email}
				onChange={handleChange}
			/>
			<input 
				name="firstName"
				value={values.firstName}
				onChange={handleChange}
			/>
			<input 
				type="password"
				name="password"
				value={values.password}
				onChange={handleChange}
			/>
			<br />
			<br />
			{values.email}
			<br />
			<br />
			{values.password}
			<button onClick={() => console.log("Hello world")} >Hello world</button>
		</div>
  );
}

export default App;
