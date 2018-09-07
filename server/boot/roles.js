module.exports = function(app) {
  const { Role } = app.models;
  Role.registerResolver("viewer", (role, ctx, cb) => {});
};
