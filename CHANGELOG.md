\# Changelog



All notable changes to this project will be documented in this file.



The format is based on \[Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

and this project adheres to \[Semantic Versioning](https://semver.org/spec/v2.0.0.html).



\## \[1.3.0] - 2025-07-22

\### Added

\- Feature: Added support for multi-language input and output.

\- UI: Introduced dark mode toggle in user settings.

\- API: `/v1/insights/export` endpoint for exporting analytics.



\### Changed

\- Refactored database schema for faster joins in reporting modules.

\- Upgraded `express` to version 5.0.0 and `prisma` to 5.4.1.



\### Fixed

\- Resolved bug where JWT tokens expired prematurely after refresh.

\- Fixed crash on invalid email inputs during signup.



---



\## \[1.2.0] - 2025-06-01

\### Added

\- Introduced user referral tracking system with unique codes.

\- Added webhook listener for Stripe events.



\### Changed

\- Replaced nodemailer with Resend for transactional emails.

\- Improved input validation across all auth routes.



\### Fixed

\- Incorrect timezone handling in scheduler.

\- Pagination offset errors in the `/users` list endpoint.



---



\## \[1.1.0] - 2025-05-10

\### Added

\- Added rate limiter middleware using Redis.

\- Implemented first version of the background job queue using BullMQ.



\### Changed

\- Standardized API error responses to include `code`, `message`.



\### Removed

\- Deprecated `/v1/users/delete` endpoint.



---



\## \[1.0.0] - 2025-04-01

\### Added

\- Initial project release.

\- User registration, login, and email verification via OTP.

\- Admin dashboard routes and basic analytics.

\- CI/CD setup with GitHub Actions.

\- Dockerfile and docker-compose for local development.





