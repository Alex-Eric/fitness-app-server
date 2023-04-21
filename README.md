
# FITNESS APP (API)

This project is the API from our web page [Fitness App](https://github.com/Alex-Eric/fitness-app-client).

This API it's made with Express and Node.js


## API Reference

### Muscles

| Method  | Parameter |  Description                |
| :-------- | :--------  | :------------------------- |
| GET | `/muscles`  | Get all the muscles |


### Exercises

| Method  | Parameter | Description                |
| :-------- | :--------  | :------------------------- |
| GET | `/exercises`  | Get all the exercises |
| GET | `/exercises/id`  | Get one exercise |
| POST | `/exercises/create`  | Create a new exercise |
| PUT | `/exercises/id`  | Update an exercise |
| DELETE | `/exercises/id`  | Delete an exercise |

### Workouts

| Method  | Parameter |  Description                |
| :-------- | :--------  | :------------------------- |
| GET | `/workouts`  | Get all the workouts |
| POST | `/workouts/create`  | Create a new workout |
| PUT | `/workouts/id/edit`  | Update a workout |
| DELETE | `/workouts/id`  | Delete a workout |


## Installation

If you want to test this project in your computer, you can fork and clone, then do this steps:

```bash
  npm install 
```

Create a ```.env``` file and add the following variables: 
```
PORT=5005
ORIGIN=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017
TOKEN_SECRET=YOUR_SECRET_TOKEN
API_NINJA_KEY_SECRET='YOUR_SECRET_KEY'

```

Next run the project with this command to fill the database
```
npm start
```
Finally, stop it with ctrl+c and run with nodemon like this
```
 npm run dev
```
## Demo

### Try the API

[https://fitness-app-api.adaptable.app/api](https://fitness-app-api.adaptable.app/api)

### Visit our page Fitness App!

[https://fitness-app-workouts.netlify.app](https://fitness-app-workouts.netlify.app)


## Authors

- [Alex Uceda Cintas](https://github.com/AlexUcedaCintas)
- [Èric Vega Noguera](https://github.com/ericveganoguera)
