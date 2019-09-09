import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className="shortcut">
                <div className="w">
                    <div className="fl">
                        <ul>
                            <li>品优购欢迎您！ </li>
                            <li>
                                <a href={"/"}>请登录</a>
                                <a href={"/"} className="style-red">免费注册</a>
                            </li>
                        </ul>
                    </div>
                    <div className="fr">
                        <ul>
                            <li><a href={"/"}>我的订单</a></li>
                            <li className="spacer"></li>
                            <li>
                                <a href={"/"}>我的品优购</a>
                                <i className="icomoon"></i>
                            </li>
                            <li className="spacer"></li>
                            <li><a href={"/"}>品优购会员</a></li>
                            <li className="spacer"></li>
                            <li><a href={"/"}>企业采购</a></li>
                            <li className="spacer"></li>
                            <li><a href={"/"}>关注品优购</a> <i className="icomoon"></i></li>
                            <li className="spacer"></li>
                            <li><a href={"/"}>客户服务</a> <i className="icomoon"></i></li>
                            <li className="spacer"></li>
                            <li><a href={"/"}>网站导航</a> <i className="icomoon"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar