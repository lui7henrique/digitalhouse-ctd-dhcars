const componentConfig = {
  description: "Add front-end context",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "🌎 Context name:"
    }
  ],
  actions: [
    {
      type: "add",
      path: "../src/context/{{name}}Context/index.tsx",
      templateFile: "templates/context/index.txt"
    },
    {
      type: "add",
      path: "../src/context/{{name}}Context/types.ts",
      templateFile: "templates/context/types.txt"
    }
  ]
}

module.exports = (plop) => {
  plop.setGenerator("component", componentConfig)
}
