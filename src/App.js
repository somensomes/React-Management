import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/264/264/1',
    'name': '홍길겸',
    'birthday': '951212',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/264/264/2',
    'name': '홍길순',
    'birthday': '951212',
    'gender': '여자',
    'job': '프로그래머'
  },

  {
    'id': 3,
    'image': 'https://placeimg.com/264/264/3',
    'name': '홍길방',
    'birthday': '951212',
    'gender': '남자',
    'job': '요리사'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
              key={c.id}
              id = {c.id}
              image = {c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
              );
          })
        }
      </div>
    );
  }
}

export default App;
