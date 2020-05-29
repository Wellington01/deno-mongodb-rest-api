import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getNotes, getSingleNote, createNote, updateNote, deleteNote } from "./routes.ts";

const app = new Application();
const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "Welcome to Notes API";
  })
  .get("/notes", getNotes)
  .get("/notes/:id", getSingleNote)
  .post("/notes", createNote)
  .put("/notes/:id", updateNote)
  .delete("/notes/:id", deleteNote); 

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });

console.log("Server in up and running");
