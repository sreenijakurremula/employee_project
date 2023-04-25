/* eslint-disable one-var */
/* eslint-disable max-len */
'use strict';

module.exports = function(Absence) {
  Absence.leaves = (managerId, userId, leaves, reason, next) => {
    Absence.app.models.Myuser.findOne({where: {userID: userId}}, (err, result) => {
      if (err) return next(err);
      else if (result != null) {
        console.log(result);
        if (leaves <= result.sickLeaves || leaves <= result.vacationLeaves) {
          Absence.create({
            userID: result.userID,
            leaves: result.leaves,
            managerID: result.managerID,
          }, (err, createdInstance) => {
            if (err) return next(err);
            return next(null, {response: 'Leave request created successfully', instance: createdInstance});
          });
        }  else {
          const err = {
            message: 'no leaves available',
          };
          return next(err);
        }
      }
    });
  };

  Absence.remoteMethod('leaves', {
    accepts: [
        {arg: 'managerId', type: 'string'},
        {arg: 'userId', type: 'string'},
        {arg: 'leaves', type: 'Number'},
        {arg: 'reason', type: 'string'},
    ],
    returns: {args: Absence, type: 'object'},
    http: {verb: 'post', path: '/requestLeaves'},
  });

         // accepting the request
  Absence.accept = (userID, next) => {
    Absence.findOne({where: {id: userID}}, (err, result) => {
      if (err) return next(err);
      else if (result != null) {
        result.status = 'accepted';
        result.save();
        Absence.app.models.Myuser.findOne({where: {userID: result.userID}}, (err, data) =>{
          let sl;
          let vl;
          if (err)          {
            return next(err);
          } else {
            if (result.reason ==  'sick') {
              sl = data.sickLeaves - result.leaves;
            }                        else if (result.reason == 'vacation') {
              vl = data.vacationLeaves - result.leaves;
            }
            data.sickLeaves = sl;
            data.vacationLeaves = vl;

            data.save();
            Absence.app.models.Myuser.updateAll({userID: data.userID}, {sickLeaves: sl, vacationLeaves: vl}, (err, res) =>{
              if (err) return next(err);
              console.log(res);
            });
          }

              // return next(err);
        });

        return next(null, {response: 'Request accepted successfully', instance: result});
      } else {
        return next(err);
      }
    });
  };

  Absence.remoteMethod('accept', {
    accepts: [
        {arg: 'userID', type: 'string'},
    ],
    returns: {args: Absence, type: 'object'},
    http: {verb: 'post', path: '/acceptRequest'},
  });

        // rejecting the request
  Absence.reject = (userID, next) => {
    Absence.findOne({where: {id: userID}}, (err, result) => {
      if (err) return next(err);
      else if (result != null) {
        result.status = 'rejected';
        result.save();
        return next(null, {response: 'Request rejected successfully', instance: result});
      }
      return next(err);
    });
  };
  Absence.remoteMethod('reject', {
    accepts: [
        {arg: 'userID', type: 'string'},
    ],
    returns: {args: Absence, type: 'object'},
    http: {verb: 'post', path: '/rejectRequest'},
  });

  Absence.getAbsenceRequests = (managerID, next) => {
    Absence.app.models.Myuser.findOne({where: {managerID}}, (err, result) => {
      if (err) return next(err);
      else if (result != null) {
        Absence.find({where: {managerID: managerID}}, (err, result) => {
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

  Absence.remoteMethod('getAbsenceRequests', {
    accepts: [
        {args: 'managerID', type: 'Number'},
    ],
    returns: {args: Absence, type: 'object'},
    http: {verb: 'get', path: '/getAbsenceRequest'},
  });

  // getallabsenceRequests with same userid
  Absence.getUserAbsencebyID = (userID, next) => {
    Absence.find({where: {userID: userID}}, (err, result) =>{
      if (err) {
        return next(err);
      }      else if (result != null) {
        console.log(result);
        return next(null, result);
      }
      return next(err);
    });
  };

  // collecting the common USERID guy with absence model
  Absence.remoteMethod('getUserAbsencebyID', {
    accepts: [
      {args: 'userID', type: 'Number'},
    ],
    returns: {args: Absence, type: 'object'},
    http: {verb: 'get', path: '/getUserAbscencebyID'},
  });

  // get the user Absence under the manager id
  Absence.getUserAbsenceUnderManager = (managerID, next) => {
    Absence.find({where: {managerID: managerID}}, (err, result) =>{
      if (err) {
        return next(err);
      }      else if (result != null) {
        console.log(result);
        return next(null, result);
      }
      return next(err);
    });
  };

  // collecting the common USERID guy with absence model
  Absence.remoteMethod('getUserAbsenceUnderManager', {
    accepts: [
      {args: 'managerID', type: 'Number'},
    ],
    returns: {args: Absence, type: 'object'},
    http: {verb: 'get', path: '/getUserAbsenceUnderManager'},
  });
};
