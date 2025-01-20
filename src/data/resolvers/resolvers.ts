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
    review(_parent: any, { id }: { id: string }) {
      return _db.reviews.find((review) => review.id === id);
    },
    game(_parent: any, { id }: { id: string }) {
      return _db.games.find((game) => game.id === id);
    },
    author(_parent: any, { id }: { id: string }) {
      return _db.authors.find((author) => author.id === id);
    },
  },
};
