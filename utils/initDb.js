const { User, Subject, sequelize } = require('../models');

async function initData() {
    sequelize.sync().then(() => {
        console.log('Synced Db');
    });

    const student = await User.create({
        registration_number: 1,
        password: 'Student@123456',
        role: 'student'
    });

    const admin = await User.create({
        registration_number: 2,
        password: 'Admin@123456',
        role: 'admin'
    });

    const s1 = await Subject.create({
        code: 'SBAA1603',
        name: 'Entrepreneurship'
    });

    const s2 = await Subject.create({
        code: 'SCSA1401',
        name: 'Object Oriented Analysis and System Engineering'
    });

    const s3 = await Subject.create({
        code: 'SCSA1402',
        name: 'Computer'
    });

    console.log(await student.getSubjects());


    await student.addSubject(s1, {
        through: {
            semester_number: 4,
            marks: 89,
            max_marks: 100,
            remark: 'pass',
        }
    });

    await student.addSubject(s2, {
        through: {
            semester_number: 4,
            marks: 78,
            max_marks: 100,
            remark: 'pass',
        }
    });

    await student.addSubject(s3, {
        through: {
            semester_number: 4,
            marks: 78,
            max_marks: 100,
            remark: 'pass',
        }
    });

    console.log(await student.getSubjects())
}

initData();