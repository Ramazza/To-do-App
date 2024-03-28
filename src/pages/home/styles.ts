import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient( 109.6deg,  rgba(62,161,219,1) 11.2%, rgba(93,52,236,1) 100.2% );
	display: flex;
	flex-direction: column;
	align-items: center;

`;

export const Title = styled.span`
	font-size: 3em;
	font-weight: 500;
	padding: 2rem 0;
`;

export const TaskContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const Input = styled.input`
	width: 20vw;
	height: 30px;
	padding-left: 10px;
	color: black;            
	box-shadow: 0 0 2px #f8f8f8;
	border-radius: 10px 0 0 10px;
	border: none;

	&:focus{
		outline: 0;
	}
`;

export const Button = styled.button`
	background-image: linear-gradient( 109.6deg,  rgba(62,161,219,1) 11.2%, rgba(93,52,236,1) 100.2% );
	text-align: center;
	transition: 0.5s;
	background-size: 200% auto;
	color: black;            
	box-shadow: 0 0 2px #f8f8f8;
	border-radius: 0 10px 10px 0;
   border: none;
	font-size: 1em;
	font-weight: bold;

	&:hover {
		background-position: right center; 
		color: #fff;
	} 
`;