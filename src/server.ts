import express from "express";

const app = express();
const port = process.env.PORT ?? "3210";

app.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Response takis sent");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
