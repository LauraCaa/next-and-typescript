FROM node:21
WORKDIR "/opt/next-and-type"
COPY . ./
# COPY package*.json .
# RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]