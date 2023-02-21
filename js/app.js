const { createApp } = Vue

createApp({
	data() {
		
        return {
			tasks: [
				{
                    text: 'task1',
                    done: false,
                },

                {
                    text: 'task2',
                    done: false,
                },

                {
                    text: 'task3',
                    done: false,
                },

                {
                    text: 'task4',
                    done: false,
                },
			],
            
			inputValue: '',
		}

	},

	methods: {
		addTask() {
			// console.log('add task:', this.inputValue)
			const newTask = {
                text: this.inputValue,
                done: false,
            }
			this.tasks.push(newTask)
			this.inputValue = ''
		},
		removeTask(startIndex) {
			console.log(
				'elimino il task con indice:',
				startIndex,
				this.tasks[startIndex]
			)
			this.tasks.splice(startIndex, 1)
		},
	},
}).mount('#app')
