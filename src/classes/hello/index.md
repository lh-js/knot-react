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
import { HelloC } from 'knot-react';

export default () => {
  const hello = new HelloC("hello");
  return <h4>{hello.hello()}</h4>;
};
```