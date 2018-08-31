import React,{Component} from 'react';
import {ButtonGroup,DropdownButton,MenuItem,Button,Label} from 'react-bootstrap'
import ChildInput from './ChildInput'
import ChildB from "./ChildB";

class DropMenu extends Component{

    constructor(props){
        super(props);
        this.tk = this.tk.bind(this);
        this.state={
            clickCount : 0,
            star : 0,
            value : ''
        }
    }

    componentDidMount(){
        //如果使用函数，setState不是批量更新，tk的打印是3
        // this.setState((prevState,prevProps)=>({star: prevState.star+1}));
        // this.setState((prevState,prevProps)=>({star: prevState.star+1}));
        // this.setState((prevState,prevProps)=>({star: prevState.star+1}));
        //如果直接设置setState是批量更新，tk的打印是1
        this.setState({star:this.state.star+1});
        this.setState({star:this.state.star+1});
        this.setState({star:this.state.star+1});
        console.log('componentDidMount:'+this.state.star);
    }

    tk(){
        this.setState({clickCount: this.state.clickCount+1});
        console.log('tk:'+this.state.star);
    }

    /*handleCallBack(e){
        this.setState({ value: e.target.value });
    }*/
    handleCallBack = (e) => {
        this.setState({ value: e.target.value });
    }

    render(){
        return  <div>
            <Label bsStyle="primary">click me {this.state.clickCount} times,{this.state.value}</Label>
            <ButtonGroup>
                <DropdownButton bsStyle="success" title="Dropdown" id="abc">
                    <MenuItem key="1" onClick={this.tk}>下垃链接</MenuItem>
                    <MenuItem key="2">下垃链接</MenuItem>
                </DropdownButton>
                <Button bsStyle="info">中间</Button>
                <Button bsStyle="info">右侧</Button>
            </ButtonGroup>
                <ChildInput handleCallBack={this.handleCallBack}/>
            <div>
                <ChildB value={this.state.value}/>
            </div>

        </div>;
    }
}

export default DropMenu;
