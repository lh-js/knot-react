---
nav:
  title: 组件
  path: /components

group:
  title: 特效
  order: 3
---

## OutWave

## 基本使用:

```tsx
import { OutWave } from 'knot-react';

export default () => {
  function App() {
    return <div className="div"></div>;
  }
  return (
    <OutWave>
      <App />
    </OutWave>
  );
};
```

## 波纹类型:

```tsx
import { OutWave, Space } from 'knot-react';

export default () => {
  function App() {
    return <div className="div"></div>;
  }
  return (
    <Space wrap>
      <OutWave type="primary">
        <App />
      </OutWave>
      <OutWave type="success">
        <App />
      </OutWave>
      <OutWave type="warning">
        <App />
      </OutWave>
      <OutWave type="danger">
        <App />
      </OutWave>
    </Space>
  );
};
```

## API

<API id="OutWave"></API>
