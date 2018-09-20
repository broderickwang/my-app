import React, { Component } from 'react';
import { Button, version,DatePicker } from "antd";
import "antd/dist/antd.css";

class AntdTest extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return <DatePicker/>
    }

}

export default AntdTest;