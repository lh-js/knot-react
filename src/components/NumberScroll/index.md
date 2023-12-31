---
nav:
  title: 组件
  path: /components

group:
  title: 特效
  order: 3
---

## NumberScroll

## 基本使用:

```tsx
import { NumberScroll } from 'knot-react';

export default () => <NumberScroll number={9} />;
```

## 大小设置:

```tsx
import { NumberScroll } from 'knot-react';

export default () => <NumberScroll number={9} size={10} />;
```

## 多位数:

```tsx
import { NumberScroll } from 'knot-react';

export default () => <NumberScroll number={123456789} />;
```

## 过渡时间:

```tsx
import { NumberScroll } from 'knot-react';

export default () => <NumberScroll number={99} transTime={[2, 5]} />;
```

## 设置间距:

```tsx
import { NumberScroll } from 'knot-react';

export default () => <NumberScroll number={99} spaceSize={20} />;
```

## 动态数字:

```tsx
import { NumberScroll } from 'knot-react';
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
      <NumberScroll number={num} size={10} />
    </>
  );
};
```

## API

<API id="NumberScroll"></API>
