// import { useEffect } from "react";
// import { useState } from "react";

// const useLocalStorage = (key, initialValue) => {
// 	const [value, setValue] = useState(() => {
// 		try {
// 			const localValue = window.localStorage.getItem(key);
// 			return localValue ? JSON.parse(localValue) : initialValue;
// 		} catch (err) {
// 			console.log(err);
// 			return initialValue;
// 		}
// 	});

// 	useEffect(() => {
// 		window.localStorage.setItem(key, JSON.stringify(value));
// 	}, [key, value]);

// 	return [value, setValue];
// };

const getInitialTodos = () => {
	const saved = localStorage.getItem("todos");
	if (saved) {
		return JSON.parse(saved);
	}
};

export default getInitialTodos;
