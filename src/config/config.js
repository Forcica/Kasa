const isGitHubPages = window.location.hostname.includes('github.io');
export const BASE_PATH = isGitHubPages ? '/Kasa' : '';

export const getAssetPath = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${BASE_PATH}/${cleanPath}`;
};
