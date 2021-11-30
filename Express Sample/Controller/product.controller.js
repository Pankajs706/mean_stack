const { products } = require("../model/product");
exports.getAllProduct = async (req, res) => {
  try {
    const product = await products.find({ category: req.params.id });
    res.send({
      succes: true,
      message: "success",
      data: product,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const product = await products.findById(req.params.id);
    res.send({
      success: true,
      messqge: "success",
      data: product,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await products.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
      },
      { new: true }
    );

    res.send({
      success: true,
      messqge: "success",
      data: product,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productDeleted = await products.findByIdAndDelete(req.params.id, {
      new: true,
    });

    res.send({
      success: true,
      messqge: "success",
      data: productDeleted,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const productCreated = await products.create({
      // id: req.body.id,
      name: req.body.name,
      color: req.body.color,
      icon: req.body.icon,
      category: req.body.category,
    });
    res.send({
      success: true,
      messqge: "success",
      data: productCreated,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};
