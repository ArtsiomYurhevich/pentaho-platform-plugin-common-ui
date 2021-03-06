/*!
 * Copyright 2010 - 2017 Pentaho Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
  "module",
  "pentaho/visual/base/model",
  "pentaho/i18n!model",
  "./theme/model"
], function(module, baseModelFactory, bundle) {

  "use strict";

  return function(context) {

    var BaseModel = context.get(baseModelFactory);

    /**
     * @name pentaho.visual.samples.calc.Model
     * @class
     * @extends pentaho.visual.base.Model
     * @amd {pentaho.type.Factory<pentaho.visual.samples.calc.Model>} pentaho/visual/samples/calc
     */
    return BaseModel.extend({
      type: {
        sourceId: module.id,
        id: module.id.replace(/.\w+$/, ""),
        v2Id: "sample_calc",
        defaultView: "./view",

        props: [
          {
            name: "levels",
            type: {
              base: "pentaho/visual/role/nominal",
              props: {attributes: {isRequired: true}}
            }
          },
          {
            name: "measure",
            type: {
              base: "pentaho/visual/role/quantitative",
              props: {attributes: {countMin: 1, countMax: 1}}
            }
          },
          {
            name: "operation",
            type: {
              base: "string",
              isAccident: true,
              mixins: ["discreteDomain"],
              domain: ["min", "max", "avg", "sum"]
            },
            value: "min"
          }
        ]
      }
    })
    .implement({type: bundle.structured});
  };
});
