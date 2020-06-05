![Banner Image](https://i.imgur.com/80OZCaq.png)

# todos-demo - Work in progress :construction:
Sample Todos app created for a tech assignment and as a learning exercise.

Backend built as simple REST Apis using [Lumen](https://lumen.laravel.com/), easiest to get it up and running is with [Laravel's Homestead](https://laravel.com/docs/7.x/homestead)

```
cd backend
vagrant up
php artisan migrate
```

Frontend built with [Meteor](https://www.meteor.com/) & React+Redux
```
cd frontend
meteor npm install
# make a copy of settings-dev.json.example and fill in the auth0 details
meteor --settings settings-dev.json
```

--- 

Open tasks:
- [ ] Make creating tasks optimistic
- [ ] Add GTD labeling as categories
- [ ] Make it look a bit prettier


New tech used:
- [redux-api-middleware](https://www.npmjs.com/package/redux-api-middleware)
- [lumen](https://lumen.laravel.com/)
- [auth0](https://github.com/auth0/auth0-spa-js)
