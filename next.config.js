const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both'
  }
})(/* your normal nextjs config */)