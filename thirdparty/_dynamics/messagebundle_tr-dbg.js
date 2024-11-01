sap.ui.define(['exports'], (function (exports) { 'use strict';

	var ICON_ACTION_SETTINGS = "Ayarlar";
	var ICON_ACTIVATE = "Etkinleştir";
	var ICON_ADD = "Ekle";
	var ICON_ADD_CONTACT = "İlgili kişi ekle";
	var ICON_ADD_FILTER = "Filtre ekle";
	var ICON_ADD_PHOTO = "Fotoğraf ekle";
	var ICON_BACK_TO_TOP = "Başlangıç";
	var ICON_COLLAPSE = "Sıkıştır";
	var ICON_COLLAPSE_GROUP = "Grubu daralt";
	var ICON_CROP = "Kes";
	var ICON_DECLINE = "Reddet";
	var ICON_DELETE = "Sil";
	var ICON_DISPLAY = "Görüntüle";
	var ICON_DOWN = "Aşağı";
	var ICON_DOWNLOAD = "İndir";
	var ICON_DRILL_DOWN = "Ayrıntı seviyesini artır";
	var ICON_DRILL_UP = "Ayrıntı seviyesini azalt";
	var ICON_ERROR = "Hata";
	var ICON_EXIT_FULL_SCREEN = "Tam ekran kipini sonlandır";
	var ICON_EXPAND = "Genişlet";
	var ICON_EXPAND_GROUP = "Grubu genişlet";
	var ICON_FILTER = "Filtrele";
	var ICON_FLAG = "Seç";
	var ICON_FORWARD = "İlet";
	var ICON_FULL_SCREEN = "Tam ekranı gir";
	var ICON_GENERATE_SHORTCUT = "Bağlantı yarat";
	var ICON_GROUP_2 = "Gruplama";
	var ICON_HIDE = "Gizleme";
	var ICON_IPAD = "Tablet";
	var ICON_IPHONE = "Telefon";
	var ICON_LAPTOP = "Dizüstü bilgisayar";
	var ICON_MESSAGE_ERROR = "Hata";
	var ICON_MESSAGE_INFORMATION = "Bilgi";
	var ICON_MESSAGE_SUCCESS = "Başarılı";
	var ICON_MESSAGE_WARNING = "Uyarı";
	var ICON_MOVE = "Taşı";
	var ICON_MULTI_SELECT = "Çoklu seçim";
	var ICON_NAV_BACK = "Dolaşmaya geri dön";
	var ICON_OVERFLOW = "Daha fazla";
	var ICON_REDO = "Yinele";
	var ICON_REFRESH = "Güncelle";
	var ICON_RESIZE = "Büyüklüğü değiştir";
	var ICON_RESIZE_HORIZONTAL = "Büyüklüğü yatay değiştir";
	var ICON_RESIZE_VERTICAL = "Büyüklüğü dikey değiştir";
	var ICON_RESPONSE = "Cevapla";
	var ICON_SAVE = "Kaydet";
	var ICON_SEARCH = "Ara";
	var ICON_SETTINGS = "Ayarlar";
	var ICON_SHOW = "Göster";
	var ICON_SORT = "Sırala";
	var ICON_SORT_ASCENDING = "Artan düzende sırala";
	var ICON_SORT_DESCENDING = "Azalan düzende sırala";
	var ICON_SYNCHRONIZE = "Senkronize et";
	var ICON_UNDO = "Geri al";
	var ICON_UP = "Yukarı";
	var ICON_UPLOAD = "Yukarı yükle";
	var ICON_ZOOM_IN = "Yakınlaştır";
	var ICON_ZOOM_OUT = "Uzaklaştır";
	var messagebundle_tr = {
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
	exports.default = messagebundle_tr;

}));