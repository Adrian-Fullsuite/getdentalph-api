const createAppointment = (req, res) => {
  const { date_of_appointment, dental_clinic, time_of_appointment } = req.body;
};

const viewAppointment = (req, res) => {
  res.send(req.params.id);
};

const editAppointment = (req, res) => {};

const deleteAppointment = (req, res) => {};

export {
  createAppointment,
  viewAppointment,
  editAppointment,
  deleteAppointment,
};
