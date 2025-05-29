# Auno

A sophisticated Windows desktop application for AI interactions, providing a clean and modern interface for engaging with large language models.

## Features

- Clean, modern UI inspired by Google's Gemini
- Real-time chat interface with markdown support
- Code syntax highlighting
- Dark/Light theme support
- Secure API key management
- Chat history management
- Responsive design

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Windows 10/11

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/auno.git
cd auno
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the application in development mode:

```bash
npm run dev
```

This will start the application with hot-reloading enabled.

## Building

To create a production build:

```bash
npm run make
```

This will create a distributable package in the `out` directory.

## Project Structure

```
auno/
├── src/
│   ├── main/           # Electron main process
│   └── renderer/       # React application
│       ├── components/ # React components
│       └── index.tsx   # React entry point
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## API Integration

The application is designed to work with any LLM API that supports streaming responses. Currently, it's set up to work with the Google Gemini API, but can be easily adapted for other providers.

To use the application:

1. Obtain an API key from your preferred LLM provider
2. Open the settings panel (gear icon)
3. Enter your API key
4. Start chatting!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 