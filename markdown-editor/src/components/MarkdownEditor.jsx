import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Remarkable from 'remarkable'

class MarkdownEditor extends Component {
    state = {
        content: '',
        markdown: ''
    }

    handleChange = (e) => {
        this.setState({ content: e.target.value })
        this.setState({ markdown: new Remarkable().render(this.state.content) })
    }

    render() {
        return (
            <div>
                <h3 className='badge badge-secondary m-2'>Input</h3>
                <div>
                    <label htmlFor="markdown-content">
                        Enter some markdown
                </label>
                </div>
                <div>
                    <textarea
                        id="markdown-content"
                        rows="5"
                        cols="30"
                        onChange={this.handleChange}
                    />
                </div>
                <h3 className='badge badge-secondary'>Output</h3>
                <div>
                    {this.state.markdown}
                </div>
            </div>
        );
    }
}

export default MarkdownEditor;