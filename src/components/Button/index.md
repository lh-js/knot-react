---
nav:
  title: 组件
  path: /components

group:
  title: 通用
  order: 1
---

## Button

## 基本使用:

```tsx
import { Button } from 'lh-ui-react';

export default () => <Button />;
```

## 按钮类型:

```tsx
import { Button } from 'lh-ui-react';

export default () => (
  <div className="components-box">
    <Button />
    <Button type="dashed111" />
    <Button type="text" />
    <Button type="primary" />
    <Button type="success" />
    <Button type="warning" />
    <Button type="danger" />
  </div>
);
```

## 禁用:

```tsx
import { Button } from 'lh-ui-react';

export default () => <Button disabled />;
```

## API

<API id="Button"></API>
