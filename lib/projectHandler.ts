import type { Image } from 'sanity'

export type Project = {
  mainImage: Image;
  category: string;
  title: string;
  slug: {
    current: string;
    _type: "slug";
  };
  publishedAt: string;
  _createdAt: string;
};

export const orderProjectsbyCategory = async (projectArr: Project[]) => {
  const categories = projectArr.reduce((acc, project) => {
    if (!acc.get(project.category)) {
      acc.set(project.category, {
        id: project.category,
        projects: [],
      });
    }

    acc.get(project.category)!.projects.push({
      category: project.category,
      title: project.title,
      slug: project.slug,
      publishedAt: project.publishedAt,
      ...(project.mainImage && { mainImage: project.mainImage }),
    });

    return acc;
  }, new Map());


  return categories
};
