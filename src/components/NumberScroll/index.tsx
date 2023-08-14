import React, { useEffect, useState } from 'react';

type Param = {
    /**
     * @description 数字(0-9)
     * @default 5
     */
    number: number;
}
export default ({ number = 5 }: Param) => {

    const [num, setNum] = useState(0)
    const numList = [0,1,2,3,4,5,6,7,8,9]

    useEffect(() => {
        setNum(number)
    }, [])

    return (
        <div className="box">
            <div className="num" style={{
                //@ts-ignore
                '--transform': `-${num * 10}%`,
            }}>
                {numList.map((item)=><div className='num-item'>{item}</div>)}
            </div>
        </div>
    )
}