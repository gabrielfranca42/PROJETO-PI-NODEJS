const db = require('../models');
const Model = db.EstoqueModel;

exports.create = async (req, res) => {
  try { const item = await Model.create(req.body); return res.status(201).json(item); } catch (err) { return res.status(500).json({ error: err.message }); }
};

exports.findAll = async (req, res) => {
  try { const items = await Model.findAll(); return res.json(items); } catch (err) { return res.status(500).json({ error: err.message }); }
};

exports.findOne = async (req, res) => {
  try { const item = await Model.findByPk(req.params.id); if(!item) return res.status(404).json({message:'Not found'}); return res.json(item); } catch (err) { return res.status(500).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try { const item = await Model.findByPk(req.params.id); if(!item) return res.status(404).json({message:'Not found'}); await item.update(req.body); return res.json(item); } catch (err) { return res.status(500).json({ error: err.message }); }
};

exports.remove = async (req, res) => {
  try { const item = await Model.findByPk(req.params.id); if(!item) return res.status(404).json({message:'Not found'}); await item.destroy(); return res.json({message:'Deleted'}); } catch (err) { return res.status(500).json({ error: err.message }); }
};
