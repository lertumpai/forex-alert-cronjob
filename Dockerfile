FROM node:lts

# set a directory for the app
WORKDIR /forex-alert-cronjobs

# copy all the files to the container
COPY package.json /forex-alert-cronjobs

RUN npm install

COPY . /forex-alert-cronjobs

# tell the port number the container should expose
EXPOSE 6000

# run the command
CMD ["npm", "run", "start"]
