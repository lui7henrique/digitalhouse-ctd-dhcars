import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "."

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: ["red", "green", "gray"]
    }
  }
} as ComponentMeta<typeof Button>

// Template
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// Examples
export const Red = Template.bind({})
Red.args = {
  variant: "red",
  label: "Red button"
}

export const Green = Template.bind({})
Green.args = {
  variant: "green",
  label: "Green button"
}

export const Gray = Template.bind({})
Gray.args = {
  variant: "gray",
  label: "Gray button"
}
