import {combineReducers} from "redux"; //для соединения всех редьюсеров в один

import todos from "./todos"; //импортим отдельный редьюсер
import cards from "./cards"; //импортим отдельный редьюсер

export default combineReducers({ //передаем что хотим скомбайнить
	todos,
	cards
})