FROM node:16
#here we can set the working directory
WORKDIR /usr/src/app
#now we here install the dependencies for this code & Copy package.json and package-lock.json to the container
COPY package.json ./
RUN npm install

#after this we'll copy the rest of the application code
COPY . . 

#we'll expose the ports 
EXPOSE 5000

#here we Set ENTRYPOINT to the Node executable.
ENTRYPOINT ["node"]
#we use CMD to specify the default script to run  the application 
CMD ["server.js"]
 

