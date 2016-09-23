/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer(
  // We embed the preset instead of referring to it because otherwise
  // `env` options in the preset do not get taken into account.
  require('babel-preset-react-app')
);
