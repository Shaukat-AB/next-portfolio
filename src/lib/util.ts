export const convertToLowerCase = (link: string) => {
  return link.replaceAll(' ', '-').toLocaleLowerCase();
};

export const createReadMeLink = (repoName: string) => {
  return `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_GITHUB_USER}/${repoName}/main/README.md`;
};

export const createGithubLink = (repoName: string) => {
  return `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}/${repoName}`;
};
