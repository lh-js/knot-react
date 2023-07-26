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
    <Row gutters={[8, 8]}>
      <Col span={6}>
        <div className="grid-item"></div>
      </Col>
      <Col span={6}>
        <div className="grid-item"></div>
      </Col>
      <Col span={6}>
        <div className="grid-item"></div>
      </Col>
      <Col span={6}>
        <div className="grid-item"></div>
      </Col>
    </Row>
  );
};
```

## 偏移:

```tsx
import { Col, Row } from 'lh-ui-react';

export default () => {
  return (
    <Row>
      <Col span={6}>
        <div className="grid-item"></div>
      </Col>
      <Col span={6} offset={6}>
        <div className="grid-item"></div>
      </Col>
    </Row>
  );
};
```

## Row API

<API id="Row"></API>

## Col API

<API id="Col"></API>
