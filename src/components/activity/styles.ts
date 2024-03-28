import styled from 'styled-components';

export const Container = styled.div<{empty: boolean}>`
	display: ${({ empty }) => empty ? 'none' : 'flex'};
	padding-bottom: 1rem;
`;

export const Input = styled.input<{completed: boolean}>`
		width: 19vw;
		height: 30px;
		padding-left: 10px;
		border-radius: 10px 0 0 10px;
		border-color: ${({ completed }) => completed ? 'green' : 'red'};
		outline: 2px solid ${({ completed }) => completed ? 'green' : 'red'};
`;

export const ButtonContainer = styled.button<{completed: boolean}>`
	background-color: ${({ completed }) => completed ? 'green' : 'red'};           
	border-left: none;
	border-color: ${({ completed }) => completed ? 'green' : 'red'};
	outline: 2px solid ${({ completed }) => completed ? 'green' : 'red'};

`;

export const ButtonContainer2 = styled.button<{completed: boolean}>`
	background-color: white;           
	border-left: none;
	border-radius: 0 10px 10px 0;
	border-color: ${({ completed }) => completed ? 'green' : 'red'};
	outline: 2px solid ${({ completed }) => completed ? 'green' : 'red'};
`;

export const ButtonIcon = styled.img`
	width: 1rem;
`;