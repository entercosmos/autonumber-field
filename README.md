# ![AutonumberField](https://user-images.githubusercontent.com/44801418/48110400-816d9800-e27e-11e8-8b93-25b6c57d8000.png) AutonumberField

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/autonumber-field.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for displaying an unique incremented number for each record.

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| autonumber | Number | ✓ | Auto incrementing identifier |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/autonumber-field.svg
[npm]: https://www.npmjs.com/package/@cmds/autonumber-field
