import express from "express";

/**
 * User router
 */
export default express.Router()
    /**
     * Get users
     */
    .get('', (req, res, next) => {
      res.json([
          {
              name: "user-0"
          },
          {
              name: "user-1"
          }
      ])
    })

    /**
     * Create user
     */
    .post('', (req, res, next) => {

    })
;