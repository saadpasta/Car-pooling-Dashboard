import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
               <div className="footer">
                        <div className="footer-div">
                            <div className="show-entries">
                                <span>Show</span>
                                <span className="entries-box">10</span>
                                <span>Entries</span>
                            </div>
                            <div className="total-number-div">
                                <span className="back-page">></span>
                                <span className="red-color">1</span>
                                <span>2</span>
                                <span className="margin-left-right">3</span>
                                <span>...  </span>
                                <span>    10</span>

                                <span className="front-page">></span>
                            </div>
                        </div>
                    </div> 
            </div>
        )
    }
}
