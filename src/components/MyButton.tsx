import { useState } from "react";

interface Props {
    text: string;
    color?: 'primary' | 'secondary';
    onButtonPressed: (selected: boolean) => void;
}

function MyButton({text, color = 'primary', onButtonPressed: onButtonPressed}: Props) {
    // Hook
    const [selected, setSelected]= useState(false);

    return (
            <>
              <button
                type="button"
                className={ 'btn btn-' + color }
                onClick={() => {
                    setSelected(!selected); 
                    onButtonPressed(selected);
                }}>
                {text}
              </button>
            </>
           );
}

export default MyButton;
