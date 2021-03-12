const express = require('express');

const app = express();

// use middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// use router
app.get('/', (req, res) => {
    res.send('Welcome in expressjs');
});

const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));