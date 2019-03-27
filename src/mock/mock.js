const MockJs = require('mockjs')

const userInfo = {
  status: 'ok',
  userInfo: {
    userid: 'bao qiang',
    password: '123456'
  }
}

const taskListData = function () {
  const tempData = [{
    itemid: 100000,
    type: 'X-0011-1',
    title: '2018-12-04的卸车单，请登记处理！',
    garrisonTime: '2018-12-04 12:36:45',
    predictTruckTime1: '',
    predictTruckTime2: '',
    actualTruckTime: '',
    removeDefendTime: ''
  },
  {
    itemid: 100001,
    type: 'X-0011-2',
    title: '2018-12-04的卸车单，请登记处理！',
    garrisonTime: '2018-12-04 12:36:45',
    predictTruckTime1: '',
    predictTruckTime2: '',
    actualTruckTime: '',
    removeDefendTime: ''
  },
  {
    itemid: 100002,
    type: 'X-0011-3',
    title: '2018-12-04的卸车单，请登记处理！',
    garrisonTime: '2018-12-04 12:36:45',
    predictTruckTime1: '',
    predictTruckTime2: '',
    actualTruckTime: '',
    removeDefendTime: ''
  },
  {
    itemid: 100003,
    type: 'X-0011-4',
    title: '2018-12-04的卸车单，请登记处理！',
    garrisonTime: '2018-12-04 12:36:45',
    predictTruckTime1: '',
    predictTruckTime2: '',
    actualTruckTime: '',
    removeDefendTime: ''
  },
  {
    itemid: 100004,
    type: 'X-0011-5',
    title: '2018-12-04的卸车单，请登记处理！',
    garrisonTime: '2018-12-04 12:36:45',
    predictTruckTime1: '',
    predictTruckTime2: '',
    actualTruckTime: '',
    removeDefendTime: ''
  },
  {
    itemid: 100005,
    type: 'X-0011-6',
    title: '2018-12-04的卸车单，请登记处理！',
    garrisonTime: '2018-12-04 12:36:45',
    predictTruckTime1: '',
    predictTruckTime2: '',
    actualTruckTime: '',
    removeDefendTime: ''
  }]
  return tempData
}

MockJs.mock('/login', userInfo)
MockJs.mock('/dmg/xmrw/query', taskListData)
