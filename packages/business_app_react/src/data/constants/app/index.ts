/**
 * The file contents for the application constants.
 * All the global or application level constants must be place here.
 */

// import HTTP_CONSTANTS from "../http";

const APP_CONSTANTS = {
  /**
     Defines constant value for different environment type that will be used
     by config/environment/index.js
   */
  ENVIRONMENT: {
    DEV: "dev",
    PROD: "prod",
    QA: "qa",
    STAGE: "stage",
  },
  LOGGER: {
    /**
     * Defines constant value for logger event that will used by request and
     * response interception to log http event info.
     */
    EVENT: {
      HTTP_REQUEST: "onHttpRequest",
      HTTP_RESPONSE: "onHttpResponse",
    },
    /**
     * Defines constant value for log level for logger.
     */
    LEVEL: {
      INFO: "info",
      WARNING: "warning",
      ERROR: "error",
    },
    /**
     * Defines constant value for whitelisted http statuses as INFO for logger.
     * Every other error statuses will be considered as errors by logger.
     */
    // INFO_STATUSES: [HTTP_CONSTANTS.STATUS_CODES.UNAUTHORIZED],
  },
  /**
     Defines constant value for http method that will be used by http service.
   */
  HTTP: {
    METHOD: {
      GET: "GET",
      POST: "POST",
      PUT: "PUT",
      DELETE: "DELETE",
      PATCH: "PATCH",
    },
  },
  /**
     Defines constant value for error type that will be used by error boundary
     for error classification.
   */
  ERROR_TYPE: {
    BackendError: "BackendError",
    FrontendError: "FrontendError",
    UnknownError: "UnknownError",
  },

  /**
    Defines constant value for route type that will be used by route handler for authentication.
  */
  ROUTE_TYPES: {
    PUBLIC: "publicRoute",
    PROTECTED: "protectedRoute",
  },
  PREVIOUS_TRANSITION: {
    STORAGE_KEY: "previousTransition",
  },
  THEME: {
    DARK: "DARK",
    DEFAULT: "DEFAULT",
  },
  ASSET_MODEL_LAYOUT: {
    id: "assetModelLayout",
    margin: [16, 16],
    breakpoints: {
      lg: 1919,
    },
    cols: {
      lg: 12,
    },
    layouts: {
      lg: [
        { i: "card1", x: 0, y: 0, w: 3, h: 3.3, static: true },
        { i: "card2", x: 3, y: 0, w: 9, h: 3.3, static: true },
      ],
    },
  },
  ASSET_LIST_LAYOUT: {
    id: "assetListLayout",
    margin: [8, 16],
    breakpoints: {
      lg: 1919,
    },
    cols: {
      lg: 12,
    },
    layouts: {
      lg: [
        { i: "card1", x: 0, y: 0, w: 3, h: 3.5, static: true },
        { i: "cardX", x: 3, y: 0, w: 9, h: 3.5, static: true },
        { i: "card5", x: 0, y: 0, w: 12, h: 5, static: true },
      ],
    },
  },
  ASSET_LIST_LAYOUT_SINGLE: {
    id: "assetListLayoutSingle",
    margin: [16, 16],
    breakpoints: {
      lg: 1919,
    },
    cols: {
      lg: 6,
    },
    layouts: {
      lg: [{ i: "card1", x: 0, y: 0, w: 1.8, h: 3.5, static: true }],
    },
  },

  COMMON_GRID_LAYOUT: {
    id: "commonGridLayout",
    margin: [16, 16],
    breakpoints: {
      lg: 1919,
    },
    cols: {
      lg: 4,
    },
    layouts: {
      lg: [{ i: "card3", x: 0, y: 0, w: 5, h: 4.5, static: true }],
    },
  },
  CONFIGURATION_MODEL: {
    id: "configurationModel",
    breakpoints: {
      lg: 1700,
    },
    cols: {
      lg: 4,
    },
    layouts: {
      lg: [
        { i: "card1", x: 0, y: 0, w: 1.05, h: 3.3, static: true },
        { i: "card2", x: 1.084, y: 0, w: 1.8, h: 3.3, static: true },
        { i: "card3", x: 2.92, y: 0, w: 1.05, h: 3.3, static: true },
      ],
    },
  },
  ASSET_MODEL_NAV: ["Breadcrumb", "Breadcrumb", "Current nav"],

  dropdownOptionsFMEA: [
    { label: "Asset Model", value: "AM" },
    { label: "Asset System Position Model", value: "ASPM" },
  ],

  dropdownOptionsRMModel: [
    { label: "Asset System Position Model", value: "ASPM" },
    { label: "Asset Model", value: "AM" },
  ],

  dropdownOptionsRMDashboard: [
    { label: "Asset System Position", value: "ASP" },
    { label: "Asset Model", value: "AM" },
  ],

  dropdownOptionsRMBrowserWithAspm: [
    { label: "Asset Model", value: "AM" },
    { label: "Asset System Position", value: "ASP" },
    { label: "Asset System Position Model", value: "ASPM" },
  ],

  dropdownOptionsRMBrowserWithoutASP: [
    { label: "Asset Model", value: "AM" },
    { label: "Asset System Position Model", value: "ASPM" },
  ],

  dropdownOptionsRMBrowser: [
    { label: "Asset Model", value: "AM" },
    { label: "Asset System Position", value: "ASP" },
  ],

  breadCrumbItemsRM: {
    dashboard: ["headerTitle", "dashboard"],
    modelManagement: ["headerTitle", "modelManagement"],
    browser: ["headerTitle", "assetsBrowser"],
  },

  breadCrumbItemsFMEA: {
    management: [
      "breadcrumbs.management.fmeaAndFmeca",
      "breadcrumbs.management.management",
    ],
    browser: [
      "fmeaBrowser.breadcrumbs.browser.fmeaAndFmeca",
      "fmeaBrowser.breadcrumbs.browser.browser",
    ],
    import: ["import.importHistory"],
  },

  EOF_CARD: {
    defaultDropDown: [
      {
        label: "955553-Insufficient wax coverage over specified surface",
        value: 1,
      },
      {
        label: "955553-Linear wear out",
        value: 2,
      },
      {
        label: "955553-Linear component wear out",
        value: 3,
      },
    ],

    dropdownPlacement: { placement: "left" },

    seviOptions: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
      { label: "8", value: "8" },
      { label: "9", value: "9" },
      { label: "10", value: "10" },
    ],
    dialogBox: {
      title: "Save Confirmation",
      firstButton: "No",
      secondButton: "Yes",
    },
    dataGridHeaderClassName: "data-grid-header-cell",
  },
  default: "default",
  AM: "AM",
  ASPM: "ASPM",
  ASP: "ASP",
  COF: "cof",
  USERNAME: "test user",
  SPECIFIC_ATTRIBUTES: "SPECIFIC_ATTRIBUTES",
  LOOK_UP_TABLES: "LOOK_UP_TABLES",
  ASSET_ATTRIBUTE_VALUES: "ASSET_ATTRIBUTE_VALUES",
  RM_ATTRIBUTES_VALUES: "RM_ATTRIBUTE_VALUES",
  LOOKUP_TABLE_IMPORT_TYPE: "REFERENCE_TABLES",
  ASSET_NAMEPLATE_IMPORT_TYPE: "ASSET_NAMEPLATE",
  PERFORMANCE_MODEL_IMPORT_TYPE: "MODEL_MAPPING_TABLE",
  PERFORMANCE_MODEL_RA_IMPORT_TYPE: "MODEL_RA_MAPPING_TABLE",
  LOOKUP_IMPORT_TYPE: "Lookup",
  MODEL_MAPPING_TABLE_IMPORT_TYPE: "Model Mapping Table",
  MODEL_RA_MAPPING_TABLE_IMPORT_TYPE: "Model RA Mapping Table",
  FORMULA_IMPORT_TYPE: "Formula",
  SCRIPT_IMPORT_TYPE: "Script",
  RMMODEL_IMPORT_TYPE: "RM Model",
  INTERVENTION_IMPORT_TYPE: "Intervention Model",
  INTERVENTION_STRATEGY_TYPE: "Intervention Strategy",
  POLICY_IMPORT_TYPE: "Intervention Policy",
  EXPERT_POLICY_TYPE: "Expert Policy",
  RM_ATTRIBUTE_IMPORT_TYPE: "RM Attribute Value",
  SPECIFIC_ATTRIBUTE_IMPORT_TYPE: "Specific Attributes",
  STANDARD_ATTRIBUTE_IMPORT_TYPE: "Standard Attributes",
  SPECIFIC_ATTRIBUTE_TYPE: "Specific Attribute",
  STANDARD_ATTRIBUTE_TYPE: "Standard Attribute",
  COST_MODEL_TYPE: "Cost Model",
  STANDARD_ATTRIBUTES: "STANDARD_ATTRIBUTES",
  DASHBOARD_MANAGER: "Dashboard Manager",
  ASSET_EXTENDED_ATTRIBUTE: "ASSET_EXTENDED_ATTRIBUTE",
  LOOKUP: "LOOKUP",
  LOOKUP_TABLE: "LOOKUP_TABLE",
  MULTI_DIMENSIONAL_MATRIX: "MULTI_DIMENSIONAL_MATRIX",
  ICON: {
    EDIT: '<svg class="MuiSvgIcon-root-42" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="20" width="18" height="2"></rect><path d="M21,6,18,3,16,1h0L3,14v5H8.08L20.52,6.49,21,6ZM7.25,17H5V14.83l8.41-8.41L15.6,8.6Z"></path></svg>',
    TRASH:
      '<svg class="MuiSvgIcon-root-42" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>',
    CHECK:
      '<svg class="MuiSvgIcon-root-42" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"></path><path d="M8.97 15.97L4 11l-2 2 7 7L21 8l-2-2-10.03 9.97z"></path></svg>',
    NEXT: '<svg class="MuiSvgIcon-root-42" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>',
    CROSS:
      '<svg class="MuiSvgIcon-root-42" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',
  },
  FILE: {
    VIEW_FILE_DIMENSION: "width=500,height=500",
  },
  DASHBOARD: "DASHBOARD",
  FORMULA_TABLE_TYPE: "FORMULA_TABLES",
  SCENARIOS_TABLE_TYPE: "SCEANRIOS_TABLES",
  SCRIPT_TABLE_IMPORT_TYPE: "SCRIPT_TABLES",
  SPECIFIC: "SPECIFIC",
  STANDARD: "STANDARD",
  SYSTEM: "SYSTEM",
  DOUBLE: "DOUBLE",
  INTEGER: "INTEGER",
  BOOLEAN: "BOOLEAN",
  RANGE: "RANGE",
  RM_MODEL_IMPORT_TYPE: "RMMODEL_TABLES",
  FORMULA: "FORMULA",
  SCENARIOS: "SCENARIOS",
  INTERVENTION: "INTERVENTION_MODEL",
  SCRIPT: "SCRIPT",
  RM_MODEL: "RM_MODEL",
  POLICY: "INTERVENTION_POLICY",
  INTERVENTION_STRATEGY: "INTERVENTION_STRATEGY",
  EXPERT_POLICY: "EXPERT_POLICY",
  COST_MODEL: "COST_MODEL",
  DROPDOWN_SEARCH_MIN_LIMIT: 2,
  SYSTEM_ATTRIBUTE: {
    TIME_OF_RUN_TIMESTAMP: "TIME_OF_RUN_TIMESTAMP.SYS",
    SIMULATION_TIMESTAMP: "SIMULATION_TIMESTAMP.SYS",
    TARGET_TIMESTAMP: "TARGET_TIMESTAMP.SYS",
    START_TIMESTAMP: "START_TIMESTAMP.SYS",
    POLICY_TRIGGERED_DATE: "POLICY_TRIGGERED_DATE.SYS",
  },
  RM_ATTRIBUTE_VALUES: "RM_ATTRIBUTE_VALUES",
  PRIMARY_ACTIONS: {
    DOWNLOAD: "Download",
    EDIT: "Edit",
    DASHBOARD: "Dashboard",
    RESULT_VIEWER: "AssetResultViewer",
  },
  FORMULAS: "formulas",
  SCRIPTS: "scripts",
  INTERVENTIONS: "interventions",
  PERFORMANCE_MODEL: "performance-model",
  RESOURCE_TYPE: "resource-type",
  ACTION_TYPE: "action-type",
  EXPENDITURE_TYPE: "expenditure-type",
  INTERVENTION_MODEL_TYPE: "intervention-model-type",
  RESTRICTED_COLOR: [
    "#59941B",
    "#528021",
    "#42661C",
    "#4D8AC0",
    "#DB6B22",
    "#D55723",
    "#CE4225",
    "#C62828",
    "#B32B2B",
    "#9E1E1E",
    "#8730B3",
  ],
  CREATE: "create",
  DELETE: "delete",
  TECHNICAL_PROBLEM_OCCURRED: "TECHNICAL_PROBLEM_OCCURRED",
  CUSTOM_VIEW: {
    ASSET: "ASSET",
    RUNRESULT: "RUNRESULT",
  },
};

export default APP_CONSTANTS;
