import React,{Component,PureComponent} from 'react'

class MyPure extends PureComponent{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        console.log("href clicked");
    }

    render(){
        return <a href="#" className="abTest" onClick={this.handleClick}>hello,{this.props.name}</a>
    }
}

export default MyPure;