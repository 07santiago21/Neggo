import { Schema, model, models } from 'mongoose';

const personaSchema = new Schema ({
    full_name: {
        type: String,
        required: [true, 'el titulo es requrido'],
        trim: true,
    },
    id: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    bussines_exist: {
        type: Boolean,
        required: true,
    },
    bussines_name : {
        type: String,
        required: false,
        trim: true,
    },
    bussines_website : {
        type: String,
        required: false,
        trim: true,
    },  

});

export default models.Persona || model("Persona", personaSchema);