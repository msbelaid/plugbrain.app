// Fetched once at build time so visitors' browsers never contact GitHub.
// If the API is unreachable the site still builds, just without these numbers.
export interface RepoInfo { stars: number | null; version: string | null }

let cached: Promise<RepoInfo> | undefined;

async function load(): Promise<RepoInfo> {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const get = async (path: string) => {
    try {
      const res = await fetch(`https://api.github.com/repos/msbelaid/PlugBrain${path}`, { headers, signal: AbortSignal.timeout(8000) });
      return res.ok ? await res.json() : null;
    } catch {
      return null;
    }
  };
  const [repo, release] = await Promise.all([get(''), get('/releases/latest')]);
  return {
    stars: typeof repo?.stargazers_count === 'number' ? repo.stargazers_count : null,
    version: typeof release?.tag_name === 'string' ? release.tag_name.replace(/^v/, '') : null,
  };
}

export function repoInfo(): Promise<RepoInfo> {
  cached ??= load();
  return cached;
}
