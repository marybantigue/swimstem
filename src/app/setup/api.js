import Firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyDA4bGsWHvTRZQJEOj59eOaj80nUqWr5N4',
  authDomain: 'swimstem-b09f1.firebaseapp.com',
  databaseURL: 'https://swimstem-b09f1.firebaseio.com',
  storageBucket: 'swimstem-b09f1.appspot.com',
  messagingSenderId: '492828205015'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let setupRef = db.ref('setup')

export const fetchSetup = () => {
  return setupRef.limitToFirst().toJSON()
}

export const saveSetup = (setup) => {
  setupRef.push(setup)
  alert('setup saved')
}

