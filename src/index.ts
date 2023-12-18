import {Elysia, t} from "elysia";

const app = new Elysia()
    .get("/", () => "Hello World!")
    .get("/id/:id", ({params: {id}}) => `#${id}`)
    .get("/wild/*", () => `Hello world`)
    .post('/login', ({body}) => "login", {
        body: t.Object({username: t.String(), password: t.String()})
    })
    .post('/register', ({body}) => body)
    .post('/status', ({body, set}) => {
        // set.status = 403;
        set.status = 300;
        return body
    })
    // .get('/api', () => new Response(JSON.stringify({hello: "world"}), {
    //     status: 200,
    //     headers: {"Content-Type": "application/json"}
    // }))
    .get('/api', () => ({hello: "world"}))
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
