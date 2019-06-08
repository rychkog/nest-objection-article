# Reducing mental fatigue: NestJS + Objection.js

## Hot to run
- `npm i`
- `npm run start`

API is accessible at `http://localhost:3001`

## Example API requests
### Themes
```bash
# findAll
curl http://localhost:3001/api/themes

# findOne
curl http://localhost:3001/api/themes/1

# create
curl -X POST http://localhost:3001/api/themes -d '{ "name": "my"  }' -H "Content-Type: application/json"

# update
curl -X PUT http://localhost:3001/api/themes/6 -d '{ "name": "baz", "fontFamily": "DejaVu Sans Mono"  }' -H "Content-Type: application/json"

# delete
curl -X DELETE http://localhost:3001/api/themes/6
```

### Tags
```bash
# findAll
curl http://localhost:3001/api/tags

# findOne
curl http://localhost:3001/api/tags/1

# create
curl -X POST http://localhost:3001/api/tags -d '{ "name": "foobar"  }' -H "Content-Type: application/json"

# update
curl -X PUT http://localhost:3001/api/tags/6 -d '{ "name": "foobar42"  }' -H "Content-Type: application/json"

# delete
curl -X DELETE http://localhost:3001/api/tags/6
```

### Notes
```bash
# findAll
curl http://localhost:3001/api/notes

# findOne
curl http://localhost:3001/api/notes/1

# create
curl -X POST http://localhost:3001/api/notes -d '{ "text": "foobar", "themeId": 2 }' -H "Content-Type: application/json"

# update
curl -X PUT http://localhost:3001/api/notes/1 -d '{ "text": "hello42" }' -H "Content-Type: application/json"

# delete
curl -X DELETE http://localhost:3001/api/notes/2

# setTheme
curl -X PUT http://localhost:3001/api/notes/1/theme/6

# addTag
curl -X PUT http://localhost:3001/api/notes/1/tags/6

# removeTag
curl -X DELETE http://localhost:3001/api/notes/1/tags/6
```

