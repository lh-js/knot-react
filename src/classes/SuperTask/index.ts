interface Task {
    task: () => Promise<void>
    resolve: (value: unknown) => void
    reject: (value: unknown) => void
}

class SuperTask {

    parallelCount: number
    tasks: Task[]
    runningCount: number

    constructor(parallelCount = 2) {
        this.parallelCount = parallelCount //并发任务
        this.tasks = [] //任务队列
        this.runningCount = 0 //正在执行的任务
    }

    add(task: () => Promise<void>) {
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject
            })
            this._run()
        })
    }

    _run() {
        while (this.runningCount < this.parallelCount && this.tasks.length > 0) {
            const { task, resolve, reject }: any = this.tasks.shift()
            this.runningCount++
            task().then(resolve, reject).finally(() => {
                this.runningCount--
                this._run()
            })
        }
    }
}

export default SuperTask