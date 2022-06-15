module.exports = function () {
  return {
    name: "monitoring-plugin",
    async loadContent() {
      console.log("cnfig was changed , run tests");
    },
  };
};
