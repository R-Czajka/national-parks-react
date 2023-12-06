import React, {useEffect, useState} from "react";

export function TreeType() {

    const [types, setTypes] = useState(['Oak', 'Pine', 'Birch', 'Maple']);

    const [counter, addCounter] = useState(0);

    function randomizeTypes() {
        const shuffleTypes = randomize([...types]);
        setTypes(shuffleTypes);
    }

    const countShuffle = () => {
        addCounter(counter + 1);
    }

    const handleButton = () => {
        randomizeTypes()
        countShuffle()
    }
    
    
    function randomize(values) {
        let index = values.length,
          randomIndex;
    
          while (index != 0) {
            randomIndex = Math.floor(Math.random() * index);
            index--;
    
            [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
          }
            return values;
          }

    
    return(

        <div>
            <button onClick={handleButton}> Shuffle</button>
            <ul className="treeType">
                { types.map((type, index) => (
                    <li key={index}>{type}</li>
                ))}
            </ul>
            <p>You have shuffled <span style={{ color: 'red'}}>{counter} </span> times.</p>
        </div>
    );
}



