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

## API

<API id="NumberScroll"></API>
