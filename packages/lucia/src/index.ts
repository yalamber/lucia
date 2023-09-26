import { Auth } from "./auth/index.js";

export { lucia } from "./auth/index.js";
export { DEFAULT_SESSION_COOKIE_NAME } from "./auth/cookie.js";
export { LuciaError } from "./auth/error.js";
export { createKeyId } from "./auth/database.js";

export type {
	User,
	Key,
	Session,
	Configuration,
	Env,
	Auth
} from "./auth/index.js";
export type {
	Adapter,
	InitializeAdapter,
	UserAdapter,
	SessionAdapter
} from "./auth/adapter.js";
export type { UserSchema, KeySchema, SessionSchema } from "./auth/database.js";
export type {
	RequestContext,
	Middleware,
	AuthRequest
} from "./auth/request.js";
export type { Cookie } from "./auth/cookie.js";
export type { LuciaErrorConstructor } from "./auth/error.js";

export interface Register {}

export type RegisteredAuth = Register extends {
	Auth: Auth;
}
	? Register["Auth"]
	: Auth;

export type DatabaseUserAttributes = Register extends {
	DatabaseUserAttributes: {};
}
	? Register["DatabaseUserAttributes"]
	: {};

export type DatabaseSessionAttributes = Register extends {
	DatabaseSessionAttributes: {};
}
	? Register["DatabaseSessionAttributes"]
	: {};
