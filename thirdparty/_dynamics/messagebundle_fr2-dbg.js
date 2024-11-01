sap.ui.define(['exports'], (function (exports) { 'use strict';

	var ARIA_LABEL_CARD_CONTENT = "Contenu de la carte";
	var ARIA_ROLEDESCRIPTION_CARD = "Carte";
	var ARIA_ROLEDESCRIPTION_CARD_HEADER = "En-tête carte";
	var ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = "En-tête de carte interactive";
	var AVATAR_TOOLTIP = "Avatar";
	var AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL = "{0} Affiché(e), {1} masqué(e).";
	var AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL = "Activer pour la liste complète";
	var AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL = "Avatars individuels";
	var AVATAR_GROUP_ARIA_LABEL_GROUP = "Avatars communs";
	var AVATAR_GROUP_MOVE = "Appuyez sur les touche de direction pour déplacer.";
	var TAG_DESCRIPTION_TAG = "Étiquette";
	var TAG_ROLE_DESCRIPTION = "Bouton Étiquette";
	var TAG_ERROR = "Erreur";
	var TAG_WARNING = "Avertissement";
	var TAG_SUCCESS = "Réussite";
	var TAG_INFORMATION = "Informations";
	var BREADCRUMB_ITEM_POS = "{0} de {1}";
	var BREADCRUMBS_ARIA_LABEL = "Chemin de navigation";
	var BREADCRUMBS_OVERFLOW_ARIA_LABEL = "Plus";
	var BREADCRUMBS_CANCEL_BUTTON = "Annuler";
	var BUSY_INDICATOR_TITLE = "Patientez.";
	var BUTTON_ARIA_TYPE_ACCEPT = "Action positive";
	var BUTTON_ARIA_TYPE_REJECT = "Action négative";
	var BUTTON_ARIA_TYPE_EMPHASIZED = "Mis en surbrillance";
	var CAL_LEGEND_TODAY_TEXT = "Aujourd''hui";
	var CAL_LEGEND_SELECTED_TEXT = "Jour sélectionné";
	var CAL_LEGEND_WORKING_DAY_TEXT = "Jour ouvré";
	var CAL_LEGEND_NON_WORKING_DAY_TEXT = "Jour chômé";
	var CAROUSEL_OF_TEXT = "du";
	var CAROUSEL_DOT_TEXT = "Élément {0}/{1} affiché";
	var CAROUSEL_PREVIOUS_ARROW_TEXT = "Page précédente";
	var CAROUSEL_NEXT_ARROW_TEXT = "Page suivante";
	var COLORPALETTE_CONTAINER_LABEL = "Palette de couleurs - couleurs prédéfinies";
	var COLORPALETTE_POPOVER_TITLE = "Palette de couleurs";
	var COLORPALETTE_COLOR_LABEL = "Couleur";
	var COLOR_PALETTE_DIALOG_CANCEL_BUTTON = "Interrompre";
	var COLOR_PALETTE_DIALOG_OK_BUTTON = "OK";
	var COLOR_PALETTE_DIALOG_TITLE = "Modifier couleur";
	var COLOR_PALETTE_MORE_COLORS_TEXT = "Plus de couleurs...";
	var COLOR_PALETTE_DEFAULT_COLOR_TEXT = "Couleur par défaut";
	var COLORPICKER_ALPHA_SLIDER = "Contrôle alpha";
	var COLORPICKER_HUE_SLIDER = "Contrôle teinte";
	var COLORPICKER_HEX = "Hexadécimal";
	var COLORPICKER_RED = "Rouge";
	var COLORPICKER_GREEN = "Vert";
	var COLORPICKER_BLUE = "Bleu";
	var COLORPICKER_ALPHA = "Alpha";
	var DATEPICKER_OPEN_ICON_TITLE = "Ouvrir sélecteur";
	var DATEPICKER_DATE_DESCRIPTION = "Saisie de date";
	var DATETIME_DESCRIPTION = "Saisie date/heure";
	var DATERANGE_DESCRIPTION = "Saisie de plage de dates";
	var DATEPICKER_POPOVER_ACCESSIBLE_NAME = "Sélectionner une date";
	var DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME = "Sélectionner une date et une heure";
	var DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME = "Sélectionner une plage de dates";
	var DELETE = "Supprimer";
	var EMPTY_INDICATOR_SYMBOL = "–";
	var EMPTY_INDICATOR_ACCESSIBLE_TEXT = "Valeur vide";
	var FILEUPLOAD_BROWSE = "Parcourir...";
	var FILEUPLOADER_TITLE = "Charger fichier";
	var GROUP_HEADER_TEXT = "En-tête du groupe";
	var SELECT_ROLE_DESCRIPTION = "Zone de liste";
	var SELECT_OPTIONS = "Sélectionner options";
	var SHOW_SELECTED_BUTTON = "Afficher les éléments sélectionnés uniquement";
	var INPUT_SUGGESTIONS = "Propositions disponibles";
	var MCB_SELECTED_ITEMS = "Sélectionner tout ({0} sur {1})";
	var INPUT_SUGGESTIONS_TITLE = "Sélectionner";
	var INPUT_SUGGESTIONS_ONE_HIT = "1 résultat disponible";
	var INPUT_SUGGESTIONS_MORE_HITS = "{0} résultats sont disponibles.";
	var INPUT_SUGGESTIONS_NO_HIT = "Aucun résultat";
	var INPUT_CLEAR_ICON_ACC_NAME = "Réinitialiser";
	var LINK_SUBTLE = "Subtil";
	var LINK_EMPHASIZED = "Mis en surbrillance";
	var LIST_ITEM_POSITION = "Élément de liste {0}/{1}";
	var LIST_ITEM_SELECTED = "Sélectionné";
	var LIST_ITEM_NOT_SELECTED = "Non sélectionné";
	var LIST_ITEM_GROUP_HEADER = "En-tête du groupe";
	var ARIA_LABEL_LIST_ITEM_CHECKBOX = "Mode sélection multiple";
	var ARIA_LABEL_LIST_ITEM_RADIO_BUTTON = "Sélection d''élément";
	var ARIA_LABEL_LIST_SELECTABLE = "Contient des éléments sélectionnables.";
	var ARIA_LABEL_LIST_MULTISELECTABLE = "Contient des éléments pour sélection multiple.";
	var ARIA_LABEL_LIST_DELETABLE = "Contient des éléments supprimables.";
	var MESSAGE_STRIP_CLOSE_BUTTON = "Fermer barre d''informations";
	var MESSAGE_STRIP_CLOSABLE = "Refermable";
	var MESSAGE_STRIP_ERROR = "Barre d''informations d''erreur";
	var MESSAGE_STRIP_WARNING = "Barre d''informations d''avertissement";
	var MESSAGE_STRIP_SUCCESS = "Barre d''informations de réussite";
	var MESSAGE_STRIP_INFORMATION = "Barre d''informations";
	var MESSAGE_STRIP_CUSTOM = "Barre d''informations personnalisée";
	var MULTICOMBOBOX_DIALOG_OK_BUTTON = "OK";
	var COMBOBOX_AVAILABLE_OPTIONS = "Options disponibles";
	var INPUT_AVALIABLE_VALUES = "Valeurs disponibles";
	var VALUE_STATE_ERROR_ALREADY_SELECTED = "Valeur déjà sélectionnée";
	var MULTIINPUT_ROLEDESCRIPTION_TEXT = "Saisie multivaleurs";
	var MULTIINPUT_SHOW_MORE_TOKENS = "{0} en plus";
	var MULTIINPUT_VALUE_HELP_LABEL = "Afficher l''aide à la saisie";
	var PANEL_ICON = "Développer/Réduire";
	var RANGE_SLIDER_ARIA_DESCRIPTION = "Plage";
	var RANGE_SLIDER_START_HANDLE_DESCRIPTION = "Curseur gauche";
	var RANGE_SLIDER_END_HANDLE_DESCRIPTION = "Curseur droit";
	var RATING_INDICATOR_TOOLTIP_TEXT = "Évaluation";
	var RATING_INDICATOR_TEXT = "Étoiles d''évaluation";
	var RATING_INDICATOR_ARIA_DESCRIPTION = "Requis";
	var RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = "Refuser";
	var SEGMENTEDBUTTON_ARIA_DESCRIPTION = "Groupe de boutons segmentés";
	var SEGMENTEDBUTTON_ARIA_DESCRIBEDBY = "Appuyer sur ESPACE ou ENTRÉE pour sélectionner un élément";
	var SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION = "Bouton segmenté";
	var SLIDER_ARIA_DESCRIPTION = "Poignée du curseur";
	var LOAD_MORE_TEXT = "Plus";
	var TABLE_HEADER_ROW_INFORMATION = "Ligne d''en tête 1/{0}";
	var TABLE_ROW_POSITION = "{0} de {1}";
	var TABLE_GROUP_ROW_ARIA_LABEL = "Ligne d''en-tête de groupe";
	var ARIA_LABEL_ROW_SELECTION = "Sélection d''élément";
	var ARIA_LABEL_SELECT_ALL_CHECKBOX = "Sélectionner toutes les lignes";
	var ARIA_LABEL_EMPTY_CELL = "Vide";
	var TAB_ARIA_DESIGN_POSITIVE = "Positif";
	var TAB_ARIA_DESIGN_NEGATIVE = "Négatif";
	var TAB_ARIA_DESIGN_CRITICAL = "Critique";
	var TAB_ARIA_DESIGN_NEUTRAL = "Neutre";
	var TAB_SPLIT_ROLE_DESCRIPTION = "Onglet avec sous-éléments";
	var TABCONTAINER_NEXT_ICON_ACC_NAME = "Suivant";
	var TABCONTAINER_PREVIOUS_ICON_ACC_NAME = "Précédent";
	var TABCONTAINER_OVERFLOW_MENU_TITLE = "Menu de débordement";
	var TABCONTAINER_END_OVERFLOW = "Plus";
	var TABCONTAINER_POPOVER_CANCEL_BUTTON = "Annuler";
	var TABCONTAINER_SUBTABS_DESCRIPTION = "Appuyez sur la touche de direction BAS pour ouvrir le menu des sous-éléments.";
	var TEXTAREA_CHARACTERS_LEFT = "{0} caractères restants";
	var TEXTAREA_CHARACTERS_EXCEEDED = "{0} caractères en trop";
	var TIMEPICKER_HOURS_LABEL = "Heures";
	var TIMEPICKER_MINUTES_LABEL = "Minutes";
	var TIMEPICKER_SECONDS_LABEL = "Secondes";
	var TIMEPICKER_SUBMIT_BUTTON = "OK";
	var TIMEPICKER_CANCEL_BUTTON = "Annuler";
	var TIMEPICKER_INPUT_DESCRIPTION = "Saisie de l''heure";
	var TIMEPICKER_POPOVER_ACCESSIBLE_NAME = "Sélectionner une heure";
	var TIMEPICKER_CLOCK_DIAL_LABEL = "Cadran horloge";
	var TIMEPICKER_INPUTS_ENTER_HOURS = "Entrez les heures.";
	var TIMEPICKER_INPUTS_ENTER_MINUTES = "Entrez les minutes.";
	var TIMEPICKER_INPUTS_ENTER_SECONDS = "Entrez les secondes.";
	var DURATION_INPUT_DESCRIPTION = "Saisie de la durée";
	var DATETIME_PICKER_DATE_BUTTON = "Date";
	var DATETIME_PICKER_TIME_BUTTON = "Heure";
	var TOKEN_ARIA_DELETABLE = "Suppression possible";
	var TOKEN_ARIA_LABEL = "Jeton";
	var TOKENIZER_ARIA_CONTAIN_TOKEN = "Aucun jeton";
	var TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = "Contient 1 jeton.";
	var TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = "Contient {0} jetons";
	var TOKENIZER_ARIA_LABEL = "Générateur de jetons";
	var TOKENIZER_POPOVER_REMOVE = "Tous les éléments";
	var TOKENIZER_SHOW_ALL_ITEMS = "{0} éléments";
	var TREE_ITEM_ARIA_LABEL = "Élément d''arborescence";
	var TREE_ITEM_EXPAND_NODE = "Développer noeud";
	var TREE_ITEM_COLLAPSE_NODE = "Réduire noeud";
	var VALUE_STATE_TYPE_ERROR = "Erreur de statut de valeur";
	var VALUE_STATE_TYPE_WARNING = "Statut de valeur Avertissement";
	var VALUE_STATE_TYPE_SUCCESS = "Statut de valeur Réussite";
	var VALUE_STATE_TYPE_INFORMATION = "Statut de valeur Information";
	var VALUE_STATE_ERROR = "Entrée non valide";
	var VALUE_STATE_WARNING = "Avertissement édité";
	var VALUE_STATE_INFORMATION = "Entrée pour information";
	var VALUE_STATE_SUCCESS = "Entrée validée correctement";
	var CALENDAR_HEADER_NEXT_BUTTON = "Suivant";
	var CALENDAR_HEADER_PREVIOUS_BUTTON = "Précédent";
	var DAY_PICKER_WEEK_NUMBER_TEXT = "Numéro de semaine";
	var DAY_PICKER_NON_WORKING_DAY = "Jour chômé";
	var DAY_PICKER_TODAY = "Aujourd''hui";
	var MONTH_PICKER_DESCRIPTION = "Sélecteur de mois";
	var YEAR_PICKER_DESCRIPTION = "Sélecteur d''année";
	var STEPINPUT_DEC_ICON_TITLE = "Diminuer";
	var STEPINPUT_INC_ICON_TITLE = "Augmenter";
	var SPLIT_BUTTON_DESCRIPTION = "Bouton de fractionnement";
	var SPLIT_BUTTON_KEYBOARD_HINT = "Appuyez sur la barre d''espacement ou sur la touche Entrée pour déclencher l''action par défaut, puis sur Alt + touche fléchée vers le bas ou F4 pour déclencher l''action.";
	var SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP = "Ouvrir le menu";
	var MENU_BACK_BUTTON_ARIA_LABEL = "Retour";
	var MENU_CLOSE_BUTTON_ARIA_LABEL = "Refuser";
	var MENU_POPOVER_ACCESSIBLE_NAME = "Sélectionner une option dans le menu";
	var NAVIGATION_MENU_POPOVER_HIDDEN_TEXT = "Navigation";
	var DIALOG_HEADER_ARIA_ROLE_DESCRIPTION = "En-tête interactif";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE = "Utiliser Maj+touches de direction pour redimensionner";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE = "Utiliser touches de direction pour déplacer";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE = "Utiliser touches de direction pour déplacer et Maj+touches de direction pour redimensionner";
	var LABEL_COLON = ":";
	var TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL = "Options supplémentaires";
	var FORM_CHECKABLE_REQUIRED = "Cochez cette case si vous voulez poursuivre.";
	var FORM_MIXED_TEXTFIELD_REQUIRED = "Renseignez cette zone ou sélectionnez un élément dans la liste.";
	var FORM_SELECTABLE_REQUIRED = "Sélectionnez un élément dans la liste.";
	var FORM_SELECTABLE_REQUIRED2 = "Sélectionnez l''une de ces options.";
	var FORM_TEXTFIELD_REQUIRED = "Renseignez cette zone.";
	var TABLE_SELECTION = "Sélection";
	var TABLE_ROW_SELECTOR = "Sélecteur de ligne";
	var TABLE_NO_DATA = "Aucune donnée";
	var TABLE_ROW_POPIN = "Boîte de dialogue de ligne";
	var TABLE_MORE = "Plus";
	var TABLE_MORE_DESCRIPTION = "Charger d''autres lignes en appuyant sur Entrée ou Espace";
	var messagebundle_fr = {
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
	exports.default = messagebundle_fr;

}));
