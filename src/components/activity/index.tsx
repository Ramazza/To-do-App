import { useContext, useEffect, useState } from 'react';
import { Container, Input, ButtonContainer, ButtonContainer2, ButtonIcon } from './styles'
import { UserContext } from '../../contexts/userContext';
import Not from '../../assets/checkbox-ok.png';
import Ok from '../../assets/checkbox.png'
import Close from '../../assets/close.png';


type ToDoType = { activity: string, completed: boolean };

interface ActivityProps {
   toDo: ToDoType;
	index: number;
	removeActivity: (index: number) => void;
	updateToDo: (index: number, completed: boolean) => void;
}

const Activity: React.FC<ActivityProps> = ({ toDo, index, removeActivity, updateToDo }) => {

	const { isEmpty } = useContext(UserContext);

	const [activityText, setActivityText] = useState(toDo.activity);
	const [complete, setComplete] = useState(Not);

	const handleComplete = () => {
		if(complete === Not){
			setComplete(Ok);
			updateToDo(index, true);
		} else {
			setComplete(Not);
			updateToDo(index, false);
		}
	}

	useEffect(() => {
		setActivityText(toDo.activity);
	}, [toDo.activity])

	return(
		<Container empty={isEmpty}>
			<Input completed={toDo.completed} value={activityText} onChange={(e) => setActivityText(e.target.value)}/>
			<ButtonContainer  completed={toDo.completed} onClick={() => handleComplete()}>
				<ButtonIcon src={toDo.completed? Ok : Not}/>
			</ButtonContainer>
			<ButtonContainer2 completed={toDo.completed} onClick={() => removeActivity(index)}>
				<ButtonIcon src={Close}/>
			</ButtonContainer2>
		</Container>
	);

}

export default Activity;