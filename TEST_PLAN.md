Test Plan – QuickQuote3D



1\. Introduction



QuickQuote3D is a web-based 3D floor planner and cost estimation tool. This document outlines the testing strategy, scope, approach, and deliverables for QA activities performed on the application.



2\. Objectives





Verify core functionality of the 3D floor planner

Validate accuracy of cost estimation logic

Ensure authentication and data persistence work reliably

Identify and document defects before they reach production





3\. Scope



In Scope





User authentication (sign up, login, logout) via Supabase

3D floor plan creation, editing, and deletion

Wall/room placement and resizing interactions

Cost estimation calculation based on floor plan inputs

Data persistence (saving/loading floor plans)

Responsive behavior across major browsers (Chrome, Edge, Firefox)





Out of Scope





Third-party library internals (Three.js rendering engine internals)

Load/performance testing beyond basic sanity checks

Mobile native app testing (web only)





4\. Test Approach



TypeMethodToolsFunctional TestingManualTest case checklistRegression TestingManual + AutomatedCypressAPI TestingManual + AutomatedPostmanUI/Cross-browser TestingManualChrome, Edge, FirefoxAutomation (E2E)AutomatedCypress (Page Object Model)



5\. Test Environment





Application URL: \[quick-quote-3d.vercel.app]

Browsers: Chrome (latest), Edge (latest), Firefox (latest)

OS: Windows 10/11

Backend: Supabase (Auth + DB)

Test Data: Dedicated test accounts (not production data)





6\. Test Techniques Used





Equivalence Partitioning (EP) – for input fields (e.g. room dimensions)

Boundary Value Analysis (BVA) – for min/max floor plan size, cost ranges

State Transition Testing – for floor plan states (draft → saved → exported)

Decision Table Testing – for cost estimation rules with multiple input combinations





7\. Entry Criteria





Application build deployed and accessible

Test environment and accounts ready

Test cases reviewed and finalized





8\. Exit Criteria





All planned test cases executed

No open Critical/High severity defects

Test summary report shared





9\. Deliverables





Test Plan (this document)

Test Cases (/test-cases/functional-test-cases.xlsx)

Automated test scripts (/cypress)

API test collection (/postman)

Test Summary Report





10\. Risks \& Assumptions





Risk: 3D rendering behavior may vary slightly across GPUs/browsers

Risk: Supabase rate limits could affect repeated automated test runs

Assumption: Test environment mirrors production closely enough for valid results





11\. Tools Used





Cypress – E2E automation

Postman – API testing

Jira-style tracking (GitHub Issues) – defect logging

Excel/Google Sheets – manual test case management

