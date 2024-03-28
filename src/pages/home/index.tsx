import { useState, useContext, useEffect } from 'react';
import { Container, TaskContainer, Input, Button, Title } from './styles'
import Activity from '../../components/activity';
import { UserContext } from '../../contexts/userContext';


function Home() {

   type ToDoType = { activity: string, completed: boolean };

	const [activity, setActivity] = useState('');
	// const [toDo, setToDo] = useState<ToDoType[]>([{ activity: '', completed: false }]);
	const [toDo, setToDo] = useState<ToDoType[]>(() => {
		const storedActivities = localStorage.getItem('activities');
		return storedActivities ? JSON.parse(storedActivities) : [{ activity: '', completed: false }];
	});

	const { setIsEmpty } = useContext(UserContext);

	useEffect(() => {
		const storedActivities = localStorage.getItem('activities');
		if (storedActivities) {
			setToDo(JSON.parse(storedActivities));
		}
		setIsEmpty(false);
	}, []);

	useEffect(() => {
		localStorage.setItem('activities', JSON.stringify(toDo));
	}, [toDo]);

	const handleAddActivity = () => {
		setActivity('');
		if (toDo.length === 0 || toDo[0].activity.length === 0) {
			setToDo([{ activity: activity, completed: false }]);
		} else {
			const newToDo = [...toDo, { activity: activity, completed: false }];
			setToDo(newToDo);
		}
		setIsEmpty(false);
	};

	const handleRemoveActivity = (index: number) => {
      const newToDo = [...toDo];
      newToDo.splice(index, 1);
      setToDo(newToDo);
   }

	const handleUpdateToDo = (index: number, completed: boolean) => {
		const updatedToDo = [...toDo];
		updatedToDo[index].completed = completed;
		setToDo(updatedToDo);
	};

	return(
		<Container>
			<Title>To-do App</Title>
			<TaskContainer>
				<Input placeholder='Coisas para fazer...' value={activity} onChange={(e) => setActivity(e.target.value)}/>
				<Button onClick={() => handleAddActivity()}>Criar</Button>
			</TaskContainer>
			{toDo.map((toDoItem: ToDoType, index: number) => (
				<Activity toDo={toDoItem} key={index} index={index} removeActivity={handleRemoveActivity} updateToDo={handleUpdateToDo}/>
			))}	
		</Container>
	);

}

export default Home;