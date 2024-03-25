import {Elysia} from "elysia";
import {Plugin} from "./plugin";
import {userDTO} from "./models";

const app = new Elysia()
    .use(Plugin)
    .state('version', '1.0.0')
    .decorate('getDate', () => new Date().toDateString())
    .get("/", () => "Hello World!")
    .get("/id/:id", ({params: {id}}) => `#${id}`)
    .get("/wild/*", () => `Hello world`)
    .post('/login', ({body}) => "login", {
        body: userDTO
    })
    .post('/register', ({body}) => body)
    .get('/status', ({body, getDate}) => {
        console.log('date:', getDate())
        return body
    })
    .post('/status', ({body, set, getDate}) => {
        // set.status = 403;
        set.status = 300;
        console.log('date:', getDate())
        return body
    })
    .get('/api', () => new Response(JSON.stringify({hello: "world"}), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    }))
    .group('/admin', app => app
        .get('/', () => 'Admin')
        .get('/dashboard', () => 'Dashboard')
    )
    .listen(3000);

app.handle(new Request('http://localhost/admin/dashboard')).then(console.log)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
