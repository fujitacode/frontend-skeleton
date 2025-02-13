import type { Meta, StoryObj } from "@storybook/react";
import Test from "./Test";

const meta: Meta<typeof Test> = {
	title: "Components/Test",
	component: Test,
	tags: ["autodocs"],
	args: {
		label: "Click Me",
	},
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center h-40 bg-gray-100">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Test>;

export const Primary: Story = {
	args: {
		color: "primary",
		label: "Primary Button",
	},
};

export const Secondary: Story = {
	args: {
		color: "secondary",
		label: "Secondary Button",
	},
};
