import Accordion from "./components/Accordion";

function App() {
	const items = [
		{
			id: Math.floor(Math.random() * 1000000),
			label: "Item 1",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sem nibh. Phasellus varius nisl augue, a aliquet ipsum sollicitudin nec. Sed imperdiet et lacus hendrerit placerat."
		},
		{
			id: Math.floor(Math.random() * 1000000),
			label: "Item 2",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		},
		{
			id: Math.floor(Math.random() * 1000000),
			label: "Item 3",
			content: "Consectetur adipiscing elit. Fusce vitae sem nibh. Phasellus varius nisl augue, a aliquet ipsum sollicitudin nec. Sed imperdiet et lacus hendrerit placerat."
		},
	]
	return (
		<Accordion items={items} />
	)
}

export default App;