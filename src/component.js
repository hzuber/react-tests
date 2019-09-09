import React, {useState} from 'react';


export default function Component(props){
    const { propsText = ""} = props;
    const [text, setText] = useState(propsText);
    console.log(props);
    return (
        <form onSubmit={(e) => {
            e.target.preventDefault();
            }}>

            <input 
                type="text"
                onChange={(e) => setText(e.target.value)}>
            </input>

            <button 
                type="submit"
                disabled={text.length < 3 }>
                    Submit
            </button>

            {text.length >= 3 && <h1 id="title">{text}</h1>}

        </form>
    )
}
Component.defaultProps={
    text: "hi"
}