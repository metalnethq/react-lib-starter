# React Lib Starter

This project provides a boilerplate to help you create and publish reusable React components to npm.

## Features

- **Vite**: Fast development and optimized bundling for your component library.
- **Vitest**: Fast testing with Vite.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs.
- **pnpm**: Efficient package management with improved performance and disk space usage.
- **TypeScript**: Static typing for better code quality and maintainability.
- **Commitizen**: Standardized commit messages for better collaboration.
- **GitHub Actions**: Automated Continuous Integration and Deployment.
- **Release Please**: Automated semantic versioning and release management through Pull Requests.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 18.17.0)
- [pnpm](https://pnpm.io/) (>= 8.12.0)

### Note:

1. The consumer of your npm package will need to have TailwindCSS installed in their project.
2. This project supports css modules. So, you can use `*.module.css` files to style your components. To import modules into your components you have to generate types for css modules. To easily generate the typ definitions, you can use [typed-css-modules](https://www.npmjs.com/package/typed-css-modules) package.

## Getting Started

To start using this boilerplate and manually release, follow these steps:

1.  1.  Clone this repository:

    ```
    git clone https://github.com/ByteMeBaby/react-lib-starter.git
    ```

    2.  Or, since this is a [template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template), you can click on the "Use this template" button to [create a new repository from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

2.  Do the necessary changes to the `package.json` file: such as

    - Change the `name` field to your package name.
    - Change the `description` field to your package description.
    - Change the `repository` field to your repository URL.
    - Change the `author` field to your name.
    - Change the `license` field to your license.
    - Change the `keywords` field to your keywords.
    - Change the `homepage` field to your homepage URL.
    - Change the `bugs` field to your repository issues URL.
    - Change the `publishConfig` field to your npm registry URL.

3.  Install dependencies using pnpm:

    ```
    pnpm install
    ```

4.  Start the development server:

    ```
    pnpm dev
    ```

## Auto Releasing with Release Please

This project uses [Release Please](https://github.com/googleapis/release-please) for semantic release. To release a new version of your component library, follow these steps:

### Setting up environment

1. Copy the content of `github` to `.github`.
2. Create a new GitHub token as `GITHUB_TOKEN` with the `repo` scope.
3. In repository settings -> Actions -> General -> workflow permissions, Allow github actions to create and approve pull requests.
4. Create a new NPM token as `NPM_TOKEN` and put it under your repository secrets.
5. You can change the release workflow in `.github/workflows/release.yml` file.

### How to semantically release

This is a [commitizen](https://github.com/commitizen/cz-cli) friendly project. So, you can use `pnpm commit` to commit your changes. It will automatically generate a commit message for you. When you merge your changes into the main branch, Release Please will automatically create a release PR for you, based on the commit messages.

1. Create a new branch for your changes: `git checkout -b feature/your-feature`.
2. Make your changes and commit them using Commitizen: `pnpm commit`.
3. Push your changes to your fork and create a Pull Request.
4. The Release Please GitHub Action will automatically create a release PR when new changes are merged into the main branch.
5. Review the release PR and merge it to create a new release.

## Manually releasing to npm

To manually release a new version of your component library, follow these steps:

1. Build the library for production:

   ```
   pnpm build
   ```

2. Publish the library to npm:
   ```
    pnpm publish
   ```

## Contributing

1. Fork this repository and clone it to your local machine.
2. Install dependencies: `pnpm install`.
3. Create a new branch for your changes: `git checkout -b feature/your-feature`.
4. To ensure all the githooks are instakked run `pnpm husky install`. This should enable Commitizen for `git commit`.
5. Push your changes to your branch and create a Pull Request to `main` branch.

## License

This repository offers its contents without any warranty or guarantee of its accuracy or reliability. Users are advised to use the materials at their own risk.

The project is licensed under MIT License. For a detailed understanding of the terms and conditions, please refer to the [LICENSE](https://github.com/ByteMeBaby/react-lib-starter/blob/main/LICENSE) file within the repository.
