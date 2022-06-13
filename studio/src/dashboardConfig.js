export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a6ef3c11291e078d755b5b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-bo64sfuq",
                  apiId: "c2eeaab1-81a1-4a40-90c6-43b61eb081aa",
                },
                {
                  buildHookId: "62a6ef3c34343a0f4357aa84",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-tdbknnwc",
                  apiId: "e75a23b3-6e8c-4ac3-8f92-e591f9654efa",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/umerkhans7515/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-tdbknnwc.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
