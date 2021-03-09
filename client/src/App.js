import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
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
  }
})
const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/164/164/1',
    'name': '홍길겸',
    'birthday': '951212',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/164/164/2',
    'name': '홍길순',
    'birthday': '951212',
    'gender': '여자',
    'job': '프로그래머'
  },

  {
    'id': 3,
    'image': 'https://placeimg.com/164/164/3',
    'name': '홍길방',
    'birthday': '951212',
    'gender': '남자',
    'job': '요리사'
  }
]

class App extends Component {
render() {
  const {classes} = this.props;
  return (
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
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); })}
        </TableBody>
      </Table>
    </Paper>
  );
}
}
export default withStyles(styles)(App);
