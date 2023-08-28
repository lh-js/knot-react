import timeParse from './timeParse'

type Option = {
    /**
     * @description 格式
     * @default {y}-{m}-{d} {h}:{i}:{s}
     */
    pattern?: string;
    /**
     * @description 显示中文
     * @default false
     */
    textFormat?: boolean;
}

type Param = {
    /**
     * @description 时间
     */
    time: Date | string | number;
    /**
     * @description 配置
     * @default 
     */
    option?: Option;
};

export default function timeFormat({ time, option = { textFormat: false } }: Param) {
    if (!option?.textFormat) {
        return timeParse({ time, pattern: option?.pattern })
    }
    if (typeof time == 'number') {
        if ((time.toString().length === 10)) {
            time = time * 1000
        } else {
            time = +time
        }
    }
    const d = new Date(time).valueOf()
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 60) {
        return '刚刚'
    } else if (diff < 3600) {
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + "小时前"
    } else if (diff < 3600 * 24 * 31) {
        return Math.ceil(diff / (3600 * 24)) + "天前"
    }

    return timeParse({ time, pattern: option.pattern })
}