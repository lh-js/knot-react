---
nav:
  title: hooks
  path: /hooks

group:
  title: 欢迎
  order: 0
---

## useHello

This is an example hook.

```jsx
import { useHello } from 'knot-react';

export default () => {
  const { text } = useHello();
  return <h4>{text}</h4>;
};
```
