FROM node:alpine as base
#FROM node:12-alpine  as base

COPY ./src ./src
WORKDIR /src
RUN npm install
RUN npm run build

FROM base AS final
WORKDIR /src
# COPY --from=base ./src/dist .
#COPY --from=base /app/package*.json ./
HEALTHCHECK --retries=5  --interval=100s --start-period=10s   CMD curl --fail http://localhost || exit 1

EXPOSE 80
#EXPOSE 443
#ENV PORT 80 443
ENV PORT 80
CMD [ "node", "dist/index" ]
