# `uci-ite-wph`

A Next.js-based frontend for UC Irvine's Institute of Transportation Engineers (ITE at UCI) student chapter website, which uses WordPress as a CMS.

## Dependency updates
*Dependencies* are supporting software for the website’s code. Over time, they get outdated or have security holes, requiring updates. Updating them requires a terminal and basic knowledge of Git.

## Updating via Dependabot (recommended)
GitHub's Dependabot automates dependency version management and makes it easy for nontechnical people to keep the website running without much hassle.

Visit the repository's issue list [here](https://github.com/iteatuci/uci-ite-wph/security/dependabot). View GitHub's article on updating dependencies via Dependabot [here](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configuring-dependabot-security-updates).

## Manual updates
Note: If you are not comfortable with a command line, avoid attempting this by yourself. Ask someone with technical expertise (e.g., your nearest CS student) for help. A botched update can potentially bring down the site (temporarily).

If you have not already, install the latest version of [NodeJS](https://nodejs.org) and [git](https://git-scm.com) on your system.

Minor updates fix source code for security and performance issues without changing how the site functions. These should be performed every year or two.

1. Clone the repository: Download the code from GitHub to your computer.
2. Open your terminal: Navigate to the folder in your terminal.
3. Run safe updates: Type the following command and hit enter:
`npm update`
4. Test locally: Run `npm run dev` to see if the website still works on your computer.
5. Save/push changes: If it works, commit and push the changes back to GitHub. Vercel will automatically update the live site.

Major updates may introduce breaking changes that can potentially stop the website from working. Consulting a computer science student is recommended.