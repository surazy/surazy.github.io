#!/usr/bin/env node
// Fetches surazy's GitHub profile and top repos, writes to src/data/github.json

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = join(__dirname, '..', 'src', 'data', 'github.json')

const USERNAME = 'surazy'
const TOKEN = process.env.GITHUB_TOKEN

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'surazy-portfolio-bot',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
}

async function fetchJSON(url) {
  const res = await fetch(url, { headers })
  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status} for ${url}`)
  }
  return res.json()
}

async function main() {
  console.log('Fetching GitHub profile…')
  const profile = await fetchJSON(`https://api.github.com/users/${USERNAME}`)

  console.log('Fetching repositories…')
  const rawRepos = await fetchJSON(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner`
  )

  const repos = rawRepos
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map(({ id, name, description, html_url, stargazers_count, language, topics, updated_at }) => ({
      id,
      name,
      description,
      html_url,
      stargazers_count,
      language,
      topics,
      updated_at,
    }))

  const data = {
    profile: {
      login: profile.login,
      name: profile.name,
      bio: profile.bio,
      avatar_url: profile.avatar_url,
      html_url: profile.html_url,
      followers: profile.followers,
      public_repos: profile.public_repos,
    },
    repos,
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true })
  writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2))
  console.log(`✓ Written ${repos.length} repos to ${OUTPUT_PATH}`)
}

main().catch((err) => {
  console.error('fetch-github failed:', err.message)
  process.exit(1)
})
