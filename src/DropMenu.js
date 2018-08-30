import React,{Component} from 'react';
import {ButtonGroup,DropdownButton,MenuItem,Button,Label} from 'react-bootstrap'

class DropMenu extends Component{

    constructor(props){
        super(props);
        this.tk = this.tk.bind(this);
        this.state={
            clickCount : 0
        }
    }

    tk(){
        this.setState({clickCount: this.state.clickCount+1})
        console.log("tk");
    }

    render(){
        return  <div>
            <Label bsStyle="primary">click me {this.state.clickCount} times</Label>
            <ButtonGroup>
                <DropdownButton bsStyle="success" title="Dropdown" id="abc">
                    <MenuItem key="1" onClick={this.tk}>下垃链接</MenuItem>
                    <MenuItem key="2">下垃链接</MenuItem>
                </DropdownButton>
                <Button bsStyle="info">中间</Button>
                <Button bsStyle="info">右侧</Button>
            </ButtonGroup>
        </div>;
    }
}

export default DropMenu;
