const Accounts = require("../accounts/accounts-model");
exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body;
  if (
    name === undefined ||
    budget === undefined ||
    Object.keys(req.body).length === 0
  ) {
    res.status(400).json({ message: "name and budget are required" });
  } else {
    if (typeof name !== "string") {
      res.status(400).json({ message: "name of account must be a string" });
    } else {
      const trimmedName = name.trim();
      if (trimmedName.length < 3 || trimmedName.length > 100) {
        res
          .status(400)
          .json({ message: "name of account must be between 3 and 100" });
      } else if (typeof budget !== "number") {
        res.status(400).json({ message: "budget of account must be a number" });
      } else if (budget < 0 || budget > 1000000) {
        res
          .status(400)
          .json({ message: "budget of account is too large or too small" });
      } else {
        req.body.name = trimmedName;
        next();
      }
    }
  }
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const requestName = req.body.name
  Accounts.getAll().then((accounts) => {
    const nameFound = accounts.find(({ name }) => {
      return name === requestName;
    });
    if (nameFound) {
      res.status(400).json({ message: "name is taken" });
    } else {
      next();
    }
  });
};

exports.checkAccountId = (req, res, next) => {
  const { id } = req.params;
  // DO YOUR MAGIC
  Accounts.getById(id).then((account) => {
    if (!account) {
      res.status(404).json({ message: "account not found" });
    } else {
      req.account = account;
      next();
    }
  });
};
