import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import post from './schemas/post'
import author from './schemas/author'
import project from './schemas/project'
import testimonials from './schemas/testimonials'
import stack from './schemas/stack'
import stackcategory from './schemas/stackcategory'
import category from './schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,project,author,testimonials ,stack , stackcategory ,category, blockContent],

}
