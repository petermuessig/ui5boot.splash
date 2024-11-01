sap.ui.define(['exports'], (function (exports) { 'use strict';

	var ICON_ACTION_SETTINGS = "Настройки";
	var ICON_ACTIVATE = "Активировать";
	var ICON_ADD = "Добавить";
	var ICON_ADD_CONTACT = "Добавить контактное лицо";
	var ICON_ADD_FILTER = "Добавить фильтр";
	var ICON_ADD_PHOTO = "Добавить фотографию";
	var ICON_BACK_TO_TOP = "В начало";
	var ICON_COLLAPSE = "Свернуть";
	var ICON_COLLAPSE_GROUP = "Свернуть группу";
	var ICON_CROP = "Обрезать";
	var ICON_DECLINE = "Отклонить";
	var ICON_DELETE = "Удалить";
	var ICON_DISPLAY = "Просмотреть";
	var ICON_DOWN = "Вниз";
	var ICON_DOWNLOAD = "Выгрузить";
	var ICON_DRILL_DOWN = "Развернуть";
	var ICON_DRILL_UP = "Свернуть";
	var ICON_ERROR = "Ошибка";
	var ICON_EXIT_FULL_SCREEN = "Выйти из полноэкранного режима";
	var ICON_EXPAND = "Развернуть";
	var ICON_EXPAND_GROUP = "Развернуть группу";
	var ICON_FILTER = "Фильтровать";
	var ICON_FLAG = "Выделить";
	var ICON_FORWARD = "Переадресовать";
	var ICON_FULL_SCREEN = "Перейти в полноэкранный режим";
	var ICON_GENERATE_SHORTCUT = "Создать соединение";
	var ICON_GROUP_2 = "Группировать";
	var ICON_HIDE = "Скрыть";
	var ICON_IPAD = "Планшет";
	var ICON_IPHONE = "Телефон";
	var ICON_LAPTOP = "Ноутбук";
	var ICON_MESSAGE_ERROR = "Ошибка";
	var ICON_MESSAGE_INFORMATION = "Информация";
	var ICON_MESSAGE_SUCCESS = "Успешное выполнение";
	var ICON_MESSAGE_WARNING = "Предупреждение";
	var ICON_MOVE = "Переместить";
	var ICON_MULTI_SELECT = "Множественный выбор";
	var ICON_NAV_BACK = "Вернуться";
	var ICON_OVERFLOW = "Больше";
	var ICON_REDO = "Повторить";
	var ICON_REFRESH = "Обновить";
	var ICON_RESIZE = "Изменить размер";
	var ICON_RESIZE_HORIZONTAL = "Изменить размер по горизонтали";
	var ICON_RESIZE_VERTICAL = "Изменить размер по вертикали";
	var ICON_RESPONSE = "Ответить";
	var ICON_SAVE = "Сохранить";
	var ICON_SEARCH = "Поиск";
	var ICON_SETTINGS = "Настройки";
	var ICON_SHOW = "Показать";
	var ICON_SORT = "Сортировать";
	var ICON_SORT_ASCENDING = "Сортировать по восходящей";
	var ICON_SORT_DESCENDING = "Сортировать по нисходящей";
	var ICON_SYNCHRONIZE = "Синхронизировать";
	var ICON_UNDO = "Отменить последний шаг";
	var ICON_UP = "Вверх";
	var ICON_UPLOAD = "Загрузить";
	var ICON_ZOOM_IN = "Увеличить";
	var ICON_ZOOM_OUT = "Уменьшить";
	var messagebundle_ru = {
		ICON_ACTION_SETTINGS: ICON_ACTION_SETTINGS,
		ICON_ACTIVATE: ICON_ACTIVATE,
		ICON_ADD: ICON_ADD,
		ICON_ADD_CONTACT: ICON_ADD_CONTACT,
		ICON_ADD_FILTER: ICON_ADD_FILTER,
		ICON_ADD_PHOTO: ICON_ADD_PHOTO,
		ICON_BACK_TO_TOP: ICON_BACK_TO_TOP,
		ICON_COLLAPSE: ICON_COLLAPSE,
		ICON_COLLAPSE_GROUP: ICON_COLLAPSE_GROUP,
		ICON_CROP: ICON_CROP,
		ICON_DECLINE: ICON_DECLINE,
		ICON_DELETE: ICON_DELETE,
		ICON_DISPLAY: ICON_DISPLAY,
		ICON_DOWN: ICON_DOWN,
		ICON_DOWNLOAD: ICON_DOWNLOAD,
		ICON_DRILL_DOWN: ICON_DRILL_DOWN,
		ICON_DRILL_UP: ICON_DRILL_UP,
		ICON_ERROR: ICON_ERROR,
		ICON_EXIT_FULL_SCREEN: ICON_EXIT_FULL_SCREEN,
		ICON_EXPAND: ICON_EXPAND,
		ICON_EXPAND_GROUP: ICON_EXPAND_GROUP,
		ICON_FILTER: ICON_FILTER,
		ICON_FLAG: ICON_FLAG,
		ICON_FORWARD: ICON_FORWARD,
		ICON_FULL_SCREEN: ICON_FULL_SCREEN,
		ICON_GENERATE_SHORTCUT: ICON_GENERATE_SHORTCUT,
		ICON_GROUP_2: ICON_GROUP_2,
		ICON_HIDE: ICON_HIDE,
		ICON_IPAD: ICON_IPAD,
		ICON_IPHONE: ICON_IPHONE,
		ICON_LAPTOP: ICON_LAPTOP,
		ICON_MESSAGE_ERROR: ICON_MESSAGE_ERROR,
		ICON_MESSAGE_INFORMATION: ICON_MESSAGE_INFORMATION,
		ICON_MESSAGE_SUCCESS: ICON_MESSAGE_SUCCESS,
		ICON_MESSAGE_WARNING: ICON_MESSAGE_WARNING,
		ICON_MOVE: ICON_MOVE,
		ICON_MULTI_SELECT: ICON_MULTI_SELECT,
		ICON_NAV_BACK: ICON_NAV_BACK,
		ICON_OVERFLOW: ICON_OVERFLOW,
		ICON_REDO: ICON_REDO,
		ICON_REFRESH: ICON_REFRESH,
		ICON_RESIZE: ICON_RESIZE,
		ICON_RESIZE_HORIZONTAL: ICON_RESIZE_HORIZONTAL,
		ICON_RESIZE_VERTICAL: ICON_RESIZE_VERTICAL,
		ICON_RESPONSE: ICON_RESPONSE,
		ICON_SAVE: ICON_SAVE,
		ICON_SEARCH: ICON_SEARCH,
		ICON_SETTINGS: ICON_SETTINGS,
		ICON_SHOW: ICON_SHOW,
		ICON_SORT: ICON_SORT,
		ICON_SORT_ASCENDING: ICON_SORT_ASCENDING,
		ICON_SORT_DESCENDING: ICON_SORT_DESCENDING,
		ICON_SYNCHRONIZE: ICON_SYNCHRONIZE,
		ICON_UNDO: ICON_UNDO,
		ICON_UP: ICON_UP,
		ICON_UPLOAD: ICON_UPLOAD,
		ICON_ZOOM_IN: ICON_ZOOM_IN,
		ICON_ZOOM_OUT: ICON_ZOOM_OUT
	};

	exports.ICON_ACTION_SETTINGS = ICON_ACTION_SETTINGS;
	exports.ICON_ACTIVATE = ICON_ACTIVATE;
	exports.ICON_ADD = ICON_ADD;
	exports.ICON_ADD_CONTACT = ICON_ADD_CONTACT;
	exports.ICON_ADD_FILTER = ICON_ADD_FILTER;
	exports.ICON_ADD_PHOTO = ICON_ADD_PHOTO;
	exports.ICON_BACK_TO_TOP = ICON_BACK_TO_TOP;
	exports.ICON_COLLAPSE = ICON_COLLAPSE;
	exports.ICON_COLLAPSE_GROUP = ICON_COLLAPSE_GROUP;
	exports.ICON_CROP = ICON_CROP;
	exports.ICON_DECLINE = ICON_DECLINE;
	exports.ICON_DELETE = ICON_DELETE;
	exports.ICON_DISPLAY = ICON_DISPLAY;
	exports.ICON_DOWN = ICON_DOWN;
	exports.ICON_DOWNLOAD = ICON_DOWNLOAD;
	exports.ICON_DRILL_DOWN = ICON_DRILL_DOWN;
	exports.ICON_DRILL_UP = ICON_DRILL_UP;
	exports.ICON_ERROR = ICON_ERROR;
	exports.ICON_EXIT_FULL_SCREEN = ICON_EXIT_FULL_SCREEN;
	exports.ICON_EXPAND = ICON_EXPAND;
	exports.ICON_EXPAND_GROUP = ICON_EXPAND_GROUP;
	exports.ICON_FILTER = ICON_FILTER;
	exports.ICON_FLAG = ICON_FLAG;
	exports.ICON_FORWARD = ICON_FORWARD;
	exports.ICON_FULL_SCREEN = ICON_FULL_SCREEN;
	exports.ICON_GENERATE_SHORTCUT = ICON_GENERATE_SHORTCUT;
	exports.ICON_GROUP_2 = ICON_GROUP_2;
	exports.ICON_HIDE = ICON_HIDE;
	exports.ICON_IPAD = ICON_IPAD;
	exports.ICON_IPHONE = ICON_IPHONE;
	exports.ICON_LAPTOP = ICON_LAPTOP;
	exports.ICON_MESSAGE_ERROR = ICON_MESSAGE_ERROR;
	exports.ICON_MESSAGE_INFORMATION = ICON_MESSAGE_INFORMATION;
	exports.ICON_MESSAGE_SUCCESS = ICON_MESSAGE_SUCCESS;
	exports.ICON_MESSAGE_WARNING = ICON_MESSAGE_WARNING;
	exports.ICON_MOVE = ICON_MOVE;
	exports.ICON_MULTI_SELECT = ICON_MULTI_SELECT;
	exports.ICON_NAV_BACK = ICON_NAV_BACK;
	exports.ICON_OVERFLOW = ICON_OVERFLOW;
	exports.ICON_REDO = ICON_REDO;
	exports.ICON_REFRESH = ICON_REFRESH;
	exports.ICON_RESIZE = ICON_RESIZE;
	exports.ICON_RESIZE_HORIZONTAL = ICON_RESIZE_HORIZONTAL;
	exports.ICON_RESIZE_VERTICAL = ICON_RESIZE_VERTICAL;
	exports.ICON_RESPONSE = ICON_RESPONSE;
	exports.ICON_SAVE = ICON_SAVE;
	exports.ICON_SEARCH = ICON_SEARCH;
	exports.ICON_SETTINGS = ICON_SETTINGS;
	exports.ICON_SHOW = ICON_SHOW;
	exports.ICON_SORT = ICON_SORT;
	exports.ICON_SORT_ASCENDING = ICON_SORT_ASCENDING;
	exports.ICON_SORT_DESCENDING = ICON_SORT_DESCENDING;
	exports.ICON_SYNCHRONIZE = ICON_SYNCHRONIZE;
	exports.ICON_UNDO = ICON_UNDO;
	exports.ICON_UP = ICON_UP;
	exports.ICON_UPLOAD = ICON_UPLOAD;
	exports.ICON_ZOOM_IN = ICON_ZOOM_IN;
	exports.ICON_ZOOM_OUT = ICON_ZOOM_OUT;
	exports.default = messagebundle_ru;

}));