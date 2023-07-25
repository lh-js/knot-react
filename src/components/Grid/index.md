---
nav:
  title: 组件
  path: /components

group:
  title: 布局
  order: 4
---

## Grid

## 基本使用:

```tsx
import { Col, Row } from 'lh-ui-react';

export default () => {
  return (
    <Col>
      <Row span={6}>
        <div className="grid-item"></div>
      </Row>
      <Row span={6}>
        <div className="grid-item"></div>
      </Row>
      <Row span={6}>
        <div className="grid-item"></div>
      </Row>
      <Row span={6}>
        <div className="grid-item"></div>
      </Row>
    </Col>
  );
};
```

## Col API

<API id="Col"></API>

## Row API

<API id="Row"></API>
