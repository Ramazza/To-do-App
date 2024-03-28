import { Container } from './styles'

type ToDoType = { activity: string, completed: boolean };

interface ActivityProps {
   toDo: ToDoType;
}

const Activity: React.FC<ActivityProps> = ({ toDo }) => {

	return(
		<Container>
			<p>{toDo.activity}</p>
			<p>{toDo.completed ? "Completed" : "Incomplete"}</p>
		</Container>
	);

}

export default Activity;