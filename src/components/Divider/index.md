---
nav:
  title: 组件
  path: /components

group:
  title: 布局
  order: 4
---

## Divider

## 基本使用:

```tsx
import { Divider } from 'lh-ui-react';

export default () => <Divider></Divider>;
```

## 加文字:

```tsx
import { Divider } from 'lh-ui-react';

export default () => <Divider>text</Divider>;
```

## 虚线分割线:

```tsx
import { Divider } from 'lh-ui-react';

export default () => <Divider dashed></Divider>;
```

## 标题位置:

```tsx
import { Divider } from 'lh-ui-react';

export default () => {
  return (
    <>
      <Divider>text</Divider>
      <Divider orientation="left">text</Divider>
      <Divider orientation="right">text</Divider>
    </>
  );
};
```

## 离边缘距离:

```tsx
import { Divider } from 'lh-ui-react';

export default () => {
  return (
    <>
      <Divider orientation="left" orientationMargin={0}>
        text
      </Divider>
      <Divider orientation="right" orientationMargin={0}>
        text
      </Divider>
    </>
  );
};
```

## 垂直分割线:

```tsx
import { Divider } from 'lh-ui-react';

export default () => {
  return (
    <>
      text
      <Divider type="vertical"></Divider>
      text
      <Divider type="vertical"></Divider>
      text
    </>
  );
};
```

## API

<API id="Divider"></API>
