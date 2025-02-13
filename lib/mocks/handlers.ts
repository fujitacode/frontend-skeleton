import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("https://example.com/api/data", () => {
		return HttpResponse.json({ message: "Mocked response" });
	}),
];
