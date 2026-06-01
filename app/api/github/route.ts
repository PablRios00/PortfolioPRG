import { getGitHubRepos } from "@/lib/github";
import { NextResponse } from "next/server";

export const revalidate = 3600;

const hiddenRepos = new Set(["BlocNotas", "PortfolioPabloRiosGonzalez"]);

export async function GET() {
  try {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "PablRios00";
    const repos = (await getGitHubRepos(username)).filter((repo) => !hiddenRepos.has(repo.name));

    return NextResponse.json(repos, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error al cargar GitHub" },
      { status: 500 }
    );
  }
}
