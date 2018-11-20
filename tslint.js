const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  rules: {
    "align": [
      true,
      "arguments",
      "elements",
      "members",
      "parameters",
      "statements"
    ],
    "arrow-return-shorthand": true,
    "class-name": true,
    "deprecation": true,
    "eofline": true,
    "forin": false,
    'function-name': [
      true,
      {
        'function-regex': /^[a-z$][\w\d]+$/,
        'method-regex': /^[a-z$][\w\d]+$/,
        'private-method-regex': /^_[a-z$][\w\d]+$/,
        'protected-method-regex': /^[a-z$][\w\d]+$/,
        'static-method-regex': /^[a-z$][\w\d]+$/,
      }, // 23.1
    ],
    "import-blacklist": [true, "rxjs", "lodash"],
    "import-spacing": true,
    "indent": [true, "spaces", 2],
    "interface-name": [true, "always-prefix"],
    "label-position": true,
    "max-classes-per-file": [true, 1],
    "max-line-length": [true, 120],
    "member-access": true,
    "member-ordering": [
      true,
      {
        "order": [
          "public-static-field",
          "private-static-field",
          "public-instance-field",
          "private-instance-field",
          "public-constructor",
          "private-constructor",
          {
            "name": "componentDidMount",
            "kinds": [
              "public-instance-method",
            ]
          },
          {
            "name": "render",
            "kinds": [
              "public-instance-method",
            ]
          },
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    "newline-before-return": true,
    "newline-per-chained-call": true,
    "no-arg": true,
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": true,
    "no-console": true,
    "no-construct": false,
    "no-debugger": true,
    "no-duplicate-imports": true,
    "no-duplicate-switch-case": true,
    "no-duplicate-variable": true,
    "no-empty": [true, "allow-empty-catch"],
    "no-eval": true,
    "no-for-in-array": true,
    "no-function-expression": true,
    "no-internal-module": true,
    "no-parameter-reassignment": true,
    "no-shadowed-variable": true,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-this-assignment": true,
    "no-trailing-whitespace": true,
    "no-unbound-method": true,
    "no-unnecessary-semicolons": true,
    "no-unsafe-any": true,
    "no-unsafe-finally": true,
    "no-unused-expression": true,
    "no-unused-variable": true,
    "no-use-before-declare": false,
    'no-var-keyword': true,
    "no-with-statement": true,
    "object-literal-shorthand": true,
    "only-arrow-functions": true,
    "prefer-conditional-expression": true,
    'prefer-const': true,
    "prefer-object-spread": true,
    "prefer-switch": [true, { "min-cases": 2 }],
    "restrict-plus-operands": true,
    "semicolon": true,
    "switch-default": true,
    "trailing-comma": [
      true,
      {
        "multiline": "always",
        "singleline": "never",
        "esSpecCompliant": true,
      },
    ],
    "triple-equals": true,
    "typedef": false,
    "typedef-whitespace": false,
    "use-isnan": true,
    "use-named-parameter": true,
    "valid-typeof": true,
    "variable-name": [true, "ban-keywords", "check-format", "allow-leading-underscore", "allow-pascal-case"],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
      "check-separator",
      "check-rest-spread",
      "check-type",
      "check-typecast",
      "check-type-operator",
      "check-preblock"
    ]
  }
};
