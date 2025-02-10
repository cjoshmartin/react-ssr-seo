import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, Meta, Links, ScrollRestoration, Scripts, Outlet, Link, Routes } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component4) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component4, props);
  };
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "UTF-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /* @__PURE__ */ jsx("title", {
        children: "This is loading"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function Root() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
function getSpeciesEmoji(species) {
  switch (species) {
    case "Human":
      return "👨";
    case "Dog":
      return "🐶";
    default:
      return "❓";
  }
}
const livingThingsData = [
  {
    id: 1,
    imgUrl: "/josh.jpg",
    name: "Josh",
    age: 28,
    height: 71,
    species: "Human",
    gender: "Male",
    description: "Josh is a software engineer who loves to code, often found in front of a computer late at night"
  },
  {
    id: 2,
    imgUrl: "/buddy.jpg",
    name: "Buddy",
    age: 8,
    height: 19,
    species: "Dog",
    gender: "Male",
    description: "Buddy is a dog who loves to play fetch, a little grumpy at times and mostly cat like for a dog. Loves to be chased and receive back scratches. He is the brains of the operation... All the other dogs are just muscle."
  },
  {
    id: 3,
    imgUrl: "/luke.jpg",
    name: "Luke",
    age: 3,
    height: 21,
    species: "Dog",
    gender: "Male",
    description: "Although he is a little bit of a scaredy cat; Luke is the son of Buddy, he is a little more energetic and loves to play with his toys. Always ready to go for a walk and your attention. He knows how to win you over with his charm and cunning attitude."
  }
];
const card = "_card_o8wlp_2";
const styles$3 = {
  card
};
const baseUrl$1 = "https://cjoshmartin.github.io/react-spa-seo";
function ThingCard(props) {
  return /* @__PURE__ */ jsxs(Link, { to: `/about/${props.id}`, className: styles$3.card, children: [
    /* @__PURE__ */ jsx("img", { src: baseUrl$1 + props.imgUrl, alt: props.name }),
    /* @__PURE__ */ jsx("h2", { children: props.name }),
    /* @__PURE__ */ jsxs(Link, { to: "#", children: [
      "learn more about ",
      props.name
    ] })
  ] }, props.key);
}
const container$1 = "_container_odf15_1";
const styles$2 = {
  container: container$1
};
function ThingContainer({ children }) {
  return /* @__PURE__ */ jsx("div", { className: styles$2.container, children });
}
const home = "_home_18uyt_1";
const styles$1 = {
  home
};
function meta$1({
  params
}) {
  const title = "Home - Living Things";
  return [{
    title
  }, {
    property: "twitter:title",
    content: title
  }, {
    property: "twitter:card",
    content: "summary_large_image"
  }, {
    property: "description",
    content: "Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house."
  }, {
    property: "og:type",
    content: "website"
  }, {
    // TODO
    property: "og:url",
    content: ""
  }, {
    property: "og:image",
    content: "https://cjoshmartin.github.io/react-spa-seo"
  }, {
    property: "twitter:image",
    content: "https://cjoshmartin.github.io/react-spa-seo"
  }, {
    property: "og:site_name",
    content: "Living Things"
  }, {
    property: "og:locale",
    content: "en_US"
  }];
}
async function loader$1() {
  return {
    data: livingThingsData
  };
}
const Home = withComponentProps(function Component({
  loaderData
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "App",
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Living Things"
    }), /* @__PURE__ */ jsx("p", {
      children: "Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house. From the plants that adorn the living room to the pets that bring joy and companionship, each living thing has its own story and unique characteristics. Explore the different sections of the site to learn more about these fascinating living things. Click on the links to discover interesting facts, care tips, and personal anecdotes about each one. Whether you're a plant enthusiast or an animal lover, there's something here"
    }), /* @__PURE__ */ jsx("div", {
      className: styles$1.home,
      children: /* @__PURE__ */ jsx(ThingContainer, {
        children: loaderData == null ? void 0 : loaderData.data.map((thing2) => {
          return /* @__PURE__ */ jsx(ThingCard, {
            ...thing2
          }, (thing2 == null ? void 0 : thing2.id) + thing2.name);
        })
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  loader: loader$1,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const container = "_container_1da8k_1";
const thingContainer = "_thingContainer_1da8k_13";
const thing = "_thing_1da8k_13";
const leftSide = "_leftSide_1da8k_37";
const rightSide = "_rightSide_1da8k_41";
const header = "_header_1da8k_52";
const details = "_details_1da8k_74";
const otherThings = "_otherThings_1da8k_86";
const styles = {
  container,
  thingContainer,
  thing,
  leftSide,
  rightSide,
  header,
  details,
  otherThings
};
const baseUrl = "https://cjoshmartin.github.io/react-spa-seo";
function meta({
  params
}) {
  const data = livingThingsData[(params == null ? void 0 : params.id) - 1];
  const title = `About ${data == null ? void 0 : data.name} #${data == null ? void 0 : data.id.toString().padStart(4, "0")} - Living Things`;
  return [
    // such bad documentation
    {
      title
    },
    {
      property: "og:title",
      content: title
    },
    {
      property: "twitter:title",
      content: title
    },
    {
      property: "twitter:card",
      content: "summary_large_image"
    },
    {
      property: "og:image",
      content: data == null ? void 0 : data.imgUrl
    },
    {
      property: "twitter:image",
      content: data == null ? void 0 : data.imgUrl
    },
    {
      property: "og:site_name",
      content: "Living Things"
    },
    {
      property: "og:locale",
      content: "en_US"
    }
  ];
}
async function loader({
  params
}) {
  return {
    data: livingThingsData[(params == null ? void 0 : params.id) - 1]
  };
}
const Thing = withComponentProps(function Component2({
  loaderData
}) {
  let data = loaderData == null ? void 0 : loaderData.data;
  if (!data) {
    return /* @__PURE__ */ jsx("h1", {
      children: "Thing not found"
    });
  }
  return /* @__PURE__ */ jsxs("div", {
    className: styles.container,
    children: [/* @__PURE__ */ jsx(Link, {
      to: "/",
      children: "<< Back to Home"
    }), /* @__PURE__ */ jsx("div", {
      className: styles.thingContainer,
      children: /* @__PURE__ */ jsxs("div", {
        className: styles.thing,
        children: [/* @__PURE__ */ jsx("div", {
          className: styles.leftSide,
          children: /* @__PURE__ */ jsx("img", {
            src: baseUrl + data.imgUrl,
            alt: data.name
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: styles.rightSide,
          children: [/* @__PURE__ */ jsxs("div", {
            className: styles.header,
            children: [/* @__PURE__ */ jsxs("h2", {
              children: [data == null ? void 0 : data.name, " ", /* @__PURE__ */ jsxs("span", {
                children: ["#", data == null ? void 0 : data.id.toString().padStart(4, "0")]
              })]
            }), /* @__PURE__ */ jsx("p", {
              children: data.description
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: styles.details,
            children: [/* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("p", {
                children: "age:"
              }), /* @__PURE__ */ jsx("p", {
                children: data.age
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("p", {
                children: "species: "
              }), /* @__PURE__ */ jsxs("p", {
                children: [data.species, " ", getSpeciesEmoji(data == null ? void 0 : data.species)]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("p", {
                children: "height:"
              }), /* @__PURE__ */ jsxs("p", {
                children: [Math.floor(data.height / 12), "' ", data.height % 12, '"', " "]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("p", {
                children: "gender:"
              }), /* @__PURE__ */ jsx("p", {
                children: data.gender
              })]
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("h2", {
        children: " Other Things"
      }), /* @__PURE__ */ jsx("div", {
        className: styles.otherThings,
        children: data && livingThingsData.filter(({
          id
        }) => id !== (data == null ? void 0 : data.id)).map((thing2) => {
          return /* @__PURE__ */ createElement(ThingCard, {
            ...thing2,
            key: thing2.id + thing2.name
          });
        })
      })]
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Thing,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function App() {
  return /* @__PURE__ */ jsx(Routes, {});
}
const catchall = withComponentProps(function Component3() {
  return /* @__PURE__ */ jsx(App, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: catchall
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CmTbO3qg.js", "imports": ["/assets/chunk-IR6S3I6Y-RFhWsZu4.js"], "css": ["/assets/entry-BC_o9Yz0.css"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CgG9AbmU.js", "imports": ["/assets/chunk-IR6S3I6Y-RFhWsZu4.js", "/assets/with-props-DhvAWdWR.js"], "css": ["/assets/entry-BC_o9Yz0.css"] }, "screens/Home/Home": { "id": "screens/Home/Home", "parentId": "root", "path": "/", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Home-Cat8rC5r.js", "imports": ["/assets/with-props-DhvAWdWR.js", "/assets/chunk-IR6S3I6Y-RFhWsZu4.js", "/assets/ThingCard-NgYS6FXt.js"], "css": ["/assets/Home-BtWhiDGI.css", "/assets/ThingCard-nCySw4jD.css"] }, "screens/Things/Thing": { "id": "screens/Things/Thing", "parentId": "root", "path": "/about/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Thing-BhQsTh_F.js", "imports": ["/assets/with-props-DhvAWdWR.js", "/assets/chunk-IR6S3I6Y-RFhWsZu4.js", "/assets/ThingCard-NgYS6FXt.js"], "css": ["/assets/Thing-mGHmNKoR.css", "/assets/ThingCard-nCySw4jD.css"] }, "catchall": { "id": "catchall", "parentId": "root", "path": "*?", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/catchall-Cdkn8BPp.js", "imports": ["/assets/with-props-DhvAWdWR.js", "/assets/chunk-IR6S3I6Y-RFhWsZu4.js"], "css": [] } }, "url": "/assets/manifest-35a54a75.js", "version": "35a54a75" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "screens/Home/Home": {
    id: "screens/Home/Home",
    parentId: "root",
    path: "/",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "screens/Things/Thing": {
    id: "screens/Things/Thing",
    parentId: "root",
    path: "/about/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "catchall": {
    id: "catchall",
    parentId: "root",
    path: "*?",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
