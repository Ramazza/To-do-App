import { createContext, useState } from 'react';

export const UserContext = createContext({ isEmpty: true, setIsEmpty: (value: boolean) => { } });

export const UserStorage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isEmpty, setIsEmpty] = useState(true);

	return (
		<UserContext.Provider value={{ isEmpty, setIsEmpty }}>
			{children}
		</UserContext.Provider>
	);
};