---
nav:
  title: 组件
  path: /components

group:
  title: 特效
  order: 3
---

## NumberScrollPro

## 基本使用:

```tsx
import { NumberScrollPro } from 'knot-react';
import { useEffect, useState } from 'react';

export default () => {

  const [num, setNum] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setNum((num) => (num < 99 ? num + 1 : 0));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [num]);

  return (
    <>
      <NumberScrollPro number={num} size={10} />
    </>
  );
};
```

## API

<API id="NumberScrollPro"></API>
