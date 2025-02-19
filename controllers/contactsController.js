// Файл с Контроллерами (логика обработки маршрутов)

const {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateContactStatus,
} = require('../services/contactsService') // Импорт функций для работы с БД

// Получение всех контактов
const getContactsController = async (req, res) => {
  const contacts = await getAllContacts()
  res.status(200).json({ contacts, status: 'success' })
}

// Получение контакта по id
const getContactByIdController = async (req, res) => {
  const contact = await getContactById(req.params.contactId)

  if (!contact) {
    return res.status(404).json({ message: 'Not found' })
  }

  res.status(200).json({ contact, status: 'success' })
}

// Добавление нового контакта
const addContactsController = async (req, res) => {
  const contact = await addContact(req.body)
  res.status(201).json({ contact, status: 'success' })
}

// Обновление контакта
const updateContactController = async (req, res) => {
  const contact = await updateContact(req.params.contactId, req.body)

  if (!contact) {
    return res.status(404).json({ message: 'Not found' })
  }

  res.status(200).json({ contact, status: 'success' })
}

// Обновление статуса контакта
const updateContactStatusController = async (req, res) => {
  const contact = await updateContactStatus(req.params.contactId, req.body)

  if (!contact) {
    return res.status(404).json({ message: 'Not found' })
  }

  res.status(200).json({ contact, status: 'success' })
}

// Удаление контакта
const deleteContactController = async (req, res) => {
  const result = await removeContact(req.params.contactId)

  if (!result) {
    return res.status(404).json({ message: 'Not found' })
  }

  res.status(200).json({ message: 'contact deleted' })
}

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactsController,
  updateContactController,
  updateContactStatusController,
  deleteContactController,
}
