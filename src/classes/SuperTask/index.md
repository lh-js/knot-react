---
nav:
  title: utils
  path: /utils

group:
  title: 并发任务控制
  order: 1
---

## SuperTask

This is an example class.

```jsx
import { SuperTask } from 'knot-react';
import timeOut from "./timeOut";

export default () => {
  const superTask = new SuperTask()

function addTask(time: number, name: string) {
    superTask.add(() => timeOut(time))
        .then(() => {
            console.log(`任务${name}完成`)
        })
}

addTask(1000,1)
addTask(1000,2)
addTask(1000,3)
addTask(1000,4)
addTask(1000,5)
  return <h4>并发任务控制</h4>;
};
```