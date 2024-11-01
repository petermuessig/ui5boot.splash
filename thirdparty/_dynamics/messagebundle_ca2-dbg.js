sap.ui.define(['exports'], (function (exports) { 'use strict';

	var ARIA_LABEL_CARD_CONTENT = "Contingut de targeta";
	var ARIA_ROLEDESCRIPTION_CARD = "Targeta";
	var ARIA_ROLEDESCRIPTION_CARD_HEADER = "Capçalera de targeta";
	var ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = "Capçalera de targeta interactiva";
	var AVATAR_TOOLTIP = "Avatar";
	var AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL = "{0} visualitzats, {1} ocults.";
	var AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL = "Activar per a llista completa.";
	var AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL = "Avatars individuals.";
	var AVATAR_GROUP_ARIA_LABEL_GROUP = "Avatars conjunts.";
	var AVATAR_GROUP_MOVE = "Per desplaçar-vos premeu les tecles de cursor.";
	var TAG_DESCRIPTION_TAG = "Etiqueta";
	var TAG_ROLE_DESCRIPTION = "Botó d''etiqueta";
	var TAG_ERROR = "Error";
	var TAG_WARNING = "Advertència";
	var TAG_SUCCESS = "Correcte";
	var TAG_INFORMATION = "Informació";
	var BREADCRUMB_ITEM_POS = "{0} de {1}";
	var BREADCRUMBS_ARIA_LABEL = "Via de navegació";
	var BREADCRUMBS_OVERFLOW_ARIA_LABEL = "Més";
	var BREADCRUMBS_CANCEL_BUTTON = "Cancel·lar";
	var BUSY_INDICATOR_TITLE = "Espereu";
	var BUTTON_ARIA_TYPE_ACCEPT = "Acció positiva";
	var BUTTON_ARIA_TYPE_REJECT = "Acció negativa";
	var BUTTON_ARIA_TYPE_EMPHASIZED = "Destacat";
	var CAL_LEGEND_TODAY_TEXT = "Avui";
	var CAL_LEGEND_SELECTED_TEXT = "Dia seleccionat";
	var CAL_LEGEND_WORKING_DAY_TEXT = "Dia laborable";
	var CAL_LEGEND_NON_WORKING_DAY_TEXT = "Dia no laborable";
	var CAROUSEL_OF_TEXT = "de";
	var CAROUSEL_DOT_TEXT = "Es visualitza l''element {0} de {1}";
	var CAROUSEL_PREVIOUS_ARROW_TEXT = "Pàgina anterior";
	var CAROUSEL_NEXT_ARROW_TEXT = "Pàgina següent";
	var COLORPALETTE_CONTAINER_LABEL = "Paleta de colors - colors predefinits";
	var COLORPALETTE_POPOVER_TITLE = "Paleta de colors";
	var COLORPALETTE_COLOR_LABEL = "Color";
	var COLOR_PALETTE_DIALOG_CANCEL_BUTTON = "Cancel·lar";
	var COLOR_PALETTE_DIALOG_OK_BUTTON = "D’acord";
	var COLOR_PALETTE_DIALOG_TITLE = "Modificar color";
	var COLOR_PALETTE_MORE_COLORS_TEXT = "Més colors...";
	var COLOR_PALETTE_DEFAULT_COLOR_TEXT = "Color estàndard";
	var COLORPICKER_ALPHA_SLIDER = "Regulador alfa";
	var COLORPICKER_HUE_SLIDER = "Regulador de tonalitat";
	var COLORPICKER_HEX = "Hexadecimal";
	var COLORPICKER_RED = "Vermell";
	var COLORPICKER_GREEN = "Verd";
	var COLORPICKER_BLUE = "Blau";
	var COLORPICKER_ALPHA = "Alfa";
	var DATEPICKER_OPEN_ICON_TITLE = "Obrir selector";
	var DATEPICKER_DATE_DESCRIPTION = "Entrada de data";
	var DATETIME_DESCRIPTION = "Entrada de data hora";
	var DATERANGE_DESCRIPTION = "Entrada d''interval de dates";
	var DATEPICKER_POPOVER_ACCESSIBLE_NAME = "Seleccioneu la data";
	var DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME = "Seleccioneu la data i l''hora";
	var DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME = "Seleccioneu l''interval de dates";
	var DELETE = "Suprimir";
	var EMPTY_INDICATOR_SYMBOL = "–";
	var EMPTY_INDICATOR_ACCESSIBLE_TEXT = "Valor buit";
	var FILEUPLOAD_BROWSE = "Navegar...";
	var FILEUPLOADER_TITLE = "Carregar fitxer";
	var GROUP_HEADER_TEXT = "Capçalera de grup";
	var SELECT_ROLE_DESCRIPTION = "Quadre de llista";
	var SELECT_OPTIONS = "Seleccionar opcions";
	var SHOW_SELECTED_BUTTON = "Mostrar només posicions seleccionades";
	var INPUT_SUGGESTIONS = "Propostes disponibles";
	var MCB_SELECTED_ITEMS = "Seleccionar-ho tot ({0} de {1})";
	var INPUT_SUGGESTIONS_TITLE = "Seleccionar";
	var INPUT_SUGGESTIONS_ONE_HIT = "1 resultat disponible";
	var INPUT_SUGGESTIONS_MORE_HITS = "{0} resultats disponibles";
	var INPUT_SUGGESTIONS_NO_HIT = "Cap resultat";
	var INPUT_CLEAR_ICON_ACC_NAME = "Esborrar";
	var LINK_SUBTLE = "Discret";
	var LINK_EMPHASIZED = "Destacat";
	var LIST_ITEM_POSITION = "Element de llista {0} de {1}";
	var LIST_ITEM_SELECTED = "Seleccionat";
	var LIST_ITEM_NOT_SELECTED = "No seleccionats";
	var LIST_ITEM_GROUP_HEADER = "Capçalera de grup";
	var ARIA_LABEL_LIST_ITEM_CHECKBOX = "Mode de selecció múltiple";
	var ARIA_LABEL_LIST_ITEM_RADIO_BUTTON = "Selecció de posició.";
	var ARIA_LABEL_LIST_SELECTABLE = "Conté elements per a la selecció";
	var ARIA_LABEL_LIST_MULTISELECTABLE = "Conté elements per a la selecció múltiple";
	var ARIA_LABEL_LIST_DELETABLE = "Conté elements suprimibles";
	var MESSAGE_STRIP_CLOSE_BUTTON = "Tancament de barra d''informació";
	var MESSAGE_STRIP_CLOSABLE = "Es pot tancar";
	var MESSAGE_STRIP_ERROR = "Missatge d''error de la barra d''informació";
	var MESSAGE_STRIP_WARNING = "Missatge d''advertència de la barra d''informació";
	var MESSAGE_STRIP_SUCCESS = "Missatge de conclusió exitosa de la barra d''informació";
	var MESSAGE_STRIP_INFORMATION = "Barra d''informació";
	var MESSAGE_STRIP_CUSTOM = "Barra d''informació personalitzada";
	var MULTICOMBOBOX_DIALOG_OK_BUTTON = "D''acord";
	var COMBOBOX_AVAILABLE_OPTIONS = "Opcions disponibles";
	var INPUT_AVALIABLE_VALUES = "Valors disponibles";
	var VALUE_STATE_ERROR_ALREADY_SELECTED = "Aquest valor ja està seleccionat.";
	var MULTIINPUT_ROLEDESCRIPTION_TEXT = "Entrada de diversos valors";
	var MULTIINPUT_SHOW_MORE_TOKENS = "{0} més";
	var MULTIINPUT_VALUE_HELP_LABEL = "Mostrar ajuda per a entrades";
	var PANEL_ICON = "Ampliar/Comprimir";
	var RANGE_SLIDER_ARIA_DESCRIPTION = "Interval";
	var RANGE_SLIDER_START_HANDLE_DESCRIPTION = "Ansa esquerre";
	var RANGE_SLIDER_END_HANDLE_DESCRIPTION = "Ansa dreta";
	var RATING_INDICATOR_TOOLTIP_TEXT = "Valoració";
	var RATING_INDICATOR_TEXT = "Indicador de valoració";
	var RATING_INDICATOR_ARIA_DESCRIPTION = "Obligatori";
	var RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = "Declinar";
	var SEGMENTEDBUTTON_ARIA_DESCRIPTION = "Grup de botons segmentats";
	var SEGMENTEDBUTTON_ARIA_DESCRIBEDBY = "Premeu ESPAI o RETORN per seleccionar una posició";
	var SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION = "Botó segmentat";
	var SLIDER_ARIA_DESCRIPTION = "Ansa del botó lliscant";
	var LOAD_MORE_TEXT = "Més";
	var TABLE_HEADER_ROW_INFORMATION = "Línia de capçalera 1 de {0}";
	var TABLE_ROW_POSITION = "{0} de {1}";
	var TABLE_GROUP_ROW_ARIA_LABEL = "Línia de capçalera de grup";
	var ARIA_LABEL_ROW_SELECTION = "Selecció de posició";
	var ARIA_LABEL_SELECT_ALL_CHECKBOX = "Seleccionar totes les línies";
	var ARIA_LABEL_EMPTY_CELL = "Buit";
	var TAB_ARIA_DESIGN_POSITIVE = "Positiu";
	var TAB_ARIA_DESIGN_NEGATIVE = "Negatiu";
	var TAB_ARIA_DESIGN_CRITICAL = "Crític";
	var TAB_ARIA_DESIGN_NEUTRAL = "Neutral";
	var TAB_SPLIT_ROLE_DESCRIPTION = "Pestanya amb subposicions";
	var TABCONTAINER_NEXT_ICON_ACC_NAME = "Següent";
	var TABCONTAINER_PREVIOUS_ICON_ACC_NAME = "Anterior";
	var TABCONTAINER_OVERFLOW_MENU_TITLE = "Menú de desbordament";
	var TABCONTAINER_END_OVERFLOW = "Més";
	var TABCONTAINER_POPOVER_CANCEL_BUTTON = "Cancel·lar";
	var TABCONTAINER_SUBTABS_DESCRIPTION = "Premeu la tecla de fletxa avall per obrir el menú de subposicions";
	var TEXTAREA_CHARACTERS_LEFT = "{0} caràcters restants";
	var TEXTAREA_CHARACTERS_EXCEEDED = "S''han excedit {0} caràcters";
	var TIMEPICKER_HOURS_LABEL = "Hores";
	var TIMEPICKER_MINUTES_LABEL = "Minuts";
	var TIMEPICKER_SECONDS_LABEL = "Segons";
	var TIMEPICKER_SUBMIT_BUTTON = "OK";
	var TIMEPICKER_CANCEL_BUTTON = "Cancel·lar";
	var TIMEPICKER_INPUT_DESCRIPTION = "Entrada d''hora";
	var TIMEPICKER_POPOVER_ACCESSIBLE_NAME = "Seleccioneu l''hora";
	var TIMEPICKER_CLOCK_DIAL_LABEL = "Esfera de rellotge";
	var TIMEPICKER_INPUTS_ENTER_HOURS = "Introduïu les hores";
	var TIMEPICKER_INPUTS_ENTER_MINUTES = "Introduïu els minuts";
	var TIMEPICKER_INPUTS_ENTER_SECONDS = "Introduïu els segons";
	var DURATION_INPUT_DESCRIPTION = "Entrada de durada";
	var DATETIME_PICKER_DATE_BUTTON = "Data";
	var DATETIME_PICKER_TIME_BUTTON = "Hora";
	var TOKEN_ARIA_DELETABLE = "Suprimible";
	var TOKEN_ARIA_LABEL = "Marca";
	var TOKENIZER_ARIA_CONTAIN_TOKEN = "Sense marques";
	var TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = "Conté 1 marca";
	var TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = "Conté {0} marques";
	var TOKENIZER_ARIA_LABEL = "Tokenizer";
	var TOKENIZER_POPOVER_REMOVE = "Tots els articles";
	var TOKENIZER_SHOW_ALL_ITEMS = "{0} elements";
	var TREE_ITEM_ARIA_LABEL = "Element d''arbre";
	var TREE_ITEM_EXPAND_NODE = "Desplegar nodes";
	var TREE_ITEM_COLLAPSE_NODE = "Comprimir nodes";
	var VALUE_STATE_TYPE_ERROR = "Estat de valor: Error";
	var VALUE_STATE_TYPE_WARNING = "Estat de valor: Advertència";
	var VALUE_STATE_TYPE_SUCCESS = "Estat de valor: Èxit";
	var VALUE_STATE_TYPE_INFORMATION = "Estat de valor: Informació";
	var VALUE_STATE_ERROR = "Entrada no vàlida";
	var VALUE_STATE_WARNING = "Advertència emesa";
	var VALUE_STATE_INFORMATION = "Entrada informativa";
	var VALUE_STATE_SUCCESS = "Entrada validada correctament";
	var CALENDAR_HEADER_NEXT_BUTTON = "Següent";
	var CALENDAR_HEADER_PREVIOUS_BUTTON = "Anterior";
	var DAY_PICKER_WEEK_NUMBER_TEXT = "Número de setmana";
	var DAY_PICKER_NON_WORKING_DAY = "Dia no laborable";
	var DAY_PICKER_TODAY = "Avui";
	var MONTH_PICKER_DESCRIPTION = "Selector de mes";
	var YEAR_PICKER_DESCRIPTION = "Selector d''any";
	var STEPINPUT_DEC_ICON_TITLE = "Reduir";
	var STEPINPUT_INC_ICON_TITLE = "Ampliar";
	var SPLIT_BUTTON_DESCRIPTION = "Polsador dividit";
	var SPLIT_BUTTON_KEYBOARD_HINT = "Premeu Espai o Intro per activar l''acció predeterminada i Alt + Fletxa avall o F4 per activar l''acció de fletxa";
	var SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP = "Obrir menú";
	var MENU_BACK_BUTTON_ARIA_LABEL = "Endarrere";
	var MENU_CLOSE_BUTTON_ARIA_LABEL = "Declinar";
	var MENU_POPOVER_ACCESSIBLE_NAME = "Seleccionar una opció del menú";
	var NAVIGATION_MENU_POPOVER_HIDDEN_TEXT = "Navegació";
	var DIALOG_HEADER_ARIA_ROLE_DESCRIPTION = "Capçalera interactiva";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE = "Utilitzeu les tecles Majús+fletxa per ajustar la mida";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE = "Utilitzeu les tecles de fletxa per desplaçar-vos";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE = "Utilitzeu les tecles de fletxa per desplaçar-vos, Majús+fletxa per ajustar la mida";
	var LABEL_COLON = ":";
	var TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL = "Opcions addicionals";
	var FORM_CHECKABLE_REQUIRED = "Marqueu aquest quadre si voleu continuar.";
	var FORM_MIXED_TEXTFIELD_REQUIRED = "Empleneu aquest camp o seleccioneu un article de la llista.";
	var FORM_SELECTABLE_REQUIRED = "Seleccioneu un article de la llista.";
	var FORM_SELECTABLE_REQUIRED2 = "Seleccioneu una d''aquestes opcions.";
	var FORM_TEXTFIELD_REQUIRED = "Empleneu aquest camp.";
	var TABLE_SELECTION = "Selecció";
	var TABLE_ROW_SELECTOR = "Selector de fila";
	var TABLE_NO_DATA = "No hi ha dades";
	var TABLE_ROW_POPIN = "Finestra de diàleg de línia";
	var TABLE_MORE = "Més";
	var TABLE_MORE_DESCRIPTION = "Carregueu més files prement Retorn o Espai";
	var messagebundle_ca = {
		ARIA_LABEL_CARD_CONTENT: ARIA_LABEL_CARD_CONTENT,
		ARIA_ROLEDESCRIPTION_CARD: ARIA_ROLEDESCRIPTION_CARD,
		ARIA_ROLEDESCRIPTION_CARD_HEADER: ARIA_ROLEDESCRIPTION_CARD_HEADER,
		ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER: ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,
		AVATAR_TOOLTIP: AVATAR_TOOLTIP,
		AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL: AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,
		AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL: AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,
		AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL: AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,
		AVATAR_GROUP_ARIA_LABEL_GROUP: AVATAR_GROUP_ARIA_LABEL_GROUP,
		AVATAR_GROUP_MOVE: AVATAR_GROUP_MOVE,
		TAG_DESCRIPTION_TAG: TAG_DESCRIPTION_TAG,
		TAG_ROLE_DESCRIPTION: TAG_ROLE_DESCRIPTION,
		TAG_ERROR: TAG_ERROR,
		TAG_WARNING: TAG_WARNING,
		TAG_SUCCESS: TAG_SUCCESS,
		TAG_INFORMATION: TAG_INFORMATION,
		BREADCRUMB_ITEM_POS: BREADCRUMB_ITEM_POS,
		BREADCRUMBS_ARIA_LABEL: BREADCRUMBS_ARIA_LABEL,
		BREADCRUMBS_OVERFLOW_ARIA_LABEL: BREADCRUMBS_OVERFLOW_ARIA_LABEL,
		BREADCRUMBS_CANCEL_BUTTON: BREADCRUMBS_CANCEL_BUTTON,
		BUSY_INDICATOR_TITLE: BUSY_INDICATOR_TITLE,
		BUTTON_ARIA_TYPE_ACCEPT: BUTTON_ARIA_TYPE_ACCEPT,
		BUTTON_ARIA_TYPE_REJECT: BUTTON_ARIA_TYPE_REJECT,
		BUTTON_ARIA_TYPE_EMPHASIZED: BUTTON_ARIA_TYPE_EMPHASIZED,
		CAL_LEGEND_TODAY_TEXT: CAL_LEGEND_TODAY_TEXT,
		CAL_LEGEND_SELECTED_TEXT: CAL_LEGEND_SELECTED_TEXT,
		CAL_LEGEND_WORKING_DAY_TEXT: CAL_LEGEND_WORKING_DAY_TEXT,
		CAL_LEGEND_NON_WORKING_DAY_TEXT: CAL_LEGEND_NON_WORKING_DAY_TEXT,
		CAROUSEL_OF_TEXT: CAROUSEL_OF_TEXT,
		CAROUSEL_DOT_TEXT: CAROUSEL_DOT_TEXT,
		CAROUSEL_PREVIOUS_ARROW_TEXT: CAROUSEL_PREVIOUS_ARROW_TEXT,
		CAROUSEL_NEXT_ARROW_TEXT: CAROUSEL_NEXT_ARROW_TEXT,
		COLORPALETTE_CONTAINER_LABEL: COLORPALETTE_CONTAINER_LABEL,
		COLORPALETTE_POPOVER_TITLE: COLORPALETTE_POPOVER_TITLE,
		COLORPALETTE_COLOR_LABEL: COLORPALETTE_COLOR_LABEL,
		COLOR_PALETTE_DIALOG_CANCEL_BUTTON: COLOR_PALETTE_DIALOG_CANCEL_BUTTON,
		COLOR_PALETTE_DIALOG_OK_BUTTON: COLOR_PALETTE_DIALOG_OK_BUTTON,
		COLOR_PALETTE_DIALOG_TITLE: COLOR_PALETTE_DIALOG_TITLE,
		COLOR_PALETTE_MORE_COLORS_TEXT: COLOR_PALETTE_MORE_COLORS_TEXT,
		COLOR_PALETTE_DEFAULT_COLOR_TEXT: COLOR_PALETTE_DEFAULT_COLOR_TEXT,
		COLORPICKER_ALPHA_SLIDER: COLORPICKER_ALPHA_SLIDER,
		COLORPICKER_HUE_SLIDER: COLORPICKER_HUE_SLIDER,
		COLORPICKER_HEX: COLORPICKER_HEX,
		COLORPICKER_RED: COLORPICKER_RED,
		COLORPICKER_GREEN: COLORPICKER_GREEN,
		COLORPICKER_BLUE: COLORPICKER_BLUE,
		COLORPICKER_ALPHA: COLORPICKER_ALPHA,
		DATEPICKER_OPEN_ICON_TITLE: DATEPICKER_OPEN_ICON_TITLE,
		DATEPICKER_DATE_DESCRIPTION: DATEPICKER_DATE_DESCRIPTION,
		DATETIME_DESCRIPTION: DATETIME_DESCRIPTION,
		DATERANGE_DESCRIPTION: DATERANGE_DESCRIPTION,
		DATEPICKER_POPOVER_ACCESSIBLE_NAME: DATEPICKER_POPOVER_ACCESSIBLE_NAME,
		DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME: DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME,
		DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME: DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME,
		DELETE: DELETE,
		EMPTY_INDICATOR_SYMBOL: EMPTY_INDICATOR_SYMBOL,
		EMPTY_INDICATOR_ACCESSIBLE_TEXT: EMPTY_INDICATOR_ACCESSIBLE_TEXT,
		FILEUPLOAD_BROWSE: FILEUPLOAD_BROWSE,
		FILEUPLOADER_TITLE: FILEUPLOADER_TITLE,
		GROUP_HEADER_TEXT: GROUP_HEADER_TEXT,
		SELECT_ROLE_DESCRIPTION: SELECT_ROLE_DESCRIPTION,
		SELECT_OPTIONS: SELECT_OPTIONS,
		SHOW_SELECTED_BUTTON: SHOW_SELECTED_BUTTON,
		INPUT_SUGGESTIONS: INPUT_SUGGESTIONS,
		MCB_SELECTED_ITEMS: MCB_SELECTED_ITEMS,
		INPUT_SUGGESTIONS_TITLE: INPUT_SUGGESTIONS_TITLE,
		INPUT_SUGGESTIONS_ONE_HIT: INPUT_SUGGESTIONS_ONE_HIT,
		INPUT_SUGGESTIONS_MORE_HITS: INPUT_SUGGESTIONS_MORE_HITS,
		INPUT_SUGGESTIONS_NO_HIT: INPUT_SUGGESTIONS_NO_HIT,
		INPUT_CLEAR_ICON_ACC_NAME: INPUT_CLEAR_ICON_ACC_NAME,
		LINK_SUBTLE: LINK_SUBTLE,
		LINK_EMPHASIZED: LINK_EMPHASIZED,
		LIST_ITEM_POSITION: LIST_ITEM_POSITION,
		LIST_ITEM_SELECTED: LIST_ITEM_SELECTED,
		LIST_ITEM_NOT_SELECTED: LIST_ITEM_NOT_SELECTED,
		LIST_ITEM_GROUP_HEADER: LIST_ITEM_GROUP_HEADER,
		ARIA_LABEL_LIST_ITEM_CHECKBOX: ARIA_LABEL_LIST_ITEM_CHECKBOX,
		ARIA_LABEL_LIST_ITEM_RADIO_BUTTON: ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,
		ARIA_LABEL_LIST_SELECTABLE: ARIA_LABEL_LIST_SELECTABLE,
		ARIA_LABEL_LIST_MULTISELECTABLE: ARIA_LABEL_LIST_MULTISELECTABLE,
		ARIA_LABEL_LIST_DELETABLE: ARIA_LABEL_LIST_DELETABLE,
		MESSAGE_STRIP_CLOSE_BUTTON: MESSAGE_STRIP_CLOSE_BUTTON,
		MESSAGE_STRIP_CLOSABLE: MESSAGE_STRIP_CLOSABLE,
		MESSAGE_STRIP_ERROR: MESSAGE_STRIP_ERROR,
		MESSAGE_STRIP_WARNING: MESSAGE_STRIP_WARNING,
		MESSAGE_STRIP_SUCCESS: MESSAGE_STRIP_SUCCESS,
		MESSAGE_STRIP_INFORMATION: MESSAGE_STRIP_INFORMATION,
		MESSAGE_STRIP_CUSTOM: MESSAGE_STRIP_CUSTOM,
		MULTICOMBOBOX_DIALOG_OK_BUTTON: MULTICOMBOBOX_DIALOG_OK_BUTTON,
		COMBOBOX_AVAILABLE_OPTIONS: COMBOBOX_AVAILABLE_OPTIONS,
		INPUT_AVALIABLE_VALUES: INPUT_AVALIABLE_VALUES,
		VALUE_STATE_ERROR_ALREADY_SELECTED: VALUE_STATE_ERROR_ALREADY_SELECTED,
		MULTIINPUT_ROLEDESCRIPTION_TEXT: MULTIINPUT_ROLEDESCRIPTION_TEXT,
		MULTIINPUT_SHOW_MORE_TOKENS: MULTIINPUT_SHOW_MORE_TOKENS,
		MULTIINPUT_VALUE_HELP_LABEL: MULTIINPUT_VALUE_HELP_LABEL,
		PANEL_ICON: PANEL_ICON,
		RANGE_SLIDER_ARIA_DESCRIPTION: RANGE_SLIDER_ARIA_DESCRIPTION,
		RANGE_SLIDER_START_HANDLE_DESCRIPTION: RANGE_SLIDER_START_HANDLE_DESCRIPTION,
		RANGE_SLIDER_END_HANDLE_DESCRIPTION: RANGE_SLIDER_END_HANDLE_DESCRIPTION,
		RATING_INDICATOR_TOOLTIP_TEXT: RATING_INDICATOR_TOOLTIP_TEXT,
		RATING_INDICATOR_TEXT: RATING_INDICATOR_TEXT,
		RATING_INDICATOR_ARIA_DESCRIPTION: RATING_INDICATOR_ARIA_DESCRIPTION,
		RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON: RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,
		SEGMENTEDBUTTON_ARIA_DESCRIPTION: SEGMENTEDBUTTON_ARIA_DESCRIPTION,
		SEGMENTEDBUTTON_ARIA_DESCRIBEDBY: SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,
		SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION: SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,
		SLIDER_ARIA_DESCRIPTION: SLIDER_ARIA_DESCRIPTION,
		LOAD_MORE_TEXT: LOAD_MORE_TEXT,
		TABLE_HEADER_ROW_INFORMATION: TABLE_HEADER_ROW_INFORMATION,
		TABLE_ROW_POSITION: TABLE_ROW_POSITION,
		TABLE_GROUP_ROW_ARIA_LABEL: TABLE_GROUP_ROW_ARIA_LABEL,
		ARIA_LABEL_ROW_SELECTION: ARIA_LABEL_ROW_SELECTION,
		ARIA_LABEL_SELECT_ALL_CHECKBOX: ARIA_LABEL_SELECT_ALL_CHECKBOX,
		ARIA_LABEL_EMPTY_CELL: ARIA_LABEL_EMPTY_CELL,
		TAB_ARIA_DESIGN_POSITIVE: TAB_ARIA_DESIGN_POSITIVE,
		TAB_ARIA_DESIGN_NEGATIVE: TAB_ARIA_DESIGN_NEGATIVE,
		TAB_ARIA_DESIGN_CRITICAL: TAB_ARIA_DESIGN_CRITICAL,
		TAB_ARIA_DESIGN_NEUTRAL: TAB_ARIA_DESIGN_NEUTRAL,
		TAB_SPLIT_ROLE_DESCRIPTION: TAB_SPLIT_ROLE_DESCRIPTION,
		TABCONTAINER_NEXT_ICON_ACC_NAME: TABCONTAINER_NEXT_ICON_ACC_NAME,
		TABCONTAINER_PREVIOUS_ICON_ACC_NAME: TABCONTAINER_PREVIOUS_ICON_ACC_NAME,
		TABCONTAINER_OVERFLOW_MENU_TITLE: TABCONTAINER_OVERFLOW_MENU_TITLE,
		TABCONTAINER_END_OVERFLOW: TABCONTAINER_END_OVERFLOW,
		TABCONTAINER_POPOVER_CANCEL_BUTTON: TABCONTAINER_POPOVER_CANCEL_BUTTON,
		TABCONTAINER_SUBTABS_DESCRIPTION: TABCONTAINER_SUBTABS_DESCRIPTION,
		TEXTAREA_CHARACTERS_LEFT: TEXTAREA_CHARACTERS_LEFT,
		TEXTAREA_CHARACTERS_EXCEEDED: TEXTAREA_CHARACTERS_EXCEEDED,
		TIMEPICKER_HOURS_LABEL: TIMEPICKER_HOURS_LABEL,
		TIMEPICKER_MINUTES_LABEL: TIMEPICKER_MINUTES_LABEL,
		TIMEPICKER_SECONDS_LABEL: TIMEPICKER_SECONDS_LABEL,
		TIMEPICKER_SUBMIT_BUTTON: TIMEPICKER_SUBMIT_BUTTON,
		TIMEPICKER_CANCEL_BUTTON: TIMEPICKER_CANCEL_BUTTON,
		TIMEPICKER_INPUT_DESCRIPTION: TIMEPICKER_INPUT_DESCRIPTION,
		TIMEPICKER_POPOVER_ACCESSIBLE_NAME: TIMEPICKER_POPOVER_ACCESSIBLE_NAME,
		TIMEPICKER_CLOCK_DIAL_LABEL: TIMEPICKER_CLOCK_DIAL_LABEL,
		TIMEPICKER_INPUTS_ENTER_HOURS: TIMEPICKER_INPUTS_ENTER_HOURS,
		TIMEPICKER_INPUTS_ENTER_MINUTES: TIMEPICKER_INPUTS_ENTER_MINUTES,
		TIMEPICKER_INPUTS_ENTER_SECONDS: TIMEPICKER_INPUTS_ENTER_SECONDS,
		DURATION_INPUT_DESCRIPTION: DURATION_INPUT_DESCRIPTION,
		DATETIME_PICKER_DATE_BUTTON: DATETIME_PICKER_DATE_BUTTON,
		DATETIME_PICKER_TIME_BUTTON: DATETIME_PICKER_TIME_BUTTON,
		TOKEN_ARIA_DELETABLE: TOKEN_ARIA_DELETABLE,
		TOKEN_ARIA_LABEL: TOKEN_ARIA_LABEL,
		TOKENIZER_ARIA_CONTAIN_TOKEN: TOKENIZER_ARIA_CONTAIN_TOKEN,
		TOKENIZER_ARIA_CONTAIN_ONE_TOKEN: TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,
		TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS: TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,
		TOKENIZER_ARIA_LABEL: TOKENIZER_ARIA_LABEL,
		TOKENIZER_POPOVER_REMOVE: TOKENIZER_POPOVER_REMOVE,
		TOKENIZER_SHOW_ALL_ITEMS: TOKENIZER_SHOW_ALL_ITEMS,
		TREE_ITEM_ARIA_LABEL: TREE_ITEM_ARIA_LABEL,
		TREE_ITEM_EXPAND_NODE: TREE_ITEM_EXPAND_NODE,
		TREE_ITEM_COLLAPSE_NODE: TREE_ITEM_COLLAPSE_NODE,
		VALUE_STATE_TYPE_ERROR: VALUE_STATE_TYPE_ERROR,
		VALUE_STATE_TYPE_WARNING: VALUE_STATE_TYPE_WARNING,
		VALUE_STATE_TYPE_SUCCESS: VALUE_STATE_TYPE_SUCCESS,
		VALUE_STATE_TYPE_INFORMATION: VALUE_STATE_TYPE_INFORMATION,
		VALUE_STATE_ERROR: VALUE_STATE_ERROR,
		VALUE_STATE_WARNING: VALUE_STATE_WARNING,
		VALUE_STATE_INFORMATION: VALUE_STATE_INFORMATION,
		VALUE_STATE_SUCCESS: VALUE_STATE_SUCCESS,
		CALENDAR_HEADER_NEXT_BUTTON: CALENDAR_HEADER_NEXT_BUTTON,
		CALENDAR_HEADER_PREVIOUS_BUTTON: CALENDAR_HEADER_PREVIOUS_BUTTON,
		DAY_PICKER_WEEK_NUMBER_TEXT: DAY_PICKER_WEEK_NUMBER_TEXT,
		DAY_PICKER_NON_WORKING_DAY: DAY_PICKER_NON_WORKING_DAY,
		DAY_PICKER_TODAY: DAY_PICKER_TODAY,
		MONTH_PICKER_DESCRIPTION: MONTH_PICKER_DESCRIPTION,
		YEAR_PICKER_DESCRIPTION: YEAR_PICKER_DESCRIPTION,
		STEPINPUT_DEC_ICON_TITLE: STEPINPUT_DEC_ICON_TITLE,
		STEPINPUT_INC_ICON_TITLE: STEPINPUT_INC_ICON_TITLE,
		SPLIT_BUTTON_DESCRIPTION: SPLIT_BUTTON_DESCRIPTION,
		SPLIT_BUTTON_KEYBOARD_HINT: SPLIT_BUTTON_KEYBOARD_HINT,
		SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP: SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP,
		MENU_BACK_BUTTON_ARIA_LABEL: MENU_BACK_BUTTON_ARIA_LABEL,
		MENU_CLOSE_BUTTON_ARIA_LABEL: MENU_CLOSE_BUTTON_ARIA_LABEL,
		MENU_POPOVER_ACCESSIBLE_NAME: MENU_POPOVER_ACCESSIBLE_NAME,
		NAVIGATION_MENU_POPOVER_HIDDEN_TEXT: NAVIGATION_MENU_POPOVER_HIDDEN_TEXT,
		DIALOG_HEADER_ARIA_ROLE_DESCRIPTION: DIALOG_HEADER_ARIA_ROLE_DESCRIPTION,
		DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE: DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE,
		DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE: DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE,
		DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE: DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE,
		LABEL_COLON: LABEL_COLON,
		TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL: TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL,
		FORM_CHECKABLE_REQUIRED: FORM_CHECKABLE_REQUIRED,
		FORM_MIXED_TEXTFIELD_REQUIRED: FORM_MIXED_TEXTFIELD_REQUIRED,
		FORM_SELECTABLE_REQUIRED: FORM_SELECTABLE_REQUIRED,
		FORM_SELECTABLE_REQUIRED2: FORM_SELECTABLE_REQUIRED2,
		FORM_TEXTFIELD_REQUIRED: FORM_TEXTFIELD_REQUIRED,
		TABLE_SELECTION: TABLE_SELECTION,
		TABLE_ROW_SELECTOR: TABLE_ROW_SELECTOR,
		TABLE_NO_DATA: TABLE_NO_DATA,
		TABLE_ROW_POPIN: TABLE_ROW_POPIN,
		TABLE_MORE: TABLE_MORE,
		TABLE_MORE_DESCRIPTION: TABLE_MORE_DESCRIPTION
	};

	exports.ARIA_LABEL_CARD_CONTENT = ARIA_LABEL_CARD_CONTENT;
	exports.ARIA_LABEL_EMPTY_CELL = ARIA_LABEL_EMPTY_CELL;
	exports.ARIA_LABEL_LIST_DELETABLE = ARIA_LABEL_LIST_DELETABLE;
	exports.ARIA_LABEL_LIST_ITEM_CHECKBOX = ARIA_LABEL_LIST_ITEM_CHECKBOX;
	exports.ARIA_LABEL_LIST_ITEM_RADIO_BUTTON = ARIA_LABEL_LIST_ITEM_RADIO_BUTTON;
	exports.ARIA_LABEL_LIST_MULTISELECTABLE = ARIA_LABEL_LIST_MULTISELECTABLE;
	exports.ARIA_LABEL_LIST_SELECTABLE = ARIA_LABEL_LIST_SELECTABLE;
	exports.ARIA_LABEL_ROW_SELECTION = ARIA_LABEL_ROW_SELECTION;
	exports.ARIA_LABEL_SELECT_ALL_CHECKBOX = ARIA_LABEL_SELECT_ALL_CHECKBOX;
	exports.ARIA_ROLEDESCRIPTION_CARD = ARIA_ROLEDESCRIPTION_CARD;
	exports.ARIA_ROLEDESCRIPTION_CARD_HEADER = ARIA_ROLEDESCRIPTION_CARD_HEADER;
	exports.ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER;
	exports.AVATAR_GROUP_ARIA_LABEL_GROUP = AVATAR_GROUP_ARIA_LABEL_GROUP;
	exports.AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL = AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL;
	exports.AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL = AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL;
	exports.AVATAR_GROUP_MOVE = AVATAR_GROUP_MOVE;
	exports.AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL = AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL;
	exports.AVATAR_TOOLTIP = AVATAR_TOOLTIP;
	exports.BREADCRUMBS_ARIA_LABEL = BREADCRUMBS_ARIA_LABEL;
	exports.BREADCRUMBS_CANCEL_BUTTON = BREADCRUMBS_CANCEL_BUTTON;
	exports.BREADCRUMBS_OVERFLOW_ARIA_LABEL = BREADCRUMBS_OVERFLOW_ARIA_LABEL;
	exports.BREADCRUMB_ITEM_POS = BREADCRUMB_ITEM_POS;
	exports.BUSY_INDICATOR_TITLE = BUSY_INDICATOR_TITLE;
	exports.BUTTON_ARIA_TYPE_ACCEPT = BUTTON_ARIA_TYPE_ACCEPT;
	exports.BUTTON_ARIA_TYPE_EMPHASIZED = BUTTON_ARIA_TYPE_EMPHASIZED;
	exports.BUTTON_ARIA_TYPE_REJECT = BUTTON_ARIA_TYPE_REJECT;
	exports.CALENDAR_HEADER_NEXT_BUTTON = CALENDAR_HEADER_NEXT_BUTTON;
	exports.CALENDAR_HEADER_PREVIOUS_BUTTON = CALENDAR_HEADER_PREVIOUS_BUTTON;
	exports.CAL_LEGEND_NON_WORKING_DAY_TEXT = CAL_LEGEND_NON_WORKING_DAY_TEXT;
	exports.CAL_LEGEND_SELECTED_TEXT = CAL_LEGEND_SELECTED_TEXT;
	exports.CAL_LEGEND_TODAY_TEXT = CAL_LEGEND_TODAY_TEXT;
	exports.CAL_LEGEND_WORKING_DAY_TEXT = CAL_LEGEND_WORKING_DAY_TEXT;
	exports.CAROUSEL_DOT_TEXT = CAROUSEL_DOT_TEXT;
	exports.CAROUSEL_NEXT_ARROW_TEXT = CAROUSEL_NEXT_ARROW_TEXT;
	exports.CAROUSEL_OF_TEXT = CAROUSEL_OF_TEXT;
	exports.CAROUSEL_PREVIOUS_ARROW_TEXT = CAROUSEL_PREVIOUS_ARROW_TEXT;
	exports.COLORPALETTE_COLOR_LABEL = COLORPALETTE_COLOR_LABEL;
	exports.COLORPALETTE_CONTAINER_LABEL = COLORPALETTE_CONTAINER_LABEL;
	exports.COLORPALETTE_POPOVER_TITLE = COLORPALETTE_POPOVER_TITLE;
	exports.COLORPICKER_ALPHA = COLORPICKER_ALPHA;
	exports.COLORPICKER_ALPHA_SLIDER = COLORPICKER_ALPHA_SLIDER;
	exports.COLORPICKER_BLUE = COLORPICKER_BLUE;
	exports.COLORPICKER_GREEN = COLORPICKER_GREEN;
	exports.COLORPICKER_HEX = COLORPICKER_HEX;
	exports.COLORPICKER_HUE_SLIDER = COLORPICKER_HUE_SLIDER;
	exports.COLORPICKER_RED = COLORPICKER_RED;
	exports.COLOR_PALETTE_DEFAULT_COLOR_TEXT = COLOR_PALETTE_DEFAULT_COLOR_TEXT;
	exports.COLOR_PALETTE_DIALOG_CANCEL_BUTTON = COLOR_PALETTE_DIALOG_CANCEL_BUTTON;
	exports.COLOR_PALETTE_DIALOG_OK_BUTTON = COLOR_PALETTE_DIALOG_OK_BUTTON;
	exports.COLOR_PALETTE_DIALOG_TITLE = COLOR_PALETTE_DIALOG_TITLE;
	exports.COLOR_PALETTE_MORE_COLORS_TEXT = COLOR_PALETTE_MORE_COLORS_TEXT;
	exports.COMBOBOX_AVAILABLE_OPTIONS = COMBOBOX_AVAILABLE_OPTIONS;
	exports.DATEPICKER_DATE_DESCRIPTION = DATEPICKER_DATE_DESCRIPTION;
	exports.DATEPICKER_OPEN_ICON_TITLE = DATEPICKER_OPEN_ICON_TITLE;
	exports.DATEPICKER_POPOVER_ACCESSIBLE_NAME = DATEPICKER_POPOVER_ACCESSIBLE_NAME;
	exports.DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME = DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME;
	exports.DATERANGE_DESCRIPTION = DATERANGE_DESCRIPTION;
	exports.DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME = DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME;
	exports.DATETIME_DESCRIPTION = DATETIME_DESCRIPTION;
	exports.DATETIME_PICKER_DATE_BUTTON = DATETIME_PICKER_DATE_BUTTON;
	exports.DATETIME_PICKER_TIME_BUTTON = DATETIME_PICKER_TIME_BUTTON;
	exports.DAY_PICKER_NON_WORKING_DAY = DAY_PICKER_NON_WORKING_DAY;
	exports.DAY_PICKER_TODAY = DAY_PICKER_TODAY;
	exports.DAY_PICKER_WEEK_NUMBER_TEXT = DAY_PICKER_WEEK_NUMBER_TEXT;
	exports.DELETE = DELETE;
	exports.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE = DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE;
	exports.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE = DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE;
	exports.DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE = DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE;
	exports.DIALOG_HEADER_ARIA_ROLE_DESCRIPTION = DIALOG_HEADER_ARIA_ROLE_DESCRIPTION;
	exports.DURATION_INPUT_DESCRIPTION = DURATION_INPUT_DESCRIPTION;
	exports.EMPTY_INDICATOR_ACCESSIBLE_TEXT = EMPTY_INDICATOR_ACCESSIBLE_TEXT;
	exports.EMPTY_INDICATOR_SYMBOL = EMPTY_INDICATOR_SYMBOL;
	exports.FILEUPLOADER_TITLE = FILEUPLOADER_TITLE;
	exports.FILEUPLOAD_BROWSE = FILEUPLOAD_BROWSE;
	exports.FORM_CHECKABLE_REQUIRED = FORM_CHECKABLE_REQUIRED;
	exports.FORM_MIXED_TEXTFIELD_REQUIRED = FORM_MIXED_TEXTFIELD_REQUIRED;
	exports.FORM_SELECTABLE_REQUIRED = FORM_SELECTABLE_REQUIRED;
	exports.FORM_SELECTABLE_REQUIRED2 = FORM_SELECTABLE_REQUIRED2;
	exports.FORM_TEXTFIELD_REQUIRED = FORM_TEXTFIELD_REQUIRED;
	exports.GROUP_HEADER_TEXT = GROUP_HEADER_TEXT;
	exports.INPUT_AVALIABLE_VALUES = INPUT_AVALIABLE_VALUES;
	exports.INPUT_CLEAR_ICON_ACC_NAME = INPUT_CLEAR_ICON_ACC_NAME;
	exports.INPUT_SUGGESTIONS = INPUT_SUGGESTIONS;
	exports.INPUT_SUGGESTIONS_MORE_HITS = INPUT_SUGGESTIONS_MORE_HITS;
	exports.INPUT_SUGGESTIONS_NO_HIT = INPUT_SUGGESTIONS_NO_HIT;
	exports.INPUT_SUGGESTIONS_ONE_HIT = INPUT_SUGGESTIONS_ONE_HIT;
	exports.INPUT_SUGGESTIONS_TITLE = INPUT_SUGGESTIONS_TITLE;
	exports.LABEL_COLON = LABEL_COLON;
	exports.LINK_EMPHASIZED = LINK_EMPHASIZED;
	exports.LINK_SUBTLE = LINK_SUBTLE;
	exports.LIST_ITEM_GROUP_HEADER = LIST_ITEM_GROUP_HEADER;
	exports.LIST_ITEM_NOT_SELECTED = LIST_ITEM_NOT_SELECTED;
	exports.LIST_ITEM_POSITION = LIST_ITEM_POSITION;
	exports.LIST_ITEM_SELECTED = LIST_ITEM_SELECTED;
	exports.LOAD_MORE_TEXT = LOAD_MORE_TEXT;
	exports.MCB_SELECTED_ITEMS = MCB_SELECTED_ITEMS;
	exports.MENU_BACK_BUTTON_ARIA_LABEL = MENU_BACK_BUTTON_ARIA_LABEL;
	exports.MENU_CLOSE_BUTTON_ARIA_LABEL = MENU_CLOSE_BUTTON_ARIA_LABEL;
	exports.MENU_POPOVER_ACCESSIBLE_NAME = MENU_POPOVER_ACCESSIBLE_NAME;
	exports.MESSAGE_STRIP_CLOSABLE = MESSAGE_STRIP_CLOSABLE;
	exports.MESSAGE_STRIP_CLOSE_BUTTON = MESSAGE_STRIP_CLOSE_BUTTON;
	exports.MESSAGE_STRIP_CUSTOM = MESSAGE_STRIP_CUSTOM;
	exports.MESSAGE_STRIP_ERROR = MESSAGE_STRIP_ERROR;
	exports.MESSAGE_STRIP_INFORMATION = MESSAGE_STRIP_INFORMATION;
	exports.MESSAGE_STRIP_SUCCESS = MESSAGE_STRIP_SUCCESS;
	exports.MESSAGE_STRIP_WARNING = MESSAGE_STRIP_WARNING;
	exports.MONTH_PICKER_DESCRIPTION = MONTH_PICKER_DESCRIPTION;
	exports.MULTICOMBOBOX_DIALOG_OK_BUTTON = MULTICOMBOBOX_DIALOG_OK_BUTTON;
	exports.MULTIINPUT_ROLEDESCRIPTION_TEXT = MULTIINPUT_ROLEDESCRIPTION_TEXT;
	exports.MULTIINPUT_SHOW_MORE_TOKENS = MULTIINPUT_SHOW_MORE_TOKENS;
	exports.MULTIINPUT_VALUE_HELP_LABEL = MULTIINPUT_VALUE_HELP_LABEL;
	exports.NAVIGATION_MENU_POPOVER_HIDDEN_TEXT = NAVIGATION_MENU_POPOVER_HIDDEN_TEXT;
	exports.PANEL_ICON = PANEL_ICON;
	exports.RANGE_SLIDER_ARIA_DESCRIPTION = RANGE_SLIDER_ARIA_DESCRIPTION;
	exports.RANGE_SLIDER_END_HANDLE_DESCRIPTION = RANGE_SLIDER_END_HANDLE_DESCRIPTION;
	exports.RANGE_SLIDER_START_HANDLE_DESCRIPTION = RANGE_SLIDER_START_HANDLE_DESCRIPTION;
	exports.RATING_INDICATOR_ARIA_DESCRIPTION = RATING_INDICATOR_ARIA_DESCRIPTION;
	exports.RATING_INDICATOR_TEXT = RATING_INDICATOR_TEXT;
	exports.RATING_INDICATOR_TOOLTIP_TEXT = RATING_INDICATOR_TOOLTIP_TEXT;
	exports.RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON;
	exports.SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION = SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION;
	exports.SEGMENTEDBUTTON_ARIA_DESCRIBEDBY = SEGMENTEDBUTTON_ARIA_DESCRIBEDBY;
	exports.SEGMENTEDBUTTON_ARIA_DESCRIPTION = SEGMENTEDBUTTON_ARIA_DESCRIPTION;
	exports.SELECT_OPTIONS = SELECT_OPTIONS;
	exports.SELECT_ROLE_DESCRIPTION = SELECT_ROLE_DESCRIPTION;
	exports.SHOW_SELECTED_BUTTON = SHOW_SELECTED_BUTTON;
	exports.SLIDER_ARIA_DESCRIPTION = SLIDER_ARIA_DESCRIPTION;
	exports.SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP = SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP;
	exports.SPLIT_BUTTON_DESCRIPTION = SPLIT_BUTTON_DESCRIPTION;
	exports.SPLIT_BUTTON_KEYBOARD_HINT = SPLIT_BUTTON_KEYBOARD_HINT;
	exports.STEPINPUT_DEC_ICON_TITLE = STEPINPUT_DEC_ICON_TITLE;
	exports.STEPINPUT_INC_ICON_TITLE = STEPINPUT_INC_ICON_TITLE;
	exports.TABCONTAINER_END_OVERFLOW = TABCONTAINER_END_OVERFLOW;
	exports.TABCONTAINER_NEXT_ICON_ACC_NAME = TABCONTAINER_NEXT_ICON_ACC_NAME;
	exports.TABCONTAINER_OVERFLOW_MENU_TITLE = TABCONTAINER_OVERFLOW_MENU_TITLE;
	exports.TABCONTAINER_POPOVER_CANCEL_BUTTON = TABCONTAINER_POPOVER_CANCEL_BUTTON;
	exports.TABCONTAINER_PREVIOUS_ICON_ACC_NAME = TABCONTAINER_PREVIOUS_ICON_ACC_NAME;
	exports.TABCONTAINER_SUBTABS_DESCRIPTION = TABCONTAINER_SUBTABS_DESCRIPTION;
	exports.TABLE_GROUP_ROW_ARIA_LABEL = TABLE_GROUP_ROW_ARIA_LABEL;
	exports.TABLE_HEADER_ROW_INFORMATION = TABLE_HEADER_ROW_INFORMATION;
	exports.TABLE_MORE = TABLE_MORE;
	exports.TABLE_MORE_DESCRIPTION = TABLE_MORE_DESCRIPTION;
	exports.TABLE_NO_DATA = TABLE_NO_DATA;
	exports.TABLE_ROW_POPIN = TABLE_ROW_POPIN;
	exports.TABLE_ROW_POSITION = TABLE_ROW_POSITION;
	exports.TABLE_ROW_SELECTOR = TABLE_ROW_SELECTOR;
	exports.TABLE_SELECTION = TABLE_SELECTION;
	exports.TAB_ARIA_DESIGN_CRITICAL = TAB_ARIA_DESIGN_CRITICAL;
	exports.TAB_ARIA_DESIGN_NEGATIVE = TAB_ARIA_DESIGN_NEGATIVE;
	exports.TAB_ARIA_DESIGN_NEUTRAL = TAB_ARIA_DESIGN_NEUTRAL;
	exports.TAB_ARIA_DESIGN_POSITIVE = TAB_ARIA_DESIGN_POSITIVE;
	exports.TAB_SPLIT_ROLE_DESCRIPTION = TAB_SPLIT_ROLE_DESCRIPTION;
	exports.TAG_DESCRIPTION_TAG = TAG_DESCRIPTION_TAG;
	exports.TAG_ERROR = TAG_ERROR;
	exports.TAG_INFORMATION = TAG_INFORMATION;
	exports.TAG_ROLE_DESCRIPTION = TAG_ROLE_DESCRIPTION;
	exports.TAG_SUCCESS = TAG_SUCCESS;
	exports.TAG_WARNING = TAG_WARNING;
	exports.TEXTAREA_CHARACTERS_EXCEEDED = TEXTAREA_CHARACTERS_EXCEEDED;
	exports.TEXTAREA_CHARACTERS_LEFT = TEXTAREA_CHARACTERS_LEFT;
	exports.TIMEPICKER_CANCEL_BUTTON = TIMEPICKER_CANCEL_BUTTON;
	exports.TIMEPICKER_CLOCK_DIAL_LABEL = TIMEPICKER_CLOCK_DIAL_LABEL;
	exports.TIMEPICKER_HOURS_LABEL = TIMEPICKER_HOURS_LABEL;
	exports.TIMEPICKER_INPUTS_ENTER_HOURS = TIMEPICKER_INPUTS_ENTER_HOURS;
	exports.TIMEPICKER_INPUTS_ENTER_MINUTES = TIMEPICKER_INPUTS_ENTER_MINUTES;
	exports.TIMEPICKER_INPUTS_ENTER_SECONDS = TIMEPICKER_INPUTS_ENTER_SECONDS;
	exports.TIMEPICKER_INPUT_DESCRIPTION = TIMEPICKER_INPUT_DESCRIPTION;
	exports.TIMEPICKER_MINUTES_LABEL = TIMEPICKER_MINUTES_LABEL;
	exports.TIMEPICKER_POPOVER_ACCESSIBLE_NAME = TIMEPICKER_POPOVER_ACCESSIBLE_NAME;
	exports.TIMEPICKER_SECONDS_LABEL = TIMEPICKER_SECONDS_LABEL;
	exports.TIMEPICKER_SUBMIT_BUTTON = TIMEPICKER_SUBMIT_BUTTON;
	exports.TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = TOKENIZER_ARIA_CONTAIN_ONE_TOKEN;
	exports.TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS;
	exports.TOKENIZER_ARIA_CONTAIN_TOKEN = TOKENIZER_ARIA_CONTAIN_TOKEN;
	exports.TOKENIZER_ARIA_LABEL = TOKENIZER_ARIA_LABEL;
	exports.TOKENIZER_POPOVER_REMOVE = TOKENIZER_POPOVER_REMOVE;
	exports.TOKENIZER_SHOW_ALL_ITEMS = TOKENIZER_SHOW_ALL_ITEMS;
	exports.TOKEN_ARIA_DELETABLE = TOKEN_ARIA_DELETABLE;
	exports.TOKEN_ARIA_LABEL = TOKEN_ARIA_LABEL;
	exports.TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL = TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL;
	exports.TREE_ITEM_ARIA_LABEL = TREE_ITEM_ARIA_LABEL;
	exports.TREE_ITEM_COLLAPSE_NODE = TREE_ITEM_COLLAPSE_NODE;
	exports.TREE_ITEM_EXPAND_NODE = TREE_ITEM_EXPAND_NODE;
	exports.VALUE_STATE_ERROR = VALUE_STATE_ERROR;
	exports.VALUE_STATE_ERROR_ALREADY_SELECTED = VALUE_STATE_ERROR_ALREADY_SELECTED;
	exports.VALUE_STATE_INFORMATION = VALUE_STATE_INFORMATION;
	exports.VALUE_STATE_SUCCESS = VALUE_STATE_SUCCESS;
	exports.VALUE_STATE_TYPE_ERROR = VALUE_STATE_TYPE_ERROR;
	exports.VALUE_STATE_TYPE_INFORMATION = VALUE_STATE_TYPE_INFORMATION;
	exports.VALUE_STATE_TYPE_SUCCESS = VALUE_STATE_TYPE_SUCCESS;
	exports.VALUE_STATE_TYPE_WARNING = VALUE_STATE_TYPE_WARNING;
	exports.VALUE_STATE_WARNING = VALUE_STATE_WARNING;
	exports.YEAR_PICKER_DESCRIPTION = YEAR_PICKER_DESCRIPTION;
	exports.default = messagebundle_ca;

}));
