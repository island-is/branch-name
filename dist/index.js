import r from"@actions/core";import o from"node:process";async function i(){try{r.exportVariable("BRANCH_NAME",o.env.GITHUB_REF.split("/").slice(2).join("/"))}catch(e){r.setFailed(e.message)}}i();
