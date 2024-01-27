# Arcbot Playwright

## Summary

Arcbot Playwright is a robust framework designed for test automation using Playwright. It provides a comprehensive suite of tools and features to streamline the process of automating test scenarios. The framework is structured around four distinct layers: Ignition, Execution, Support, and Result, each serving a unique purpose in the testing lifecycle.

## Overview

The framework operates on a layered architecture, providing a modular approach to test automation. Each layer plays a critical role in the testing process, ensuring a seamless and efficient execution of tests.

The **Ignition Layer** is responsible for initiating the tests and performing any necessary pre-flight checks. The `package.json` file serves as the initializer for executing the tests, containing the necessary scripts and dependencies required to run the tests.

The **Execution Layer** is the core of the framework, orchestrating the execution of all tests. It comprises several key components including Pages, Components, Actions, and Tests, each playing a crucial role in simulating user interactions and validating the application's behavior.

The **Support Layer** houses all the supporting functionality for running tests smoothly. This includes configuration files, base classes for pages, components, and actions, type definitions, utility classes, and data files.

Finally, the **Result Layer** handles the generation of test reports once the tests have finished executing.

### Ignition Layer

The Ignition Layer is the first layer of the framework and is responsible for initiating the tests and performing any necessary pre-flight checks before the tests begin execution.

In this project, the `package.json` file serves as the initializer for executing the tests. This file contains the necessary scripts and dependencies required to run the tests.

### Execution Layer

The Execution Layer is the heart of the framework, responsible for orchestrating the execution of all tests. It comprises several key components, each playing a crucial role in the testing process.

#### Pages

Pages encapsulate the structure and behavior of web pages under test. They store selectors for elements on the page and provide methods to interact with these elements.

#### Components

Components represent reusable parts of the application under test. Like pages, they contain selectors and methods for interacting with specific components on the page.

#### Actions

Actions define the steps that a test will take. They utilize pages and components to simulate user interactions and verify the behavior of the application.

#### Tests

Tests are the actual scenarios that the framework executes. They instantiate pages and components, and use actions to simulate user interactions and validate the application's behavior.

### Support Layer

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

### Result Layer

The Result Layer is responsible for handling the outcome of the test execution. It processes the results of the tests and generates a report detailing the success or failure of each test scenario.

#### Report

Contains the test reports once the tests have finished executing. These reports provide detailed information about each test scenario, including whether it passed or failed, and any relevant logs or error messages.
