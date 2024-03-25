import {Elysia} from "elysia";

export const Plugin = new Elysia()
    .state("user", {name: "John Doe"})
    .get("/tracks/:id", ({params: {id}}) => `Track #${id}`)
    .get("/tracks", ({store}) => {
        console.log('store:', store)
        return {
            "tracks": [
                {"id": 1, "title": "Track 1"},
                {"id": 2, "title": "Track 2"},
                {"id": 3, "title": "Track 3"}
            ]
        }
    });