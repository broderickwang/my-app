import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Clock';
import HelloMessage from './HelloMessage'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import DropMenu from './DropMenu';
// import Hi from './Hi';
import AntdTest from './AntdTest'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloMessage name="LanCoder"/>,document.getElementById('hellomsg'));
ReactDOM.render(<DropMenu/>,document.getElementById('dropmenu'));
ReactDOM.render(<AntdTest/>,document.getElementById('datepicker'));
registerServiceWorker();
