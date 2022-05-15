# Better Living Games README.md
A game company dedicated to make life better for our players, our programers, and people who live near them.

# Build
```bash
yarn install
yarn start
# go to localhost:5000/ for client and localhost:5000/api for api
```

# Build for development
```bash
nvm use 14
cd ./client
yarn install
yarn start
# in a second terminal 
nvm use 14
cd ./api
yarn install 
yarn start
```

# Todo
get database and migration working
add testing

# tech stack
frontend: create-react-app
api: loopback4
db migration tool: db-migrate
db: mongodb
e2e: cypress
