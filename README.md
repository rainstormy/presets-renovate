# Opinionated Presets for Renovate

This package provides predefined,
opinionated [Renovate](https://mend.io/renovate) presets to be applied to
the [`extends`](https://docs.renovatebot.com/configuration-options/#extends)
property in `renovate.json`.

## Usage
Create a [`renovate.json`](https://docs.renovatebot.com/configuration-options)
file and [extend](https://docs.renovatebot.com/config-presets/#github)
`github>rainstormy/presets-renovate` to enable opinionated dependency upgrades
in general.

In addition to this, you can extend some of the following configurations to
refine the dependency upgrade settings for your project:

| Configuration                                                | Description                                                                                                                                                          |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `github>rainstormy/presets-renovate:automerge-build-patch`   | Automatically merges patch upgrades for select packages that affect the build artefacts deployed into production.                                                    |
| `github>rainstormy/presets-renovate:automerge-runtime-patch` | Automatically merges patch upgrades for select packages bundled into the build artefacts deployed on the server or in the browser.                                   |
| `github>rainstormy/presets-renovate:automerge-tooling-patch` | Automatically merges patch upgrades for all GitHub Actions and for select packages related to testing, formatting, linting, type-checking, and developer experience. |
| `github>rainstormy/presets-renovate:skip-nodejs-major`       | Ignores major upgrades for Node.js, which is useful to preserve backward compatibility in libraries.                                                                 |

You can override the predefined settings by specifying the desired options like
`schedule`, `automergeSchedule`, `timezone`, and additional entries in
`packageRules` as usual.

For example:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>rainstormy/presets-renovate",
    "github>rainstormy/presets-renovate:automerge-build-patch",
    "github>rainstormy/presets-renovate:automerge-runtime-patch",
    "github>rainstormy/presets-renovate:automerge-tooling-patch"
  ],
  "schedule": ["* 0-7 * * mon-fri"],
  "automergeSchedule": ["* 9-14 * * mon-fri"],
  "timezone": "Europe/Copenhagen",
  "packageRules": [
    {
      "matchPackageNames": [
        "@storybook/**",
        "@vitest/**",
        "storybook",
        "vitest"
      ],
      "enabled": false
    }
  ]
}
```

### Eject from the preset
Copy the relevant parts of
the [preset source files](https://github.com/rainstormy/presets-renovate/tree/main/src)
and insert them directly into the `renovate.json` file. Make adjustments as
needed.
