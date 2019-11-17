import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";

class MyProfile extends Component {

    render() {
        const { username, fullName, email, phone, accountNumber, direction, avatar } = this.props.user
        return (
            <div>
                <h1>This is the my profile page {username} <br />{email}<br />{fullName}</h1>

                <img src={avatar} ></img>
            </div>
        );
    }
}

export default withAuth(MyProfile);