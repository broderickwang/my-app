import React,{Component} from 'react';
import MyPure from './MyPure';

class ChildB extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div><h1><MyPure name={this.props.value}></MyPure></h1></div>
    }
}

export default ChildB;