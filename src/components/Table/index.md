---
nav:
  title: 组件
  path: /components

group:
  title: 数据展示
  order: 3
---

## Table

## 基本使用:

```tsx
import { Table } from 'knot-react';

export default () => {

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
]

const dataSource = [
  {
    name: 'lh',
    sex: '男',
    age: 19,
  },
  {
    name: 'fxh',
    sex: '男',
    age: 19,
  },
  {
    sex: '女',
    name: 'hss',
    age: 19,
  },
]
  return <Table columns={columns} dataSource={dataSource} border />
};
```

## API

<API id="Table"></API>

