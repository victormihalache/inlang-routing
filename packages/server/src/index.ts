import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const handleApplication = (
  name: string,
  location: `https://${string}` | `http://${string}`
) => {
  const application = new Hono();

  application.get(`/:lang/${name}`, (context) => {
    return context.redirect(`/${name}/`);
  });

  application.on(
    "GET",
    [`/:lang/${name}/`, `/:lang/${name}/:path{.+$}`],
    async (context) => {
      if (
        context.req.path.endsWith("/") &&
        context.req.path !== `/${context.req.param("lang")}/${name}/`
      ) {
        return context.redirect(context.req.url.slice(0, -1), 301);
      }

      return await fetch(
        `${location}/${context.req.param("lang")}/${
          context.req.param("path") || ""
        }`
      );
    }
  );

  return application;
};

import shared from "shared";

app.route("/", handleApplication(shared.app1.base.slice(1), shared.app1.url));

export default app;
