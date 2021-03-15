module.exports = function pointInPolygonFlat (point, vs) {
    var x = point[0], y = point[1];
    var inside = false;
    var len = vs.length/2
    for (var i = 0, j = len - 1; i < len; j = i++) {
        var xi = vs[i*2+0], yi = vs[i*2+1];
        var xj = vs[j*2+0], yj = vs[j*2+1];
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
};
