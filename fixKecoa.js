console.log("---Fixing DbCockroach KnexJS Bug---");
const lineReplace = require("line-replace");
lineReplace({
  file: "node_modules/knex/lib/dialects/postgres/index.js",
  line: 135,
  text: "   return /^PostgreSQL (.*?)( |$)/.exec(versionString);",
  addNewLine: true,
  callback: ({ file, line, text, replacedText, error }) => {},
});
console.log("---DONE---");
