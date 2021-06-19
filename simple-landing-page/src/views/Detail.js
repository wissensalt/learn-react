import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import MainTemplate from "../template/MainTemplate";
import { Link } from "react-router-dom";

class Detail extends React.Component{

    state = {
        data: {},
        description: ""
    };

    componentDidMount() {
        const {state} = this.props.location;
        const data = state.skills.find(skill => skill.id === parseInt(this.props.match.params.id));
        this.setState({
            data: data,
            description: state.description
        });
    }

    render() {
        return (
            <MainTemplate>
                <div className="container p-5">
                    <h1>{this.state.data.name}</h1>
                    <div className="row mt-3">
                        <img src={this.state.data.image} alt={this.state.data.name} className="col-md-4 rounded w-25"/>
                        <p className="col-md-8">
                            {this.state.description}
                        </p>
                    </div>

                    <Link to="/" className="btn btn-danger mt-3">
                        Home
                    </Link>
                </div>
            </MainTemplate>
        );
    }
}

export default Detail;