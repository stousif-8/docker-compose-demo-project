#here i'll write this dockerfile into multi-stage dockerfile to reduce the size
#Stage 1 : building the react application 
FROM node:16 AS build 
#we'll set up the working directory 
WORKDIR /usr/src/app
#i'll install the dependencies for this code & copy the package files into the container
COPY package*.json ./
RUN npm install 

#later i'll copy the rest of the application code
COPY . .
#using this we'll build the react application: actually this creates production files
RUN npm run build 
#Stage 2 starts here 
# here we use this  lightweight Nginx image to serve the built files.
FROM nginx:alpine
#using this we'll Copy the built files from the previous build stage to the Nginx default directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html
#expose the ports for nginx to 80
EXPOSE 80
#This  Starts Nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]

