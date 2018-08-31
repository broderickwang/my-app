import React,{Component} from 'react';

class ChildB extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div><h1>{this.props.value}</h1></div>
    }
}

export default ChildB;