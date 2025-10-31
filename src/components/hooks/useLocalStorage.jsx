import { useState, useEffect } from "react";
// import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
export default useLocalStorage;
