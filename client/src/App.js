import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles} from '@material-ui/core/styles';
//import classes from '*.module.css';

const styles = theme => ({
  root: {
    width : '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }


  componentDidMount() {
    this.timer = setInterval(this.progress, 60);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

progress = () => {
  const { completed } = this.state;
  this.setState({ completed: completed >= 100 ? 0 : completed + 1});
}

render() {
  const {classes} = this.props;
  return (
    <dib>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell><h2>번호</h2></TableCell>
            <TableCell><h2>이미지</h2></TableCell>
            <TableCell><h2>이름</h2></TableCell>
            <TableCell><h2>생년월일</h2></TableCell>
            <TableCell><h2>성별</h2></TableCell>
            <TableCell><h2>직업</h2></TableCell>
            <TableCell><h2>삭제</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.customers ? this.state.customers.map(c => { return (<Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); 
          }) : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value = {this.state.completed}/>
            </TableCell>
            </TableRow>}
        </TableBody>
      </Table>
    </Paper>
    <CustomerAdd stateRefresh={this.stateRefresh}/>
    </dib>
  );
}
}
export default withStyles(styles)(App);
