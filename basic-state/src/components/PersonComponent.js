import React from "react";
import BooksComponent from "./BooksComponent";
import MachineComponent from "./MachineComponent";
import AgeComponent from "./AgeComponent";

class PersonComponent extends React.Component {
    state = {
        person : {
            firstName: "John",
            lastName: "Doe",
            books: [
                {
                    id: 1,
                    title: "To Kill a Mockingbird",
                    author: "Harper Lee"
                },
                {
                    id: 2,
                    title: "Harry Potter and the Philosopher’s Stone",
                    author: "J.K. Rowling"
                },
                {
                    id: 3,
                    title: "The Great Gatsby",
                    author: "F. Scott Fitzgerald"
                },
                {
                    id: 4,
                    title: "Pride and Prejudice",
                    author: "Jane Austen"
                }
            ],
            workingMachine: {
                name: "MacBook Pro 2018",
                os: "BigSur",
                processor: "2,3 GHz Dual-Core Intel Core i5",
                memory: "8 GB 2133 MHz LPDDR3",
                graphics: "Intel Iris Plus Graphics 640 1536 MB"
            },
            age: 28
        }
    };

    render() {
        return (
            <div>
                <h1>Hello My Name is {this.state.person.firstName} {this.state.person.lastName}</h1>
                <h2>I have following books</h2>
                <BooksComponent books={this.state.person.books}/>
                <h2>This is the machine i use to work</h2>
                <MachineComponent workingMachine={this.state.person.workingMachine}/>
                <AgeComponent age={this.state.person.age}/>
                <AgeComponent/>
            </div>
        )
    }
}

export default PersonComponent;