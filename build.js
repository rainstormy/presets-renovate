import { mkdir, readdir, readFile, writeFile } from "node:fs/promises"

const sourceDirectory = "src"
const destinationDirectory = "dist"
const reservedFilenames = ["biome.json", "package.json"]

await mkdir(destinationDirectory, { recursive: true })

const filenames = await readdir("src")
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
		const output = minifyJson(removeJsonLineComments(content))
		await writeFile(destinationPath, output, "utf8")
	} catch (error) {
		throw new Error(`${filename}: ${error.message}.`)
	}
}

function removeJsonLineComments(jsonContent) {
	return jsonContent.replace(/(?<=["}\]0-9e],?\s|\t)\/\/.*$/gm, "")
}

function minifyJson(jsonContent) {
	return JSON.stringify(JSON.parse(jsonContent))
}
