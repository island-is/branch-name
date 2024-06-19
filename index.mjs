import core from "@actions/core";
import process from "node:process";

async function run() {
  try {
    core.exportVariable(
      "BRANCH_NAME",
      process.env.GITHUB_REF.split("/").slice(2).join("/"),
    );
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
