import {t} from "elysia"

export const userDTO = t.Object({username: t.String(), password: t.String()})
// DTO => Data Transfer Object