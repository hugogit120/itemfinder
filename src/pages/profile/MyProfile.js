import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import apiService from "../../services/Api";
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import BuyCard from "../../components/BuyCard/BuyCard"
import './MyProfile.css'
import MyProductCard from "../../components/MyProductCard/MyProductCard";

class MyProfile extends Component {

    state = {
        user: null,
        products: null
    }

    async componentDidMount() {
        const user = await apiService.getOneProfile(this.props.user._id)
        const products = await apiService.getUserProducts()
        this.setState({ user, products })
    }

    async productDelete(id) {
        await apiService.deleteProduct(id)
        let productsCopy = [...this.state.products];
        const filtered = productsCopy.filter(product => product._id !== id);
        this.setState({
            products: filtered
        })
    }

    render() {
        const { fullName, email, phone, avatar } = this.props.user
        console.log(this.props.user)
        const { user, products } = this.state

        return (
            <section>
                <div className="topPartProfile">

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{ color: "#29374E" }} className="myProfile-Name">
                            {fullName}
                        </label>
                        <label className="myProfile-Name">
                            <FontAwesomeIcon style={{ color: "black", marginRight: "10px", fontSize: "20px" }} icon={faMobileAlt} />
                            {phone}
                        </label>
                        <label className="myProfile-Name">
                            <FontAwesomeIcon style={{ color: "black", marginRight: "10px", fontSize: "20px" }} icon={faEnvelope} />
                            {email}
                        </label>
                    </div>

                    <img className="image-in-profile" src={avatar} ></img>

                </div>

                <hr style={{ margin: "20px" }} />

                <label style={{ color: "#29374E", marginLeft: "38px" }} className="myProfile-Name">Buyed Products</label>

                <section className="my-buys">
                    {user ? user.buys.map(buy => {
                        return (
                            <BuyCard product={buy} key={buy._id} />
                        )
                    }) : <p>loading....</p>}
                </section>

                <hr></hr>

                <label style={{ color: "#29374E", marginLeft: "38px" }} className="myProfile-Name">My products for sale</label>

                <section>
                    {products ? products.map(product => {
                        return (
                            <MyProductCard product={product} remove={(id) => this.productDelete(id)} key={product._id} />
                        )
                    }) : <p>loading....</p>}
                </section>
            </section>
        );
    }
}

export default withAuth(MyProfile);