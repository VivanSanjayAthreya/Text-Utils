import React,{ useState } from 'react'

export default function TextArea(props) {

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleOnCheck = (event) => {
        setNotRobot(event.target.checked)
    }

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showDisplayMessage("The text is converted to uppercase!","success");
    }

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showDisplayMessage("The text is converted to lowercase!","success");
    }

    const handleClearTextClick = () => {
        let newText = '';
        setText(newText);
        props.showDisplayMessage("Text area is Cleared!","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showDisplayMessage("The text is copied to Clipboard!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showDisplayMessage("All extra spaces have been removed!","success");
    }

    const [text,setText] = useState('');
    const [notRobot,setNotRobot] = useState(false);

    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
                <div>
                    <h1 className='mb-4'>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#18283e' : 'white',color: props.mode === 'dark' ? 'white' : '#212529' }} id="textBox" value={text} onChange={handleOnChange} rows="10" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="robotCheck" checked={notRobot} onChange={handleOnCheck} disabled={text.length === 0} />
                        <label className="form-check-label" htmlFor="robotCheck">I'm not a robot</label>
                    </div>
                    <button disabled={!notRobot || text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                    <button disabled={!notRobot || text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                    <button disabled={!notRobot || text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearTextClick}>Clear Text</button>
                    <button disabled={!notRobot || text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={!notRobot || text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#212529',paddingBottom: '3rem' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p style={{ textAlign: 'justify' }}>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>

        </>)
}
