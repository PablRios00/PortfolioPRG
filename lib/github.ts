export type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
};

export async function getGitHubRepos(username = "PablRios00"): Promise<GitHubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
    headers: {
      Accept: "application/vnd.github+json"
    },
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error("No se pudieron cargar los repositorios de GitHub");
  }

  const repos = (await response.json()) as GitHubRepo[];

  return repos.map((repo) => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    updated_at: repo.updated_at,
    html_url: repo.html_url
  }));
}
