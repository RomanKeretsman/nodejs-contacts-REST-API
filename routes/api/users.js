const express = require('express')
const router = express.Router()

const {
  regController,
  loginController,
  logoutController,
  currentUserController,
  subscriptionController,
} = require('../../controllers/usersController') // Подключениу контроллеров маршрутов

const {
  regLogValidation,
  subscriptionValidation,
} = require('../../middlewares/userValidation') // Подключение валидации

const { asyncWrapper } = require('../../helpers/asyncWrapper') // Мидлвар универсального обработчика try catch
const { protect } = require('../../middlewares/protect') // Мидлвар протекции роутов

// GET запросы
router.get('/current', protect, asyncWrapper(currentUserController)) // Роут для текущего юзера

// POST запросы
router.post('/signup', regLogValidation, asyncWrapper(regController)) // Роут для регистрации юзера
router.post('/login', regLogValidation, asyncWrapper(loginController)) // Роут для входа юзера
router.post('/logout', protect, asyncWrapper(logoutController)) // Роут для выхода юзера

// PATCH запросы
router.patch('/subscription', protect, subscriptionValidation, asyncWrapper(subscriptionController)) // Роут для обновления вида подписки

module.exports = router
