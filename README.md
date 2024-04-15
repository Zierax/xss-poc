Description:

This Proof-of-Concept (PoC) showcases a basic XSS attack scenario. It includes the following functionalities:
Data Exfiltration: Extracts and logs cookies, local storage data, and DOM content to the console.
Fake Login Page Injection: Replaces the current webpage content with a fake login form.
Credential Harvesting: Captures and logs submitted usernames and passwords from the fake form.


Technical Details:

The code is written in TypeScript and utilizes DOM manipulation techniques to achieve its goals. It demonstrates how an attacker can inject malicious scripts to steal sensitive user information.


Protection Measures:

Input Sanitization: Always sanitize user input to prevent malicious scripts from being injected.


Output Encoding:
Encode any user-supplied data before displaying it on a web page to ensure it is treated as data and not executable code.
Content Security Policy (CSP): Implement a CSP to restrict the sources from which scripts can be loaded and executed on your website.
X-XSS-Protection Header: Enable the X-XSS-Protection header to leverage the browser's built-in XSS filtering capabilities.


Educational Value:

This PoC serves as a learning tool to understand the mechanics of XSS attacks and the importance of implementing security measures to protect against them.


Usage:

Save the provided TypeScript code as a .ts file.
Compile the TypeScript code into JavaScript using a TypeScript compiler.
The resulting JavaScript code can be injected into a vulnerable website to demonstrate the XSS vulnerability. Do not use it on any website without permission.
