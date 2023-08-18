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

export default () => <NumberScrollPro startTransTime={9} number={9} />;
```

## 大小设置:

```tsx
import { NumberScrollPro } from 'knot-react';

export default () => <NumberScrollPro number={9} size={10} />;
```

## 多位数:

```tsx
import { NumberScrollPro } from 'knot-react';

export default () => <NumberScrollPro number={123456789} />;
```

## 过渡时间:

```tsx
import { NumberScrollPro } from 'knot-react';

export default () => <NumberScrollPro number={99} transTime={2} />;
```

## 设置间距:

```tsx
import { NumberScrollPro } from 'knot-react';

export default () => <NumberScrollPro number={99} spaceSize={20} />;
```

## 动态数字:

```tsx
import { NumberScrollPro } from 'knot-react';
import { useEffect, useState } from 'react';

export default () => {

  const [num, setNum] = useState(1123);
  useEffect(() => {
    const timer = setInterval(() => {
      setNum((num) => (num < 99999 ? num + 1 : 0));
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

## 渐进过渡:

```tsx
import { NumberScrollPro } from 'knot-react';
import { useEffect, useState } from 'react';

export default () => {

  const [num, setNum] = useState(9);
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
      <NumberScrollPro gradualTrans number={num} size={10} />
    </>
  );
};
```

## API

<API id="NumberScrollPro"></API>
