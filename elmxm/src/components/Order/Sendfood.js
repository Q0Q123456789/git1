import React from "react";

//引入路由
import { Link } from 'react-router';
import axios from 'axios';

// import '../static/css/allorder.css';

class Sendfood extends React.Component{
    constructor(props){
        super(props)

        this.state={
            list:[]
        }
    }

    componentWillMount(){
        var username = localStorage.getItem('userinfo')
        var that = this;
        var  url='http://60.205.226.107:8030/api/orderList'; 
        axios.get(url)
        .then(function (response) {
            //console.log(response.data.result);
            var arr = [];
            for(var i=0; i<response.data.result.length; i++){
                if(username == response.data.result[i].username){
                    arr.push(response.data.result[i])
                }
            }
            
            that.setState({
                list:arr
            })
            console.log(that.state.list);
        })
        .catch(function (error) {
            console.log(error); 
        });
    }

    render(){
        return(
            <div>
                {
                    this.state.list.map(function(value,key){ 
            
                        return <div className='sentfood-order' key={key}>
                            <img src={value.img}/>
                            <div>
                                <h2><span>{value.product_title}　></span><span>{value.status}</span></h2>
                                <p>{value.add_time}</p>
                                <p>{value.product_title}等{value.count}件商品</p>
                                <p>￥<span>{value.all_price}</span></p>
                            </div>
                        </div>
                    })

                }
            </div>
        )
    }
}

export default Sendfood;