const express = require('express');
const User = require('../Models/User');

exports.createUser = async(req,res) =>{
  try{
    const {name, cpf, email, birthdate,phone } = req.body;
    const usuario = new User({name, cpf, email, birthdate, phone});

    await usuario.save()
    res.status(201).json('Usuario criado');

  }catch(error){
    res.status(400).json({message: error.message});
  }
}
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message }); // internal server
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' }); //not found
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' }); //not found 
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message }); // internal server 
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuário excluído' }); //200 -ok 
  } catch (error) {
    res.status(500).json({ error: error.message }); // internal server 
  }
};
