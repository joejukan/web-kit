# Changelog
All notable changes to this project will be documented in this file.<br/>
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).<br/><br/>

## [0.8.1] - [FIX] #11 Properties Function Returns an Object's the `constructor` property name (2022-01-30)
* added version `2.5.1` of the `prettier` module to provide a consistent formatting of the **typescript** code.
* formated all **typescript** files, excluding **index.ts**, in the `src` and `spec` directories.
* added the `node.js.yml` file to allow github actions to execute tests during git commits.
* modified the `properties()` function to filter out the `constructor` property name from the results.
* added version `13.0.0` of the `jest-junit` module to provide an xml report to be published by github workflows.

## [0.8.0] - [FEATURE] Added the Primitive Type (2021-11-24)
* added the `Primitive` type to represent a `string`, `number` or `boolean` type.
* added the `snake()` function to convert camel or kebab case to snake case.

## [0.7.3] - [SECURITY] Secured Dependency Vulnerabilities (2021-07-03)
* upgraded the `hosted-git-info` module to version `2.8.9`.
* upgraded the `lodash` module to version `4.17.21`.
* upgraded the `ws` module to version `7.5.1`.
* modified the `startTimer()` function to support both `synchronous` and `asynchronous` callbacks.

## [0.7.2] - [IMPROVE] Modified useTimers() Function to Clear Existing Interval Handles (2021-07-03)
* added the `startTimer()` function to start a specific timer.
* added the `stopTimer()` function to stop a specific timer.
* modified the `useTimers()` function to clear each timers existing interval.

## [0.7.1] - [FEATURE] Added inViewPort() Function (2021-05-15)
* added the `inViewPort()` function to determine if an DOM element is visible in the browser viewport.

## [0.7.0] - [FEATURE] Added serialize() Function (2021-02-14)
* modified the `@Field()` to properly support the override with the constructor and alias.
* added overrides to the `getFields()` function that accept an object parameter and a constructor type parameter.
* added the `serialize()` function to input an object, whose class is decorated by `@Field()`, and returns an basic `Object` with the aliases.

## [0.6.3] - [FEATURE] Added @Ignore() Decorator Support (2021-01-15)
* added the `@Ignore()` decorator to identify fields that should be ignored.
* added the `pick()` function to allow fields to be identify for copying.
* modified the `filter()` function to ensure that an array exists before performing filtering on it.
* modified the `getSchema()` function to to find `schemas` by the `type` property.
* modified the `addField()` function to modify existing fields.
* modified the `define()` function to ignore any fields annotated with the `@Ignore()` decorator.

## [0.6.2] - [FEATURE] Added @Field() Decorator Support for Class Type (2020-11-12)
* added overloads to `@Field()` to handle `Type` parameters.

## [0.6.1] - [FEATURE] Updated Augmenter Module (2020-11-09)
* updated the `@joejukan/augmenter` module to version `1.1.0`.

## [0.6.0] - [FEATURE] Introduced the First, Filter and Contains Functions (2020-11-03)
* added the `first` function.
* added the `filter` function.
* added the `contains` function.
* modified the `ok` function to return `false` if a `NaN` object is detected.
* exposed the `Argumenter` class so that it can be imported directly from this module.

## [0.5.0] - [FEATURE] Introduced isDOM Function (2020-10-29)
* added the `isDOM` function.

## [0.4.1] - [FIX] Ensure that Define Returns an Non Empty Object if No Fields are Defined (2020-10-25)
* modifed the `define` function to return the `from` parameter object if no fields are defined.

## [0.4.0] - [FEATURE] Introduced Scheduling Capability (2020-10-10)
* added the `isNumeric` function.
* added the `@Schedule` decorator.
* added the `ITimer` interface.
* added the `timers` constant.
* added the `useTimers` function.

## [0.3.0] - [FEATURE] Introduced isEmpty, Between, Capitalize, Epoch and Wait Functions (2020-10-10)
* added the `isEmpty` function.
* added the `between` function.
* added the `capitalize` function.
* added the `epoch` function.
* added the `wait` function.

## [0.2.0] - [FEATURE] Introduce a Schema Based Definition Functionality for Data Structures (2020-04-06)
* added the `Cardinality` enumeration.
* added the `Type` interface.
* added the `IField` interface.
* added the `ISchema` interface.
* added the `schemas` global constant.
* added the `addSchema` function.
* added the `hasSchema` function.
* added the `getSchema` function.
* added the `addField` function.
* added the `getField` function.
* added the `hasField` function.
* added the `getFields` function.
* added the `define` function.
* updated unit testing to use [jest](https://www.npmjs.com/package/jest) version `25.2.7`.

## [0.1.0] - [FEATURE] Introduced Debouncing Classes (2020-04-05)
* updated the documentation to [docute](https://www.npmjs.com/package/docute) to version `4.23.3`.
* added the `IntervalRunner` class.
* added the `TimeoutRunner` class.
* added the `vh` function.
* added the `vw` function.

## [0.0.1] - [INIT] Initial Functionality (2018-07-01)
* added `isBrowser` function.
* added `isJson` function.
* added `isPrimitive` function.
* added `isXML`function.
* added `mongoId` function.
* added `uuid` function.
* added `access` function and corresponding unit tests.
* added `camel` function and corresponding unit tests.
* added `clear` function.
* added `clone` function.
* added `copy` function.
* added `inject` function.
* added `kebab` function.
* added `ok` function.
* added `plural` function.
* added `properties` function.
* added `singular` function.
* added `px` function.
* added `em` function.
* added `pct` function.
* added `json` function.