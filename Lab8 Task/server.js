import express from "express";

const app = express();
app.use(express.json()); // allows reading JSON body

// "Database"
let posts = [
    {
        id: 1,
        content: "Hello world!",
        comments: ["Nice!", "Welcome!"]
    },
    {
        id: 2,
        content: "My second post",
        comments: []
    }
];

// Root route redirects to /posts
app.get("/", (req, res) => {
    res.redirect("/posts");
});

// GET /posts: return all posts
app.get("/posts", (req, res) => {
    res.json(posts);
});

// GET /posts/:id: return one post by id
app.get("/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json(post);
});

// POST /posts: create a new post
app.post("/posts", (req, res) => {
    const { content } = req.body;

    const newPost = {
        id: Date.now(),
        content,
        comments: []
    };

    posts.push(newPost);
    res.json(newPost);
});

// PUT /posts/:id: update post content
app.put("/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    const { content } = req.body;

    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.content = content;
    res.json(post);
});

// DELETE /posts/:id: delete a post
app.delete("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ message: "Post not found" });

    posts.splice(index, 1);
    res.json({ message: "Post deleted" });
});

// POST /posts/:id/comments: add a comment to a given post
app.post("/posts/:id/comments", (req, res) => {
    const id = Number(req.params.id);
    const { comment } = req.body;

    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push(comment);
    res.json(post.comments);
});

// GET /posts/:id/comments: get all comments for the post
app.get("/posts/:id/comments", (req, res) => {
    const id = Number(req.params.id);

    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json(post.comments);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
