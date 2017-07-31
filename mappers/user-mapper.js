// TODO: Remake code
//
// const _ = require('lodash');
//
// /**
//  Program mapper
//  /
//  class ProgramMapper {
//     /**
//  * Program to response
//  *
//  * @param program
//  * @returns {{id, title, description, createdAt: (*|String|Boolean), updatedAt: (*|String|Boolean), tags: Array}}
//  */
// static programToResponse(program) {
//     if(!program) return null;
//     return {
//         id: program.id,
//         title: program.title,
//         description: program.description,
//         createdAt: program.createdAt,
//         updatedAt: program.updatedAt,
//         tags: _.map(program.ProgramTags, tag => ({
//             id: _.get(tag, "Tag.id"),
//             name: _.get(tag, "Tag.name")
//         }))
//     };
// }
//
// /**
//  * Programs to response
//  *
//  * @param programs
//  * @returns {Array}
//  */
// static programsToResponse(programs) {
//     return _.map(programs, ProgramMapper.programToResponse);
// }
// }
//
// module.exports = ProgramMapper;