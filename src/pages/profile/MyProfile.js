import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import './MyProfile.css'

class MyProfile extends Component {

    render() {
        const { username, fullName, email, phone, accountNumber, direction, avatar } = this.props.user
        return (
            <section>
                <div className="topPartProfile">

                    <label className="myProfile-Name">
                        {fullName}
                    </label>

                    <img className="image-in-profile" src={avatar} ></img>

                </div>

                <h1>This is the my profile page {username} <br />{email}<br />{fullName}</h1>


            </section>
        );
    }
}

export default withAuth(MyProfile);