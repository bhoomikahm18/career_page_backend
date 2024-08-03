const { default: mongoose } = require("mongoose");
const Job_Application = require("../models/Application.js");

module.exports.addJobApplication = async (req, res) => {
    const { first_name, last_name, email, phone_number, country_or_region, experience, area_of_interest, about_applicant } = req.body;

    let resume = '';
    if (req.files && req.files.resume) {
        let resumeFile = req.files.resume;
        resume = 'uploads/' + resumeFile.name;
        resumeFile.mv(resume, function (err) {
            if (err) {
                return res.status(500).json({ message: "Resume Not Uploaded" });
            }
        });
    }
    const applicationForm = new Job_Application({
        first_name,
        last_name,
        email,
        phone_number,
        resume: resume,
        country_or_region,
        experience,
        area_of_interest,
        about_applicant,
    })
    try {
        const session = await mongoose.startSession();
        session.startTransaction({ session });
        await applicationForm.save();
        await session.commitTransaction();
        session.endSession();
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: "Duplicate key Error" })
        }
        return res.status(500).json({ message: err })
    }

    return res.status(201).json({ applicationForm })

}