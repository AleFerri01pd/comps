import Button from "./layouts/Button";
import { VscBracketError, VscCheck, VscBell, VscSmiley } from 'react-icons/vsc'

function App() {
	return (
	<div>
		<div>
			<Button primary outline rounded>
				<VscSmiley />
				Primary Button
			</Button>
		</div>
		<div>
			<Button warning rounded>
				<VscBell className="mr-1 fon" />
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