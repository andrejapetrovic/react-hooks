import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({ data: null, loading: true })

	useEffect(() => {
		// const res = await fetch(url);
		// const data = await res.text();

		setState(state => ({ data: state.data, loading: true }));
		fetch(url)
			.then(res => res.text())
			.then(d => {
				setTimeout(() => {
					setState({ data: d, loading: false })
				}, 3000);
			})

	}, [url, setState])

	return state;
}
