1. Create a sample Node.js project
mkdir semver-demo
cd semver-demo
npm init -y

2. Install a package (example: lodash)
npm install lodash@4.17.21

3. Change the version in package.json

To use tilde ~:

"dependencies": {
  "lodash": "~4.17.21"
}


To use exact version:

"dependencies": {
  "lodash": "4.17.21"
}

4. Update packages to see SemVer in action
4a. Check outdated packages:
npm outdated

4b. Update packages

Update minor/patch versions allowed by SemVer:

npm update


Update all packages to latest, ignoring SemVer:

npx npm-check-updates -u
npm install

5. Verify the exact version installed
npm list lodash

