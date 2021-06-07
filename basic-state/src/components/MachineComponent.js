import React from "react";

class MachineComponent extends React.Component {
    render() {
        const {name, os, processor, memory, graphics} = this.props.workingMachine;
        return (
            <div>
                <div>
                    Name: {name}
                </div>
                <div>
                    OS: {os}
                </div>
                <div>
                    Processor: {processor}
                </div>
                <div>
                    Memory: {memory}
                </div>
                <div>
                    Graphics: {graphics}
                </div>
            </div>

        );
    }
}

export default MachineComponent;