FROM node:18-alpine
WORKDIR /usr/src/app

# copy package.json package-lock.json
COPY package*.json .

# continuous integration
RUN npm ci 

# copy all files
COPY . .

EXPOSE 3000

# start the application
CMD ["npm", "start"]


# docker build -t user_name/image-name:0.0.1.RELEASE .
# docker container ls
# docker container run -d -p 3000:3000 user_name/image-name:0.0.1.RELEASE 
# docker container stop 
# docker push user_name/image-name:0.0.1.RELEASE

# docker pull user_name/image-name:0.0.1.RELEASE