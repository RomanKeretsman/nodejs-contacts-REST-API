const express = require('express')
const router = express.Router()

const {
  getContactsController,
  getContactByIdController,
  addContactsController,
  updateContactController,
  updateContactStatusController,
  deleteContactController,
} = require('../../controllers/contactsController') // Подключениу контроллеров маршрутов

const {
  addContactValidation,
  updateContactValidation,
  updateContactStatusValidation,
  idValidation,
} = require('../../middlewares/validation') // Подключение валидации

const { asyncWrapper } = require('../../helpers/asyncWrapper') // Подключение мидлвары универсального обработчика try catch

// GET запросы
router.get('/', asyncWrapper(getContactsController)) // Роут для получения списка всех контактов
router.get('/:contactId', idValidation, asyncWrapper(getContactByIdController)) // Роут для получения контакта по id

// POST запросы
router.post('/', addContactValidation, asyncWrapper(addContactsController)) // Роут для создания контакта

// PATCH запросы
router.patch('/:contactId', idValidation, updateContactValidation, asyncWrapper(updateContactController)) // Роут для обновления контакта по id
router.patch('/:contactId/favorite', idValidation, updateContactStatusValidation, asyncWrapper(updateContactStatusController)) // Роут для обновления статуса

// DELETE запросы
router.delete('/:contactId', idValidation, asyncWrapper(deleteContactController)) // Роут для удаления контакта

module.exports = router
