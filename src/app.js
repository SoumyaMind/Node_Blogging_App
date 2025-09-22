const express = require('express');
const bodyParser = require('body-parser');
const setPostsRoutes = require('./routes/posts');
const setCommentsRoutes = require('./routes/comments');
const jwtMiddleware = require('./middleware/jwt');
const cors = require('cors');

const app = express();
const PORT = 4200;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(jwtMiddleware);

setPostsRoutes(app);
setCommentsRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});