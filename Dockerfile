FROM node:17

# Create the directory!
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy and Install our bot
COPY package.json /usr/src/app
RUN npm install

# Our precious bot
COPY . /usr/src/app

# Start me!
CMD ["sh", "run.sh"]