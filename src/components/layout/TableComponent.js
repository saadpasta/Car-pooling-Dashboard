import React, { Component } from 'react'
import div1Pic from "../../assets/img/1.PNG"
import Table from "react-bootstrap/Table"

export default class TableComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="table-main-header">
                        <div>
                            <span className="small-font">Users in your Company list</span>
                            <span className="grey-color"> 150 Total</span>
                        </div>
                        <div className="red-button">
                            Filter
                </div>
                    </div>
                    <div className="table-main-div">
                        <Table className="user-table" responsive>
                            <tr className="user-table-header">
                                <td></td>
                                <td>NAME</td>
                                <td>USER ID</td>
                                <td>TRIP GIVEN</td>
                                <td>LAST ACTIVITY</td>
                                <td>START DATE</td>
                                <td>TRIP TAKEN</td>
                                <td>ACTION</td>
                            </tr>
                            <tr className="user-table-tr">
                                <td className="grey-color">1.</td>
                                <td className="user-name"><img src={div1Pic} className="user-image"></img>Saad Pasta</td>
                                <td className="grey-color">#123456</td>
                                <td>13</td>
                                <td>8/21/2019</td>
                                <td>12/24/2019</td>
                                <td>10</td>
                                <td className="user-name"><i className="fa fa-info TableAction1 " ></i> <i className="fa fa-trash TableAction2 " ></i></td>
                            </tr>
                            <tr className="user-table-tr">
                                <td className="grey-color">2.</td>
                                <td className="user-name"><img src={div1Pic} className="user-image"></img>Saad Pasta</td>
                                <td className="grey-color">#123456</td>
                                <td>13</td>
                                <td>8/21/2019</td>
                                <td>12/24/2019</td>
                                <td>10</td>
                                <td className="user-name"><i className="fa fa-info TableAction1 " ></i> <i className="fa fa-trash TableAction2 " ></i></td>
                            </tr>
                            <tr className="user-table-tr">
                                <td className="grey-color">3.</td>
                                <td className="user-name"><img src={div1Pic} className="user-image"></img>Saad Pasta</td>
                                <td className="grey-color">#123456</td>
                                <td>13</td>
                                <td>8/21/2019</td>
                                <td>12/24/2019</td>
                                <td>10</td>
                                <td className="user-name"><i className="fa fa-info TableAction1 " ></i> <i className="fa fa-trash TableAction2 " ></i></td>
                            </tr>
                        </Table >
                    </div>
                </div>
            </div>
        )
    }
}
