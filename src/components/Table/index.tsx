import React from 'react';

type Columns = {
  title: string;
  dataIndex: string;
  key: string;
  align: string;
}

type Param = {
  /**
   * @description 是否带有边框
   * @default false
   */
  border?: boolean;
  /**
   * @description 表格列
   */
  columns: Columns[]
  /**
  * @description 表格数据
  */
  dataSource: { [name: string]: any }[]
};

export default ({ border = false, columns, dataSource }: Param) => {

  return (
    <div className='table'>
      <table style={{
        //定义css变量，忽略ts检查
        //@ts-ignore
        '--border': `${border ? '1px solid #e2e2e3' : 'none'}`, //是否带边框
      }}>
        <tr style={{ background: '#f6f6f7' }}>
          {columns.map((item, index) => (
            <th
              style={{
                //@ts-ignore
                '--align': `${item.align ? 'left' : ''}`
              }}
              key={item.key ?? index}
            >
              {item.title}
            </th>
          ))}
        </tr>
        <tbody>
          {dataSource.map((item, index) => (
            <tr key={index}>
              {columns.map((column, i) => (
                <td
                  style={{
                    //@ts-ignore
                    '--align': `${item.align ? 'left' : ''}`
                  }}
                  key={column.key ?? i}>
                  {item[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
