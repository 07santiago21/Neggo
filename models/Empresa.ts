import { Schema, model, models } from 'mongoose';

const empresaSchema = new Schema ({
    full_name: {
        type: String,
        required: [true, 'el titulo es requrido'],
        trim: true,
    },
    nit: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    name_contact: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    mail: {
        type: String,
        required: true,
        unique: true,
    } 

});

export default models.Empresa || model("Empresa", empresaSchema);