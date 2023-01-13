import { buildSchema } from "../schemas/index.js";
import { User } from "./User.js";
import { Photo } from "./Photo.js";

// I do need to export models here, because... for example I export this package
// and want to export all the models as well
export * from "./User.js";
export * from "./Photo.js";

// also I plan to build schemas for my models here...
export const UserSchema = buildSchema(User);
export const PhotoSchema = buildSchema(Photo);
