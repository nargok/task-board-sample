var filters = {
  open: function (tasks) {
    return tasks.filter(function (task) {
      return task.status === 1
    })
  },
  doing: function (tasks) {
    return tasks.filter(function (task) {
      return task.status === 2
    })
  },
  closed: function (tasks) {
    return tasks.filter(function (task) {
      return task.status === 3
    })
  }
}

new Vue({
  el: '#board',
  data: {
    tasks: [
      { name: 'task1', status: 1, assignee: 'Taro', mandays: 3 },
      { name: 'task2', status: 1, assignee: 'Jiro', mandays: 2 },
      { name: 'task3', status: 2, assignee: 'Sabro', mandays: 1 },
      { name: 'task4', status: 3, assignee: 'Shiro', mandays: 1 }
    ]
  },
  // 定義した処理を呼ぶ
  // Vueインスタンスでtasksデータが更新された際に評価される
  computed: {
    tasksOpen: function () {
      return filters.open(this.tasks)
    },
    tasksDoing: function () {
      return filters.doing(this.tasks)
    },
    tasksClosed: function () {
      return filters.closed(this.tasks)
    }
  }
})

