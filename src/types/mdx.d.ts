declare module "*.mdx" {
  export const frontmatter: Record<string, unknown>
  const Component: React.ComponentType
  export default Component
}
