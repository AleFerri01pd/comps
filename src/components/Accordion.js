import { useState } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const content = isExpanded && <div className="delay-150 border-b p-5">{item.content}</div>; // && prende in considerazione il primo valore valso o il secondo vero
        const icon =  
            <span className="text-xl">
                { isExpanded ? <VscChevronDown /> : <VscChevronRight />}
            </span>

        const handleClick = (nextIndex) => {
            if(expandedIndex === nextIndex)
                setExpandedIndex(-1)
            else 
                setExpandedIndex(nextIndex)
        }

        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)} className="flex p-3 bg-gray-300 border-b items-center justify-between cursor-pointer">
                    {item.label}
                    {icon}
                </div>
                {content}
            </div>
        )
    });

    return (
        <div className="m-3 border-x border-t">
            {renderedItems}
        </div>
    )
};

export default Accordion;