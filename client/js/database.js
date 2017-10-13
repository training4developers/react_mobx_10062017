const collectionURL = 'http://localhost:3010/widgets';
const elementURL = 'http://localhost:3010/widgets/4';

// get all of the widget
fetch(collectionURL)
  .then(res => res.json())
  .then(results => console.log(results));

// get a single with the specified id
fetch(elementURL)
  .then(res => res.json())
  .then(results => console.log(results));

// insert a widget
fetch(collectionURL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    name: 'New Widget',
    description: 'A new widget',
    color: 'hot pink',
    size: 'large',
    quantity: 10,
  }),
})
  .then(res => res.json())
  .then(results => console.log(results));

// replace a widget
fetch(elementURL, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    id: 4,
    name: 'New Widget',
    description: 'A new widget',
    color: 'hot pink',
    size: 'large',
    quantity: 10,
  }),
})
  .then(res => res.json())
  .then(results => console.log(results));


// get a single with the specified id
fetch(elementURL, { method: 'DELETE' })
  .then(res => res.json())
  .then(results => console.log(results));
