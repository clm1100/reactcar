import React, { Component } from 'react'
import CarHeader from './components/carheader'
class Cart extends Component {
    constructor(){
        super()
        this.state = {
            list:[
                {
                    id:"111",
                    name:"【5本26.8元】经典儿童文学彩图青少版八十天环游地球中学生语文教学大纲",
                    price:'12.60',
                    img:'upload/p1.jpg',
                    count:1
                },
                {
                    id: "222",
                    name: "【2000张贴纸】贴纸书 3-6岁 贴画儿童 贴画书全套12册 贴画 贴纸儿童 ",
                    price: '22.60',
                    img: 'upload/p2.jpg',
                    count: 1
                },
                {
                    id: "333",
                    name: "唐诗三百首+成语故事全2册 一年级课外书 精装注音儿童版 小学生二三年级课外阅读书籍",
                    price: '32.60',
                    img: 'upload/p3.jpg',
                    count: 1
                }
            ]
        }
    }
    render() {
        return (<div>
            <CarHeader />

            <div className="c-container">
                <div className="w">
                    <div className="cart-filter-bar">
                        <em>全部商品</em>
                    </div>
                    <div className="cart-warp">
                        <div className="cart-thead">
                            <div className="t-checkbox">
                                <input type="checkbox" name="" id="" className="checkall" /> 全选
                            </div>
                            <div className="t-goods">商品</div>
                            <div className="t-price">单价</div>
                            <div className="t-num">数量</div>
                            <div className="t-sum">小计</div>
                            <div className="t-action">操作</div>
                        </div>
                        <div className="cart-item-list">
                            {this.state.list.map(e=>{
                                return <div className="cart-item check-cart-item" key={e.id}>
                                    <div className="p-checkbox">
                                        <input type="checkbox" name="" id="" className="j-checkbox" onClick={this.select.bind(this)} />
                                    </div>
                                    <div className="p-goods">
                                        <div className="p-img">
                                            <img src="upload/p1.jpg" alt="" />
                                        </div>
                                        <div className="p-msg">【5本26.8元】经典儿童文学彩图青少版八十天环游地球中学生语文教学大纲</div>
                                    </div>
                                    <div className="p-price">￥12.60</div>
                                    <div className="p-num">
                                        <div className="quantity-form">
                                            <a href="#" className="decrement">-</a>
                                            <input type="text" className="itxt" value={e.count} onChange={()=>{}} />
                                            <a href="#" className="increment">+</a>
                                        </div>
                                    </div>
                                    <div className="p-sum">￥12.60</div>
                                    <div className="p-action"><a href="#">删除</a></div>
                                </div>
                            })}

                        </div>
                        <div className="cart-floatbar">
                            <div className="select-all">
                                <input type="checkbox" name="" id="" className="checkall" />全选
                                </div>
                            <div className="operation">
                                <a href="#" className="remove-batch"> 删除选中的商品</a>
                                <a href="#" className="clear-all">清理购物车</a>
                            </div>
                            <div className="toolbar-right">
                                <div className="amount-sum">已经选<em>1</em>件商品</div>
                                <div className="price-sum">总价： <em>￥12.60</em></div>
                                <div className="btn-area">去结算</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
    select(e){
        console.log(e)
    }
}

export default Cart