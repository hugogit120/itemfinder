import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import apiService from "../../services/Api";
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import BuyCard from "../../components/BuyCard/BuyCard"
import './MyProfile.css'

class MyProfile extends Component {

    state = {
        user: null
    }

    async componentDidMount() {
        const user = await apiService.getOneProfile(this.props.user._id)
        this.setState({ user })
    }

    render() {
        const { username, fullName, email, phone, accountNumber, direction, avatar } = this.props.user
        const { user } = this.state

        return (
            <section>
                <div className="topPartProfile">

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{ color: "#29374E" }} className="myProfile-Name">
                            {fullName}
                        </label>
                        <label className="myProfile-Name">
                            <FontAwesomeIcon style={{ color: "black" }} icon={faMobileAlt} />
                            {phone}
                        </label>
                        <label className="myProfile-Name">
                            <FontAwesomeIcon style={{ color: "black" }} icon={faEnvelope} />
                            {email}
                        </label>
                    </div>

                    <img className="image-in-profile" src={avatar} ></img>

                </div>

                <hr style={{ margin: "20px" }} />

                <section className="my-buys">
                    {user ? user.buys.map(buy => {
                        return (
                            <BuyCard product={buy} key={buy._id} />
                        )
                    }) : <p>loading....</p>}
                </section>

            </section>
        );
    }
}

export default withAuth(MyProfile);