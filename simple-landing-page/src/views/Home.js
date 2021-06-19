import React from "react";
import MainTemplate from "../template/MainTemplate";
import "../link.css"
import { Link } from "react-router-dom";

class Home extends React.Component{
    state = {
        skills: [
            {
                id: 1,
                name: "Javascript",
                image: "/images/javascript.png"
            },
            {
                id: 2,
                name: "React",
                image: "/images/react.png"
            },
            {
                id: 3,
                name: "Vue",
                image: "/images/vue.png"
            },
            {
                id: 4,
                name: "Svelte",
                image: "/images/svelte.png"
            },
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has" +
            " been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of" +
            " type and scrambled it to make a type specimen book. It has survived not only five centuries, but also" +
            " the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s" +
            " with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop" +
            " publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    };
    render() {
        return (
            <MainTemplate>
                <main className="flex-shrink-0">
                    <div className="bg-light p-5 rounded">
                        <h1>Home Page</h1>
                        <div className="container mt-5">
                            <div  className="row">
                                { this.state.skills.map(skill =>
                                    <div key={skill.id} className="col-sm-3">
                                        <Link
                                            to={
                                                {
                                                    pathname: `/detail/${skill.id}`,
                                                    state: this.state
                                                }
                                            }
                                            className="textLinkDetail">
                                                <img src={skill.image} alt={skill.name} className="rounded w-75"/>
                                                <h3>{skill.name}</h3>
                                        </Link>
                                    </div>
                                ) }
                            </div>
                        </div>
                    </div>
                </main>
            </MainTemplate>
        );
    }
}

export default Home;