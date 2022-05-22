const componentConfig = {
  description: "Add front-end component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "⚛️  Component name:"
    }
  ],
  actions: [
    {
      type: "add",
      path: "../src/components/{{name}}/index.tsx",
      templateFile: "templates/component/index.txt"
    },
    {
      type: "add",
      path: "../src/components/{{name}}/styles.ts",
      templateFile: "templates/component/styles.txt"
    }
  ]
}

module.exports = (plop) => {
  plop.setGenerator("component", componentConfig)
}
