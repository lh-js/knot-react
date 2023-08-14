---
nav:
  title: 组件
  path: /components

group:
  title: 布局
  order: 4
---

## Space

## 基本使用:

```tsx
import { Space } from 'knot-react';

export default () => {
  return (
    <Space>
      <div className="item"></div>
      <div className="item"></div>
    </Space>
  );
};
```

## 间距方向:

```tsx
import { Space } from 'knot-react';

export default () => {
  return (
    <Space direction="vertical">
      <div className="item"></div>
      <div className="item"></div>
    </Space>
  );
};
```

## 间距大小:

```tsx
import { Space } from 'knot-react';

export default () => {
  return (
    <Space spaceSize={100}>
      <div className="item"></div>
      <div className="item"></div>
    </Space>
  );
};
```

## 自动换行:

```tsx
import { Space } from 'knot-react';

export default () => {
  return (
    <Space wrap>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </Space>
  );
};
```

## API

<API id="Space"></API>
