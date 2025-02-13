import { server } from "@/lib/mocks/server";

export function register() {
	server.listen({
		onUnhandledRequest: "warn",
	});
}

export function unregister() {
	server.close();
}
