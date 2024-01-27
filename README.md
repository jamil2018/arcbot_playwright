# Arcbot Playwright

## Summary

Arcbot Playwright is a robust framework designed for test automation using Playwright. It provides a comprehensive suite of tools and features to streamline the process of automating test scenarios. The framework is structured around four distinct layers: Ignition, Execution, Support, and Result, each serving a unique purpose in the testing lifecycle.

## Overview

The framework operates on a layered architecture, providing a modular approach to test automation. Each layer plays a critical role in the testing process, ensuring a seamless and efficient execution of tests.

![Playwright Framework](https://github.com/jamil2018/arcbot_playwright/assets/43118676/9b0fbaf2-873d-41b0-a584-abc1e83404da)

The **Ignition Layer** is responsible for initiating the tests and performing any necessary pre-flight checks. The `package.json` file serves as the initializer for executing the tests, containing the necessary scripts and dependencies required to run the tests.

The **Execution Layer** is the core of the framework, orchestrating the execution of all tests. It comprises several key components including Pages, Components, Actions, and Tests, each playing a crucial role in simulating user interactions and validating the application's behavior.

The **Support Layer** houses all the supporting functionality for running tests smoothly. This includes configuration files, base classes for pages, components, and actions, type definitions, utility classes, and data files.

Finally, the **Result Layer** handles the generation of test reports once the tests have finished executing.

### <u>Ignition Layer</u>

The Ignition Layer is the first layer of the framework and is responsible for initiating the tests and performing any necessary pre-flight checks before the tests begin execution.

In this project, the `package.json` file serves as the initializer for executing the tests. This file contains the necessary scripts and dependencies required to run the tests.

### <u>Execution Layer</u>

The Execution Layer is the heart of the framework, responsible for orchestrating the execution of all tests. It comprises several key components, each playing a crucial role in the testing process.

#### Pages

Pages encapsulate the structure and behavior of web pages under test. They store selectors for elements on the page and provide methods to interact with these elements.

#### Components

Components represent reusable parts of the application under test. Like pages, they contain selectors and methods for interacting with specific components on the page.

#### Actions

Actions define the steps that a test will take. They utilize pages and components to simulate user interactions and verify the behavior of the application.

#### Tests

Tests are the actual scenarios that the framework executes. They instantiate pages and components, and use actions to simulate user interactions and validate the application's behavior.

### <u>Support Layer</u>

All the supporting functionality for running tests smoothly is stored in this layer. This layer is divided into the following sections.

#### Config

Contains the config files for running the tests. These files define the settings and parameters that control how the tests are executed.

#### Core

Contains the base classes for pages, components, and actions. All pages, components, and actions inherit their base classes from here. The core class contains the base definition class for pages, components, and actions. It also contains any methods or properties that may be required for the pages, components, and actions to perform their operation smoothly.

#### Types

Contains the type definitions for the test framework. These types help ensure that the correct data types are used throughout the framework, improving code reliability and maintainability.

#### Utils

Contains the utility classes for running the framework. Currently, it contains utility functions for running CLI commands, cleaning up directories post-test execution, and some miscellaneous helper functions.

#### Data

Contains the data files for running the tests. These files provide the input data that the tests use to validate the application's behavior.

### <u>Result Layer</u>

The Result Layer is responsible for handling the outcome of the test execution. It processes the results of the tests and generates a report detailing the success or failure of each test scenario.

#### Report

Contains the test reports once the tests have finished executing. These reports provide detailed information about each test scenario, including whether it passed or failed, and any relevant logs or error messages.

## Setup

The framework uses Node.js and TypeScript as its primary languages. Ensure that your environment meets the following requirements:

### Required Software

1. Node.js (version: 20.x.x or up)
2. Visual Studio Code (version: 1.85.x or up)
3. WSL 2 with Ubuntu (version: 22.04 or up)
4. Java (version: 21.x or up)

### Required VS Code Extensions

1. Playwright Test for VSCode
2. Prettier - Code formatter
3. GitLens
4. ESLint

## Installation Steps

Follow these steps to set up the project:

1. Clone the repository to your work directory.
2. Open the repository in Visual Studio Code.
3. Open the terminal in VS Code and run the following command: `npm install`
4. After the required packages have been installed, run the following command: `npx playwright install`

## Running Tests

The framework provides scripts for running tests across different browser configurations. Here's how you can execute tests:

- To run tests across all browsers, execute the following command: `npm run test`
- To run tests specifically on Chrome, use the command: `npm run test:chrome`
- To run tests specifically on Firefox, use the command: `npm run test:firefox`
- To run tests specifically on Safari, use the command: `npm run test:safari`

## Using the CLI

The framework provides a Command Line Interface (CLI) to simplify the creation of objects (pages, actions, components, and tests) for developing tests. Here's how you can use the CLI:

- To create a new Page file, run the following command: `npm run create-page <file name> <class name>`. For example: `npm run create-page login.page.ts LoginPage`
- To create a new Component file, run the following command: `npm run create-component <file name> <class name>`. For example: `npm run create-component form.component.ts FormComponent`
- To create a new Action file, run the following command: `npm run create-action <file name> <action class name> <page class name> <page class file>`. For example: `npm run create-action registration.action.ts RegistrationAction RegistrationPage registration.page.ts`
- To create a new Test file, run the following command: `npm run create-test <file name>`. For example: `npm run create-test login.spec.ts`

## Reporting

The framework uses the Allure reporting framework to generate comprehensive HTML reports. The reports folder contains the metadata files needed for generating the reports.

To generate the actual HTML reports, run the following command in the console: `npm run generate-report`

Once the reports are generated, you can view them by running the following command: `npm run show-report`

## Cleanup

The framework creates some metadata files to generate and show reports. In order to clean up those files, we can use the following script: `npm run cleanup-env`.

This will delete all the old metadata files. It is recommended to run a cleanup before each test run to ensure that the reports are accurate and up-to-date.

## CI/CD

(update ongoing)
