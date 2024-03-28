import { useState } from 'react';
import { Container, TaskContainer, Input, Button, Title } from './styles'
import Activity from '../../components/activity';

function Home() {

   type ToDoType = { activity: string, completed: boolean };

	const [activity, setActivity] = useState('');
	const [toDo, setToDo] = useState<ToDoType[]>([{ activity: '', completed: false }]);


	const handleAddActivity = () => {
		setActivity('');
		if(toDo[0].activity.length === 0){
			setToDo([{ activity: activity, completed: false }])
		} else {
			toDo.push({activity: activity, completed: false});
		}
	}

	return(
		<Container>
			<Title>To-do App</Title>
			<TaskContainer>
				<Input placeholder='To-do chores' value={activity} onChange={(e) => setActivity(e.target.value)}/>
				<Button onClick={() => handleAddActivity()}>Criar</Button>
			</TaskContainer>
			{toDo.map((toDoItem: ToDoType, index: number) => (
					<Activity toDo={toDoItem} key={index} />
				))}	
		</Container>
	);

}

export default Home;