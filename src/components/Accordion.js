import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const content = isExpanded && <div>{item.content}</div>; // && prende in considerazione il primo valore valso o il secondo vero

        return (
            <div key={item.id}>
                <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
                {content}
            </div>
        )
    });

    return (
        <div>
            {renderedItems}
        </div>
    )
};

export default Accordion;