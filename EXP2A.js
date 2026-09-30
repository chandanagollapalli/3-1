//Expressjs file
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    const student = {
        name: "CHANDANA",
        course: "B.Tech",
        branch: "CSM"
    };

    res.render('index', { student: student });
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});

//ejs file
<!DOCTYPE html>
<html>
<head>
    <title>Student Details</title>
</head>
<body>

    <h1>Student Details</h1>

    <p>Name: <%= student.name %></p>
    <p>Course: <%= student.course %></p>
    <p>Branch: <%= student.branch %></p>

</body>
</html>
