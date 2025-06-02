# git-actions

---

## ✅ Acceptance Criteria

- GIVEN a full-stack application  
  - WHEN I upload new features to the application  
    - THEN I should be making Pull Requests to a `develop` branch first  
  - WHEN I create a Pull Request to the `develop` branch  
    - THEN a GitHub Action should run Cypress component tests  
  - WHEN I see that the tests pass on GitHub Actions  
    - THEN I can merge the code into `develop`  
  - WHEN I push (merge) code from `develop` to `main`  
    - THEN another GitHub Action should deploy the app to **Render**

---

## ⚙️ GitHub Actions Setup

### 1. ✅ Run Tests on PR to `develop`

A workflow runs Cypress component tests when a pull request is created or updated on the `develop` branch.

#### Example workflow: `.github/workflows/test.yml`

```yaml
name: Run Cypress Tests

on:
  pull_request:
    branches: [ develop ]

jobs:
  cypress-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Run Cypress component tests
        run: npx cypress run --component


## how to reach me:

🔗 **GitHub Repository**: [lexusnealy/git-actions](https://github.com/lexusnealy/git-actions)