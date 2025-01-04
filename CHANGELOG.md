# Changelog

This file documents all notable changes to this project. The format is based
on [Keep a Changelog](https://keepachangelog.com/en/1.1.0), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- New preset: `github>rainstormy/presets-renovate:skip-nodejs-major`.
- Support upgrading remote Lefthook configurations.

## [1.1.0] - 2024-10-29
### Added
- New preset: `github>rainstormy/presets-renovate:automerge-build-patch`.
- New preset: `github>rainstormy/presets-renovate:automerge-runtime-patch`.
- New preset: `github>rainstormy/presets-renovate:automerge-tooling-patch`.

### Changed
- Disable `minimumReleaseAge` for Biome.

### Fixed
- Use glob patterns in `matchPackageNames` instead of `matchPackagePrefixes`.

## [1.0.0] - 2024-09-01
### Added
- [MIT license](https://choosealicense.com/licenses/mit).
- New preset: `github>rainstormy/presets-renovate`.

[unreleased]: https://github.com/rainstormy/presets-renovate/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/rainstormy/presets-renovate/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/rainstormy/presets-renovate/releases/tag/v1.0.0
