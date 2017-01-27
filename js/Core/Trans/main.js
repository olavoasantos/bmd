export default function (entry, trans = App.trans) {
    let path;

    if (entry.includes('.')) {
        path = entry.split('.');
    } else {
        path = [entry];
    }

    for (let piece in path) {
        trans = trans[path[piece]];
    }

    return trans || entry;
};