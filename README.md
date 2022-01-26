# TODO

- [ ] Editing
  - [ ] Sets
    - [ ] move
    - [ ] add
    - [ ] delete
  - [ ] Objects
    - [ ] move
    - [ ] add
    - [ ] delete
- [ ] GUI
  - [ ] Timeline
  - [x] Import/Export
  - [x] Viewer
  - [x] Control
  - [ ] Debug
  - [ ] Settings
  - [ ] Info
  - [ ] Edit

# Values

## Settings

| Value         | Description                                                           | Default   |
| ------------- | --------------------------------------------------------------------- | --------- |
| width         | width of the field                                                    | `300/3`   |
| height        | height of the field                                                   | `160/3`   |
| hash_distance | distance of the hashes from the sidelines                             | `60/3`    |
|               |                                                                       |           |
| bgColor       | color of the grass on the field                                       | `#008700` |
| lnColor       | color of the markings on the field                                    | `#ffffff` |
| ln10w         | line width of the 10 yard lines                                       | `1`       |
| ln5w          | line width of the 5 yard lines                                        | `75`      |
| lnhw          | line width of the hash lines                                          | `5`       |
| lnhd          | distance between dashes on the hash                                   | `10`      |
|               |                                                                       |           |
| move          | boolean that tells the program to move throught the simulation or not | `true`    |
| show          | boolean that tells the program to show the objects or not             | `true`    |
| path          | boolean that tells the program to show the paths or not               | `false`   |
|               |                                                                       |           |
| speed         | speed of the simulation                                               | `01`      |
|               |                                                                       |           |
| sObj          | currently selected object                                             | `obj[0]`  |
| sSet          | currently selected set                                                | `0`       |

## Field Object

| value | description          | default                                  |
| ----- | -------------------- | ---------------------------------------- |
| Name  | Name of object       | `"NoName"`                               |
| Sets  | Array of coordinates | `["S1-Y50-I0-H2-J0", "S1-Y50-I0-H2-J0"]` |
| Color | Color of object      | `#ff0000`                                |
| Shape | Shape of object      | `"ellipse"`                              |