---
nav:
  title: utils
  path: /utils

group:
  title: 深拷贝
  order: 1
---

## deepCopy

## 基本使用

```jsx
import { deepCopy } from 'knot-react';

export default () => {
    const obj = {
        name:'knot',
        type:"UI library"
    }
  const copyObj = deepCopy(obj);
  return <h4>{copyObj.name}</h4>;
};
```