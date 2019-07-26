const mongoose = require('mongoose');
const Institution = require('../models/institution');
const Faculty = require('../models/faculty');
const Department = require('../models/department');
const Level = require('../models/level');
const Calendartype = require('../models/calendartype');
const LecturerOption = require('../models/lectureroption');



exports.CalendarType = function () {
  const typeList = [{
    type: 'Examination',
    icon: '/assets/images/notepad-2.png',
    description: 'Allow multiple invitees to schedule the same slot. Useful for tours, webinars, classes, workshops, etc.'
  }, {
    type: 'Lectures',
    icon: '/assets/images/calendar-5.png',
    description: 'Allow multiple invitees to schedule the same slot. Useful for tours, webinars, classes, workshops, etc.'
  }, {
    type: 'Reading',
    icon: '/assets/images/alarm-clock-1.png',
    description: 'Allow multiple invitees to schedule the same slot. Useful for tours, webinars, classes, workshops, etc.'
  }, {
    type: 'Tests',
    icon: '/assets/images/calendar.png',
    description: 'Allow multiple invitees to schedule the same slot. Useful for tours, webinars, classes, workshops, etc.'
  }, {
    type: 'Special Events',
    icon: '/assets/images/calendar-4.png',
    description: 'Allow multiple invitees to schedule the same slot. Useful for tours, webinars, classes, workshops, etc.'
  }]

  typeList.forEach((element) => {
    const newType = new Calendartype(element);
    newType.save((err, types) => {

    })
  })
}

exports.InstitutionModel = function () {
  const inst = [{
    institution: 'Harvard University',
    abbrev: 'HU'
  }, {
    institution: 'Cambridge University',
    abbrev: 'CU'
  }, {
    institution: 'Federal University of Technology Akure',
    abbrev: 'FUTA'
  }, {
    institution: 'Ghana Univeristy',
    abbrev: 'GU'
  }, {
    institution: 'Univeristy of Ibadan',
    abbrev: 'UI'
  }, {
    institution: 'Massachusset Insitute of Technology',
    abbrev: 'MIT'
  }, {
    institution: 'Northumbria Univeristy',
    abbrev: 'NU'
  }]

  inst.forEach((element) => {
    const newInst = new Institution(element);
    newInst.save((err, res) => {});
  })
}

exports.FacultyModel = function () {
  const fac = [{
    faculty: 'Biotechnology and Informatics'
  }, {
    faculty: 'Engineering'
  }, {
    faculty: 'Cybersecurity'
  }, {
    faculty: 'Computer Science'
  }, {
    faculty: 'Biological Sciences'
  }, {
    faculty: 'Agricultural Technology'
  }, {
    faculty: 'Economics'
  }]

  fac.forEach((element) => {
    const newFac = new Faculty(element);
    newFac.save((err, res) => {});
  })
}

exports.DepartmentModel = function () {
  const dept = [{
    department: 'Electrical Engineering'
  }, {
    department: 'Artificial Intelligence'
  }, {
    department: 'Crop Soil and Pest'
  }, {
    department: 'Agricultural Economics'
  }, {
    department: 'Biology'
  }, {
    department: 'Cryptography'
  }, {
    department: 'Economics'
  }]

  dept.forEach((element) => {
    const newDept = new Department(element);
    newDept.save((err, res) => {});
  })
}

exports.LevelModel = function () {
  const lev = [{
    level: '100 Level'
  }, {
    level: '200 Level'
  }, {
    level: '300 Level'
  }, {
    level: 'Postgraduate'
  }, {
    level: 'Diploma'
  }, {
    level: '400 Level'
  }, {
    level: '500 Level'
  }]
  lev.forEach((element) => {
    const newLev = new Level(element);
    newLev.save((err, res) => {});
  })

}

exports.LecturerOption = function () {
  const typeList = [{
    category: 'Lecturer'
  }, {
    category: 'Assisting Lecturer'
  }, {
    category: 'Panelist'
  }, {
    category: 'Internal Examiners'
  }, {
    category: 'External Examiners'
  }, {
    category: 'Observers'
  }, {
    category: 'Guest Lecturer'
  }]

  typeList.forEach((element) => {
    const category = new LecturerOption(element);
    category.save((err, cat) => {});
  });
}