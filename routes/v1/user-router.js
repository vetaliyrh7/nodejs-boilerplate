import express from "express";
import { getUsers } from "../../services/user-service";

/**
 * User router
 */
export default express.Router()
    /**
     * Get users
     */
    .get('', (req, res, next) => {
        if (req.query.limit) req.checkQuery('limit', 'Limit is not valid').isInt();
        if (req.query.offset) req.checkQuery('offset', 'Offset is not valid').isInt();

        let errors = req.validationErrors();
        if (errors) return next(new Error("Internal server error"));

        const params = {
            userName: req.query.userName,
            limit: req.query.limit,
            offset: req.query.offset
        };

        getUsers(params, (err, users) => {
            if (err) return next(err);
            res.json({status: "200", users});
        })
    })

    /**
     * Create user
     */
    .post('', (req, res, next) => {

    })
;

// Code below is example for future

// .get('', (req, res, next) => {
//     if (req.query.limit) req.checkQuery('limit', 'Limit is not valid').isInt();
//     if (req.query.offset) req.checkQuery('offset', 'Offset is not valid').isInt();
//
//     let errors = req.validationErrors();
//     if (errors) return next(new BadRequestError(errors));
//
//     const params = {
//         title: req.query.title,
//         limit: req.query.limit,
//         offset: req.query.offset
//     };
//
//     ServiceFactory.getProgramService().getPrograms(req.user.id, params, (err, programs) => {
//         if (err) return next(err);
//         res.json({status: "200", programs});
//     })
// })
//
// /**
//  * Add program
//  */
//     .post('', (req, res, next) => {
//         req.checkBody('title', 'Title is requierd').notEmpty();
//         req.checkBody('description', 'Description is requierd').notEmpty();
//
//         let errors = req.validationErrors();
//         if (errors) return next(new BadRequestError(errors));
//
//         const infoForCreate = {
//             title: req.body.title,
//             description: req.body.description,
//             tags: req.body.tags || []
//         };
//
//         ServiceFactory.getProgramService().addProgram(req.user.id, infoForCreate, (err, program) => {
//             if (err) return next(err);
//             res.json({status: "200", program: program});
//         })
//     })
//
//     /**
//      * Update program
//      */
//     .put('/:id', (req, res, next) => {
//         req.checkParams('id', 'Guide program id is not valid').isInt();
//         req.checkBody('title', 'Title is requierd').notEmpty();
//         req.checkBody('description', 'Description is requierd').notEmpty();
//
//         let errors = req.validationErrors();
//         if (errors) return next(new BadRequestError(errors));
//
//         const infoForUpdate = {
//             title: req.body.title,
//             description: req.body.description,
//             tags: req.body.tags || []
//         };
//
//         ServiceFactory.getProgramService().editProgram(req.user.id, req.params.id, infoForUpdate, (err, program) => {
//             if (err) return next(err);
//             if (!program) return res.status(404).json({status: "404", errors: {msg: "Guide program is not found"}});
//             res.json({status: "200", program: program});
//         })
//     })
//
//     /**
//      * Remove program
//      */
//     .delete('/:id', (req, res, next) => {
//         req.checkParams('id', 'Guide program id is not valid').isInt();
//
//         let errors = req.validationErrors();
//         if (errors) return next(new BadRequestError(errors));
//
//         ServiceFactory.getProgramService().deleteProgram(req.user.id, req.params.id, (err, result) => {
//             if (err) return next(err);
//             if (!result || !result.program) return res.status(404).json({status: "404"});
//             res.json({status: "200"});
//         })
//     })