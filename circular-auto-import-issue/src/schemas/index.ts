import { Photo, User } from "../models/index.js";

// now I have this function which builds the schema
export function buildSchema(model: Function) {
  const canISupport = SchemasSupportModels.find((m) => m === model);
  if (canISupport) {
    // build the schema
  }
}

// I also do have a variable which lists all the models supporting the schemas
export const SchemasSupportModels = [Photo, User];

// ADD FOLLOWING IMPORTS (INSTEAD OF AUTO IMPORT) TO MAKE IT TO WORK
// import { Photo } from "../models/Photo.js";
// import { User } from "../models/User.js";

// I know you might think - why to structure things like that...
// but it's hard to came up a real use case in a minimalistic example
// in a bigger projects things might be complicated, and this kind of dependency might happen

// solution for the WebStorm if it wants to be "smarter"
// is to build a dependency graph and import "Photo" and "User" directly from their files
// instead of the "export places" if circular problems can arise with such "export places"
