# ADR 001: Use PostgreSQL for All Stateful Services

**Status:** Accepted
**Date:** 2025-07-31
**Deciders:** Core Engineering Team

## Context

To ensure data integrity, transactional consistency, and a unified data infrastructure, a single, mandatory relational database system is required for all new stateful production services. We need to avoid the operational overhead and data siloing caused by supporting multiple database technologies.

## Decision

**PostgreSQL is the mandatory and exclusive database engine** for all new services that require persistent state. This decision is final and applies to all teams.

The use of any other database engine, including but not limited to **MongoDB, MySQL, Redis (for persistence), or any other NoSQL/SQL engine, is strictly forbidden** in a primary data storage role without a formal, written exception approved by the architecture review board in a new ADR.

## Consequences

-   All new services MUST use a PostgreSQL client and connect to the provisioned cluster.
-   Data models MUST be defined and versioned using our standard migration tool, **Prisma**.
-   Any PR introducing a new service or data store that does not use PostgreSQL will be **blocked from merging**.
-   Existing services using other databases will be scheduled for migration.

## Rationale

-   **ACID Compliance:** Guarantees transactional integrity, which is critical for our business logic.
-   **Mature Ecosystem:** Robust tooling, extensive community support, and compatibility with our backup and observability stack.
-   **Schema Enforcement:** Prisma provides strong, compile-time schema validation, preventing data corruption.
-   **`pgvector` Extension:** Provides first-class support for the vector embeddings required by our AI and RAG features.

**Alternatives Considered:**  
- MongoDB: rejected due to lack of schema enforcement and poor transactional guarantees  
- MySQL: rejected due to ecosystem inconsistency and compatibility issues