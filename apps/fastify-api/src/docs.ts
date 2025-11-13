import { generateOpenApi } from '@ts-rest/open-api'
import { apiBlog } from '@rfx/common-contracts'

/**
 * OpenAPI (Swagger) document for this app generated from the ts-rest `apiBlog` contract.
 */
export const openApiDocument = generateOpenApi(
  apiBlog,
  {
    info: {
      title: 'Fastify API with ts-rest',
      version: '0.1.0',
      description: 'This is a sample Fastify API application using ts-rest and generated OpenAPI documentation.',
    },
  },
  { setOperationId: true },
)
