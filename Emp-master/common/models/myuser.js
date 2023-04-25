/* eslint-disable max-len */
'use strict';

module.exports = function(Myuser) {
    // registering
  Myuser.afterRemote('create', function(context, data, next) {
    console.log(data);
        // console.log("name :"+context.result.__data.Role);
    const userID = data.__data.id;
    Myuser.app.models.Role.findOne({where: {name: data.__data.Role}}, function(err, role) {
      if (err) throw err;
      console.log(role);
      if (role != null && role.__data != null) {
        Myuser.app.models.RoleMapping.create({
          principalType: Myuser.app.models.RoleMapping.USER,
          principalId: userID,
          roleId: role.__data.id,
        }, function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      }
    });
    next();
  });

  Myuser.getAllEmp = (managerID, next) => {
    Myuser.findOne({where: {managerID: managerID}}, (err, result) => {
      if (err) return next(err);
      else if (result != null) {
        Myuser.find({where: {managerID: managerID}}, (err, result) => {
          if (err) return next(err);
          else if (result != null) {
            console.log(result);
            return next(null, result);
          } else {
            return next(err);
          }
        });
      } else {
        return next(err);
      }
    });
  };

  Myuser.remoteMethod('getAllEmp', {
    accepts: [
        {args: 'managerID', type: 'Number'},
    ],
    returns: {args: Myuser, type: 'object'},
    http: {verb: 'get', path: '/getAllEmp'},
  });
};
