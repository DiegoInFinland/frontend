FROM node:24-alpine3.21 

WORKDIR /app  
COPY react/package*.json . 

RUN npm install 
COPY react/ . 

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--port", "5173", "--host", "0.0.0.0"] 




