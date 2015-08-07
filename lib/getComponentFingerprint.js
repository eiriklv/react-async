"use strict";

/**
 * Get a fingerprint of the component.
 *
 * @param {Object} component
 * @return {String}
 */
function getComponentFingerprint(component) {
  return component.getRootNodeID() + '__' + component.getMountDepth();
}

module.exports = getComponentFingerprint;
