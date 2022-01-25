<style>
bg {
background-color: #008700;
color: #000000;
border-radius: 5px;
padding: 1px 2px 1px 2px;
}
ln {
background-color: #ffffff;
color: #000000;
border-radius: 5px;
padding: 1px 2px 1px 2px;
}
objCol {
background-color: #ff0000;
color: #ffffff;
border-radius: 5px;
padding: 1px 2px 1px 2px;
}
num {
color: #1166ff;
}
bool {
color: #ff6611;
}
obj{
color: #11ff66;
}
str{
color: #ffff11;
}
</style>

# Table of Contents

- [Table of Contents](#table-of-contents)
- [TODO](#todo)
- [Values](#values)
  - [Settings](#settings)
  - [Field Object](#field-object)

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

| Value         | Description                                                           | Default              |
| ------------- | --------------------------------------------------------------------- | -------------------- |
| width         | width of the field                                                    | <num>`300/3`</num>   |
| height        | height of the field                                                   | <num>`160/3`</num>   |
| hash_distance | distance of the hashes from the sidelines                             | <num>`60/3`</num>    |
|               |                                                                       |                      |
| bgColor       | color of the grass on the field                                       | <bg>#008700</bg>     |
| lnColor       | color of the markings on the field                                    | <ln>#ffffff</ln>     |
| ln10w         | line width of the 10 yard lines                                       | <num>`1`</num>       |
| ln5w          | line width of the 5 yard lines                                        | <num>`75`</num>      |
| lnhw          | line width of the hash lines                                          | <num>`5`</num>       |
| lnhd          | distance between dashes on the hash                                   | <num>`10`</num>      |
|               |                                                                       |                      |
| move          | boolean that tells the program to move throught the simulation or not | <bool>`true`</bool>  |
| show          | boolean that tells the program to show the objects or not             | <bool>`true`</bool>  |
| path          | boolean that tells the program to show the paths or not               | <bool>`false`</bool> |
|               |                                                                       |                      |
| speed         | speed of the simulation                                               | <num>`01`</num>      |
|               |                                                                       |                      |
| sObj          | currently selected object                                             | <obj>`obj[0]`</obj>  |
| sSet          | currently selected set                                                | <num>`0`</num>       |

## Field Object

| value | description          | default                                                      |
| ----- | -------------------- | ------------------------------------------------------------ |
| Name  | Name of object       | <str>"NoName"</str>                                          |
| Sets  | Array of coordinates | [<str>"S1-Y50-I0-H2-J0"</str>, <str>"S1-Y50-I0-H2-J0"</str>] |
| Color | Color of object      | <objCol>#ff0000</objCol>                                     |
| Shape | Shape of object      | <str>"ellipse"</str>                                         |