import type { Preview } from "@storybook/react";
import { makeServer } from "../lib/mocks/mirage";
import "../app/globals.scss";

// MirageJS を Storybook でも適用
makeServer();

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
