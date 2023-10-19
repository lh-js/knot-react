---
nav:
  title: class
  path: /classes

group:
  title: 欢迎
  order: 0
---

## hello

This is an example class.

```jsx
import { HelloClass } from 'knot-react';

export default () => {
  const hello1 = new HelloClass("hello knot!");
  return <h4>{hello1.say()}</h4>;
};
```