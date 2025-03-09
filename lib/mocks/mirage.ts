import { Response, createServer } from "miragejs";

export function makeServer() {
	return createServer({
		routes() {
			this.namespace = "api";

			this.get("/data", () => {
				return { message: "Mocked response from MirageJS" };
			});

			this.passthrough();
		},
	});
}
