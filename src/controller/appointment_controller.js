const createAppointment = (req, res) => {};

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
