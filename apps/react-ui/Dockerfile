FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system react-ui && \
  adduser --system -G react-ui react-ui

COPY package*.json ./
COPY dist/apps/react-ui react-ui
RUN chown -R react-ui:react-ui .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix react-ui --omit=dev -f install

CMD [ "node", "react-ui" ]
