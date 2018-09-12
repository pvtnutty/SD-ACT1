module.exports = function(app) {
  const { AppUser, Role } = app.models;
  Role.registerResolver("VIEWER", (role, ctx, cb) => {
    if (ctx.accessToken.userId) {
      validatesUserType(ctx, "VIEWER", ctx.accessToken.userId)
        .then(res => {
          cb(null, res);
        })
        .catch(e => {
          cb(e);
        });
    }
  });

  Role.registerResolver("EDITOR", (role, ctx, cb) => {
    if (ctx.accessToken.userId) {
      validatesUserType(ctx, "EDITOR", ctx.accessToken.userId)
        .then(res => {
          cb(null, res);
        })
        .catch(e => {
          cb(e);
        });
    }
  });

  async function validatesUserType(ctx, role, id) {
    try {
      const appUser = await AppUser.findById(id);
      if (appUser.userType === role) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
};
