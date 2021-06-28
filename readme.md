# Universal Design System

This is a simple design system example and starter project seed.

## Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git aw-component
cd aw-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Naming Components

When creating new component tags, use a prefix that fits your company or any name for a group of related components. In this project, we intent to use the prefix `aw`.

## Using this component

There are three strategies we recommend for using web components built with Stencil.

The first step for all three of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/aw-component@0.0.1/dist/aw-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install aw-component --save`
- Put a script tag similar to this `<script src='node_modules/aw-component/dist/aw-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app

- Run `npm install aw-component --save`
- Add an import to the npm packages `import aw-component;`
- Then you can use the element anywhere in your template, JSX, html etc

<!-- CONTRIBUTING -->
## Contributing

Use [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for development.

Following the [Stencil Style Guide](https://stenciljs.com/docs/style-guide) is strongly recommended.

### Commit conventions

Commit conventions allow team to add more semantic meaning to git history. This e.g. includes type, **scope** or **breaking changes**. With this additional information tools can derive useful human-readable information for releases of project. Some examples are [angular commit rules](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```bash
type(scope?): subject
body?
footer?
```

#### Valid Commits

```bash
git commit -m "docs: add developer docs"
git commit -m "docs(scope or developer.md or package name): add developer docs"

// To close issue
git commit -m "fix(button): fix button target event , closes #JIRANUMBER "
```

### Revert

If the commit reverts a previous commit, it should begin with **revert:**, followed by the header of the reverted commit. In the body it should say: **this reverts commit hash.**, where the hash is the SHA of the commit being reverted.

### Possible types

- **chore**: Change build process, tooling or dependencies.
- **ci**: Changes to our CI configuration files and scripts (example scopes: JenkinsFile, Build)
- **feat**: Adds a new feature.
- **fix**: Solves a bug.
- **docs**: Adds or alters documentation.
- **style**: Improves formatting, white-space.
- **refactor**: Rewrites code without feature, performance or bug changes.
- **perf**: Improves performance.
- **test**: Adds or modifies tests.
- **revert**: Changes that reverting other changes
