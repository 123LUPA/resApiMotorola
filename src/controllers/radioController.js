import RadioModel from '../modals/radioModal';

class RadioController {

    constructor() { }

    createRadio(radio) {
        const radioObj = new RadioModel(radio);
        return radioObj.save();
    }

    findOneRadio(id) {
        return RadioModel.findOne({ id: id });
    }

    updateRadio(id, location) {
        return RadioModel.updateOne({ id: id }, { $set: { location: location } });
    }
}

const radioController = new RadioController();
export default radioController;
