const { default: mongoose } = require("mongoose");
const Job_Application = require("../models/Application.js");

module.exports.addJobApplication = async (req, res) => {
    const { first_name, last_name, email, phone_number,  country_or_region, experience, area_of_interest, about_applicant } = req.body;

    let resume = '';
    if (req.files && req.files.resume) {
        let resumeFile = req.files.resume;
        resume = 'uploads/' + resumeFile.name;
        resumeFile.mv(resume, function (err) {
            if (err) {
                return res.status(500).send(err);
            }
        });
    }
    const applicationForm = new Job_Application({
        first_name,
        last_name,
        email,
        phone_number,
        resume,
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
    } catch (err) {
        return res.json({ message: err })
    }

    return res.json({ applicationForm })

}