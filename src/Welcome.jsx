import React from "react";
export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props); // receive props value in class component
    }
    render() {
        return <div>
            <div>This is welcome class component</div>
            <div><b>Props Example: Employee name is {this.props.user} and Employee code is {this.props.employeeCode}</b></div>
        </div>
    }
}