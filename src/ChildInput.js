import React,{Component} from 'react';

/**
 * React回调，父组件将函数通过props传给子组件，子组件在合适的时候通过回调，调用props中的函数
 */
class ChildInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <input type="text" onChange={this.props.handleCallBack}></input>
    }
}

export default ChildInput;