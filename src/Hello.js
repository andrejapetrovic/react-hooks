import React, { useEffect } from 'react';

const Hello = () => {
	useEffect(() => {
		console.log("Mount");

		return () => {
			console.log("Unmount");
		}
	})

	return (
		<div >Hello</div>
	)
}

export default Hello;
