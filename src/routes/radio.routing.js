import express from 'express';
import radioController from '../controllers/radioController';
const router = express.Router();

//Stores radio profiles
router.post('/:id', (req, res, next) => {

    const radio = {
        id: req.params.id,
        alias: req.body.alias,
        allowed_locations: req.body.allowed_locations
    }
    radioController.createRadio(radio).then(() => {
        return res.sendStatus(200).end();
    }).catch(next);
})

//set a location of a radio if that location is allowed in allowed location array
router.post('/:id/location', (req, res, next) => {

    radioController.findOneRadio(req.params.id).then((radio) => {

        if (radio.allowed_locations.indexOf(req.body.location) === -1) {
            return res.sendStatus(403).end();
        }
        radioController.updateRadio(req.params.id, req.body.location).then(() => {
            return res.sendStatus(200).end();
        }).catch(next);

    }).catch(next);

});

//tetrival radio's location
router.get('/:id/location', (req, res, next) => {

    radioController.findOneRadio(req.params.id).then((radio) => {
        if (radio === null || radio.location === undefined) {
            return res.sendStatus(404);
        }
        return res.status(200).send({ location: radio.location });
    }).catch(next);
})

export default router;