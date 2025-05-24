# Changelog

This file documents all notable changes to this project. The format is based
on [Keep a Changelog](https://keepachangelog.com/en/1.1.0), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Fixed
- Skip [mise-en-place](https://mise.jdx.dev) patch releases by default.

## [1.3.0] - 2025-05-18
### Added
- Upgrade the minimum required version of [mise-en-place](https://mise.jdx.dev).
- Support [Ansis](https://github.com/webdiscus/ansis) packages in the
  `automerge-runtime-patch` configuration.
- Support [Howler](https://howlerjs.com) packages in the
  `automerge-runtime-patch` configuration.
- Support [Snowplow](https://docs.snowplow.io) packages in the
  `automerge-runtime-patch` configuration.

### Fixed
- Recognise `@tailwindcss/**` packages.
- Recognise `nodejs` as a Node.js identifier in the `skip-nodejs-major`
  configuration, as implemented by [mise-en-place](https://mise.jdx.dev) in
  `mise.toml`.

## [1.2.0] - 2025-01-04
### Added
- New configuration: `github>rainstormy/presets-renovate:skip-nodejs-major`.
- Upgrade remote [Lefthook](https://lefthook.dev) configurations.

## [1.1.0] - 2024-10-29
### Added
- New configuration: `github>rainstormy/presets-renovate:automerge-build-patch`.
- New configuration: `github>rainstormy/presets-renovate:automerge-runtime-patch`.
- New configuration: `github>rainstormy/presets-renovate:automerge-tooling-patch`.

### Changed
- Disable `minimumReleaseAge` for [Biome](https://biomejs.dev) to ensure that it
  stays in sync with the `$schema` property in `biome.json`.

### Fixed
- Use glob patterns in `matchPackageNames` instead of `matchPackagePrefixes`.

## [1.0.0] - 2024-09-01
### Added
- [MIT license](https://choosealicense.com/licenses/mit).
- New configuration: `github>rainstormy/presets-renovate`.

[unreleased]: https://github.com/rainstormy/presets-renovate/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/rainstormy/presets-renovate/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/rainstormy/presets-renovate/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/rainstormy/presets-renovate/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/rainstormy/presets-renovate/releases/tag/v1.0.0
