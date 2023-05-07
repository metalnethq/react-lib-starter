# React Component Library

This project provides a boilerplate to help you create and publish reusable React components to npm. It is built with following tools to ensure an efficient development experience.

## Features

- **Vite**: Fast development and optimized bundling for your component library.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs.
- **pnpm**: Efficient package management with improved performance and disk space usage.
- **TypeScript**: Static typing for better code quality and maintainability.
- **Commitizen**: Standardized commit messages for better collaboration.
- **GitHub Actions**: Automated Continuous Integration and Deployment.
- **Release Please**: Automated semantic versioning and release management through Pull Requests.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 16.0.0)
- [pnpm](https://pnpm.io/) (>= 8.0.0)

## Getting Started

To start using this boilerplate, follow these steps:

1. Clone this repository:

   ```
   git clone https://github.com/yourusername/your-component-library.git
   ```

2. Install dependencies using pnpm:

   ```
   pnpm install
   ```

3. Start the development server:

   ```
   pnpm dev
   ```

To manually release a new version of your component library, follow these steps:

4. Build the library for production:

   ```
   pnpm build
   ```

5. Publish the library to npm:
   ```
    pnpm publish
   ```

## Auto Releasing

This project uses [Release Please](https://github.com/googleapis/release-please) for semantic release. To release a new version of your component library, follow these steps:

### Setting up environment

1. Rename folder `github` to `.github`.
2. Create a new GitHub token as `GITHUB_TOKEN` with the `repo` scope.
3. In repository settings -> Actions -> General -> workflow permissions, Allow github actions to create and approve pull requests.
4. Create a new NPM token as `NPM_TOKEN` and put it under your repository secrets.
5. You can change the release workflow in `.github/workflows/release.yml` file.

### How to semantically release

This is a commitizen friendly project. So, you can use `pnpm commit` to commit your changes. It will automatically generate a commit message for you. When you merge your changes into the main branch, Release Please will automatically create a release PR for you, based on the commit messages.

1. Create a new branch for your changes: `git checkout -b feature/your-feature`.
2. Make your changes and commit them using Commitizen: `pnpm commit`.
3. Push your changes to your fork and create a Pull Request.
4. The Release Please GitHub Action will automatically create a release PR when new changes are merged into the main branch.
5. Review the release PR and merge it to create a new release.

## Contributing

1. Fork this repository and clone it to your local machine.
2. Install dependencies: `pnpm install`.
3. Create a new branch for your changes: `git checkout -b feature/your-feature`.
4. To ensure all the githooks are instakked run `pnpm husky install`. This should enable Commitizen for `git commit`.
5. Push your changes to your branch and create a Pull Request to `main` branch. You can change the branch in `.github/workflows/release.yml` file.

## License

This repository offers its contents without any warranty or guarantee of its accuracy or reliability. Users are advised to use the materials at their own risk.

The project is licensed under MIT License. For a detailed understanding of the terms and conditions, please refer to the [LICENSE](https://github.com/ByteMeBaby/react-lib-starter/blob/main/LICENSE) file within the repository.
