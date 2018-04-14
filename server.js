const express = require('express')
const app = express()
const path = require('path')

app.get('/api/dailyMeetingSchedule', function (req, res) {
  const obj = {
    "schedule": [{
      "description": "Scrum: 'stand up'",
      "time": "9:00",
      "duration": 30
    },
    {
      "description": "Status about 'project A'",
      "time": "10:00",
      "duration": 30
    },
    {
      "description": "Status about 'project B'",
      "time": "10:15",
      "duration": 30
    },
    {
      "description": "Status about 'project C'",
      "time": "10:20",
      "duration": 30
    },
    {
      "description": "Status about 'project D'",
      "time": "10:25",
      "duration": 30
    },
    {
      "description": "Meet friends for lunch",
      "time": "12:00",
      "duration": 60
    },
    {
      "description": "Meet parents for lunch",
      "time": "12:15",
      "duration": 60
    },
    {
      "description": "Meet with Tom",
      "time": "14:00",
      "duration": 120
    },
    {
      "description": "Call Dave",
      "time": "14:30",
      "duration": 60
    },
    {
      "description": "Resourceing for 'project X'",
      "time": "18:00",
      "duration": 60
    },
    {
      "description": "Sync with India dev team",
      "time": "18:30",
      "duration": 45
    },
    {
      "description": "Status about 'project Z'",
      "time": "19:15",
      "duration": 45
    }
    ]
  }
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.send(obj);
})


app.listen(3000)