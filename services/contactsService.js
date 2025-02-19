const Contact = require('../schemas/contacts')

// Получает все контакты
const getAllContacts = async () => {
  const contacts = await Contact.find()
  return contacts
}

// Находит контакт по id
const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId)
  return contact
}

// Создает новый контакт
const addContact = async ({ name, email, phone, favorite }) => {
  const newContact = await Contact.create({ name, email, phone, favorite })
  return newContact
}

// Обновляет контакт
const updateContact = async (contactId, body) => {
  const updatedContact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  })
  return updatedContact
}

// Обновляет статус контакт
const updateContactStatus = async (contactId, { favorite }) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  )
  return updatedContact
}

// Удаляет контакт
const removeContact = async (contactId) => {
  const contact = await Contact.findByIdAndRemove(contactId)
  return contact
}

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  updateContactStatus,
  removeContact,
}
