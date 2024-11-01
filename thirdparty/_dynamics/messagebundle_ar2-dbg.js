sap.ui.define(['exports'], (function (exports) { 'use strict';

	var ARIA_LABEL_CARD_CONTENT = "محتوى البطاقة";
	var ARIA_ROLEDESCRIPTION_CARD = "البطاقة";
	var ARIA_ROLEDESCRIPTION_CARD_HEADER = "مقدمة البطاقة";
	var ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = "مقدمة بطاقة تفاعلية";
	var AVATAR_TOOLTIP = "صورة رمزية (أفاتار)";
	var AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL = "{0} معروض، {1} مخفي.";
	var AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL = "قم بالتنشيط للقائمة بأكملها.";
	var AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL = "الأفاتارز الفردية.";
	var AVATAR_GROUP_ARIA_LABEL_GROUP = "الأفاتارز المربوطة.";
	var AVATAR_GROUP_MOVE = "اضغط على مفاتيح الأسهم للنقل.";
	var TAG_DESCRIPTION_TAG = "علامة";
	var TAG_ROLE_DESCRIPTION = "زر العلامة";
	var TAG_ERROR = "خطأ";
	var TAG_WARNING = "تحذير";
	var TAG_SUCCESS = "نجاح";
	var TAG_INFORMATION = "معلومات";
	var BREADCRUMB_ITEM_POS = "{0} من {1}";
	var BREADCRUMBS_ARIA_LABEL = "مسار التنقل";
	var BREADCRUMBS_OVERFLOW_ARIA_LABEL = "المزيد";
	var BREADCRUMBS_CANCEL_BUTTON = "إلغاء";
	var BUSY_INDICATOR_TITLE = "الرجاء الانتظار";
	var BUTTON_ARIA_TYPE_ACCEPT = "إجراء موجب";
	var BUTTON_ARIA_TYPE_REJECT = "إجراء سالب";
	var BUTTON_ARIA_TYPE_EMPHASIZED = "مؤكد";
	var CAL_LEGEND_TODAY_TEXT = "اليوم";
	var CAL_LEGEND_SELECTED_TEXT = "اليوم المحدد";
	var CAL_LEGEND_WORKING_DAY_TEXT = "يوم عمل";
	var CAL_LEGEND_NON_WORKING_DAY_TEXT = "يوم عطلة";
	var CAROUSEL_OF_TEXT = "من";
	var CAROUSEL_DOT_TEXT = "تم عرض {0} من {1}";
	var CAROUSEL_PREVIOUS_ARROW_TEXT = "الصفحة السابقة";
	var CAROUSEL_NEXT_ARROW_TEXT = "الصفحة التالية";
	var COLORPALETTE_CONTAINER_LABEL = "لوحة الألوان - الألوان المحددة مسبقًا";
	var COLORPALETTE_POPOVER_TITLE = "لوحة الألوان";
	var COLORPALETTE_COLOR_LABEL = "اللون";
	var COLOR_PALETTE_DIALOG_CANCEL_BUTTON = "إلغاء";
	var COLOR_PALETTE_DIALOG_OK_BUTTON = "موافق";
	var COLOR_PALETTE_DIALOG_TITLE = "تغيير اللون";
	var COLOR_PALETTE_MORE_COLORS_TEXT = "مزيد من الألوان...";
	var COLOR_PALETTE_DEFAULT_COLOR_TEXT = "اللون الافتراضي";
	var COLORPICKER_ALPHA_SLIDER = "عنصر تحكم ألفا";
	var COLORPICKER_HUE_SLIDER = "عنصر تحكم تدرج اللون";
	var COLORPICKER_HEX = "ست عشري";
	var COLORPICKER_RED = "أحمر";
	var COLORPICKER_GREEN = "أخضر";
	var COLORPICKER_BLUE = "أزرق";
	var COLORPICKER_ALPHA = "ألفا";
	var DATEPICKER_OPEN_ICON_TITLE = "فتح أداة الانتقاء";
	var DATEPICKER_DATE_DESCRIPTION = "إدخال التاريخ";
	var DATETIME_DESCRIPTION = "إدخال التاريخ/الوقت";
	var DATERANGE_DESCRIPTION = "إدخال نطاق التواريخ";
	var DATEPICKER_POPOVER_ACCESSIBLE_NAME = "اختيار التاريخ";
	var DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME = "اختيار التاريخ والوقت";
	var DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME = "اختيار نطاق التواريخ";
	var DELETE = "حذف";
	var EMPTY_INDICATOR_SYMBOL = "–";
	var EMPTY_INDICATOR_ACCESSIBLE_TEXT = "قيمة فارغة";
	var FILEUPLOAD_BROWSE = "استعراض...";
	var FILEUPLOADER_TITLE = "تحميل ملف";
	var GROUP_HEADER_TEXT = "مقدمة المجموعة";
	var SELECT_ROLE_DESCRIPTION = "مربع القائمة";
	var SELECT_OPTIONS = "تحديد الخيارات";
	var SHOW_SELECTED_BUTTON = "إظهار البنود المحددة فقط";
	var INPUT_SUGGESTIONS = "اقترحات متوفرة";
	var MCB_SELECTED_ITEMS = "تحديد الكل ({0} من أصل {1})";
	var INPUT_SUGGESTIONS_TITLE = "تحديد";
	var INPUT_SUGGESTIONS_ONE_HIT = "النتيجة المتوفرة: 1";
	var INPUT_SUGGESTIONS_MORE_HITS = "{0} النتائج متوفرة";
	var INPUT_SUGGESTIONS_NO_HIT = "لا توجد نتائج";
	var INPUT_CLEAR_ICON_ACC_NAME = "مسح";
	var LINK_SUBTLE = "غامض";
	var LINK_EMPHASIZED = "مؤكد";
	var LIST_ITEM_POSITION = "بند القائمة {0} لـ {1}";
	var LIST_ITEM_SELECTED = "محدد";
	var LIST_ITEM_NOT_SELECTED = "غير محدد";
	var LIST_ITEM_GROUP_HEADER = "مقدمة المجموعة";
	var ARIA_LABEL_LIST_ITEM_CHECKBOX = "نمط التحديد المتعدد";
	var ARIA_LABEL_LIST_ITEM_RADIO_BUTTON = "تحديد البنود.";
	var ARIA_LABEL_LIST_SELECTABLE = "توجد بنود قابلة للتحديد";
	var ARIA_LABEL_LIST_MULTISELECTABLE = "توجد بنود قابلة لتحديد متعدد";
	var ARIA_LABEL_LIST_DELETABLE = "توجد بنود قابلة للحذف";
	var MESSAGE_STRIP_CLOSE_BUTTON = "إغلاق شريط المعلومات";
	var MESSAGE_STRIP_CLOSABLE = "ممكن إغلاقه";
	var MESSAGE_STRIP_ERROR = "شريط معلومات الخطأ";
	var MESSAGE_STRIP_WARNING = "شريط معلومات التحذير";
	var MESSAGE_STRIP_SUCCESS = "شريط معلومات النجاح";
	var MESSAGE_STRIP_INFORMATION = "شريط المعلومات";
	var MESSAGE_STRIP_CUSTOM = "شريط المعلومات المخصص";
	var MULTICOMBOBOX_DIALOG_OK_BUTTON = "موافق";
	var COMBOBOX_AVAILABLE_OPTIONS = "الخيارات المتوفرة";
	var INPUT_AVALIABLE_VALUES = "القيم المتوفرة";
	var VALUE_STATE_ERROR_ALREADY_SELECTED = "هذه القيمة محددة بالفعل.";
	var MULTIINPUT_ROLEDESCRIPTION_TEXT = "إدخال متعدد القيمة";
	var MULTIINPUT_SHOW_MORE_TOKENS = "{0} إضافي";
	var MULTIINPUT_VALUE_HELP_LABEL = "إظهار مساعدة الإدخال";
	var PANEL_ICON = "توسيع/طي";
	var RANGE_SLIDER_ARIA_DESCRIPTION = "النطاق";
	var RANGE_SLIDER_START_HANDLE_DESCRIPTION = "المؤشر الأيمن";
	var RANGE_SLIDER_END_HANDLE_DESCRIPTION = "المؤشر الأيسر";
	var RATING_INDICATOR_TOOLTIP_TEXT = "التصنيف";
	var RATING_INDICATOR_TEXT = "مؤشر التقييم";
	var RATING_INDICATOR_ARIA_DESCRIPTION = "مطلوب";
	var RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = "رفض";
	var SEGMENTEDBUTTON_ARIA_DESCRIPTION = "مجموعة الأزرار المقسَّمة";
	var SEGMENTEDBUTTON_ARIA_DESCRIBEDBY = "اضغط على SPACE أو ENTER لتحديد أحد البنود";
	var SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION = "الزر المقسَّم";
	var SLIDER_ARIA_DESCRIPTION = "مؤشر مربع التمرير";
	var LOAD_MORE_TEXT = "المزيد";
	var TABLE_HEADER_ROW_INFORMATION = "صف المقدمة 1 من أصل {0}";
	var TABLE_ROW_POSITION = "{0} من {1}";
	var TABLE_GROUP_ROW_ARIA_LABEL = "صف مقدمة المجموعة";
	var ARIA_LABEL_ROW_SELECTION = "تحديد البنود";
	var ARIA_LABEL_SELECT_ALL_CHECKBOX = "تحديد كل الصفوف";
	var ARIA_LABEL_EMPTY_CELL = "فارغ";
	var TAB_ARIA_DESIGN_POSITIVE = "إيجابية";
	var TAB_ARIA_DESIGN_NEGATIVE = "سلبية";
	var TAB_ARIA_DESIGN_CRITICAL = "مهم";
	var TAB_ARIA_DESIGN_NEUTRAL = "محايد";
	var TAB_SPLIT_ROLE_DESCRIPTION = "علامة تبويب بالبنود الفرعية";
	var TABCONTAINER_NEXT_ICON_ACC_NAME = "التالي";
	var TABCONTAINER_PREVIOUS_ICON_ACC_NAME = "السابق";
	var TABCONTAINER_OVERFLOW_MENU_TITLE = "قائمة التدفق";
	var TABCONTAINER_END_OVERFLOW = "المزيد";
	var TABCONTAINER_POPOVER_CANCEL_BUTTON = "إلغاء";
	var TABCONTAINER_SUBTABS_DESCRIPTION = "اضغط على مفتاح السهم لأسفل لفتح قائمة البنود الفرعية";
	var TEXTAREA_CHARACTERS_LEFT = "متبق {0} من الحروف";
	var TEXTAREA_CHARACTERS_EXCEEDED = "تم تجاوز الحد بمقدار {0} من الحروف";
	var TIMEPICKER_HOURS_LABEL = "الساعات";
	var TIMEPICKER_MINUTES_LABEL = "الدقائق";
	var TIMEPICKER_SECONDS_LABEL = "الثواني";
	var TIMEPICKER_SUBMIT_BUTTON = "موافق";
	var TIMEPICKER_CANCEL_BUTTON = "إلغاء";
	var TIMEPICKER_INPUT_DESCRIPTION = "إدخال الوقت";
	var TIMEPICKER_POPOVER_ACCESSIBLE_NAME = "اختيار الوقت";
	var TIMEPICKER_CLOCK_DIAL_LABEL = "طلب الساعة";
	var TIMEPICKER_INPUTS_ENTER_HOURS = "يُرجى إدخال الساعات";
	var TIMEPICKER_INPUTS_ENTER_MINUTES = "يُرجى إدخال الدقائق";
	var TIMEPICKER_INPUTS_ENTER_SECONDS = "يُرجى إدخال الثواني";
	var DURATION_INPUT_DESCRIPTION = "إدخال المدة";
	var DATETIME_PICKER_DATE_BUTTON = "التاريخ";
	var DATETIME_PICKER_TIME_BUTTON = "الوقت";
	var TOKEN_ARIA_DELETABLE = "قابل للحذف";
	var TOKEN_ARIA_LABEL = "الرمز المميز";
	var TOKENIZER_ARIA_CONTAIN_TOKEN = "لا توجد رموز مميزة";
	var TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = "يتضمن رمز مميز واحد";
	var TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = "يحتوى على {0} من الرموز المميزة";
	var TOKENIZER_ARIA_LABEL = "عارض الرموز المميزة";
	var TOKENIZER_POPOVER_REMOVE = "كل البنود";
	var TOKENIZER_SHOW_ALL_ITEMS = "{0} من البنود";
	var TREE_ITEM_ARIA_LABEL = "عنصر الشجرة";
	var TREE_ITEM_EXPAND_NODE = "توسيع العقدة";
	var TREE_ITEM_COLLAPSE_NODE = "طي العقدة";
	var VALUE_STATE_TYPE_ERROR = "حالة القيمة ’خطأ‘";
	var VALUE_STATE_TYPE_WARNING = "حالة القيمة ’تحذير‘";
	var VALUE_STATE_TYPE_SUCCESS = "حالة القيمة ناجح";
	var VALUE_STATE_TYPE_INFORMATION = "حالة القيمة ’معلومات‘";
	var VALUE_STATE_ERROR = "إدخال غير صالح";
	var VALUE_STATE_WARNING = "تم إصدار تحذير";
	var VALUE_STATE_INFORMATION = "إدخال معلوماتي";
	var VALUE_STATE_SUCCESS = "تم التحقق من صحة الإدخال بنجاح";
	var CALENDAR_HEADER_NEXT_BUTTON = "التالي";
	var CALENDAR_HEADER_PREVIOUS_BUTTON = "السابق";
	var DAY_PICKER_WEEK_NUMBER_TEXT = "رقم الأسبوع";
	var DAY_PICKER_NON_WORKING_DAY = "يوم عطلة";
	var DAY_PICKER_TODAY = "اليوم";
	var MONTH_PICKER_DESCRIPTION = "أداة انتقاء الشهر";
	var YEAR_PICKER_DESCRIPTION = "أداة انتقاء السنة";
	var STEPINPUT_DEC_ICON_TITLE = "تخفيض";
	var STEPINPUT_INC_ICON_TITLE = "زيادة";
	var SPLIT_BUTTON_DESCRIPTION = "زر التقسيم";
	var SPLIT_BUTTON_KEYBOARD_HINT = "اضغط على Space أو Enter لبدء تشغيل الإجراء الافتراضي وAlt + Arrow Down أو F4 لبدء تشغيل إجراء السهم";
	var SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP = "فتح القائمة";
	var MENU_BACK_BUTTON_ARIA_LABEL = "الخلف";
	var MENU_CLOSE_BUTTON_ARIA_LABEL = "رفض";
	var MENU_POPOVER_ACCESSIBLE_NAME = "حدد خيارًا من القائمة";
	var NAVIGATION_MENU_POPOVER_HIDDEN_TEXT = "تنقل";
	var DIALOG_HEADER_ARIA_ROLE_DESCRIPTION = "مقدمة تفاعلية";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE = "استخدام مفاتيح Shift+Arrow لتغيير الحجم";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE = "استخدام مفاتيح الأسهم للانتقال";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE = "استخدام مفاتيح الأسهم للانتقال، مفاتيح Shift+Arrow لتغيير الحجم";
	var LABEL_COLON = ":";
	var TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL = "خيارات إضافية";
	var FORM_CHECKABLE_REQUIRED = "يرجى وضع علامة على هذا المربع إذا كنت تريد المتابعة.";
	var FORM_MIXED_TEXTFIELD_REQUIRED = "يرجى ملء هذا الحقل أو تحديد بند في القائمة.";
	var FORM_SELECTABLE_REQUIRED = "يرجى تحديد بند في القائمة.";
	var FORM_SELECTABLE_REQUIRED2 = "يرجى تحديد أحد هذه الخيارات.";
	var FORM_TEXTFIELD_REQUIRED = "يرجى ملء هذا الحقل.";
	var TABLE_SELECTION = "التحديد";
	var TABLE_ROW_SELECTOR = "مُحدِّد أولي";
	var TABLE_NO_DATA = "لا توجد بيانات";
	var TABLE_ROW_POPIN = "منطقة إدخال الصف";
	var TABLE_MORE = "المزيد";
	var TABLE_MORE_DESCRIPTION = "حمِّل المزيد من الصفوف بالضغط على Enter أو Space";
	var messagebundle_ar = {
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
	exports.default = messagebundle_ar;

}));