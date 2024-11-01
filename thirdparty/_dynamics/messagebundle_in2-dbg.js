sap.ui.define(['exports'], (function (exports) { 'use strict';

	var ARIA_LABEL_CARD_CONTENT = "Konten Kartu";
	var ARIA_ROLEDESCRIPTION_CARD = "Kartu";
	var ARIA_ROLEDESCRIPTION_CARD_HEADER = "Header Kartu";
	var ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = "Header Kartu Interaktif";
	var AVATAR_TOOLTIP = "Avatar";
	var TAG_DESCRIPTION = "Lencana";
	var BUSY_INDICATOR_TITLE = "Mohon tunggu";
	var BUTTON_ARIA_TYPE_ACCEPT = "Tindakan Positif";
	var BUTTON_ARIA_TYPE_REJECT = "Tindakan Negatif";
	var BUTTON_ARIA_TYPE_EMPHASIZED = "Ditekankan";
	var CAROUSEL_OF_TEXT = "dari";
	var CAROUSEL_DOT_TEXT = "Item {0} dari {1} ditampilkan";
	var CAROUSEL_PREVIOUS_ARROW_TEXT = "Halaman Sebelumnya";
	var CAROUSEL_NEXT_ARROW_TEXT = "Halaman Selanjutnya";
	var COLORPALETTE_CONTAINER_LABEL = "Palet Warna - Warna yang Ditentukan Sebelumnya";
	var COLORPALETTE_COLOR_LABEL = "Warna";
	var COLOR_PALETTE_DIALOG_CANCEL_BUTTON = "Cancel";
	var COLOR_PALETTE_DIALOG_OK_BUTTON = "OK";
	var COLOR_PALETTE_DIALOG_TITLE = "Change Color";
	var COLOR_PALETTE_MORE_COLORS_TEXT = "More Colors...";
	var DATEPICKER_OPEN_ICON_TITLE = "Buka Pemilih";
	var DATEPICKER_DATE_DESCRIPTION = "Input Tanggal";
	var DELETE = "Hapus";
	var FILEUPLOAD_BROWSE = "Telusuri...";
	var FILEUPLOADER_TITLE = "Unggah File";
	var GROUP_HEADER_TEXT = "Header Grup";
	var SELECT_OPTIONS = "Pilih Opsi";
	var INPUT_SUGGESTIONS = "Saran yang Tersedia";
	var INPUT_SUGGESTIONS_TITLE = "Pilih";
	var INPUT_SUGGESTIONS_ONE_HIT = "1 hasil tersedia";
	var INPUT_SUGGESTIONS_MORE_HITS = "{0} hasil tersedia";
	var INPUT_SUGGESTIONS_NO_HIT = "Tidak ada hasil";
	var LINK_SUBTLE = "Halus";
	var LINK_EMPHASIZED = "Ditekankan";
	var LIST_ITEM_POSITION = "Cantumkan item {0} dari {1}";
	var LIST_ITEM_SELECTED = "Dipilih";
	var ARIA_LABEL_LIST_ITEM_CHECKBOX = "Mode Banyak Pilihan";
	var MESSAGE_STRIP_CLOSE_BUTTON = "Strip Pesan Tutup";
	var MULTICOMBOBOX_DIALOG_OK_BUTTON = "OKE";
	var MULTIINPUT_ROLEDESCRIPTION_TEXT = "Input Banyak Nilai";
	var MULTIINPUT_SHOW_MORE_TOKENS = "{0} Lebih Banyak";
	var PANEL_ICON = "Perluas/Ciutkan";
	var RANGE_SLIDER_ARIA_DESCRIPTION = "Rentang";
	var RANGE_SLIDER_START_HANDLE_DESCRIPTION = "Pegangan kiri";
	var RANGE_SLIDER_END_HANDLE_DESCRIPTION = "Pegangan kanan";
	var RATING_INDICATOR_TOOLTIP_TEXT = "Peringkat";
	var RATING_INDICATOR_TEXT = "Indikator Peringkat";
	var RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = "Tolak";
	var SEGMENTEDBUTTON_ARIA_DESCRIPTION = "Tombol Tersegmentasi";
	var SLIDER_ARIA_DESCRIPTION = "Pegangan slider";
	var SWITCH_ON = "Aktif";
	var SWITCH_OFF = "Nonaktif";
	var TABLE_LOAD_MORE_TEXT = "Lebih Banyak";
	var TABCONTAINER_NEXT_ICON_ACC_NAME = "Selanjutnya";
	var TABCONTAINER_PREVIOUS_ICON_ACC_NAME = "Sebelumnya";
	var TABCONTAINER_OVERFLOW_MENU_TITLE = "Menu Tambahan";
	var TEXTAREA_CHARACTERS_LEFT = "{0} karakter tersisa";
	var TEXTAREA_CHARACTERS_EXCEEDED = "{0} karakter melebihi batas";
	var TIMEPICKER_HOURS_LABEL = "Jam";
	var TIMEPICKER_MINUTES_LABEL = "Menit";
	var TIMEPICKER_SECONDS_LABEL = "Detik";
	var TIMEPICKER_PERIODS_LABEL = "AM/PM";
	var TIMEPICKER_SUBMIT_BUTTON = "OKE";
	var TIMEPICKER_CANCEL_BUTTON = "Batalkan";
	var DATETIME_PICKER_DATE_BUTTON = "Tanggal";
	var DATETIME_PICKER_TIME_BUTTON = "Waktu";
	var TOKEN_ARIA_DELETABLE = "Dapat Dihapus";
	var TOKENIZER_ARIA_CONTAIN_TOKEN = "Tidak Ada Token";
	var TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = "Berisi 1 token";
	var TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = "Berisi {0} token";
	var TOKENIZER_ARIA_LABEL = "Pembuat Token";
	var TOKENIZER_POPOVER_REMOVE = "Hapus";
	var TREE_ITEM_ARIA_LABEL = "Item Pohon";
	var TREE_ITEM_EXPAND_NODE = "Perluas Node";
	var TREE_ITEM_COLLAPSE_NODE = "Ciutkan Node";
	var VALUE_STATE_ERROR = "Entri tidak valid";
	var VALUE_STATE_WARNING = "Peringatan diterbitkan";
	var VALUE_STATE_INFORMATION = "Entri informatif";
	var VALUE_STATE_SUCCESS = "Entri berhasil divalidasi";
	var CALENDAR_HEADER_NEXT_BUTTON = "Selanjutnya";
	var CALENDAR_HEADER_PREVIOUS_BUTTON = "Sebelumnya";
	var DAY_PICKER_WEEK_NUMBER_TEXT = "Jumlah Minggu";
	var DAY_PICKER_NON_WORKING_DAY = "Non-Hari Kerja";
	var DAY_PICKER_TODAY = "Hari Ini";
	var STEPINPUT_DEC_ICON_TITLE = "Decrease";
	var STEPINPUT_INC_ICON_TITLE = "Increase";
	var messagebundle_in = {
		ARIA_LABEL_CARD_CONTENT: ARIA_LABEL_CARD_CONTENT,
		ARIA_ROLEDESCRIPTION_CARD: ARIA_ROLEDESCRIPTION_CARD,
		ARIA_ROLEDESCRIPTION_CARD_HEADER: ARIA_ROLEDESCRIPTION_CARD_HEADER,
		ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER: ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,
		AVATAR_TOOLTIP: AVATAR_TOOLTIP,
		TAG_DESCRIPTION: TAG_DESCRIPTION,
		BUSY_INDICATOR_TITLE: BUSY_INDICATOR_TITLE,
		BUTTON_ARIA_TYPE_ACCEPT: BUTTON_ARIA_TYPE_ACCEPT,
		BUTTON_ARIA_TYPE_REJECT: BUTTON_ARIA_TYPE_REJECT,
		BUTTON_ARIA_TYPE_EMPHASIZED: BUTTON_ARIA_TYPE_EMPHASIZED,
		CAROUSEL_OF_TEXT: CAROUSEL_OF_TEXT,
		CAROUSEL_DOT_TEXT: CAROUSEL_DOT_TEXT,
		CAROUSEL_PREVIOUS_ARROW_TEXT: CAROUSEL_PREVIOUS_ARROW_TEXT,
		CAROUSEL_NEXT_ARROW_TEXT: CAROUSEL_NEXT_ARROW_TEXT,
		COLORPALETTE_CONTAINER_LABEL: COLORPALETTE_CONTAINER_LABEL,
		COLORPALETTE_COLOR_LABEL: COLORPALETTE_COLOR_LABEL,
		COLOR_PALETTE_DIALOG_CANCEL_BUTTON: COLOR_PALETTE_DIALOG_CANCEL_BUTTON,
		COLOR_PALETTE_DIALOG_OK_BUTTON: COLOR_PALETTE_DIALOG_OK_BUTTON,
		COLOR_PALETTE_DIALOG_TITLE: COLOR_PALETTE_DIALOG_TITLE,
		COLOR_PALETTE_MORE_COLORS_TEXT: COLOR_PALETTE_MORE_COLORS_TEXT,
		DATEPICKER_OPEN_ICON_TITLE: DATEPICKER_OPEN_ICON_TITLE,
		DATEPICKER_DATE_DESCRIPTION: DATEPICKER_DATE_DESCRIPTION,
		DELETE: DELETE,
		FILEUPLOAD_BROWSE: FILEUPLOAD_BROWSE,
		FILEUPLOADER_TITLE: FILEUPLOADER_TITLE,
		GROUP_HEADER_TEXT: GROUP_HEADER_TEXT,
		SELECT_OPTIONS: SELECT_OPTIONS,
		INPUT_SUGGESTIONS: INPUT_SUGGESTIONS,
		INPUT_SUGGESTIONS_TITLE: INPUT_SUGGESTIONS_TITLE,
		INPUT_SUGGESTIONS_ONE_HIT: INPUT_SUGGESTIONS_ONE_HIT,
		INPUT_SUGGESTIONS_MORE_HITS: INPUT_SUGGESTIONS_MORE_HITS,
		INPUT_SUGGESTIONS_NO_HIT: INPUT_SUGGESTIONS_NO_HIT,
		LINK_SUBTLE: LINK_SUBTLE,
		LINK_EMPHASIZED: LINK_EMPHASIZED,
		LIST_ITEM_POSITION: LIST_ITEM_POSITION,
		LIST_ITEM_SELECTED: LIST_ITEM_SELECTED,
		ARIA_LABEL_LIST_ITEM_CHECKBOX: ARIA_LABEL_LIST_ITEM_CHECKBOX,
		MESSAGE_STRIP_CLOSE_BUTTON: MESSAGE_STRIP_CLOSE_BUTTON,
		MULTICOMBOBOX_DIALOG_OK_BUTTON: MULTICOMBOBOX_DIALOG_OK_BUTTON,
		MULTIINPUT_ROLEDESCRIPTION_TEXT: MULTIINPUT_ROLEDESCRIPTION_TEXT,
		MULTIINPUT_SHOW_MORE_TOKENS: MULTIINPUT_SHOW_MORE_TOKENS,
		PANEL_ICON: PANEL_ICON,
		RANGE_SLIDER_ARIA_DESCRIPTION: RANGE_SLIDER_ARIA_DESCRIPTION,
		RANGE_SLIDER_START_HANDLE_DESCRIPTION: RANGE_SLIDER_START_HANDLE_DESCRIPTION,
		RANGE_SLIDER_END_HANDLE_DESCRIPTION: RANGE_SLIDER_END_HANDLE_DESCRIPTION,
		RATING_INDICATOR_TOOLTIP_TEXT: RATING_INDICATOR_TOOLTIP_TEXT,
		RATING_INDICATOR_TEXT: RATING_INDICATOR_TEXT,
		RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON: RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,
		SEGMENTEDBUTTON_ARIA_DESCRIPTION: SEGMENTEDBUTTON_ARIA_DESCRIPTION,
		SLIDER_ARIA_DESCRIPTION: SLIDER_ARIA_DESCRIPTION,
		SWITCH_ON: SWITCH_ON,
		SWITCH_OFF: SWITCH_OFF,
		TABLE_LOAD_MORE_TEXT: TABLE_LOAD_MORE_TEXT,
		TABCONTAINER_NEXT_ICON_ACC_NAME: TABCONTAINER_NEXT_ICON_ACC_NAME,
		TABCONTAINER_PREVIOUS_ICON_ACC_NAME: TABCONTAINER_PREVIOUS_ICON_ACC_NAME,
		TABCONTAINER_OVERFLOW_MENU_TITLE: TABCONTAINER_OVERFLOW_MENU_TITLE,
		TEXTAREA_CHARACTERS_LEFT: TEXTAREA_CHARACTERS_LEFT,
		TEXTAREA_CHARACTERS_EXCEEDED: TEXTAREA_CHARACTERS_EXCEEDED,
		TIMEPICKER_HOURS_LABEL: TIMEPICKER_HOURS_LABEL,
		TIMEPICKER_MINUTES_LABEL: TIMEPICKER_MINUTES_LABEL,
		TIMEPICKER_SECONDS_LABEL: TIMEPICKER_SECONDS_LABEL,
		TIMEPICKER_PERIODS_LABEL: TIMEPICKER_PERIODS_LABEL,
		TIMEPICKER_SUBMIT_BUTTON: TIMEPICKER_SUBMIT_BUTTON,
		TIMEPICKER_CANCEL_BUTTON: TIMEPICKER_CANCEL_BUTTON,
		DATETIME_PICKER_DATE_BUTTON: DATETIME_PICKER_DATE_BUTTON,
		DATETIME_PICKER_TIME_BUTTON: DATETIME_PICKER_TIME_BUTTON,
		TOKEN_ARIA_DELETABLE: TOKEN_ARIA_DELETABLE,
		TOKENIZER_ARIA_CONTAIN_TOKEN: TOKENIZER_ARIA_CONTAIN_TOKEN,
		TOKENIZER_ARIA_CONTAIN_ONE_TOKEN: TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,
		TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS: TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,
		TOKENIZER_ARIA_LABEL: TOKENIZER_ARIA_LABEL,
		TOKENIZER_POPOVER_REMOVE: TOKENIZER_POPOVER_REMOVE,
		TREE_ITEM_ARIA_LABEL: TREE_ITEM_ARIA_LABEL,
		TREE_ITEM_EXPAND_NODE: TREE_ITEM_EXPAND_NODE,
		TREE_ITEM_COLLAPSE_NODE: TREE_ITEM_COLLAPSE_NODE,
		VALUE_STATE_ERROR: VALUE_STATE_ERROR,
		VALUE_STATE_WARNING: VALUE_STATE_WARNING,
		VALUE_STATE_INFORMATION: VALUE_STATE_INFORMATION,
		VALUE_STATE_SUCCESS: VALUE_STATE_SUCCESS,
		CALENDAR_HEADER_NEXT_BUTTON: CALENDAR_HEADER_NEXT_BUTTON,
		CALENDAR_HEADER_PREVIOUS_BUTTON: CALENDAR_HEADER_PREVIOUS_BUTTON,
		DAY_PICKER_WEEK_NUMBER_TEXT: DAY_PICKER_WEEK_NUMBER_TEXT,
		DAY_PICKER_NON_WORKING_DAY: DAY_PICKER_NON_WORKING_DAY,
		DAY_PICKER_TODAY: DAY_PICKER_TODAY,
		STEPINPUT_DEC_ICON_TITLE: STEPINPUT_DEC_ICON_TITLE,
		STEPINPUT_INC_ICON_TITLE: STEPINPUT_INC_ICON_TITLE
	};

	exports.ARIA_LABEL_CARD_CONTENT = ARIA_LABEL_CARD_CONTENT;
	exports.ARIA_LABEL_LIST_ITEM_CHECKBOX = ARIA_LABEL_LIST_ITEM_CHECKBOX;
	exports.ARIA_ROLEDESCRIPTION_CARD = ARIA_ROLEDESCRIPTION_CARD;
	exports.ARIA_ROLEDESCRIPTION_CARD_HEADER = ARIA_ROLEDESCRIPTION_CARD_HEADER;
	exports.ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER;
	exports.AVATAR_TOOLTIP = AVATAR_TOOLTIP;
	exports.BUSY_INDICATOR_TITLE = BUSY_INDICATOR_TITLE;
	exports.BUTTON_ARIA_TYPE_ACCEPT = BUTTON_ARIA_TYPE_ACCEPT;
	exports.BUTTON_ARIA_TYPE_EMPHASIZED = BUTTON_ARIA_TYPE_EMPHASIZED;
	exports.BUTTON_ARIA_TYPE_REJECT = BUTTON_ARIA_TYPE_REJECT;
	exports.CALENDAR_HEADER_NEXT_BUTTON = CALENDAR_HEADER_NEXT_BUTTON;
	exports.CALENDAR_HEADER_PREVIOUS_BUTTON = CALENDAR_HEADER_PREVIOUS_BUTTON;
	exports.CAROUSEL_DOT_TEXT = CAROUSEL_DOT_TEXT;
	exports.CAROUSEL_NEXT_ARROW_TEXT = CAROUSEL_NEXT_ARROW_TEXT;
	exports.CAROUSEL_OF_TEXT = CAROUSEL_OF_TEXT;
	exports.CAROUSEL_PREVIOUS_ARROW_TEXT = CAROUSEL_PREVIOUS_ARROW_TEXT;
	exports.COLORPALETTE_COLOR_LABEL = COLORPALETTE_COLOR_LABEL;
	exports.COLORPALETTE_CONTAINER_LABEL = COLORPALETTE_CONTAINER_LABEL;
	exports.COLOR_PALETTE_DIALOG_CANCEL_BUTTON = COLOR_PALETTE_DIALOG_CANCEL_BUTTON;
	exports.COLOR_PALETTE_DIALOG_OK_BUTTON = COLOR_PALETTE_DIALOG_OK_BUTTON;
	exports.COLOR_PALETTE_DIALOG_TITLE = COLOR_PALETTE_DIALOG_TITLE;
	exports.COLOR_PALETTE_MORE_COLORS_TEXT = COLOR_PALETTE_MORE_COLORS_TEXT;
	exports.DATEPICKER_DATE_DESCRIPTION = DATEPICKER_DATE_DESCRIPTION;
	exports.DATEPICKER_OPEN_ICON_TITLE = DATEPICKER_OPEN_ICON_TITLE;
	exports.DATETIME_PICKER_DATE_BUTTON = DATETIME_PICKER_DATE_BUTTON;
	exports.DATETIME_PICKER_TIME_BUTTON = DATETIME_PICKER_TIME_BUTTON;
	exports.DAY_PICKER_NON_WORKING_DAY = DAY_PICKER_NON_WORKING_DAY;
	exports.DAY_PICKER_TODAY = DAY_PICKER_TODAY;
	exports.DAY_PICKER_WEEK_NUMBER_TEXT = DAY_PICKER_WEEK_NUMBER_TEXT;
	exports.DELETE = DELETE;
	exports.FILEUPLOADER_TITLE = FILEUPLOADER_TITLE;
	exports.FILEUPLOAD_BROWSE = FILEUPLOAD_BROWSE;
	exports.GROUP_HEADER_TEXT = GROUP_HEADER_TEXT;
	exports.INPUT_SUGGESTIONS = INPUT_SUGGESTIONS;
	exports.INPUT_SUGGESTIONS_MORE_HITS = INPUT_SUGGESTIONS_MORE_HITS;
	exports.INPUT_SUGGESTIONS_NO_HIT = INPUT_SUGGESTIONS_NO_HIT;
	exports.INPUT_SUGGESTIONS_ONE_HIT = INPUT_SUGGESTIONS_ONE_HIT;
	exports.INPUT_SUGGESTIONS_TITLE = INPUT_SUGGESTIONS_TITLE;
	exports.LINK_EMPHASIZED = LINK_EMPHASIZED;
	exports.LINK_SUBTLE = LINK_SUBTLE;
	exports.LIST_ITEM_POSITION = LIST_ITEM_POSITION;
	exports.LIST_ITEM_SELECTED = LIST_ITEM_SELECTED;
	exports.MESSAGE_STRIP_CLOSE_BUTTON = MESSAGE_STRIP_CLOSE_BUTTON;
	exports.MULTICOMBOBOX_DIALOG_OK_BUTTON = MULTICOMBOBOX_DIALOG_OK_BUTTON;
	exports.MULTIINPUT_ROLEDESCRIPTION_TEXT = MULTIINPUT_ROLEDESCRIPTION_TEXT;
	exports.MULTIINPUT_SHOW_MORE_TOKENS = MULTIINPUT_SHOW_MORE_TOKENS;
	exports.PANEL_ICON = PANEL_ICON;
	exports.RANGE_SLIDER_ARIA_DESCRIPTION = RANGE_SLIDER_ARIA_DESCRIPTION;
	exports.RANGE_SLIDER_END_HANDLE_DESCRIPTION = RANGE_SLIDER_END_HANDLE_DESCRIPTION;
	exports.RANGE_SLIDER_START_HANDLE_DESCRIPTION = RANGE_SLIDER_START_HANDLE_DESCRIPTION;
	exports.RATING_INDICATOR_TEXT = RATING_INDICATOR_TEXT;
	exports.RATING_INDICATOR_TOOLTIP_TEXT = RATING_INDICATOR_TOOLTIP_TEXT;
	exports.RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON;
	exports.SEGMENTEDBUTTON_ARIA_DESCRIPTION = SEGMENTEDBUTTON_ARIA_DESCRIPTION;
	exports.SELECT_OPTIONS = SELECT_OPTIONS;
	exports.SLIDER_ARIA_DESCRIPTION = SLIDER_ARIA_DESCRIPTION;
	exports.STEPINPUT_DEC_ICON_TITLE = STEPINPUT_DEC_ICON_TITLE;
	exports.STEPINPUT_INC_ICON_TITLE = STEPINPUT_INC_ICON_TITLE;
	exports.SWITCH_OFF = SWITCH_OFF;
	exports.SWITCH_ON = SWITCH_ON;
	exports.TABCONTAINER_NEXT_ICON_ACC_NAME = TABCONTAINER_NEXT_ICON_ACC_NAME;
	exports.TABCONTAINER_OVERFLOW_MENU_TITLE = TABCONTAINER_OVERFLOW_MENU_TITLE;
	exports.TABCONTAINER_PREVIOUS_ICON_ACC_NAME = TABCONTAINER_PREVIOUS_ICON_ACC_NAME;
	exports.TABLE_LOAD_MORE_TEXT = TABLE_LOAD_MORE_TEXT;
	exports.TAG_DESCRIPTION = TAG_DESCRIPTION;
	exports.TEXTAREA_CHARACTERS_EXCEEDED = TEXTAREA_CHARACTERS_EXCEEDED;
	exports.TEXTAREA_CHARACTERS_LEFT = TEXTAREA_CHARACTERS_LEFT;
	exports.TIMEPICKER_CANCEL_BUTTON = TIMEPICKER_CANCEL_BUTTON;
	exports.TIMEPICKER_HOURS_LABEL = TIMEPICKER_HOURS_LABEL;
	exports.TIMEPICKER_MINUTES_LABEL = TIMEPICKER_MINUTES_LABEL;
	exports.TIMEPICKER_PERIODS_LABEL = TIMEPICKER_PERIODS_LABEL;
	exports.TIMEPICKER_SECONDS_LABEL = TIMEPICKER_SECONDS_LABEL;
	exports.TIMEPICKER_SUBMIT_BUTTON = TIMEPICKER_SUBMIT_BUTTON;
	exports.TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = TOKENIZER_ARIA_CONTAIN_ONE_TOKEN;
	exports.TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS;
	exports.TOKENIZER_ARIA_CONTAIN_TOKEN = TOKENIZER_ARIA_CONTAIN_TOKEN;
	exports.TOKENIZER_ARIA_LABEL = TOKENIZER_ARIA_LABEL;
	exports.TOKENIZER_POPOVER_REMOVE = TOKENIZER_POPOVER_REMOVE;
	exports.TOKEN_ARIA_DELETABLE = TOKEN_ARIA_DELETABLE;
	exports.TREE_ITEM_ARIA_LABEL = TREE_ITEM_ARIA_LABEL;
	exports.TREE_ITEM_COLLAPSE_NODE = TREE_ITEM_COLLAPSE_NODE;
	exports.TREE_ITEM_EXPAND_NODE = TREE_ITEM_EXPAND_NODE;
	exports.VALUE_STATE_ERROR = VALUE_STATE_ERROR;
	exports.VALUE_STATE_INFORMATION = VALUE_STATE_INFORMATION;
	exports.VALUE_STATE_SUCCESS = VALUE_STATE_SUCCESS;
	exports.VALUE_STATE_WARNING = VALUE_STATE_WARNING;
	exports.default = messagebundle_in;

}));
