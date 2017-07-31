// TODO: Remake code

import _ from "lodash";
import UserMapper from "../mappers/user-mapper";
import db from "../models/index";

/**
 * Get single User by ID
 *
 * @param userId
 */
export const getUser = (userId, callback) => {
    db.findOne({where: {id: userId, guideId: userId}}, (err, user) => {
        if(err) return callback(err);
        callback(null, UserMapper.userToResponse(user));
    });
};

/**
 * Get all Users
 *
 * @param userName
 * @param limit
 * @param offset
 */
export const getUsers = (params, callback) => {
    const search = {title: params.userName || ''};
    db.findAndCountAll({
        search: search,
        limit: params.limit,
        offset: params.offset
    }, (err, users) => {
        if(err) return callback(err);
        callback(null, {
            rows: UserMapper.usersToResponse(users.rows),
            count: users.count
        });
    })
};

export const addUser = (userId, callback) => {

};

export const editUser = (userId, callback) => {

};

export const deleteUser = (userId, callback) => {

};

// /**
//  * Add programs
//  *
//  * @param userId
//  * @param infoForCreate
//  * @param callback
//  */
// static addProgram(userId, infoForCreate, callback) {
//     async.waterfall([
//         (cb) => {
//             DaoFactory.getGuideProgramsDao().create({
//                 guideId: userId,
//                 title: infoForCreate.title,
//                 description: infoForCreate.description
//             }, cb)
//         },
//
//         (program, cb) => {
//             DaoFactory.getProgramTagsDao().createBulk(_.map(infoForCreate.tags, (tag) => ({
//                 TagId: tag,
//                 UserId: userId,
//                 ProgramId: program.id
//             })), (err) => cb(err, program));
//         },
//
//         (program, cb) => {
//             ProgramService.getProgram(userId, program.id, cb);
//         }
//     ], callback)
// }
//
// /**
//  * Edit program
//  *
//  * @param userId
//  * @param programId
//  * @param infoForUpdate
//  * @param callback
//  */
// static editProgram(userId, programId, infoForUpdate, callback) {
//     async.waterfall([
//         (cb) => {
//             DaoFactory.getGuideProgramsDao()
//                 .updateOneByParam(
//                     {where: {id: programId, guideId: userId}},
//                     {title: infoForUpdate.title, description: infoForUpdate.description},
//                     cb)
//         },
//
//         (program, cb) => {
//             if(!program) return callback(null, null);
//             DaoFactory.getProgramTagsDao()
//                 .deleteByParams({where: {ProgramId: program.id}}, (err) => cb(err, program));
//         },
//
//         (program, cb) => {
//             DaoFactory.getProgramTagsDao().createBulk(_.map(infoForUpdate.tags, (tag) => ({
//                 TagId: tag,
//                 UserId: userId,
//                 ProgramId: program.id
//             })), (err) => cb(err, program));
//         },
//
//         (program, cb) => {
//             ProgramService.getProgram(userId, program.id, cb);
//         }
//     ], callback)
// }
//
// /**
//  * Delete program
//  *
//  * @param userId
//  * @param programId
//  * @param callback
//  */
// static deleteProgram(userId, programId, callback) {
//     async.parallel({
//         program: (cb) => DaoFactory.getGuideProgramsDao()
//             .deleteByParams({where: {id: programId, guideId: userId}}, cb),
//         tags: (cb) => DaoFactory.getProgramTagsDao()
//             .deleteByParams({where: {UserId: userId, ProgramId: programId}}, cb)
//     }, callback)
// }
//}