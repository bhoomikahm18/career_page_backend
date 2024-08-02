const Job = require("../models/Jobs.js");

module.exports.addJobs = async (req, res) => {
    const { title, discription, skills, location, posted_on } = req.body;

    const jobs = new Job({
        title,
        discription,
        skills,
        location,
        posted_on,
    })

    await jobs.save();

    return res.json({ jobs })

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

module.exports.deleteJobs = async (req, res) => {
    const id = req.params.id;
    console.log(id);

    let jobs;
    try {
        jobs = await Job.findByIdAndDelete(id);
    } catch (err) {
        return console.log(err);
    }
    if (!jobs) {
        return res.status(404).json({ message: "Job Poster Not found" });
    }

    return res.status(200).json({ message: "Deleted Successfully" });
};