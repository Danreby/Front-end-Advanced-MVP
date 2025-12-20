export function getImagePath(relativePath) {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  const normalizedPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`
  return `${normalizedBase}${normalizedPath}`
}
