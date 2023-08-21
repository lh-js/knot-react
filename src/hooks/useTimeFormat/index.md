---
nav:
  title: hooks
  path: /hooks

group:
  title: 时间格式化
  order: 1
---

## useTimeFormat

## 基本使用

```jsx
import { useTimeFormat } from 'knot-react';

export default () => {
  const { time } = useTimeFormat({time:new Date()});
  return <h4>{time}</h4>;
};
```

## 传入时间戳

```jsx
import { useTimeFormat } from 'knot-react';

export default () => {
  const { time } = useTimeFormat({time:new Date().getTime()});
  return <h4>{time}</h4>;
};
```

## 传入时间戳字符串

```jsx
import { useTimeFormat } from 'knot-react';

export default () => {
  const { time } = useTimeFormat({time:new Date().getTime().toString()});
  return <h4>{time}</h4>;
};
```

## 修改返回时间格式

```jsx
import { useTimeFormat } from 'knot-react';

export default () => {
  const { time } = useTimeFormat({time:new Date(),pattern:'{y}/{m}/{d} {h}:{i}:{s}'});
  return <h4>{time}</h4>;
};
```

## API

<API id="useTimeFormat"></API>



