import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    // * matches all URLs, the ? makes it optional so it will match / as well
    route("/", './screens/Home/Home.tsx'),
    route("/about/:id", './screens/Things/Thing.tsx'),
    // route("*?", "catchall.tsx"),
  ] satisfies RouteConfig;