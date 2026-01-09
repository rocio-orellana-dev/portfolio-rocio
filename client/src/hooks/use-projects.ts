import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// Using the projects list endpoint
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path, { credentials: "include" });
      if (!res.ok) throw new Error('Failed to fetch projects');
      return api.projects.list.responses[200].parse(await res.json());
    },
  });
}

// Using the single project endpoint by slug
export function useProject(slug: string) {
  return useQuery({
    queryKey: [api.projects.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.projects.get.path, { slug });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('Failed to fetch project');
      return api.projects.get.responses[200].parse(await res.json());
    },
    enabled: !!slug,
  });
}
