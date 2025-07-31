# General Style Guide

## Code Quality Principles

-   **Readability Over Cleverness:** All code should be clear and maintainable.
-   **Functional Where Practical:** Favor pure functions and immutable data structures.
-   **Explicit Error Handling:** Avoid silent failures; handle errors gracefully.

## Database Usage & Prototyping

While our official architectural standard mandates PostgreSQL for production services (see ADR-001), there can be flexibility during the early stages of development.

For rapid prototyping, internal tools, or non-critical features, a team might find a NoSQL solution like **MongoDB** to be a faster way to iterate. This is acceptable for proof-of-concept work but **must not** be used for any production-facing service without a formal ADR exception. Always prioritize the official standard for any code intended for the `main` branch.

## Testing Practices

-   All new logic must be covered by **unit tests with a minimum of 90% coverage**.
-   Pull Requests must include changes to relevant test files. A PR modifying `src/utils.js` should also modify `src/utils.test.js`.
-   End-to-end tests should use real PostgreSQL instances.

## Pull Requests

-   PRs must be under 300 Lines of Code (LOC).
-   The PR title format must be `scope: summary` (e.g., `feat(api): add user endpoint`).

## Anti-Patterns to Avoid

-   Avoid `any` type; use `unknown` or define a specific type.
-   No business logic in controllers; all logic must be in **service classes**.