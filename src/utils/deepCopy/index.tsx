type AnyObject = {
    [propName: string]: any
}

export default function deepCopy(obj:any | any[]) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let copy: AnyObject;
    if (Array.isArray(obj)) {
        copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
    } else {
        copy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key]);
            }
        }
    }
    return copy;
}