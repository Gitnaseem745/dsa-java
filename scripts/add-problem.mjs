#!/usr/bin/env node
/**
 * DSA Repo Bootstrapper + Problem Adder
 * - No CI, no tests
 * - Creates/updates:
 *    /problems/0001-two-sum/{Problem.md,Solution.java}
 *    /by-topic/<topic>.md
 *    /by-pattern/<pattern>.md
 *    /by-platform/<platform>.md
 *
 * Usage:
 *   node scripts/add-problem.mjs
 *   (interactive prompts)
 *
 * Requires: Node 18+
 */
import fs from "fs/promises";
import path from "path";
import readline from "readline";

const repoRoot = process.cwd();
const dirs = ["problems", "by-topic", "by-pattern", "by-platform", "templates"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ask = (q) =>
    new Promise((res) => rl.question(q, (ans) => res(ans.trim())));

function toSlug(s) {
    return s
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

function escapePipes(s) {
    return s.replace(/\|/g, "\\|");
}

async function ensureBaseStructure() {
    await Promise.all(
        dirs.map(async (d) => {
            const p = path.join(repoRoot, d);
            try {
                await fs.mkdir(p, { recursive: true });
            } catch { }
        })
    );

    // Seed README if absent
    const readmePath = path.join(repoRoot, "README.md");
    try {
        await fs.stat(readmePath);
    } catch {
        await fs.writeFile(
            readmePath,
            `# DSA in Java

This repository stores solved DSA problems with concise notes.

- Problems live in \`/problems/<id>-<slug>\`
- Browse by topic in \`/by-topic\`
- Browse by pattern in \`/by-pattern\`
- Browse by platform in \`/by-platform\`

> Solve on the platform first, then document here.\n`
        );
    }

    // Seed templates (optional)
    const tmplProblem = path.join(repoRoot, "templates", "PROBLEM.md");
    try {
        await fs.stat(tmplProblem);
    } catch {
        await fs.writeFile(
            tmplProblem,
            `---
id: 0000
title: TITLE_CASE_NAME
platform: LeetCode
link: https://leetcode.com/problems/...
difficulty: Easy
topics: [arrays]
patterns: [two-pointers]
date: YYYY-MM-DD
status: solved
---

## Problem (in your own words)
<summary>

## Constraints
- n up to ...
- values in range ...

## Approaches Considered
1) Brute force — why it fails
2) Optimal — core idea in 2–3 lines

## Complexity
- Time: O(...)
- Space: O(...)

## Edge Cases
- ...

## Dry Run
Input: ...
Walkthrough: ...

## Notes / Gotchas
- ...
`
        );
    }
}

async function nextId() {
    const problemsDir = path.join(repoRoot, "problems");
    const ents = await fs.readdir(problemsDir, { withFileTypes: true });
    const ids = ents
        .filter((e) => e.isDirectory() && /^\d{4}-/.test(e.name))
        .map((e) => parseInt(e.name.slice(0, 4), 10))
        .filter((n) => !Number.isNaN(n))
        .sort((a, b) => a - b);
    const id = (ids.at(-1) ?? 0) + 1;
    return String(id).padStart(4, "0");
}

function today() {
    return new Date().toISOString().slice(0, 10);
}

async function writeProblemFolder(meta) {
    const idSlug = `${meta.id}-${meta.slug}`;
    const problemDir = path.join(repoRoot, "problems", idSlug);
    await fs.mkdir(problemDir, { recursive: true });

    // Problem.md
    const front = `---
id: ${meta.id}
title: ${meta.title}
platform: ${meta.platform}
link: ${meta.link}
difficulty: ${meta.difficulty}
topics: [${meta.topics.join(", ")}]
patterns: [${meta.patterns.join(", ")}]
date: ${meta.date}
status: solved
---

## Problem (in your own words)
${meta.summary || ""}

## Constraints
${meta.constraints || "- ..."}

## Approaches Considered
1) ${meta.brute || "Brute force —"}
2) ${meta.optimal || "Optimal —"}

## Complexity
- Time: ${meta.time || "O(?)"}
- Space: ${meta.space || "O(?)"}

## Edge Cases
- ${meta.edge || "..."}

## Dry Run
${meta.dry || "Input: ... → Steps: ... → Output: ..."}

## Notes / Gotchas
- ${meta.notes || "..."}
`;

    await fs.writeFile(path.join(problemDir, "Problem.md"), front);

    // Solution.java
    const solution = `// ${meta.title} (${meta.platform})
// ID: ${meta.id} | Topics: ${meta.topics.join(", ")} | Patterns: ${meta.patterns.join(", ")
        }
// Link: ${meta.link}
// Difficulty: ${meta.difficulty}
// Time: ${meta.time || "O(?)"} | Space: ${meta.space || "O(?)"}

class Solution {
    // Write only the final approach you accepted on the platform (cleaned)
    // Add helper methods if needed

    // Example placeholder — replace with real method(s)
    public int example(int[] nums) {
        // TODO: paste the accepted logic you wrote on ${meta.platform}
        return 0;
    }
}
`;
    await fs.writeFile(path.join(problemDir, "Solution.java"), solution);

    return { idSlug, problemDir };
}

async function updateIndex(kind, key, meta) {
    // kind: 'topic' | 'pattern' | 'platform'
    // key: file base name (e.g., 'arrays', 'sliding-window', 'leetcode')
    const baseDir =
        kind === "topic"
            ? "by-topic"
            : kind === "pattern"
                ? "by-pattern"
                : "by-platform";

    const file = path.join(repoRoot, baseDir, `${key}.md`);

    // Create file with header if missing
    try {
        await fs.stat(file);
    } catch {
        const title = key
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join(" ");
        const header = `# ${title}

| ID   | Title | Difficulty | Patterns | Link |
|------|-------|------------|----------|------|
`;
        await fs.writeFile(file, header);
    }

    const row = `| ${meta.id} | ${escapePipes(meta.title)} | ${meta.difficulty
        } | ${escapePipes(meta.patterns.join(", "))} | [open](/problems/${meta.id
        }-${meta.slug}) |
`;

    // Avoid duplicate rows
    const current = await fs.readFile(file, "utf8");
    if (!current.includes(`/problems/${meta.id}-${meta.slug}`)) {
        await fs.appendFile(file, row);
    }
}

async function main() {
    await ensureBaseStructure();

    console.log("\n=== Add a solved problem to your DSA repo ===\n");

    const id = await nextId();
    console.log(`Next ID will be: ${id}\n`);

    const title =
        (await ask("Title (e.g., Two Sum): ")) || "Untitled Problem";
    const slug = toSlug(title) || `p-${id}`;

    // Keep platform constrained for file naming consistency
    let platform = (await ask("Platform [LeetCode/GFG/Codeforces/Custom]: ")) || "LeetCode";
    platform = platform.trim();
    const platformKey = toSlug(platform) || "custom";

    const link = await ask("Problem link URL: ");
    let difficulty = (await ask("Difficulty [Easy/Medium/Hard]: ")) || "Easy";
    difficulty = difficulty[0].toUpperCase() + difficulty.slice(1).toLowerCase();

    const topicsInput = await ask(
        "Topics (comma-separated, e.g., arrays, binary-search): "
    );
    const topics = topicsInput
        ? topicsInput
            .split(",")
            .map((s) => toSlug(s))
            .filter(Boolean)
        : [];

    const patternsInput = await ask(
        "Patterns (comma-separated, e.g., two-pointers, prefix-sum): "
    );
    const patterns = patternsInput
        ? patternsInput
            .split(",")
            .map((s) => toSlug(s))
            .filter(Boolean)
        : [];

    const date = today();

    // Optional quick notes (press Enter to skip)
    const summary = await ask("Short summary (optional): ");
    const constraints = await ask("Constraints (optional): ");
    const brute = await ask("Brute approach note (optional): ");
    const optimal = await ask("Optimal approach note (optional): ");
    const time = await ask("Time complexity (e.g., O(n log n)) (optional): ");
    const space = await ask("Space complexity (e.g., O(1)) (optional): ");
    const edge = await ask("Edge cases (optional): ");
    const dry = await ask("Dry run notes (optional): ");
    const notes = await ask("Gotchas (optional): ");

    const meta = {
        id,
        title,
        slug,
        platform,
        platformKey,
        link,
        difficulty,
        topics,
        patterns,
        date,
        summary,
        constraints,
        brute,
        optimal,
        time,
        space,
        edge,
        dry,
        notes,
    };

    const { idSlug } = await writeProblemFolder(meta);

    // Index updates
    for (const t of topics) {
        await updateIndex("topic", t, meta);
    }
    for (const p of patterns) {
        await updateIndex("pattern", p, meta);
    }
    await updateIndex("platform", platformKey, meta);

    rl.close();

    console.log(`\n✅ Created: /problems/${idSlug}`);
    console.log(`   Indexed in: /by-platform/${platformKey}.md${topics.length ? ", /by-topic/*" : ""}${patterns.length ? ", /by-pattern/*" : ""}`);
    console.log("\nDone.\n");
}

main().catch((e) => {
    rl.close();
    console.error(e);
    process.exit(1);
});
