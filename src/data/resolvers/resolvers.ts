import _db from "../raw/_db.ts";

export const resolvers = {
  Query: {
    games() {
      return _db.games;
    },
    authors() {
      return _db.authors;
    },
    reviews() {
      return _db.reviews;
    },
  },
};
