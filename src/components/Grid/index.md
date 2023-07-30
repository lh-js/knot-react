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

## 设置栅格总数:

```tsx
import { Col, Row } from 'lh-ui-react';

export default () => {
  return (
    <Row columns={5} gutters={[8, 8]}>
      <Col span={2}>
        <div className="grid-item"></div>
      </Col>
      <Col span={3}>
        <div className="grid-item"></div>
      </Col>
    </Row>
  );
};
```

## 设置自动填充:

```tsx
import { Col, Row } from 'lh-ui-react';

export default () => {
  return (
    <Row columns={10} gutters={[8, 8]}>
      <div className="item-width100"></div>
      <Col span="auto">
        <div className="grid-item"></div>
      </Col>
    </Row>
  );
};
```

..

## Row API

<API id="Row"></API>

## Col API

<API id="Col"></API>
