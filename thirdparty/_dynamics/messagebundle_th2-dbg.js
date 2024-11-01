sap.ui.define(['exports'], (function (exports) { 'use strict';

	var ARIA_LABEL_CARD_CONTENT = "เนื้อหาของบัตร";
	var ARIA_ROLEDESCRIPTION_CARD = "บัตร";
	var ARIA_ROLEDESCRIPTION_CARD_HEADER = "ส่วนหัวของบัตร";
	var ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = "ส่วนหัวของบัตรแบบอินเตอร์แอคทีฟ";
	var AVATAR_TOOLTIP = "ภาพสัญลักษณ์";
	var AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL = "แสดง {0}, ซ่อน {1}";
	var AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL = "เปิดใช้งานสำหรับรายการทั้งหมด";
	var AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL = "ภาพสัญลักษณ์รายบุคคล";
	var AVATAR_GROUP_ARIA_LABEL_GROUP = "ภาพสัญลักษณ์แบบกลุ่ม";
	var AVATAR_GROUP_MOVE = "กดแป้นลูกศรเพื่อย้าย";
	var TAG_DESCRIPTION_TAG = "แท็ก";
	var TAG_ROLE_DESCRIPTION = "ปุ่มแท็ก";
	var TAG_ERROR = "ข้อผิดพลาด";
	var TAG_WARNING = "คำเตือน";
	var TAG_SUCCESS = "สำเร็จ";
	var TAG_INFORMATION = "ข้อมูล";
	var BREADCRUMB_ITEM_POS = "{0} จาก {1}";
	var BREADCRUMBS_ARIA_LABEL = "Breadcrumb Trail";
	var BREADCRUMBS_OVERFLOW_ARIA_LABEL = "เพิ่มเติม";
	var BREADCRUMBS_CANCEL_BUTTON = "ยกเลิก";
	var BUSY_INDICATOR_TITLE = "กรุณารอสักครู่";
	var BUTTON_ARIA_TYPE_ACCEPT = "การดำเนินการเชิงบวก";
	var BUTTON_ARIA_TYPE_REJECT = "การดำเนินการเชิงลบ";
	var BUTTON_ARIA_TYPE_EMPHASIZED = "เน้น";
	var CAL_LEGEND_TODAY_TEXT = "วันนี้";
	var CAL_LEGEND_SELECTED_TEXT = "วันที่เลือก";
	var CAL_LEGEND_WORKING_DAY_TEXT = "วันทำงาน";
	var CAL_LEGEND_NON_WORKING_DAY_TEXT = "วันหยุดงาน";
	var CAROUSEL_OF_TEXT = "ของ";
	var CAROUSEL_DOT_TEXT = "แสดง {0} จาก {1} รายการ";
	var CAROUSEL_PREVIOUS_ARROW_TEXT = "หน้าก่อน";
	var CAROUSEL_NEXT_ARROW_TEXT = "หน้าถัดไป";
	var COLORPALETTE_CONTAINER_LABEL = "ชุดแบบสี - สีที่กำหนดไว้ล่วงหน้า";
	var COLORPALETTE_POPOVER_TITLE = "ชุดแบบสี";
	var COLORPALETTE_COLOR_LABEL = "สี";
	var COLOR_PALETTE_DIALOG_CANCEL_BUTTON = "ยกเลิก";
	var COLOR_PALETTE_DIALOG_OK_BUTTON = "ตกลง";
	var COLOR_PALETTE_DIALOG_TITLE = "เปลี่ยนสี";
	var COLOR_PALETTE_MORE_COLORS_TEXT = "สีเพิ่มเติม...";
	var COLOR_PALETTE_DEFAULT_COLOR_TEXT = "สีตั้งต้น";
	var COLORPICKER_ALPHA_SLIDER = "ตัวควบคุม Alpha";
	var COLORPICKER_HUE_SLIDER = "ตัวควบคุมสีสัน";
	var COLORPICKER_HEX = "เลขฐานสิบหก";
	var COLORPICKER_RED = "แดง";
	var COLORPICKER_GREEN = "เขียว";
	var COLORPICKER_BLUE = "น้ำเงิน";
	var COLORPICKER_ALPHA = "อัลฟา";
	var DATEPICKER_OPEN_ICON_TITLE = "เปิดตัวเลือก";
	var DATEPICKER_DATE_DESCRIPTION = "การป้อนข้อมูลวันที่";
	var DATETIME_DESCRIPTION = "การป้อนข้อมูลวันที่/เวลา";
	var DATERANGE_DESCRIPTION = "การป้อนข้อมูลช่วงวันที่";
	var DATEPICKER_POPOVER_ACCESSIBLE_NAME = "เลือกวันที่";
	var DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME = "เลือกวันที่และเวลา";
	var DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME = "เลือกช่วงวันที่";
	var DELETE = "ลบ";
	var EMPTY_INDICATOR_SYMBOL = "–";
	var EMPTY_INDICATOR_ACCESSIBLE_TEXT = "ค่าว่าง";
	var FILEUPLOAD_BROWSE = "บราวซ์...";
	var FILEUPLOADER_TITLE = "อัพโหลดไฟล์";
	var GROUP_HEADER_TEXT = "ส่วนหัวของกลุ่ม";
	var SELECT_ROLE_DESCRIPTION = "ลิสต์บ็อกซ์";
	var SELECT_OPTIONS = "เลือกตัวเลือก";
	var SHOW_SELECTED_BUTTON = "แสดงรายการที่เลือกเท่านั้น";
	var INPUT_SUGGESTIONS = "มีคำแนะนำ";
	var MCB_SELECTED_ITEMS = "เลือกทั้งหมด ({0} จาก {1})";
	var INPUT_SUGGESTIONS_TITLE = "เลือก";
	var INPUT_SUGGESTIONS_ONE_HIT = "มี 1 ผลลัพธ์";
	var INPUT_SUGGESTIONS_MORE_HITS = "มีผลลัพธ์ {0} รายการ";
	var INPUT_SUGGESTIONS_NO_HIT = "ไม่มีผลลัพธ์";
	var INPUT_CLEAR_ICON_ACC_NAME = "ล้าง";
	var LINK_SUBTLE = "ละเอียด";
	var LINK_EMPHASIZED = "เน้น";
	var LIST_ITEM_POSITION = "รายการในลิสต์ {0} จาก {1}";
	var LIST_ITEM_SELECTED = "ที่เลือก";
	var LIST_ITEM_NOT_SELECTED = "ไม่ได้เลือก";
	var LIST_ITEM_GROUP_HEADER = "ส่วนหัวของกลุ่ม";
	var ARIA_LABEL_LIST_ITEM_CHECKBOX = "โหมดการเลือกหลายรายการ";
	var ARIA_LABEL_LIST_ITEM_RADIO_BUTTON = "การเลือกรายการ";
	var ARIA_LABEL_LIST_SELECTABLE = "มีรายการที่เลือกได้";
	var ARIA_LABEL_LIST_MULTISELECTABLE = "มีรายการที่สามารถเลือกได้หลายรายการ";
	var ARIA_LABEL_LIST_DELETABLE = "มีรายการที่สามารถลบได้";
	var MESSAGE_STRIP_CLOSE_BUTTON = "ปิดแถบข้อความ";
	var MESSAGE_STRIP_CLOSABLE = "สามารถปิดได้";
	var MESSAGE_STRIP_ERROR = "แถบข้อมูลข้อผิดพลาด";
	var MESSAGE_STRIP_WARNING = "แถบข้อมูลคำเตือน";
	var MESSAGE_STRIP_SUCCESS = "แถบข้อมูลความสำเร็จ";
	var MESSAGE_STRIP_INFORMATION = "แถบข้อมูล";
	var MESSAGE_STRIP_CUSTOM = "แถบข้อมูลที่ปรับแต่งได้";
	var MULTICOMBOBOX_DIALOG_OK_BUTTON = "ตกลง";
	var COMBOBOX_AVAILABLE_OPTIONS = "ตัวเลือกที่มีอยู่";
	var INPUT_AVALIABLE_VALUES = "ค่าที่มีอยู่";
	var VALUE_STATE_ERROR_ALREADY_SELECTED = "ค่านี้ถูกเลือกแล้ว";
	var MULTIINPUT_ROLEDESCRIPTION_TEXT = "การป้อนค่าหลายค่า";
	var MULTIINPUT_SHOW_MORE_TOKENS = "อีก {0} รายการ";
	var MULTIINPUT_VALUE_HELP_LABEL = "แสดงตัวช่วยการป้อนข้อมูล";
	var PANEL_ICON = "ขยาย/ย่อรวม";
	var RANGE_SLIDER_ARIA_DESCRIPTION = "ช่วง";
	var RANGE_SLIDER_START_HANDLE_DESCRIPTION = "ตัวจัดการด้านซ้าย";
	var RANGE_SLIDER_END_HANDLE_DESCRIPTION = "ตัวจัดการด้านขวา";
	var RATING_INDICATOR_TOOLTIP_TEXT = "การจัดอันดับ";
	var RATING_INDICATOR_TEXT = "ตัวบ่งชี้การจัดอันดับ";
	var RATING_INDICATOR_ARIA_DESCRIPTION = "ต้องระบุ";
	var RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = "ปฏิเสธ";
	var SEGMENTEDBUTTON_ARIA_DESCRIPTION = "กลุ่มปุ่มที่แบ่งเซกเมนต์";
	var SEGMENTEDBUTTON_ARIA_DESCRIBEDBY = "กด SPACE หรือ ENTER เพื่อเลือกรายการ";
	var SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION = "ปุ่มที่แบ่งเซกเมนต์";
	var SLIDER_ARIA_DESCRIPTION = "ตัวจัดการแถบเลื่อน";
	var LOAD_MORE_TEXT = "เพิ่มเติม";
	var TABLE_HEADER_ROW_INFORMATION = "แถวส่วนหัว 1 จาก {0}";
	var TABLE_ROW_POSITION = "{0} จาก {1}";
	var TABLE_GROUP_ROW_ARIA_LABEL = "แถวส่วนหัวของกลุ่ม";
	var ARIA_LABEL_ROW_SELECTION = "การเลือกรายการ";
	var ARIA_LABEL_SELECT_ALL_CHECKBOX = "เลือกแถวทั้งหมด";
	var ARIA_LABEL_EMPTY_CELL = "ว่าง";
	var TAB_ARIA_DESIGN_POSITIVE = "เชิงบวก";
	var TAB_ARIA_DESIGN_NEGATIVE = "เชิงลบ";
	var TAB_ARIA_DESIGN_CRITICAL = "วิกฤต";
	var TAB_ARIA_DESIGN_NEUTRAL = "เป็นกลาง";
	var TAB_SPLIT_ROLE_DESCRIPTION = "แท็บที่มีรายการย่อย";
	var TABCONTAINER_NEXT_ICON_ACC_NAME = "ถัดไป";
	var TABCONTAINER_PREVIOUS_ICON_ACC_NAME = "ก่อนหน้า";
	var TABCONTAINER_OVERFLOW_MENU_TITLE = "เมนูที่มีข้อมูลมากเกินไป";
	var TABCONTAINER_END_OVERFLOW = "เพิ่มเติม";
	var TABCONTAINER_POPOVER_CANCEL_BUTTON = "ยกเลิก";
	var TABCONTAINER_SUBTABS_DESCRIPTION = "กดปุ่มลูกศรลงเพื่อเปิดเมนูรายการย่อย";
	var TEXTAREA_CHARACTERS_LEFT = "เหลืออีก {0} อักขระ";
	var TEXTAREA_CHARACTERS_EXCEEDED = "เกินมา {0} อักขระ";
	var TIMEPICKER_HOURS_LABEL = "ชั่วโมง";
	var TIMEPICKER_MINUTES_LABEL = "นาที";
	var TIMEPICKER_SECONDS_LABEL = "วินาที";
	var TIMEPICKER_SUBMIT_BUTTON = "ตกลง";
	var TIMEPICKER_CANCEL_BUTTON = "ยกเลิก";
	var TIMEPICKER_INPUT_DESCRIPTION = "การป้อนข้อมูลเวลา";
	var TIMEPICKER_POPOVER_ACCESSIBLE_NAME = "เลือกเวลา";
	var TIMEPICKER_CLOCK_DIAL_LABEL = "หน้าปัดนาฬิกา";
	var TIMEPICKER_INPUTS_ENTER_HOURS = "กรุณาป้อนชั่วโมง";
	var TIMEPICKER_INPUTS_ENTER_MINUTES = "กรุณาป้อนนาที";
	var TIMEPICKER_INPUTS_ENTER_SECONDS = "กรุณาป้อนวินาที";
	var DURATION_INPUT_DESCRIPTION = "การป้อนข้อมูลระยะเวลา";
	var DATETIME_PICKER_DATE_BUTTON = "วันที่";
	var DATETIME_PICKER_TIME_BUTTON = "เวลา";
	var TOKEN_ARIA_DELETABLE = "สามารถลบได้";
	var TOKEN_ARIA_LABEL = "Token";
	var TOKENIZER_ARIA_CONTAIN_TOKEN = "ไม่มี Token";
	var TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = "มี 1 Token";
	var TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = "มี {0} Token";
	var TOKENIZER_ARIA_LABEL = "Tokenizer";
	var TOKENIZER_POPOVER_REMOVE = "ไอเท็มทั้งหมด";
	var TOKENIZER_SHOW_ALL_ITEMS = "{0} รายการ";
	var TREE_ITEM_ARIA_LABEL = "รายการทรี";
	var TREE_ITEM_EXPAND_NODE = "ขยายโหนด";
	var TREE_ITEM_COLLAPSE_NODE = "ย่อรวมโหนด";
	var VALUE_STATE_TYPE_ERROR = "สถานะของค่า - ผิดพลาด";
	var VALUE_STATE_TYPE_WARNING = "สถานะของค่า - คำเตือน";
	var VALUE_STATE_TYPE_SUCCESS = "สถานะของค่า - สำเร็จ";
	var VALUE_STATE_TYPE_INFORMATION = "สถานะของค่า - ข้อมูล";
	var VALUE_STATE_ERROR = "การป้อนข้อมูลไม่ถูกต้อง";
	var VALUE_STATE_WARNING = "ออกการแจ้งเตือนแล้ว";
	var VALUE_STATE_INFORMATION = "รายการที่ให้ข้อมูล";
	var VALUE_STATE_SUCCESS = "ตรวจสอบรายการได้สำเร็จ";
	var CALENDAR_HEADER_NEXT_BUTTON = "ถัดไป";
	var CALENDAR_HEADER_PREVIOUS_BUTTON = "ก่อนหน้า";
	var DAY_PICKER_WEEK_NUMBER_TEXT = "เลขที่สัปดาห์";
	var DAY_PICKER_NON_WORKING_DAY = "วันที่ไม่ใช่วันทำการ";
	var DAY_PICKER_TODAY = "วันนี้";
	var MONTH_PICKER_DESCRIPTION = "ตัวเลือกเดือน";
	var YEAR_PICKER_DESCRIPTION = "ตัวเลือกปี";
	var STEPINPUT_DEC_ICON_TITLE = "ลด";
	var STEPINPUT_INC_ICON_TITLE = "เพิ่ม";
	var SPLIT_BUTTON_DESCRIPTION = "ปุ่ม ''แยก''";
	var SPLIT_BUTTON_KEYBOARD_HINT = "กด Space หรือ Enter เพื่อทริกเกอร์การดำเนินการตั้งต้นแล้วกด Alt + ลูกศรลง หรือ F4 เพื่อทริกเกอร์การดำเนินการของลูกศร";
	var SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP = "เปิดเมนู";
	var MENU_BACK_BUTTON_ARIA_LABEL = "ย้อนกลับ";
	var MENU_CLOSE_BUTTON_ARIA_LABEL = "ปฏิเสธ";
	var MENU_POPOVER_ACCESSIBLE_NAME = "เลือกตัวเลือกจากเมนู";
	var NAVIGATION_MENU_POPOVER_HIDDEN_TEXT = "การเนวิเกต";
	var DIALOG_HEADER_ARIA_ROLE_DESCRIPTION = "ส่วนหัวแบบอินเตอร์แอคทีฟ";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE = "ใช้แป้น Shift+ลูกศรเพื่อปรับขนาด";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE = "ใช้แป้นลูกศรเพื่อย้าย";
	var DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE = "ใช้แป้นลูกศรเพื่อย้าย ใช้แป้น Shift+ลูกศรเพื่อปรับขนาด";
	var LABEL_COLON = ":";
	var TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL = "ตัวเลือกเพิ่มเติม";
	var FORM_CHECKABLE_REQUIRED = "กรุณาเลือกเช็คบ็อกซ์นี้ถ้าคุณต้องการดำเนินการต่อ";
	var FORM_MIXED_TEXTFIELD_REQUIRED = "กรุณาเติมข้อมูลในฟิลด์นี้หรือเลือกรายการในลิสต์";
	var FORM_SELECTABLE_REQUIRED = "กรุณาเลือกรายการในลิสต์";
	var FORM_SELECTABLE_REQUIRED2 = "กรุณาเลือกตัวเลือกใดตัวเลือกหนึ่งต่อไปนี้";
	var FORM_TEXTFIELD_REQUIRED = "กรุณาเติมข้อมูลในฟิลด์นี้";
	var TABLE_SELECTION = "การเลือก";
	var TABLE_ROW_SELECTOR = "ตัวเลือกแถว";
	var TABLE_NO_DATA = "ไม่มีข้อมูล";
	var TABLE_ROW_POPIN = "ป็อปอินของแถว";
	var TABLE_MORE = "เพิ่มเติม";
	var TABLE_MORE_DESCRIPTION = "โหลดแถวเพิ่มเติมโดยการกด Enter หรือ Spacebar";
	var messagebundle_th = {
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
	exports.default = messagebundle_th;

}));