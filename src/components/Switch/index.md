---
nav:
  title: 组件
  path: /components

group:
  title: 表单组件
  order: 2
---

## Switch

## 基本使用:

```tsx
import { Switch } from 'knot-react';

export default () => <Switch />;
```

## 禁用:

```tsx
import { Switch } from 'knot-react';

export default () => <Switch disabled />;
```

## 大小定义:

```tsx
import { Switch } from 'knot-react';

export default () => <Switch size={2} />;
```

## 传入文字:

```tsx
import { Switch } from 'knot-react';

export default () => <Switch onText="开" offText="关" />;
```

## 传入 svg 图片:

```tsx
import { Switch } from 'knot-react';

export default () => {
  const onStatus = (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="check"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
    </svg>
  );
  const offStatus = (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="close"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
    </svg>
  );
  return (
    <Switch
      isChecked={true}
      size={1}
      onText={onStatus}
      offText={offStatus}
      onChange={(val) => {
        console.log(val);
      }}
    />
  );
};
```

## 状态由父组件维护

```tsx
import { Switch } from 'knot-react';
import { useState } from 'react';

export default () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Switch
      controll
      isChecked={isChecked}
      onChange={(val) => {
        setIsChecked(val);
      }}
    />
  );
};
```

## API

<API id="Switch"></API>
