sap.ui.define(['exports'], (function (exports) { 'use strict';

	var ICON_ACTION_SETTINGS = "⁪⁪⁪‌​‌‍‍‍​‍‌​‍‍‌​‌‌‌‌‍​​‌‌​‌‌​​‌‍‌‍‍‌‍‌​‌‍​​⁪Settings⁪⁪";
	var ICON_ACTIVATE = "⁪⁪⁪‌‍‍‌​​​‍‍‍‌‌‌‍​‌‍​‌‍‌​‍‍‌​‍​‍‍‍‍‍​‌‍​‌‍‌⁪Activate⁪⁪";
	var ICON_ADD = "⁪⁪⁪‌​‌​‌​‌‌​​‌‌‌‍​‍​​‍‌‌‍‌‌‌​‍‍‌‍‌‌​‍‌‍​​​‌​⁪Add⁪⁪";
	var ICON_ADD_CONTACT = "⁪⁪⁪‌​‌‍‌‍​‌‍​‍‌​‍‍​‍‍‌‍‍‍‍‌‌​​‌‍‌​‌‍​‍‌‍​​​​⁪Add Contact⁪⁪";
	var ICON_ADD_FILTER = "⁪⁪⁪‌‌​‍‌‍​‍​‌‍​​‌‍​​‌​‌​‍‍‌‍​‍‍‌‍‍​‍​​‌​‌‌‌​⁪Add Filter⁪⁪";
	var ICON_ADD_PHOTO = "⁪⁪⁪‌​‍‌‍‍‍‌‍‍‌‍​‍‍​‍‌‌‍‍​‌​​​​​‌‍​​‍​‌​‌‌​‍​⁪Add Photo⁪⁪";
	var ICON_BACK_TO_TOP = "⁪⁪⁪‌​​‍​​‍‌‍‍​​​‌​‌‌‌​‍‍​‌‍‍‌​‌​​‍‍​​​‍‍‌‌⁪Back to Top⁪⁪";
	var ICON_COLLAPSE = "⁪⁪⁪‌​​​‍‌‍‍​‌‌‍‍​‌‍‍‍​‌‌‌‍​‍‌‌‍‌‌‍‌​​​​‌​​‌‌⁪Collapse⁪⁪";
	var ICON_COLLAPSE_GROUP = "⁪⁪⁪‍‍‌‌‌​​​‍​‌‌‍‌‍​‌‍‌​‌‌‍‌​​‍​‌‍​​​​‍‌‍​‌‍⁪Collapse Group⁪⁪";
	var ICON_CROP = "⁪⁪⁪‌​​​‍​​‍‌‍‍‌‍​‍‍‌‌‍​‌‍​​‌‍​​​‍‌‍‍‌‍‌‌​‌​​⁪Crop⁪⁪";
	var ICON_DECLINE = "⁪⁪⁪‌‍‍​‍​‌‌​​‌‍​​​‍‌​‍‌‍‌‌‌‍​‍​‍​‌​​​‍​​‍‍​⁪Decline⁪⁪";
	var ICON_DELETE = "⁪⁪⁪‌‌​‍‌‌‍​​‌‌​‌​​‍‍‌​‌‌‍‍‍​‍​‍​​​​​‍‌​‌​​​‌⁪Delete⁪⁪";
	var ICON_DISPLAY = "⁪⁪⁪‌‌​​‌‍​​‍‌​‍‍‍​​‍‍‍​‌‍‍​​‌‌‍​‍‌‌‌‌‍​‌​‌​‍⁪Display⁪⁪";
	var ICON_DOWN = "⁪⁪⁪‍‌‍‌‌​​‌‍​​‌​‍‍‍‍‌‍‍‍​‌‍‌‌​​​​​‍‌‍‍‍‌​‍‍⁪Down⁪⁪";
	var ICON_DOWNLOAD = "⁪⁪⁪‌​​​​‍‌​‍‍‍​‌‍​‌​‌‍​​‍‌​‍‌‌‌​‌​‌​‌‍‍‌‍‌‌⁪Download⁪⁪";
	var ICON_DRILL_DOWN = "⁪⁪⁪‌‌​‌‍‍‍‍‌‌‌‍​​​‍‌​​​​‌‌​​‌‍‌‍​​‍​‌‌​​​‌‍⁪Drill Down⁪⁪";
	var ICON_DRILL_UP = "⁪⁪⁪‍​‌​‍‌​‌‍‍‍‌‌​​‍​‍​‌‍‌‍‍​​​‍​‌‌‌‍‍‌‍‍‍‌⁪Drill Up⁪⁪";
	var ICON_ERROR = "⁪⁪⁪‌‍‍​​​‍‌‌​‌​‌​‌‌​​‍‌‍‍‌‌‍​​‌‍‌​​​‌‌‍‍​‌‌⁪Error⁪⁪";
	var ICON_EXIT_FULL_SCREEN = "⁪⁪⁪‍‍​‍‌​​‌​‍​‍‌‍‍‌​​‍‍‍‍​​‍‌​‌‍‌‌‍​‌​‍‍​​​⁪Exit Full Screen⁪⁪";
	var ICON_EXPAND = "⁪⁪⁪‌‌​‌‍‌​‍​​‍‍‍​‍​‌‍​‍​​​​​‌‍‍​‍​​‍​​‍‌​​‌⁪Expand⁪⁪";
	var ICON_EXPAND_GROUP = "⁪⁪⁪‍‍​‍‌​‌​‍‌‍‌‌​‍‍​​​‍​​‌‍​‌​​‌‍​‌​​‍​‌‌‌⁪Expand Group⁪⁪";
	var ICON_FILTER = "⁪⁪⁪‌‌​​‌​‍‍​‍‌​​​‌​‌​​​​‍‍‍‌​‍‌‌‌​‍‍​‍​‌‍‍‌⁪Filter⁪⁪";
	var ICON_FLAG = "⁪⁪⁪‌​‍​​‌​‌‌‍‌‌​‌‍‍‌‍​‍‌‌​​‌‌​​​‍​​‌‌‌‍‍​​‍‍⁪Flag⁪⁪";
	var ICON_FORWARD = "⁪⁪⁪‌​​‌​‍‌‍‍‍‌​​​​​‍​‌‍​​​‌​‌‍‌‍‌​​​​​​‍‌‍⁪Forward⁪⁪";
	var ICON_FULL_SCREEN = "⁪⁪⁪‌‌​‍‌‌​‌‍​‌‍‍​‌‍​‌‌​‍‍‌‌‍‌‌​​‌‌‌‍‌‍​​‍‍⁪Enter Full Screen⁪⁪";
	var ICON_GENERATE_SHORTCUT = "⁪⁪⁪‌​‌​‌‌​​‍​‌‌‍‌‍‍‌‍‍​​‌‍‍‍‌​‌‍‌‌​‌‍‍​​‍‌​​⁪Create Shortcut⁪⁪";
	var ICON_GROUP_2 = "⁪⁪⁪‌‌‌‌​‍‌‍​​​​‍‌​‍‍‍‌‌‌​‍‌‍​​‍​​​‌​​‍‍‌‍‍‍​⁪Group⁪⁪";
	var ICON_HIDE = "⁪⁪⁪‍‍‌‌‌​​​​‌‌​‍‍‍‍‌​​‌​​‍‌‍‌​​​​‍​​​​‍‌​​‍⁪Hide⁪⁪";
	var ICON_IPAD = "⁪⁪⁪‍​‍‍‌​‍​‌​‌‍‌​​​‍‍​‌‌‌‌‍‌​‍‍​‍‌‍‌‌​‌‌‌‍⁪Tablet⁪⁪";
	var ICON_IPHONE = "⁪⁪⁪‍‍​‌‍‍‌​‌​‍‌‍​‍​‍‍​‍‌​‌​​​‌‍​​‌​‌‌​‍‍‌‌⁪Phone⁪⁪";
	var ICON_LAPTOP = "⁪⁪⁪‌​‍‍‍​‌​‌​‍‍​‍‌‍‌‌‍​​‌‍‍‌​‍‌‌‌‌‌‌‌​‌‍‍​‍⁪Laptop⁪⁪";
	var ICON_MESSAGE_ERROR = "⁪⁪⁪‌‍‌‌‍‌‍‍​‍‍‌‌‌‌‌‍​‌​‌‌‌‍​‌‍‌​‍‍‍‍‍‌​‌‌​‌⁪Error⁪⁪";
	var ICON_MESSAGE_INFORMATION = "⁪⁪⁪‌​‌‍​​‍​​‌​‌‍‍​‍​‌‌​​‌‍‌​‍‌‍‍‍‌‍‍‍‌​‍‍​‌​⁪Information⁪⁪";
	var ICON_MESSAGE_SUCCESS = "⁪⁪⁪‌‍​‍​‌‍​‍​‍​‌‍‍​‍​​​​‍‍​​​‍​​​​‌‌​‌‌‌​‌‍⁪Successful⁪⁪";
	var ICON_MESSAGE_WARNING = "⁪⁪⁪‍​‍‍‌‍​​‌‌‍‌‍‌​​​​​‍‍​‌​​‌​‌‌‌‍‌​​‍​‌‌​‍⁪Warning⁪⁪";
	var ICON_MOVE = "⁪⁪⁪‌​‌​​​‍​‍‌​‌‍‌‍‍​‌​​‌​‍‍‍​‍‍‍‌‍‌‍‍‍​‌‌‍​​⁪Move⁪⁪";
	var ICON_MULTI_SELECT = "⁪⁪⁪‍‍‍‌‌​‍‌‍​‍‍‌‍‌‌​‍‌​‌‌​‍‍​​​‍‌​‌​‌‌​​‍​‌⁪Multi Select⁪⁪";
	var ICON_NAV_BACK = "⁪⁪⁪‌‌‌‌‌​‌‍​‍‍​​‍‌‍‍‍‌‌‍‍‌​‍‍‌‌​‌‌​‌‍​‌‌‍​‌‍⁪Navigate Back⁪⁪";
	var ICON_OVERFLOW = "⁪⁪⁪‌‌‌‍​​‌‍‍​‌‌​​‍‍‍​‍‍​‌‌‌​​​‍‌​​‌​​‌​​​⁪More⁪⁪";
	var ICON_REDO = "⁪⁪⁪‌​​‍​‌‌​‌​​​‍‍​‍‌‌‌‍‍​‍‍‌​‍‍​​​‍‌‍‌​​‍‍‌‌⁪Redo⁪⁪";
	var ICON_REFRESH = "⁪⁪⁪‌​​‍‍‌​‍‌‍‌‍‌​‍‍​‌​​‍​‌‌​‌‍‍‍‌​​​‌‍‌​​​‌​⁪Refresh⁪⁪";
	var ICON_RESIZE = "⁪⁪⁪‌​​‍‍‍​​‍‌‌‍‌​‌​‌‍‍‌‍‍​​‍‌‌​​‍​​‍‍‍​‍‌‌‍​⁪Resize⁪⁪";
	var ICON_RESIZE_HORIZONTAL = "⁪⁪⁪‍‍​‌‍‌​‍‌​‍‌‍‍​‍‌‌​‍‍‌‌‌‍​‌‌​​‍​‌​‌‌‌‌‌⁪Resize Horizontally⁪⁪";
	var ICON_RESIZE_VERTICAL = "⁪⁪⁪‌​​‍​‌​‌​‌‍‌‌​‍‌​‌‌‍​‌‌‌​​​​‌‍‌​‍‌‌​‌‌‌‌⁪Resize Vertically⁪⁪";
	var ICON_RESPONSE = "⁪⁪⁪‍‌​‌​‌​‌‌‌‌‌‌‍​‌‍‍​​‍‌‌‍‍​‍‍‍​​‍‌‍‌‌​‍‍​⁪Reply⁪⁪";
	var ICON_SAVE = "⁪⁪⁪‌​‌‌​‌‍​‍​​‍‌‍​‌‍‍​‌‌‍‌‍‍‌​​​​​‌​‌‍​​‌​‌⁪Save⁪⁪";
	var ICON_SEARCH = "⁪⁪⁪‌​‍‍‌‍‍​​‍​‌​​‌‌​‌‍‍​​‌​​‌‍‍‍​‍‌​‌‌‍‍​‌‌‌⁪Search⁪⁪";
	var ICON_SETTINGS = "⁪⁪⁪‍‌​​​​​‌‍‌‍​‌​‍​​‍​​‍​‍​‍​​‌‌‍‍‍‌‌​‌​​​‍⁪Settings⁪⁪";
	var ICON_SHOW = "⁪⁪⁪‌​‍‍‌‍‌‍‍​‌​‌​‍​‌‌‍‌‌​‍‍​‌​​​‍​‌‍‌‌​‌‌‍​​⁪Show⁪⁪";
	var ICON_SORT = "⁪⁪⁪‍​‌‍‍‌‌‌‍‍‌‌‌​‌‌​​‍‍​‍‌‍‌​​‌‌​​‌‌​‌‌‌‍‌⁪Sort⁪⁪";
	var ICON_SORT_ASCENDING = "⁪⁪⁪‍​​​​​‌​‌‌​​‍​‍​​‍​‍‌​‌‌​​‍‌‌​​‌‍‌‍​‌‍‌‍⁪Sort Ascending⁪⁪";
	var ICON_SORT_DESCENDING = "⁪⁪⁪‍​‌‍​‍‌​‍‌‍​​‌‌​​‍‍​​‍​‌‌‍​‌​​‍‍​‍‍‍‍‌⁪Sort Descending⁪⁪";
	var ICON_SYNCHRONIZE = "⁪⁪⁪‌​‌‍​‍‍‍‌‍‍‍‍‍‍‌‍​​‌‍​‍​‍‍‍‌‍​‌​​‌​​‍‌‍⁪Synchronize⁪⁪";
	var ICON_UNDO = "⁪⁪⁪‌​‌​‌‍‍‍​‍​‍‍‍‌‍‍‍​‌‌​​‌​​‍‍​‍​​‍‍‍‌‍‌‌‌‌⁪Undo⁪⁪";
	var ICON_UP = "⁪⁪⁪‌​‌​​‌​​‍​‍‍​‌​​‍‍‍‌‍‌‍‌‌‌‌‌​‍​​‍‍‌‌​‌​‌⁪Up⁪⁪";
	var ICON_UPLOAD = "⁪⁪⁪‍‍​​‌​‌‍‍​​​​​‌‌‍​​​​​‍​‍‍​‌​​‍‌‌​​​‍‌​⁪Upload⁪⁪";
	var ICON_ZOOM_IN = "⁪⁪⁪‌‍​‍​‍‌​‍‍‌‍‍‌‍‌‌‌​​‍‌‌​‌​‍​‌‍​‍‍‍‍​‌‍​‌⁪Zoom In⁪⁪";
	var ICON_ZOOM_OUT = "⁪⁪⁪‌‌​‌‍‌‍‍​​‍‍‌​‍‍‌​‌​‍​​​‍​‌‍‍​​‌‌​‍‍⁪Zoom Out⁪⁪";
	var messagebundle_en_US_saprigi = {
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
	exports.default = messagebundle_en_US_saprigi;

}));
