const componentConfig = {
  description: "Add front-end page with template",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "📄 Page name:"
    }
  ],
  actions: [
    {
      type: "add",
      path: "../src/pages/{{name}}/index.tsx",
      templateFile: "templates/page/index.txt"
    },
    // {
    //   type: "add",
    //   path: "../src/templates/{{name}}Template/"
    // },
    {
      type: "add",
      path: "../src/templates/{{name}}Template/index.tsx",
      templateFile: "templates/page/template/index.txt"
    },
    {
      type: "add",
      path: "../src/templates/{{name}}Template/styles.ts",
      templateFile: "templates/page/template/styles.txt"
    }
  ]
}

module.exports = (plop) => {
  plop.setGenerator("component", componentConfig)
}
