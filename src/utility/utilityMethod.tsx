export function calculateLineLength(text: string) {
    var arr: any = text.trim().split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/)

    if (arr.length >= 0 && arr.length <= 5) {
        return 2
    } else if (arr.length >= 5 && arr.length <= 10) {
        return 2
    } else if (arr.length >= 10 && arr.length <= 15) {
        return 3
    } else if (arr.length >= 15 && arr.length <= 20) {
        return 4
    } else if (arr.length >= 20 && arr.length <= 25) {
        return 5
    } else if (arr.length >= 25 && arr.length <= 30) {
        return 6
    } else if (arr.length >= 30 && arr.length <= 35) {
        return 7
    } else if (arr.length >= 35 && arr.length <= 40) {
        return 8
    } else if (arr.length >= 40 && arr.length <= 45) {
        return 9
    } else if (arr.length >= 45 && arr.length <= 50) {
        return 10
    } else if (arr.length >= 50 && arr.length <= 60) {
        return 11
    } else if (arr.length >= 60 && arr.length <= 70) {
        return 12
    } else if (arr.length >= 80 && arr.length <= 90) {
        return 13
    } else if (arr.length >= 90 && arr.length <= 100) {
        return 14
    } else if (arr.length >= 100 && arr.length <= 120) {
        return 15
    } else if (arr.length >= 120 && arr.length <= 140) {
        return 16
    } else {
        return 18
    }

}