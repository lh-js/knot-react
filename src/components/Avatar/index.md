---
nav:
  title: 组件
  path: /components

group:
  title: 数据展示
  order: 1
---

## Avatar

## 基本使用:

```tsx
import { Avatar } from 'knot-react';

export default () => {
  const img = 'https://lihong.org.cn/knot-react/img/components/avatar/avatar.png'
  return (
    <Avatar src={img}/>
  )
};
```

## 宽度设置:

```tsx
import { Avatar } from 'knot-react';

export default () => {
  const img = 'https://lihong.org.cn/knot-react/img/components/avatar/avatar.png'
  return (
    <Avatar src={img} size={300} borderWidth={10}/>
  )
};
```

## 颜色设置:

```tsx
import { Avatar } from 'knot-react';

export default () => {
  const img = 'https://lihong.org.cn/knot-react/img/components/avatar/avatar.png'
  return (
    <Avatar src={img} borderColor={'#dddddd'} backgroundColor={"pink"} />
  )
};
```


## API

<API id="Avatar"></API>
