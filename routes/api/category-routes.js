const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try { 
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try { 
    const categories = await Category.findByPk(req.params.id);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categories = await Category.create(req.body);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err)
  }
});


//Where helps select by id, and req.params.id gets the value.
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categories = await Category.update(req.body, {where:{id:req.params.id}})
    res.status(200).json(categories);
  } catch {
    res.status(500).json(err)
  }
});


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categories = await Category.delete(req.body, {where:{id:req.params.id}})
    res.status(200).json(categories);
  } catch {
    res.status(500),json(err)
  }
});

module.exports = router;
