FROM node:12 as server
WORKDIR /server
COPY . .
RUN npm i
EXPOSE 3001
ENV NODE_ENV=production
CMD ["npm", "start"]