import type { SchemaTypeDefinition } from "sanity"
import service from "./schemas/service"
import portfolio from "./schemas/portfolio"
import testimonial from "./schemas/testimonial"
import post from "./schemas/post"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, portfolio, testimonial, post],
}
