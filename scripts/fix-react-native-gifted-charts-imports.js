const fs = require("fs");
const path = require("path");

const packageDistDir = path.join(
    process.cwd(),
    "node_modules",
    "react-native-gifted-charts",
    "dist"
);

const JS_EXTENSION = ".js";
const RELATIVE_IMPORT_PATTERN = /(from\s+['"])(\.{1,2}\/[^'"]+)(['"])/g;

function collectJsFiles(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    return entries.flatMap((entry) => {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            return collectJsFiles(entryPath);
        }

        return entry.isFile() && entry.name.endsWith(JS_EXTENSION) ? [entryPath] : [];
    });
}

function resolvePatchedImportPath(filePath, importPath) {
    if (path.extname(importPath)) {
        return importPath;
    }

    const absoluteTarget = path.resolve(path.dirname(filePath), importPath);
    const fileCandidate = `${absoluteTarget}${JS_EXTENSION}`;
    const indexCandidate = path.join(absoluteTarget, `index${JS_EXTENSION}`);

    if (fs.existsSync(fileCandidate)) {
        return `${importPath}${JS_EXTENSION}`;
    }

    if (fs.existsSync(indexCandidate)) {
        return `${importPath}/index${JS_EXTENSION}`;
    }

    return importPath;
}

function patchFile(filePath) {
    const originalContent = fs.readFileSync(filePath, "utf8");

    const patchedContent = originalContent.replace(
        RELATIVE_IMPORT_PATTERN,
        (match, prefix, importPath, suffix) => {
            const patchedPath = resolvePatchedImportPath(filePath, importPath);
            return `${prefix}${patchedPath}${suffix}`;
        }
    );

    if (patchedContent === originalContent) {
        return false;
    }

    fs.writeFileSync(filePath, patchedContent, "utf8");
    return true;
}

function main() {
    if (!fs.existsSync(packageDistDir)) {
        console.log("react-native-gifted-charts dist folder not found, skipping patch.");
        return;
    }

    const jsFiles = collectJsFiles(packageDistDir);
    const patchedCount = jsFiles.reduce(
        (count, filePath) => count + Number(patchFile(filePath)),
        0
    );

    console.log(`Patched react-native-gifted-charts imports in ${patchedCount} files.`);
}

main();
