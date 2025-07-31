# Review Guardian E2E Test Repo

## Purpose

This repository is the primary end-to-end (E2E) testing ground for the **Review Guardian** GitHub App.

Review Guardian is an automated system that enforces our team's engineering standards. It uses a combination of deterministic rules and advanced, context-aware **AI evaluations** to review pull requests. The AI's knowledge is augmented by a **RAG pipeline** that ingests our internal documentation, including our Architectural Decision Records (ADRs) and style guides.

## Key Features Under Test

-   **AI-Powered Reviews:** Validating the quality and accuracy of AI-generated feedback. This includes testing for prompt safety and RAG poisoning.
-   **GitHub Integration:** Ensuring correct handling of webhooks (`pull_request`, `check_suite`, etc.) and proper use of the Checks API.
-   **Rule Engine:** Testing custom rules like "require-changelog" and "banned-terms".
-   **Asynchronous Pipeline:** Validating the BullMQ queue for job processing.
-   **Database Operations:** The system uses a PostgreSQL database with Prisma for all data persistence.

## How to Contribute

All changes must follow the guidelines in `docs/guides/general-style.md` and respect the decisions in the `docs/adr/` directory.