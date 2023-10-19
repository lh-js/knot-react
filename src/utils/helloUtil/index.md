---
nav:
  title: utils
  path: /utils

group:
  title: 欢迎
  order: 0
---

## hello

This is an example util.

```jsx
import { hello } from 'knot-react';

export default () => {
  const text = hello();
  return <h4>{text}</h4>;
};
```