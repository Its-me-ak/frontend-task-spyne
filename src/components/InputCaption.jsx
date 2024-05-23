import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const InputCaption = ({ handleAddCaption }) => {
    const [text, setText] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text && start && end) {
            handleAddCaption({ id: uuidv4(), text, start: parseFloat(start), end: parseFloat(end) });
            setText('');
            setStart('');
            setEnd('');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="caption-form">
                <textarea
                    placeholder="Enter caption text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Start time (seconds)"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="End time (seconds)"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                />
                <button type="submit">Add Caption</button>
            </form>
        </div>
    )
}

export default InputCaption
