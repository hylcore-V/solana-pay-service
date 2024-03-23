function createUrl(
    host: string,
    port: string | number | null,
    username: string | null,
    password: string | null,
    defaultAuthDb: string | null,
    options: object | null,
): string {
    let mongoUrl = "mongodb://"

    if (!typeof(username) == null && !typeof(password) == null) {
        mongoUrl += `${username}:${password}@`
    }

    mongoUrl += host

    if (!typeof(port) == null) {
        mongoUrl += `:${port?.toString()}`
    }

    if (!typeof(defaultAuthDb) == null) {
        mongoUrl += `/${defaultAuthDb}`
    }

    if (!typeof(options) == null) {
        mongoUrl += `/${options}`
    }

    return `${mongoUrl}/`
}