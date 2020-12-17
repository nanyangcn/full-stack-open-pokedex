# warming up

## Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.

### Language: TypeScript

- linting: TSLint, ESlint
- testing: Jasmine, Jest, Mocha / Chai, Ava, Karma
- building: Browserify, Grunt, Gulp, Webpack

## What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!

CircleCI, GitLab CI/CD

## Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

### CircleCI

It setup better in both self-hosted and cloud-based environment.

For self-hosted environment, it has features:

- Running on own infrastructure
- Full control over maintenance and security
- Full system administrator control for complete customization
- An update cadence that fits your maintenance schedule.

For cloud-based environment, it has features:

- CI/CD orchestration in the cloud
- The option to use self-hosted runners for added flexibility and control
- Instant access to feature releases
- Fast authorization with GitHub or Bitbucket.

### GitLab CI/CD

It setup better in a cloud-based environment.

- Define your CI job environments with immutable Docker container images for consistency and reproducibility
- Utilize our Kubernetes integration to enable features like AutoDevOps, deploy boards, review apps and canary deployments
- Use our cloud deployment templates to easily deploy to cloud container and Kubernetes environments
