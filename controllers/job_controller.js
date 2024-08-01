const Job = require("../models/Jobs.js");


module.exports.addJobs = async (req, res) => {
    const { title, discription, skills, location, posted_on } = req.body;

    const jobs = new Jobs({
        title,
        discription,
        skills,
        location,
        posted_on
    })

    await jobs.save();

    return res.json({ Job })

}

module.exports.getAllJobs = async (req, res) => {
    let jobs;
    try {
        jobs = await Job.find({});
    } catch (err) {
        return console.log(err);
    }

    if (!jobs) {
        return res.status(404).json({ message: "No Jobs Found" })
    }

    return res.status(200).json({ jobs });
}