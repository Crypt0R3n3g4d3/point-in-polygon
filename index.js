var pointInPolygonFlat = require('./flat.js')
var pointInPolygonNested = require('./nested.js')

module.exports = function pointInPolygon (point, vs) {
    if (vs.length > 0 && Array.isArray(vs[0])) {
        return pointInPolygonNested(point, vs);
    } else {
        return pointInPolygonFlat(point, vs);
    }
}
module.exports.nested = pointInPolygonNested
module.exports.flat = pointInPolygonFlat
