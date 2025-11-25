import { mkdir, readdir, readFile, writeFile } from "node:fs/promises"

const sourceDirectory = "src"
const destinationDirectory = "dist"

const filenames = await readdir(sourceDirectory)
const reservedFilenames = ["biome.json", "package.json"]

await mkdir(destinationDirectory, { recursive: true })
await Promise.all(filenames.map(buildFile))

async function buildFile(filename) {
	const destinationFilename = filename.slice(0, -1) // Convert `.jsonc` to `.json`.

	if (reservedFilenames.includes(destinationFilename)) {
		throw new Error(`${filename}: Reserved filename.`)
	}

	const sourcePath = `${sourceDirectory}/${filename}`
	const destinationPath = `${destinationDirectory}/${destinationFilename}`

	try {
		const content = await readFile(sourcePath, "utf8")
		const jsonContent = removeJsonLineComments(content)

		// Discard the `$schema` field.
		const { $schema: _ignored, ...fieldsToKeep } = JSON.parse(jsonContent)

		const minifiedOutput = JSON.stringify(fieldsToKeep)
		await writeFile(destinationPath, minifiedOutput, "utf8")
	} catch (error) {
		throw new Error(`${filename}: ${error.message}.`)
	}
}

function removeJsonLineComments(jsoncContent) {
	return jsoncContent.replace(/(?<=["}\]0-9e],?\s|\t)\/\/.*$/gm, "")
}
