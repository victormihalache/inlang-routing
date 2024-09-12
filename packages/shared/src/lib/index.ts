type Config = Record<
  string,
  {
    url: `http://${string}` | `https://${string}`;
    base: `/${string}`;
  }
>;

export default {
  app1: {
    url: "http://localhost:5173",
    base: "/books",
  },
} satisfies Config;
