import React, { Component } from 'react'

class carheader extends Component {
    render() {
        return (
            <div className="car-header">
                <div className="w">
                    <div className="car-logo">
                        <img src="img/logo.png" alt="" /> <b>购物车</b>
                    </div>
                </div>
            </div>
        )
    }
}

export default carheader