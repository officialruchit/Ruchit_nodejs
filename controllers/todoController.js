const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;

  try {
    const todo = new Todo({
      user: req.user.id,
      title,
      description,
    });

    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTodos = async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  const query = {
    user: req.user.id,
    title: { $regex: search, $options: "i" },
  };

  try {
    const todos = await Todo.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Todo.countDocuments(query);

    res.json({
      todos,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user.id });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateTodo = async (req, res) => {
  const { title, description, isFavorite } = req.body;

  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { title, description, isFavorite },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
