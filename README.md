# Philosopher's API

A simple command-line tool for exploring the philosophical perspectives of Thucydides, Nietzsche, and Foucault on various topics. This project provides an interactive way to compare how these influential thinkers approached fundamental concepts like freedom, power, truth, and more.

## Overview

This project consists of:

- philosopher.js: A database of philosophical perspectives organized by thinker and topic
  ask.js: A command-line interface for querying these perspectives

- The tool detects topics in your questions and returns the relevant philosophical viewpoints from all three thinkers, allowing for easy comparison and exploration.

## Technologies Used

- Node.js: The runtime environment
- JavaScript: Core programming language
- readline: For interactive command-line interface

No external dependencies or installations are required beyond Node.js itself.

## Features

- Instant access to philosophical perspectives on key topics
- Compare multiple philosophers' views side-by-side
- Use in interactive mode or with direct command-line queries
- Rich, detailed explanations with references to major works
- Historical context and connections to contemporary thought

## Getting Started

### Prerequisites

Node.js installed on your system

## Installation

- Clone this repository or download the files
- Ensure both philosopher.js and ask.js are in the same directory
- Make ask.js executable (on Unix-based systems):
- chmod +x ask.js

## Usage

### Option 1:

Direct Query
Ask a philosophical question directly from the command line:

```bash
node ask.js What is the nature of power?
```

```bash
node ask.js How does view morality?
```

The tool will detect the relevant topic(s) in your question and display the philosophical perspectives.

### Option 2:

Interactive Mode
Start an interactive session:

```bash
node ask.js
```

This will launch the interactive prompt where you can ask multiple questions in sequence. Type exit to quit the session.
