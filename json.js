module.exports = require("protobufjs").newBuilder({})["import"]({
    "package": "js",
    "messages": [
        {
            "name": "Value",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "sint32",
                    "name": "integer",
                    "id": 1,
                    "oneof": "type"
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "double",
                    "name": "double",
                    "id": 2,
                    "oneof": "type"
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "string",
                    "id": 3,
                    "oneof": "type"
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "boolean",
                    "id": 4,
                    "oneof": "type"
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "null",
                    "id": 5,
                    "oneof": "type"
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "Array",
                    "name": "array",
                    "id": 6,
                    "oneof": "type"
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "Object",
                    "name": "object",
                    "id": 7,
                    "oneof": "type"
                }
            ],
            "enums": [],
            "messages": [],
            "options": {},
            "oneofs": {
                "type": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            }
        },
        {
            "name": "Array",
            "fields": [
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "Value",
                    "name": "values",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {},
            "oneofs": {}
        },
        {
            "name": "Object",
            "fields": [
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "Value",
                    "name": "keys",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "Value",
                    "name": "values",
                    "id": 2
                }
            ],
            "enums": [],
            "messages": [],
            "options": {},
            "oneofs": {}
        }
    ],
    "enums": [],
    "imports": [],
    "options": {},
    "services": []
}).build("js");