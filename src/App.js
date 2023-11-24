import Button from "./layouts/Button";
import { VscBracketError, VscCheck, VscBell, VscSmiley } from 'react-icons/vsc'

function App() {

	const handleClick = () => console.log('click')
	const handleMouseEnter = () => console.log('mouse entre')

	return (
	<div>
		<div>
			<Button primary outline rounded onClick={handleClick} className="mb-5">
				<VscSmiley />
				Primary Button
			</Button>
		</div>
		<div>
			<Button warning rounded onMouseEnter={handleMouseEnter}>
				<VscBell />
				Warning Button
			</Button>
		</div>
		<div>
			<Button secondary rounded>
				<VscSmiley />
				Secondary Button
			</Button>
		</div>
		<div>
			<Button success rounded outline>
				<VscCheck />
				Success Button
			</Button>
		</div>
		<div>
			<Button danger rounded outline>
				<VscBracketError />
				Danger Button
			</Button>
		</div>
	</div>
	)
}

export default App;