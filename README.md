# Opinionated Presets for Renovate

This package provides predefined,
opinionated [Renovate](https://mend.io/renovate) presets to be applied to
the [`extends`](https://docs.renovatebot.com/configuration-options/#extends)
property in `renovate.json`.

## Usage
Create a [`renovate.json`](https://docs.renovatebot.com/configuration-options)
file and [extend](https://docs.renovatebot.com/config-presets/#github)
`github>rainstormy/presets-renovate` to enable opinionated dependency upgrades.

For example:

```json
{
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": ["github>rainstormy/presets-renovate"]
}
```

### Override settings
Specify the desired options like `schedule`, `automergeSchedule`, and additional
entries in `packageRules` as usual.

For example:

```json
{
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": ["github>rainstormy/presets-renovate"],
    "schedule": ["before 8am every weekday"],
    "automergeSchedule": ["after 9am and before 3pm every weekday"],
    "packageRules": [
        {
            "matchPackageNames": [
                "postcss",
                "storybook",
                "typescript",
                "vitest"
            ],
            "matchPackagePrefixes": [
                "@storybook/",
                "@vitest/"
            ],
            "matchUpdateTypes": ["patch"],
            "automerge": true
        }
    ]
}
```

### Eject from the preset
Copy the relevant parts of
the [preset source files](https://github.com/rainstormy/presets-renovate/tree/main/src)
and insert them directly into the `renovate.json` file. Make adjustments as
needed.
