
exports.min = function min(array = 0) {
    let i = 0;
    if (array[0] != undefined && array[0] != null) {
        i = array[0];
    }
    for (n = 1; n < array.length; n++) {
        if (i > array[n]) {
            i = array[n];
        }
    }
    return i;
};

exports.max = function max(array = 0) {
    let k = 0;
    if (array[0] != undefined && array[0] != null) {
        k = array[0];
    }
    for (j = 1; j < array.length; j++) {
        if (k < array[j]) {
            k = array[j];
        }
    }
    return k;
};
exports.avg = function avg(array = 0) {
    let m = 0;
    if (array.length != 0 && array != 0) {
        for (h = 0; h < array.length; h++) {
            m += array[h];
        }
        return m / array.length;
    } else {
        return 0;
    }
};
