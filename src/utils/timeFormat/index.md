---
nav:
  title: utils
  path: /utils

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
  const time = timeFormat({time:new Date(),option:{pattern:'{y}/{m}/{d} {h}:{i}:{s}'}});
  return <h4>{time}</h4>;
};
```

## 时间中文返回

```jsx
import { timeFormat } from 'knot-react';

export default () => {
  const date = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
  const time = timeFormat({time:date ,option:{pattern:'{y}/{m}/{d} {h}:{i}:{s}',textFormat:true}});
  return <h4>{time}</h4>;
};
```

## API

<API id="timeFormat"></API>



