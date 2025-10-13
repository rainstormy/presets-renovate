# Changelog

This file documents all notable changes to this project. The format is based
on [Keep a Changelog](https://keepachangelog.com/en/1.1.0), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Support [tsgo](https://github.com/microsoft/typescript-go) in the
  `automerge-tooling-patch` configuration.

## [1.6.0] - 2025-09-14
### Added
- Support [Testcontainers](https://testcontainers.com) in the
  `automerge-tooling-patch` configuration.

### Changed
- Omit the version number in the commit message of type definition upgrades.
- Exclude major type definition upgrades from package groups.

### Fixed
- Use glob pattern syntax in custom managers for
  remote [Lefthook](https://lefthook.dev) configurations
  and [mise-en-place](https://mise.jdx.dev).

## [1.5.1] - 2025-09-09
### Changed
- Group type definitions into a single pull request.
- Omit `@types/react` and `@types/react-dom` from Renovate pull requests that
  upgrade the main [React](https://react.dev) package group.
- Revise the package groups for better branch names and more precise commit
  messages.

## [1.5.0] - 2025-09-02
### Added
- Support the [Chromatic CLI](https://www.chromatic.com/docs/cli/) and
  `@chromatic-com/**` packages in the `automerge-tooling-patch` configuration.
- Support [mise-en-place](https://mise.jdx.dev) in the `automerge-tooling-patch`
  configuration.
- Support [Mentoss](https://github.com/humanwhocodes/mentoss) in the
  `automerge-tooling-patch` configuration.
- Support [Playwright](https://playwright.dev) in the `automerge-tooling-patch`
  configuration.

### Changed
- Upgrade [mise-en-place](https://mise.jdx.dev) only to the first release of a
  month.

### Fixed
- Support `@mswjs/**` packages in the `automerge-tooling-patch` configuration.
- Omit plugins like `@tailwindcss/forms` and `@tailwindcss/typography` from
  Renovate pull requests that upgrade the
  main [Tailwind CSS](https://tailwindcss.com) package group.
- Recognise `@next/**` packages when upgrading [Next.js](https://nextjs.org).
- Rename `fileMatch` to `managerFilePatterns` in custom managers for
  remote [Lefthook](https://lefthook.dev) configurations
  and [mise-en-place](https://mise.jdx.dev).

## [1.4.0] - 2025-06-15
### Added
- Support [Node Redis](https://redis.js.org) packages in the
  `automerge-runtime-patch` configuration.
- Support [pnpm](https://pnpm.io) in the `automerge-tooling-patch`
  configuration.
- Support all `@types/**` packages in the `automerge-tooling-patch`
  configuration.

### Changed
- Add a 'the' prefix to some commit messages to make them sound more natural.

## [1.3.1] - 2025-06-05
### Fixed
- Skip [mise-en-place](https://mise.jdx.dev) patch releases by default.
- Support `@tailwindcss/**` packages in the `automerge-build-patch`
  configuration.

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
- Recognise `@tailwindcss/**` packages when
  upgrading [Tailwind CSS](https://tailwindcss.com).
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
- New configuration:
  `github>rainstormy/presets-renovate:automerge-runtime-patch`.
- New configuration:
  `github>rainstormy/presets-renovate:automerge-tooling-patch`.

### Changed
- Disable `minimumReleaseAge` for [Biome](https://biomejs.dev) to ensure that it
  stays in sync with the `$schema` property in `biome.json`.

### Fixed
- Use glob patterns in `matchPackageNames` instead of `matchPackagePrefixes`.

## [1.0.0] - 2024-09-01
### Added
- [MIT license](https://choosealicense.com/licenses/mit).
- New configuration: `github>rainstormy/presets-renovate`.

[unreleased]: https://github.com/rainstormy/presets-renovate/compare/v1.6.0...HEAD
[1.6.0]: https://github.com/rainstormy/presets-renovate/compare/v1.5.1...v1.6.0
[1.5.1]: https://github.com/rainstormy/presets-renovate/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/rainstormy/presets-renovate/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/rainstormy/presets-renovate/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/rainstormy/presets-renovate/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/rainstormy/presets-renovate/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/rainstormy/presets-renovate/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/rainstormy/presets-renovate/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/rainstormy/presets-renovate/releases/tag/v1.0.0
