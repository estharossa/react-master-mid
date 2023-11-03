import './Form.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../avatar/Avatar'

function Form({ onSubmit }) {
    const [editorValue, setEditorValue] = useState('')

    const handleEditorValueChange = (e) => {
        setEditorValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(editorValue)
        setEditorValue('')
    }

    return (
        <form className="compose-form" onSubmit={handleSubmit}>
            <div className="compose-form-container">
                <Avatar />
                <textarea
                    value={editorValue}
                    onChange={handleEditorValueChange}
                    className="compose-form-textarea"
                    placeholder="What's happening?"
                />
            </div>
            <button className="compose-form-submit">Tweet</button>
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form