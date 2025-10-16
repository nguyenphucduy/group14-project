const express = require('express');
const app = express();
app.use(express.json()); // Để parse JSON từ request
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));