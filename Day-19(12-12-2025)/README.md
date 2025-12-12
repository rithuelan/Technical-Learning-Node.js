
## 1. Authentication

Authentication verifies who the user is.
Common methods include username/password, tokens, sessions, and OAuth logins.

## 2. Password Hashing (bcrypt, argon2)

Storing raw passwords is dangerous.
Hashing transforms a password into an irreversible string, making it unreadable even if the database is leaked.

bcrypt – widely used, slow-by-design to resist brute force

argon2 – modern, more secure, winner of Password Hashing Competition

Key idea:
Hash passwords → store only the hash → verify by comparing hash outputs.

## 3. JWT Tokens

JWT (JSON Web Token) is a compact token used for stateless authentication.
The server does not store sessions — all user info is inside the token.

Workflow:

User logs in

Server creates a signed token

Client stores it (usually in cookies or localStorage)

Every request includes the token

Server verifies signature to authenticate user

Used heavily in APIs and mobile apps.

## 4. Session-Based Authentication

The traditional web method.
The server stores a session in memory/database, and the client receives a cookie pointing to that session.

Workflow:

User logs in

Server creates a session (e.g., userId)

Browser stores a cookie with session ID

Every request automatically includes that cookie

Server verifies the session

Good for traditional websites, dashboards, and forms.

## 5. Cookie Management

Cookies store small pieces of data in the browser.

Important types:

Session cookies – temporary

Persistent cookies – stored until removed

Secure cookies – sent only over HTTPS

HttpOnly cookies – protected from JavaScript (helps prevent XSS attacks)

Cookies are often used to store session IDs or JWTs.

## 6. OAuth 2.0 Basics

OAuth 2.0 allows users to authenticate using another provider (Google, GitHub, Facebook).

Example:
Instead of creating a new password, the user chooses “Login with Google”.

OAuth flow includes:

Authorization Request

Authorization Code

Token Exchange

User profile retrieval

Useful when you don’t want your app to handle passwords.

## 7. Third-Party Login (Google, GitHub)

These are real implementations of OAuth 2.0.
Your app redirects the user to Google/GitHub → user approves → provider returns user profile → your app logs them in.

Benefits:

Faster user onboarding

No need to manage passwords

More secure

Common in modern apps.

## 8. Security Best Practices

Core protection guidelines such as:

Never store plain passwords

Always validate input

Sanitize user content

Use HTTPS

Use proper headers

Implement rate limiting

Protect tokens and cookies

Keep libraries updated

Security is a continuous process.

## 9. CORS Configuration

CORS controls which domains are allowed to access your API.
Without proper CORS rules, anyone could try to interact with your API from anywhere.

Used to prevent unwanted cross-domain access.

## 10. Helmet.js for Security Headers

Helmet sets HTTP headers that protect against:

Clickjacking

XSS

MIME sniffing

Insecure caching

It adds a layer of security with almost no effort.

## 11. Input Validation and Sanitization

Validation ensures data format is correct.
Sanitization removes dangerous characters to prevent attacks.

Example:
Make sure email looks like an email and remove script tags from user input.

Prevents bugs and many security vulnerabilities.

## 12. SQL Injection Prevention

SQL Injection happens when user input is treated as SQL code.
Attackers can manipulate queries and steal or destroy data.

Prevention:

Use prepared statements

Never insert raw user input into a query

Validate and sanitize input

Even though MongoDB is NoSQL, similar injection risks still apply.

## 13. XSS Protection

XSS occurs when attackers insert malicious <script> code into a website.

Example:
User posts a comment that runs JavaScript on another user’s browser.

Prevention:

Sanitize user input

Use HttpOnly cookies

Escape HTML

Use security headers

XSS is one of the most common and dangerous attacks.

## 14. Rate Limiting

Rate limiting restricts how many requests a user can make per minute.

Prevents:

Brute force attacks

API abuse

Server overload

Example: limit login attempts to reduce password guessing.

## 15. HTTPS and SSL/TLS

HTTPS encrypts all data transmitted between client and server.

SSL/TLS ensures:

Data privacy

Data integrity

Authentication of server identity

Modern apps must always use HTTPS, especially when handling authentication.

## Practice Project: Add Authentication System to Your API

A complete practice project should combine everything:

✔ User registration/login
✔ Password hashing
✔ JWT authentication
✔ Session-based authentication (optional)
✔ Cookie security
✔ Input validation
✔ OAuth (Google/GitHub) login
✔ Rate limiting
✔ Helmet + CORS
✔ XSS and injection protection
✔ HTTPS support
✔ Secure folder structure

This project gives practical experience building a real-world secure authentication system.
