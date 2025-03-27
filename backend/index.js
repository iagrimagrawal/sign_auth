require('dotenv').config();
const PORT = process.env.PORT // || 5001;

const app = require('./app')

app.listen(PORT,()=>{
    console.log(`Server is listen on http://localhost:${PORT}`);
})


