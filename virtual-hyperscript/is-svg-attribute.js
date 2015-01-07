'use strict';

// http://www.w3.org/TR/SVGTiny12/attributeTable.html
// http://www.w3.org/TR/SVG/attindex.html
var SVG_PROPERTIES = {
    'about': true,
    'accent-height': true,
    'accumulate': true,
    'additive': true,
    'alignment-baseline': true,
    'alphabetic': true,
    'amplitude': true,
    'arabic-form': true,
    'ascent': true,
    'attributeName': true,
    'attributeType': true,
    'azimuth': true,
    'bandwidth': true,
    'baseFrequency': true,
    'baseProfile': true,
    'baseline-shift': true,
    'bbox': true,
    'begin': true,
    'bias': true,
    'by': true,
    'calcMode': true,
    'cap-height': true,
    'class': true,
    'clip': true,
    'clip-path': true,
    'clip-rule': true,
    'clipPathUnits': true,
    'color': true,
    'color-interpolation': true,
    'color-interpolation-filters': true,
    'color-profile': true,
    'color-rendering': true,
    'content': true,
    'contentScriptType': true,
    'contentStyleType': true,
    'cursor': true,
    'cx': true,
    'cy': true,
    'd': true,
    'datatype': true,
    'defaultAction': true,
    'descent': true,
    'diffuseConstant': true,
    'direction': true,
    'display': true,
    'divisor': true,
    'dominant-baseline': true,
    'dur': true,
    'dx': true,
    'dy': true,
    'edgeMode': true,
    'editable': true,
    'elevation': true,
    'enable-background': true,
    'end': true,
    'ev:event': true,
    'event': true,
    'exponent': true,
    'externalResourcesRequired': true,
    'fill': true,
    'fill-opacity': true,
    'fill-rule': true,
    'filter': true,
    'filterRes': true,
    'filterUnits': true,
    'flood-color': true,
    'flood-opacity': true,
    'focusHighlight': true,
    'focusable': true,
    'font-family': true,
    'font-size': true,
    'font-size-adjust': true,
    'font-stretch': true,
    'font-style': true,
    'font-variant': true,
    'font-weight': true,
    'format': true,
    'from': true,
    'fx': true,
    'fy': true,
    'g1': true,
    'g2': true,
    'glyph-name': true,
    'glyph-orientation-horizontal': true,
    'glyph-orientation-vertical': true,
    'glyphRef': true,
    'gradientTransform': true,
    'gradientUnits': true,
    'handler': true,
    'hanging': true,
    'height': true,
    'horiz-adv-x': true,
    'horiz-origin-x': true,
    'horiz-origin-y': true,
    'id': true,
    'ideographic': true,
    'image-rendering': true,
    'in': true,
    'in2': true,
    'initialVisibility': true,
    'intercept': true,
    'k': true,
    'k1': true,
    'k2': true,
    'k3': true,
    'k4': true,
    'kernelMatrix': true,
    'kernelUnitLength': true,
    'kerning': true,
    'keyPoints': true,
    'keySplines': true,
    'keyTimes': true,
    'lang': true,
    'lengthAdjust': true,
    'letter-spacing': true,
    'lighting-color': true,
    'limitingConeAngle': true,
    'local': true,
    'marker-end': true,
    'marker-mid': true,
    'marker-start': true,
    'markerHeight': true,
    'markerUnits': true,
    'markerWidth': true,
    'mask': true,
    'maskContentUnits': true,
    'maskUnits': true,
    'mathematical': true,
    'max': true,
    'media': true,
    'mediaCharacterEncoding': true,
    'mediaContentEncodings': true,
    'mediaSize': true,
    'mediaTime': true,
    'method': true,
    'min': true,
    'mode': true,
    'name': true,
    'nav-down': true,
    'nav-down-left': true,
    'nav-down-right': true,
    'nav-left': true,
    'nav-next': true,
    'nav-prev': true,
    'nav-right': true,
    'nav-up': true,
    'nav-up-left': true,
    'nav-up-right': true,
    'numOctaves': true,
    'observer': true,
    'offset': true,
    'opacity': true,
    'operator': true,
    'order': true,
    'orient': true,
    'orientation': true,
    'origin': true,
    'overflow': true,
    'overlay': true,
    'overline-position': true,
    'overline-thickness': true,
    'panose-1': true,
    'path': true,
    'pathLength': true,
    'patternContentUnits': true,
    'patternTransform': true,
    'patternUnits': true,
    'phase': true,
    'playbackOrder': true,
    'pointer-events': true,
    'points': true,
    'pointsAtX': true,
    'pointsAtY': true,
    'pointsAtZ': true,
    'preserveAlpha': true,
    'preserveAspectRatio': true,
    'primitiveUnits': true,
    'propagate': true,
    'property': true,
    'r': true,
    'radius': true,
    'refX': true,
    'refY': true,
    'rel': true,
    'rendering-intent': true,
    'repeatCount': true,
    'repeatDur': true,
    'requiredExtensions': true,
    'requiredFeatures': true,
    'requiredFonts': true,
    'requiredFormats': true,
    'resource': true,
    'restart': true,
    'result': true,
    'rev': true,
    'role': true,
    'rotate': true,
    'rx': true,
    'ry': true,
    'scale': true,
    'seed': true,
    'shape-rendering': true,
    'slope': true,
    'snapshotTime': true,
    'spacing': true,
    'specularConstant': true,
    'specularExponent': true,
    'spreadMethod': true,
    'startOffset': true,
    'stdDeviation': true,
    'stemh': true,
    'stemv': true,
    'stitchTiles': true,
    'stop-color': true,
    'stop-opacity': true,
    'strikethrough-position': true,
    'strikethrough-thickness': true,
    'string': true,
    'stroke': true,
    'stroke-dasharray': true,
    'stroke-dashoffset': true,
    'stroke-linecap': true,
    'stroke-linejoin': true,
    'stroke-miterlimit': true,
    'stroke-opacity': true,
    'stroke-width': true,
    'surfaceScale': true,
    'syncBehavior': true,
    'syncBehaviorDefault': true,
    'syncMaster': true,
    'syncTolerance': true,
    'syncToleranceDefault': true,
    'systemLanguage': true,
    'tableValues': true,
    'target': true,
    'targetX': true,
    'targetY': true,
    'text-anchor': true,
    'text-decoration': true,
    'text-rendering': true,
    'textLength': true,
    'timelineBegin': true,
    'title': true,
    'to': true,
    'transform': true,
    'transformBehavior': true,
    'type': true,
    'typeof': true,
    'u1': true,
    'u2': true,
    'underline-position': true,
    'underline-thickness': true,
    'unicode': true,
    'unicode-bidi': true,
    'unicode-range': true,
    'units-per-em': true,
    'v-alphabetic': true,
    'v-hanging': true,
    'v-ideographic': true,
    'v-mathematical': true,
    'values': true,
    'version': true,
    'vert-adv-y': true,
    'vert-origin-x': true,
    'vert-origin-y': true,
    'viewBox': true,
    'viewTarget': true,
    'visibility': true,
    'width': true,
    'widths': true,
    'word-spacing': true,
    'writing-mode': true,
    'x': true,
    'x-height': true,
    'x1': true,
    'x2': true,
    'xChannelSelector': true,
    'xlink:actuate': true,
    'xlink:arcrole': true,
    'xlink:href': true,
    'xlink:role': true,
    'xlink:show': true,
    'xlink:title': true,
    'xlink:type': true,
    'xml:base': true,
    'xml:id': true,
    'xml:lang': true,
    'xml:space': true,
    'y': true,
    'y1': true,
    'y2': true,
    'yChannelSelector': true,
    'z': true,
    'zoomAndPan': true
};

module.exports = isSVGAttribute;

function isSVGAttribute(value) {
    return SVG_PROPERTIES[value] === true;
}
