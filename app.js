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

Vue.component('task-card', {
  props: ['task'],
  template: '<div class="card"><div class="card-content">{{ task.name }}</div><footer class="card-footer"><div class="card-footer-item">{{ task.assignee }}</div><div class="card-footer-item">{{ task.mandays }} 人日</div></footer><footer class="card-footer"><a class="card-footer-item" v-on:click="decrementStatus(task)">◀︎</a><a class="card-footer-item" v-on:click="incrementStatus(task)">▶︎</a></footer></div>',
  methods: {
    incrementStatus: function (task) {
      if(1 <= task.status && task.status <= 2) {
        task.status++
      }
    },
    decrementStatus: function (task) {
      if(2 <= task.status && task.status <= 3) {
        task.status--
      }
    }
  }
})

new Vue({
  el: '#board',
  data: {
    tasks: [
      { name: 'task1', status: 1, assignee: 'Taro', mandays: 3 },
      { name: 'task2', status: 1, assignee: 'Jiro', mandays: 2 },
      { name: 'task3', status: 2, assignee: 'Sabro', mandays: 1 },
      { name: 'task4', status: 3, assignee: 'Shiro', mandays: 1 }
    ],
    newTaskName: '',
    newTaskAssignee: '',
    newTaskMandays: 0
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
  },
  methods: {
    addTask () {
      this.tasks.push({ name: this.newTaskName, status: 1, assignee: this.newTaskAssignee, mandays: this.newTaskMandays })
    }
  }
})

