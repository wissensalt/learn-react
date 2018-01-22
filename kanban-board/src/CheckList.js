import React from  "react";

class CheckList extends React.Component {
    render () {
        let tasks = this.props.tasks.map((task) => (
            <li className="checklist_task" key={task.id}>
                <input type="checkbox" defaultChecked={task.done} />                    
                <a href="#" className="checklist__task--remove">{task.name}</a>
            </li>
        ));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}
export default CheckList;