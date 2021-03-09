const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5454;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send(
        [
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
    )
})

app.listen(port, () => console.log(`Listening on port ${port}`));