import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const metricsPath = resolve(process.cwd(), 'scholar-metrics.json');
const authorId = process.env.S2_AUTHOR_ID;
const apiKey = process.env.S2_API_KEY;

if (!authorId) {
  console.log('S2_AUTHOR_ID is not set. Skipping metrics update.');
  process.exit(0);
}

const headers = {
  Accept: 'application/json'
};

if (apiKey) {
  headers['x-api-key'] = apiKey;
}

const endpoint = `https://api.semanticscholar.org/graph/v1/author/${encodeURIComponent(authorId)}?fields=name,citationCount,hIndex,url`;

const response = await fetch(endpoint, { headers });
if (!response.ok) {
  throw new Error(`Semantic Scholar request failed with status ${response.status}`);
}

const payload = await response.json();
const existingRaw = await readFile(metricsPath, 'utf-8');
const existing = JSON.parse(existingRaw);

const next = {
  ...existing,
  lastUpdated: new Date().toISOString().slice(0, 10),
  metrics: {
    ...existing.metrics,
    citations: Number.isFinite(payload.citationCount) ? payload.citationCount : existing.metrics?.citations,
    hIndex: Number.isFinite(payload.hIndex) ? payload.hIndex : existing.metrics?.hIndex,
    i10Index: existing.metrics?.i10Index ?? 0
  },
  source: {
    provider: 'Semantic Scholar',
    authorId,
    authorName: payload.name || null,
    authorUrl: payload.url || null
  }
};

const nextRaw = `${JSON.stringify(next, null, 2)}\n`;
if (nextRaw !== existingRaw) {
  await writeFile(metricsPath, nextRaw, 'utf-8');
  console.log('scholar-metrics.json updated.');
} else {
  console.log('No metrics changes detected.');
}
