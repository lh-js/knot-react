---
nav:
  title: hooks
  path: /hooks

group:
  title: 时间格式化
  order: 1
---

## timeFormat

## 基本使用

```jsx
import { timeFormat } from 'knot-react';

export default () => {
  const time = timeFormat({time:new Date()});
  return <h4>{time}</h4>;
};
```

## 传入时间戳

```jsx
import { timeFormat } from 'knot-react';

export default () => {
  const time = timeFormat({time:new Date().getTime()});
  return <h4>{time}</h4>;
};
```

## 传入时间戳字符串

```jsx
import { timeFormat } from 'knot-react';

export default () => {
  const time = timeFormat({time:new Date().getTime().toString()});
  return <h4>{time}</h4>;
};
```

## 修改返回时间格式

```jsx
import { timeFormat } from 'knot-react';

export default () => {
  const time = timeFormat({time:new Date(),pattern:'{y}/{m}/{d} {h}:{i}:{s}'});
  return <h4>{time}</h4>;
};
```

## API

<API id="timeFormat"></API>



