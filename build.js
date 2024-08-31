import { mkdir, readFile, writeFile } from "node:fs/promises"

const destinationDirectory = "dist"

await mkdir(destinationDirectory, { recursive: true })

const sourcePath = "src/default.jsonc"
const destinationPath = `${destinationDirectory}/default.json`

try {
	const content = await readFile(sourcePath, "utf8")
	const output = minifyJson(removeJsonCommentLines(content))
	await writeFile(destinationPath, output, "utf8")
} catch (error) {
	throw new Error(`default.jsonc: ${error.message}.`)
}

function removeJsonCommentLines(jsonContent) {
	return jsonContent.replace(/^\t*\/\/.*$/gm, "")
}

function minifyJson(jsonContent) {
	return JSON.stringify(JSON.parse(jsonContent))
}
