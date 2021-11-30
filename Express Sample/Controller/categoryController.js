const { categories } = require("../model/categories");
exports.getAllCategory = async (req, res) => {
  try {
    const category = await categories.find({});
    //  console.log(result);
    // res.send("Category get route has been hit");
    // res.send({message:"Sucess",data:{name:"Pankaj",age:21}}).status(200);
    res.send({
      succes: true,
      message: "success",
      data: category,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};

exports.getOneCategory = async (req, res) => {
  try {
    // const id=req.params.id;

    //  consolre.log(`ID is ${id}`)
    const category = await categories.findById(req.params.id);
    res.send({
      success: true,
      message: "success",
      data: category,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await categories.findByIdAndUpdate(
      req.params.id,
      {
        // name:'TV',
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
      },
      { new: true }
    );

    res.send({
      success: true,
      message: "success",
      data: category,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const categoryDeleted = await categories.findByIdAndDelete(
      req.params.id,
      // name:'TV',
      // name:req.body.name,
      { new: true }
    );

    res.send({
      success: true,
      message: "success",
      data: categoryDeleted,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const categoryCreated = await categories.create({
      name: req.body.name,
      color: req.body.color,
      icon: req.body.icon,
    });
    res.send({
      success: true,
      message: "success",
      data: categoryCreated,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
      data: null,
    });
  }
};
