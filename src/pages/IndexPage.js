import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/template.scss';
import div1Pic from "../assets/img/1.PNG"
import profile from "../assets/img/profile.svg"
import Footer from "../components/layout/Footer"
import Sidebar from "../components/layout/Sidebar"
import ChartComponent from "../components/layout/ChartComponent"
import TableComponent from "../components/layout/TableComponent"




class TemplatePage extends Component {
    constructor(props) {
        super(props);

        this.state = {


        }
        this.routeChange = this.routeChange.bind(this);

    };



    routeChange() {
        let path = `/login`;
        this.props.history.push(path);
    };

    render() {

        return (
            <div>
                <Sidebar />
                <div className="template-main">
                    <div className="index-header-div">
                        <h5>Analytics</h5>

                        <div className="red-button">
                            See more Analytics
                </div>
                    </div>
                    <div className="cards-main-div">
                        <div className="icon-card">

                            <div className="image-div">
                                <img src={profile} className="card-image-profile"></img>
                                <p>Last update: 12:09 pm</p>
                            </div>

                            <div className="number-div">
                                <p className="number">150</p>
                                <p className="number-subtitle">Number of Users</p>
                            </div>
                        </div>

                        <div className="icon-card">

                            <div className="image-div">
                                <img src={div1Pic} className="card-image"></img>
                                <p>Rank : 5th among companies</p>
                            </div>

                            <div className="number-div">
                                <p className="number">$1,345</p>
                                <div className="number-subtitle-div">
                                    <p className="number-subtitle">Money Commuter saved</p>
                                    <p>65%</p>
                                </div>
                            </div>
                            <div className="progress-bar-div-blue">
                                <div className="progress-bar-line-blue">
                                </div>
                            </div>
                        </div>

                        <div className="icon-card">

                            <div className="user-image-div">
                                <img src={div1Pic} className="card-image"></img>
                                <div className="name-div">
                                    <span className="display-block">Josie Townsend</span>
                                    <span className="grey-color">Account Manager</span>
                                </div>
                            </div>

                            <div className="number-div">
                                <span className="number">45</span>
                                <span className="small-font"> Rides</span>
                                <p className="number-subtitle">Most Carpooler</p>
                            </div>
                        </div>

                        <div className="icon-card">

                            <div className="image-div">
                                <img src={div1Pic} className="card-image"></img>
                                <p>Rank : 12th among companies</p>
                            </div>

                            <div className="number-div">
                                <span className="number">12</span>
                                <span className="small-font"> Parking spot</span>
                                <div className="number-subtitle-div">
                                    <p className="number-subtitle">Parking Lot Saved</p>
                                    <p>65%</p>
                                </div>
                            </div>
                            <div className="progress-bar-div-darkBlue">
                                <div className="progress-bar-line-darkBlue">
                                </div>
                            </div>
                        </div>

                        <div className="icon-card">

                            <div className="image-div">
                                <img src={div1Pic} className="card-image"></img>
                                <p>Rank : 12th among companies</p>
                            </div>

                            <div className="number-div">
                                <span className="number">45 </span>
                                <span className="small-font">Tons</span>
                                <div className="number-subtitle-div">
                                    <p className="number-subtitle">Co2 Emission Prevented</p>
                                    <p>65%</p>
                                </div>
                            </div>
                            <div className="progress-bar-div">
                                <div className="progress-bar-line">
                                </div>
                            </div>
                        </div>

                        <div className="icon-card">

                            <div className="image-div">
                                <img src={div1Pic} className="card-image"></img>
                                <p>Rank : 8th among companies</p>
                            </div>

                            <div className="number-div">
                                <span className="number">45k </span>
                                <span className="small-font">Miles</span>
                                <div className="number-subtitle-div">
                                    <p className="number-subtitle">Miles not driven</p>
                                    <p>65%</p>
                                </div>
                            </div>
                            <div className="progress-bar-div-green">
                                <div className="progress-bar-line-green">
                                </div>
                            </div>
                        </div>

                    </div>

                    <ChartComponent />

                    <TableComponent />

                    <Footer />
                </div>
            </div>
        )
    };

}

export default withRouter(TemplatePage);