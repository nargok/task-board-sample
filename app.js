new Vue({
  el: '#board',
  data: {
    tasks: [
      { name: 'task1', status: 1, assignee: 'Taro', mandays: 3 },
      { name: 'task2', status: 1, assignee: 'Jiro', mandays: 2 },
      { name: 'task3', status: 2, assignee: 'Sabro', mandays: 1 },
      { name: 'task4', status: 3, assignee: 'Shiro', mandays: 1 }
    ]
  }
})